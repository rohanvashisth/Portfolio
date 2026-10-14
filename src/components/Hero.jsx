import React from 'react';
import { ArrowRight, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="section-hero"
      style={{
        paddingTop: '135px',
        paddingBottom: '80px',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Top 2-Column Intro: Narrative + Portrait */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.25fr 0.85fr', 
            gap: '56px', 
            alignItems: 'center',
            marginBottom: '56px'
          }}
          className="hero-grid"
        >
          
          {/* Left Column: Narrative */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left' }}>
            
            {/* Status Pill */}
            <div>
              <span className="status-pill">
                <span className="status-dot"></span>
                Open to Technical Product & Platform Roles
              </span>
            </div>

            <h1 
              style={{ 
                fontSize: 'clamp(2.3rem, 4vw, 3.2rem)', 
                lineHeight: 1.15, 
                letterSpacing: '-0.03em',
                fontWeight: 800,
                color: 'var(--text-primary)'
              }}
            >
              Technical Product Manager with an engineering foundation.
            </h1>

            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '820px' }}>
              Hi, I'm <strong style={{ color: 'var(--text-primary)' }}>Rohan Vashisth</strong>. I bridge complex distributed systems architecture with product strategy and roadmap execution. Previously spent 3+ years at <strong style={{ color: 'var(--text-primary)' }}>JPMorgan Chase</strong> modernizing mission-critical FX settlement and low-latency trading engines processing $10B–$15B in daily transactions. MBA in Finance & Supply Chain from <strong style={{ color: 'var(--text-primary)' }}>Rutgers Business School</strong>.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginTop: '4px' }}>
              <a 
                id="hero-btn-work"
                href="#projects" 
                className="btn btn-primary"
              >
                <span>Explore Case Studies</span>
                <ArrowRight size={15} />
              </a>
              <a 
                id="hero-btn-resume"
                href={`${import.meta.env.BASE_URL}RohanVashisth_Resume.pdf`}
                download="RohanVashisth_Resume.pdf"
                className="btn btn-secondary"
              >
                <FileText size={15} />
                <span>Resume (PDF)</span>
              </a>
              <a 
                id="hero-btn-contact"
                href="#contact" 
                className="btn btn-outline"
              >
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '18px', alignItems: 'center', marginTop: '4px' }}>
              <a 
                href="https://www.linkedin.com/in/rohanvashisth/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
                className="hero-link"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <span style={{ color: 'var(--border-hairline)' }}>•</span>
              <a 
                href="https://github.com/rohanvashisth" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
                className="hero-link"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
              <span style={{ color: 'var(--border-hairline)' }}>•</span>
              <a 
                href="mailto:rohan9vashisth@gmail.com"
                style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem' }}
                className="hero-link"
              >
                <Mail size={16} />
                <span>rohan9vashisth@gmail.com</span>
              </a>
            </div>

          </div>

          {/* Right Column: Integrated Portrait */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div 
              style={{
                width: '100%',
                maxHeight: '430px',
                borderRadius: '14px',
                overflow: 'hidden',
                border: '2px solid var(--pastel-blue-border)',
                backgroundColor: 'var(--pastel-blue-bg)',
                boxShadow: '0 16px 36px -10px rgba(37, 99, 235, 0.12)'
              }}
            >
              <img 
                id="hero-photo-img"
                src={`${import.meta.env.BASE_URL}rohan-portrait.jpg`}
                alt="Rohan Vashisth" 
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  display: 'block'
                }}
              />
            </div>
            
            {/* Understated Location Caption */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: '10px',
                fontSize: '0.82rem',
                color: 'var(--text-muted)'
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Rohan Vashisth • TPM</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--emerald)' }}>
                <MapPin size={13} style={{ color: 'var(--emerald)' }} />
                <span>Central Park, NY</span>
              </span>
            </div>
          </div>

        </div>

        {/* Integrated Pastel Metrics Rail */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '24px',
            paddingTop: '8px',
            textAlign: 'left'
          }}
          className="hero-metrics-grid"
        >
          <div style={{ 
            backgroundColor: 'var(--pastel-blue-bg)', 
            border: '1px solid var(--pastel-blue-border)', 
            borderRadius: '10px', 
            padding: '20px 24px',
            boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
          }}>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--pastel-blue-text)' }}>3+ Years</div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 500 }}>Software Engineer II @ J.P. Morgan</div>
          </div>
          <div style={{ 
            backgroundColor: 'var(--pastel-green-bg)', 
            border: '1px solid var(--pastel-green-border)', 
            borderRadius: '10px', 
            padding: '20px 24px',
            boxShadow: '0 2px 8px rgba(5, 150, 105, 0.04)'
          }}>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--pastel-green-text)' }}>$10B–$15B</div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 500 }}>Daily FX Settlement Scaled</div>
          </div>
          <div style={{ 
            backgroundColor: 'var(--pastel-teal-bg)', 
            border: '1px solid var(--pastel-teal-border)', 
            borderRadius: '10px', 
            padding: '20px 24px',
            boxShadow: '0 2px 8px rgba(15, 118, 110, 0.04)'
          }}>
            <div style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--pastel-teal-text)' }}>MBA '26</div>
            <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 500 }}>Finance & Supply Chain @ Rutgers</div>
          </div>
        </div>

      </div>

      <style>{`
        .hero-link:hover {
          color: var(--text-primary) !important;
        }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
