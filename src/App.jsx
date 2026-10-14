import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ backgroundColor: 'var(--bg-base)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Header / Nav */}
      <Navbar />

      {/* Main sections */}
      <main style={{ flex: 1 }}>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>

      {/* Clean Modern Footer */}
      <footer 
        style={{ 
          borderTop: '1px solid var(--border-subtle)', 
          padding: '44px 0 36px', 
          backgroundColor: '#ffffff'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          
          <div>
            <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Rohan Vashisth
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>
              Technical Product Manager • Ex-JPMorgan Chase SDE • Rutgers MBA '26
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <a 
              href="https://www.linkedin.com/in/rohanvashisth/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)' }}
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://github.com/rohanvashisth" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: 'var(--text-muted)' }}
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a 
              href="mailto:rohan9vashisth@gmail.com" 
              style={{ color: 'var(--text-muted)' }}
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                padding: '6px 10px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 600
              }}
              title="Back to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>

        </div>

        <div className="container" style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()} Rohan Vashisth. Built with React and designed for clarity and performance.
        </div>
      </footer>

    </div>
  );
}

export default App;
