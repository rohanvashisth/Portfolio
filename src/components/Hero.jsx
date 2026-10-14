import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      style={{
        paddingTop: '130px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container grid-2" style={{ alignItems: 'center', gap: '48px' }}>
        
        {/* Left column: Authentic Narrative */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', textAlign: 'left' }}>
          
          {/* Status Badge */}
          <div>
            <span className="status-pill">
              <span className="status-dot"></span>
              Open to Technical Product & Platform Roles
            </span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.4rem, 4.5vw, 3.4rem)', 
              lineHeight: 1.15, 
              letterSpacing: '-0.03em',
              fontWeight: 800,
              color: 'var(--text-primary)'
            }}
          >
            Technical Product Manager with an engineering foundation.
          </h1>

          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, maxWidth: '560px' }}>
            Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Rohan Vashisth</strong>. I bridge distributed systems architecture with product strategy and roadmap execution. Previously spent 3+ years at <strong style={{ color: 'var(--text-primary)' }}>JPMorgan Chase</strong> modernizing mission-critical FX settlement and low-latency trading engines processing $10B–$15B in daily transactions. MBA in Finance & Supply Chain from <strong style={{ color: 'var(--text-primary)' }}>Rutgers Business School</strong>.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginTop: '6px' }}>
            <a 
              id="hero-btn-work"
              href="#projects" 
              className="btn btn-primary"
            >
              Explore Case Studies
              <ArrowRight size={16} />
            </a>
            <a 
              id="hero-btn-resume"
              href={`${import.meta.env.BASE_URL}RohanVashisth_Resume.pdf`}
              download="RohanVashisth_Resume.pdf"
              className="btn btn-secondary"
            >
              <FileText size={16} />
              Resume (PDF)
            </a>
            <a 
              id="hero-btn-contact"
              href="#contact" 
              className="btn btn-outline"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Quick Links */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginTop: '4px' }}>
            <a 
              href="https://www.linkedin.com/in/rohanvashisth/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}
              className="social-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <a 
              href="https://github.com/rohanvashisth" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}
              className="social-link"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <a 
              href="mailto:rohan9vashisth@gmail.com"
              style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem' }}
              className="social-link"
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>

          {/* Grounded Career Highlights */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '20px',
              borderTop: '1px solid var(--border-subtle)',
              paddingTop: '24px',
              marginTop: '12px'
            }}
          >
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>3+ Years</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Software Engineer II @ J.P. Morgan</div>
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>$10B–$15B</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Daily FX Volume Modernized</div>
            </div>
            <div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)' }}>MBA '26</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '2px' }}>Finance & Supply Chain @ Rutgers</div>
            </div>
          </div>

        </div>

        {/* Right column: Real Photo Frame */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div 
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '380px',
              background: '#ffffff',
              borderRadius: '20px',
              padding: '12px',
              border: '1px solid var(--border-subtle)',
              boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.02)'
            }}
          >
            {/* Real Photo */}
            <div 
              style={{
                width: '100%',
                height: '440px',
                borderRadius: '14px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#f3f4f6'
              }}
            >
              <img 
                id="hero-photo-img"
                src={`${import.meta.env.BASE_URL}rohan-portrait.jpg`}
                alt="Rohan Vashisth" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block'
                }}
              />
            </div>

            {/* Editorial Caption Bar */}
            <div 
              style={{
                padding: '14px 10px 6px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Rohan Vashisth
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Technical Product Manager • Ex-JPMC SDE
                </div>
              </div>

              <div 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '4px',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                  backgroundColor: 'var(--bg-base)',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <MapPin size={12} style={{ color: 'var(--emerald)' }} />
                <span>Central Park, NY</span>
              </div>
            </div>

          </div>
        </div>

      </div>

      <style>{`
        .social-link:hover {
          color: var(--text-primary) !important;
        }
      `}</style>
    </section>
  );
}
