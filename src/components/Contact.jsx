import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus('error');
      return;
    }
    
    setStatus('sending');
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={{ position: 'relative', paddingBottom: '100px' }}>
      <div className="glow-spot" style={{ bottom: '-50px', left: '25%', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 60%)' }}></div>

      <div className="container">
        
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have an opportunity or project you'd like to discuss? Drop me a line below or reach out via LinkedIn.
        </p>

        <div className="grid-2" style={{ maxWidth: '950px', margin: '0 auto', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Links & Info */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>Contact Details</h3>
            
            <p style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.5 }}>
              I am open to discussing FinTech innovations, engineering leadership, supply chain analytics, or general networking and collaboration opportunities.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '12px' }}>
              
              {/* Email link */}
              <a 
                id="contact-link-email"
                href="mailto:rohan9vashisth@gmail.com"
                className="glass-card contact-info-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Mail size={20} style={{ color: 'hsl(var(--primary))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>Email Address</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'hsl(var(--text-primary))' }}>rohan9vashisth@gmail.com</div>
                </div>
              </a>

              {/* LinkedIn Link */}
              <a 
                id="contact-link-linkedin"
                href="https://www.linkedin.com/in/rohanvashisth/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card contact-info-card"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  padding: '20px',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center' }}>
                  <Linkedin size={20} style={{ color: 'hsl(var(--secondary))' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))' }}>LinkedIn Profile</div>
                  <div style={{ fontSize: '1rem', fontWeight: 600, color: 'hsl(var(--text-primary))' }}>linkedin.com/in/rohanvashisth</div>
                </div>
              </a>

            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-card" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '20px', textAlign: 'left' }}>Send a Message</h3>
            
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Name Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-name" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Name *</label>
                <input
                  type="text"
                  id="contact-input-name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="Your Name"
                />
              </div>

              {/* Email Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-email" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Email Address *</label>
                <input
                  type="email"
                  id="contact-input-email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="name@example.com"
                />
              </div>

              {/* Subject Input */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-subject" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Subject</label>
                <input
                  type="text"
                  id="contact-input-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="Opportunity / Discussion"
                />
              </div>

              {/* Message Textarea */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-message" style={{ fontSize: '0.85rem', fontWeight: 500, color: 'hsl(var(--text-secondary))' }}>Message *</label>
                <textarea
                  id="contact-input-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Your Message..."
                />
              </div>

              {/* Success / Error Messages */}
              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'hsl(var(--secondary))', fontSize: '0.9rem', backgroundColor: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.15)', padding: '10px', borderRadius: '6px' }}>
                  <CheckCircle size={16} />
                  <span>Message sent successfully! I'll get back to you shortly.</span>
                </div>
              )}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#fb7185', fontSize: '0.9rem', backgroundColor: 'rgba(251, 113, 133, 0.05)', border: '1px solid rgba(251, 113, 133, 0.15)', padding: '10px', borderRadius: '6px' }}>
                  <AlertCircle size={16} />
                  <span>Please fill out all required fields.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                id="contact-btn-submit"
                disabled={status === 'sending'}
                className="btn btn-primary"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  marginTop: '8px',
                  opacity: status === 'sending' ? 0.7 : 1,
                  cursor: status === 'sending' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>

      <style>{`
        .contact-info-card {
          transition: var(--transition-normal);
        }
        .contact-info-card:hover {
          background: rgba(15, 19, 34, 0.6) !important;
          border-color: rgba(var(--primary-rgb), 0.2) !important;
        }
      `}</style>
    </section>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  border: '1px solid rgba(255, 255, 255, 0.08)',
  color: 'hsl(var(--text-primary))',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'var(--transition-fast)'
};

// Add focus rings style
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.innerHTML = `
    input:focus, textarea:focus {
      border-color: hsl(var(--primary)) !important;
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15) !important;
    }
  `;
  document.head.appendChild(styleEl);
}
