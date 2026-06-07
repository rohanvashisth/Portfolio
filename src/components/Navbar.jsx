import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Briefcase, Code, Award, GraduationCap, Mail } from 'lucide-react';

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
    { name: 'Experience', href: '#experience', icon: <Briefcase size={16} /> },
    { name: 'Skills', href: '#skills', icon: <Code size={16} /> },
    { name: 'Projects', href: '#projects', icon: <Award size={16} /> },
    { name: 'Education', href: '#education', icon: <GraduationCap size={16} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={16} /> },
  ];

  return (
    <nav 
      className={`navbar-container ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'var(--transition-normal)',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(7, 10, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo */}
        <a 
          id="nav-logo" 
          href="#" 
          style={{ 
            fontFamily: 'var(--font-display)', 
            fontWeight: 800, 
            fontSize: '1.5rem', 
            color: 'hsl(var(--text-primary))',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}
        >
          <span style={{ color: 'hsl(var(--primary))' }}>R</span>ohan
          <span style={{ color: 'hsl(var(--secondary))', fontSize: '1.75rem', lineHeight: 0 }}>.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <ul style={{ display: 'flex', listStyle: 'none', gap: '24px', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  className="nav-hover-link"
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'hsl(var(--text-secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a 
            id="nav-btn-resume"
            href="/RohanVashisthSDE.pdf" 
            download="RohanVashisth_Resume.pdf"
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <FileText size={14} />
            Resume
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
            color: 'hsl(var(--text-primary))',
            cursor: 'pointer'
          }}
          className="mobile-toggle-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
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
            background: 'rgba(7, 10, 19, 0.95)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 99
          }}
        >
          <ul style={{ display: 'flex', flexDirection: 'column', listStyle: 'none', gap: '16px' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  id={`nav-link-mobile-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 500,
                    color: 'hsl(var(--text-secondary))',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  {link.icon}
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            id="nav-btn-resume-mobile"
            href="/RohanVashisthSDE.pdf" 
            download="RohanVashisth_Resume.pdf"
            onClick={() => setIsOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', padding: '12px' }}
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      )}

      {/* Inject custom CSS styles for hover animations on nav menu */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        .nav-hover-link {
          position: relative;
        }
        .nav-hover-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: hsl(var(--primary));
          transition: var(--transition-fast);
        }
        .nav-hover-link:hover {
          color: hsl(var(--text-primary)) !important;
        }
        .nav-hover-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
}
