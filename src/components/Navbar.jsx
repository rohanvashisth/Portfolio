import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.2s ease',
        padding: scrolled ? '12px 0' : '18px 0',
        background: scrolled ? 'rgba(255, 255, 255, 0.94)' : 'rgba(244, 248, 253, 0.88)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--pastel-blue-border)' : '1px solid rgba(191, 219, 254, 0.5)',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        
        {/* Logo / Brand */}
        <a 
          id="nav-logo" 
          href="#" 
          style={{ 
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textDecoration: 'none'
          }}
        >
          <img 
            src={`${import.meta.env.BASE_URL}rohan-headshot.jpg`} 
            alt="Rohan" 
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid var(--pastel-blue-border)'
            }}
          />
          <div>
            <span style={{ 
              fontFamily: 'var(--font-display)', 
              fontWeight: 750, 
              fontSize: '1.05rem', 
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              Rohan Vashisth
            </span>
            <span style={{ 
              display: 'block', 
              fontSize: '0.72rem', 
              color: 'var(--text-muted)', 
              fontFamily: 'var(--font-mono)',
              lineHeight: 1
            }}>
              Product • Engineering
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '24px', alignItems: 'center', margin: 0, padding: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className="nav-link-item"
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    transition: 'color 0.15s ease'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ width: '1px', height: '20px', background: 'var(--border-subtle)' }}></div>

          <a 
            id="nav-btn-resume"
            href={`${import.meta.env.BASE_URL}RohanVashisth_Resume.pdf`}
            download="RohanVashisth_Resume.pdf"
            className="btn btn-secondary"
            style={{ padding: '7px 14px', fontSize: '0.84rem' }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button 
          id="nav-mobile-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '4px'
          }}
          className="mobile-toggle-btn"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div 
          className="mobile-drawer"
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#ffffff',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.06)'
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '14px', padding: 0, margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  id={`nav-link-mobile-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    display: 'block'
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            id="nav-btn-resume-mobile"
            href={`${import.meta.env.BASE_URL}RohanVashisth_Resume.pdf`}
            download="RohanVashisth_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '10px' }}
          >
            <FileText size={15} />
            Download Resume (PDF)
          </a>
        </div>
      )}

      <style>{`
        .nav-link-item:hover {
          color: var(--text-primary) !important;
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
