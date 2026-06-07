import React from 'react';
import { ArrowRight, Code2, LineChart, ShieldAlert } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="section animate-fade-in"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Decorative Glow Spots */}
      <div className="glow-spot" style={{ top: '10%', left: '-50px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)' }}></div>
      <div className="glow-spot" style={{ bottom: '10%', right: '-50px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%)' }}></div>

      <div className="container grid-2" style={{ alignItems: 'center' }}>
        {/* Left column: Text */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', textAlign: 'left' }}>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span className="badge badge-primary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Code2 size={12} />
              Software Engineer II
            </span>
            <span className="badge badge-secondary" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <LineChart size={12} />
              Rutgers MBA Finance
            </span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
              lineHeight: 1.1, 
              letterSpacing: '-0.03em',
              fontWeight: 800
            }}
          >
            Engineering Scale.<br />
            <span style={{ 
              background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Deciphering Markets.
            </span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: 'hsl(var(--text-secondary))', maxWidth: '540px' }}>
            Hi, I'm <strong>Rohan Vashisth</strong>. I bridge the gap between high-throughput system architecture and strategic financial intelligence. Formerly modernizing global FX trading platforms at <strong>JPMorgan Chase</strong>, I am currently reinforcing my technical background with an MBA in Finance & Supply Chain at <strong>Rutgers Business School</strong>.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '8px' }}>
            <a 
              id="hero-btn-work"
              href="#projects" 
              className="btn btn-primary"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a 
              id="hero-btn-contact"
              href="#contact" 
              className="btn btn-secondary"
            >
              Get In Touch
            </a>
          </div>

          {/* Quick Metrics Banner */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              paddingTop: '24px',
              marginTop: '16px'
            }}
          >
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-display)' }}>$15B+</div>
              <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Daily Volume Scaled</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-display)' }}>97%</div>
              <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Latency Reduction</div>
            </div>
            <div>
              <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))', fontFamily: 'var(--font-display)' }}>3+ Yrs</div>
              <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FinTech SDE Experience</div>
            </div>
          </div>

        </div>

        {/* Right column: Avatar / Interactive Logo */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          {/* Pulsing ring background */}
          <div 
            className="pulse-ring"
            style={{
              position: 'absolute',
              width: '320px',
              height: '320px',
              borderRadius: '50%',
              border: '2px dashed rgba(var(--primary-rgb), 0.15)',
              animation: 'spin 120s linear infinite',
            }}
          ></div>
          <div 
            className="pulse-ring-inner"
            style={{
              position: 'absolute',
              width: '290px',
              height: '290px',
              borderRadius: '50%',
              border: '1px solid rgba(var(--secondary-rgb), 0.1)',
              animation: 'spin-reverse 60s linear infinite',
            }}
          ></div>

          {/* Avatar Image container */}
          <div 
            className="avatar-container"
            style={{
              position: 'relative',
              width: '260px',
              height: '260px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              animation: 'pulse-glow 4s ease-in-out infinite',
            }}
          >
            <img 
              id="hero-avatar-img"
              src="/profile_avatar.png" 
              alt="Rohan Vashisth Avatar" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'var(--transition-slow)',
              }}
              className="avatar-img"
            />
            {/* Dark glass overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7, 10, 19, 0.8) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            ></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .avatar-container:hover .avatar-img {
          transform: scale(1.06);
        }
      `}</style>
    </section>
  );
}
