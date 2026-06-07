import fs from 'fs';
import { exec } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WATCH_DIR = __dirname;
const DEBOUNCE_MS = 10000; // 10 seconds of silence after typing/saving before auto-committing
let debounceTimer = null;

console.log(`[Auto-Commit] Starting git auto-commit watcher in: ${WATCH_DIR}`);

// Ignore list to prevent infinite loop or performance overhead
const shouldIgnore = (filePath) => {
  const normalized = filePath.replace(/\\/g, '/');
  return (
    normalized.includes('.git/') ||
    normalized.includes('node_modules/') ||
    normalized.includes('dist/') ||
    normalized.includes('.cache') ||
    normalized.includes('package-lock.json') ||
    normalized === 'autocommit.js'
  );
};

const runCommand = (cmd) => {
  return new Promise((resolve) => {
    exec(cmd, { cwd: WATCH_DIR }, (error, stdout, stderr) => {
      if (error) {
        resolve({ success: false, error, stderr });
      } else {
        resolve({ success: true, stdout, stderr });
      }
    });
  });
};

const checkAndCommit = async () => {
  console.log('[Auto-Commit] File change stabilized. Checking repository status...');
  
  // Check status
  const statusResult = await runCommand('git status --porcelain');
  if (!statusResult.success) {
    console.error('[Auto-Commit] Failed to run git status:', statusResult.error);
    return;
  }

  const changes = statusResult.stdout.trim();
  if (!changes) {
    console.log('[Auto-Commit] No modified or untracked files found.');
    return;
  }

  console.log('[Auto-Commit] Changes detected:\n' + changes);
  
  // Stage files
  const addResult = await runCommand('git add .');
  if (!addResult.success) {
    console.error('[Auto-Commit] Failed to run git add:', addResult.error);
    return;
  }

  // Create commit
  const timestamp = new Date().toLocaleString();
  const commitMsg = `Auto-commit: saved changes on ${timestamp}`;
  const commitResult = await runCommand(`git commit -m "${commitMsg}"`);
  
  if (commitResult.success) {
    console.log(`[Auto-Commit] Success! Committed changes. Msg: "${commitMsg}"`);
  } else {
    console.error('[Auto-Commit] Commit failed:', commitResult.stderr || commitResult.error);
  }
};

// Start directory watch
try {
  fs.watch(WATCH_DIR, { recursive: true }, (eventType, filename) => {
    if (!filename || shouldIgnore(filename)) return;
    
    // Reset debounce timer
    if (debounceTimer) clearTimeout(debounceTimer);
    debounceTimer = setTimeout(checkAndCommit, DEBOUNCE_MS);
  });
  console.log('[Auto-Commit] Watcher active. Listening for file changes...');
} catch (err) {
  console.error('[Auto-Commit] Error initializing folder watcher:', err);
}
