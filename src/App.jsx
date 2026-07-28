import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <>
      {/* Decorative Interactive Background Layers */}
      <div className="bg-grid"></div>
      <div className="bg-radial"></div>

      {/* Header / Nav */}
      <Navbar />

      {/* Main sections */}
      <main style={{ minHeight: '100vh' }}>
        
        {/* Hero Banner */}
        <Hero />
        
        {/* Horizontal Dividers */}
        <div className="container">
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(15, 23, 42, 0.06), transparent)' }}></div>
        </div>

        {/* Experience Timeline */}
        <Experience />

        <div className="container">
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(15, 23, 42, 0.06), transparent)' }}></div>
        </div>

        {/* Skills Hub */}
        <Skills />

        <div className="container">
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(15, 23, 42, 0.06), transparent)' }}></div>
        </div>

        {/* Projects Dashboard */}
        <Projects />

        <div className="container">
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(15, 23, 42, 0.06), transparent)' }}></div>
        </div>

        {/* Education Credentials */}
        <Education />

        <div className="container">
          <div style={{ height: '1px', background: 'linear-gradient(to right, transparent, rgba(15, 23, 42, 0.06), transparent)' }}></div>
        </div>

        {/* Contact form */}
        <Contact />

      </main>

      {/* Footer */}
      <footer 
        style={{ 
          borderTop: '1px solid rgba(15, 23, 42, 0.06)', 
          padding: '40px 0', 
          textAlign: 'center', 
          fontSize: '0.85rem', 
          color: 'hsl(var(--text-muted))',
          background: 'rgba(248, 250, 252, 0.8)',
          backdropFilter: 'blur(12px)'
        }}
      >
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <p>© {new Date().getFullYear()} Rohan Vashisth. All rights reserved.</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            Engineered with React, Lucide Icons, and Vanilla CSS. Built for performance and responsiveness.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
