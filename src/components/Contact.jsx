import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, MapPin, Phone, ArrowUpRight } from 'lucide-react';

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
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '6px',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-hairline)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.92rem',
    outline: 'none',
    transition: 'border-color var(--transition-fast)'
  };

  return (
    <section 
      id="contact" 
      className="section" 
      style={{ 
        background: 'linear-gradient(180deg, #f2faf6 0%, #f0f7ff 100%)', 
        borderTop: '1px solid #c7e5d8', 
        paddingBottom: '100px' 
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <div className="section-tag section-tag-blue">
            <span className="section-tag-num">05</span>
            <span>Get in Touch</span>
          </div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have an open Technical Product Manager or engineering leadership role, a collaboration idea, or want to discuss FinTech systems—I'd love to hear from you.
          </p>
        </div>

        {/* 2-Column Integrated Layout */}
        <div className="grid-2" style={{ gap: '56px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Communication Channels */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ paddingBottom: '16px', borderBottom: '1px solid var(--pastel-blue-border)' }}>
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                Availability
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span className="status-dot"></span>
                <span style={{ fontSize: '0.94rem', fontWeight: 650, color: 'var(--text-primary)' }}>
                  Actively interviewing for TPM / PM roles
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Graduating with an MBA in May 2026. Open to full-time roles globally (US, India, Remote) in Technical Product Management, Core Platforms, and FinTech.
              </p>
            </div>

            {/* Direct Channel Rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              {/* Email */}
              <a 
                id="contact-link-email"
                href="mailto:rohan9vashisth@gmail.com"
                className="contact-channel-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--pastel-blue-border)',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(37, 99, 235, 0.03)',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--pastel-blue-bg)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--pastel-blue-border)'
                  }}>
                    <Mail size={18} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Email</div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 650, color: 'var(--text-primary)' }}>rohan9vashisth@gmail.com</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--primary)' }} />
              </a>

              {/* LinkedIn */}
              <a 
                id="contact-link-linkedin"
                href="https://www.linkedin.com/in/rohanvashisth/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--pastel-blue-border)',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(37, 99, 235, 0.03)',
                  transition: 'all 0.15s ease'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--pastel-blue-bg)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--pastel-blue-border)'
                  }}>
                    <Linkedin size={18} style={{ color: 'var(--primary)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>LinkedIn</div>
                    <div style={{ fontSize: '0.94rem', fontWeight: 650, color: 'var(--text-primary)' }}>linkedin.com/in/rohanvashisth</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--primary)' }} />
              </a>

              {/* Phone */}
              <a 
                id="contact-link-phone"
                href="tel:+917397430237"
                className="contact-channel-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-hairline)',
                  textDecoration: 'none',
                  transition: 'border-color var(--transition-fast), background-color var(--transition-fast)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '6px', 
                    backgroundColor: '#ffffff', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--border-hairline)'
                  }}>
                    <Phone size={16} style={{ color: 'var(--emerald)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Phone</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>+91 7397430237</div>
                  </div>
                </div>
                <ArrowUpRight size={16} style={{ color: 'var(--text-muted)' }} />
              </a>

              {/* Location */}
              <div 
                id="contact-row-location"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ 
                  width: '32px', 
                  height: '32px', 
                  borderRadius: '6px', 
                  backgroundColor: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  border: '1px solid var(--border-hairline)'
                }}>
                  <MapPin size={16} style={{ color: 'var(--text-muted)' }} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase' }}>Location</div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>Gurugram, India • Open to Global Relocation</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Integrated Inquiry Form */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
                Send a Direct Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                Have an inquiry or discussion topic? Send a note directly below.
              </p>
            </div>
            
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-input-name" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="contact-input-name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="e.g. Sarah Jenkins"
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-input-email" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="contact-input-email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="sarah@company.com"
                />
              </div>

              {/* Subject */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-input-subject" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-input-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="TPM Opportunity / FinTech Chat"
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <label htmlFor="contact-input-message" style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Message *
                </label>
                <textarea
                  id="contact-input-message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleInputChange}
                  style={{ ...inputStyle, resize: 'vertical' }}
                  placeholder="Hi Rohan, I'd like to connect regarding..."
                />
              </div>

              {/* Status alerts */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b91c1c', fontSize: '0.86rem', backgroundColor: '#fef2f2', padding: '10px 12px', borderRadius: '6px', border: '1px solid #fecaca' }}>
                  <AlertCircle size={15} />
                  <span>Please fill out all required fields.</span>
                </div>
              )}

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803d', fontSize: '0.86rem', backgroundColor: '#f0fdf4', padding: '10px 12px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                  <CheckCircle2 size={15} />
                  <span>Thank you! Your message has been received. I'll get back to you shortly.</span>
                </div>
              )}

              <button
                type="submit"
                id="contact-btn-submit"
                className="btn btn-primary"
                disabled={status === 'sending'}
                style={{ width: '100%', marginTop: '4px', padding: '12px' }}
              >
                {status === 'sending' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>

      <style>{`
        .contact-channel-row:hover {
          border-color: var(--border-strong) !important;
          background-color: #ffffff !important;
        }
      `}</style>
    </section>
  );
}
