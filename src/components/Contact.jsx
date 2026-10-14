import React, { useState } from 'react';
import { Mail, Linkedin, Send, CheckCircle2, AlertCircle, MapPin, Phone, MessageSquare } from 'lucide-react';

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
    }, 1200);
  };

  const inputStyle = {
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    border: '1px solid var(--border-subtle)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.94rem',
    outline: 'none',
    transition: 'border-color 0.15s ease'
  };

  return (
    <section id="contact" className="section" style={{ borderTop: '1px solid var(--border-subtle)', paddingBottom: '90px' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Whether you have an open Technical Product Manager or engineering leadership role, a collaboration idea, or want to discuss FinTech systems—I'd love to hear from you.
          </p>
        </div>

        <div className="grid-2" style={{ maxWidth: '960px', gap: '36px', alignItems: 'start' }}>
          
          {/* Left Column: Direct Links & Info */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Email link */}
            <a 
              id="contact-link-email"
              href="mailto:rohan9vashisth@gmail.com"
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={20} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 550, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Email</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 650, color: 'var(--text-primary)' }}>rohan9vashisth@gmail.com</div>
              </div>
            </a>

            {/* LinkedIn Link */}
            <a 
              id="contact-link-linkedin"
              href="https://www.linkedin.com/in/rohanvashisth/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Linkedin size={20} style={{ color: 'var(--primary)' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 550, textTransform: 'uppercase', letterSpacing: '0.04em' }}>LinkedIn</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 650, color: 'var(--text-primary)' }}>linkedin.com/in/rohanvashisth</div>
              </div>
            </a>

            {/* Phone Link */}
            <a 
              id="contact-link-phone"
              href="tel:+917397430237"
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px',
                textDecoration: 'none'
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--emerald-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={20} style={{ color: 'var(--emerald)' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 550, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Phone</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 650, color: 'var(--text-primary)' }}>+91 7397430237</div>
              </div>
            </a>

            {/* Location Card */}
            <div 
              id="contact-card-location"
              className="glass-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                padding: '20px'
              }}
            >
              <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: 'var(--bg-surface-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={20} style={{ color: 'var(--text-secondary)' }} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 550, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Location</div>
                <div style={{ fontSize: '0.98rem', fontWeight: 650, color: 'var(--text-primary)' }}>Gurugram, India • Open to Global Relocation</div>
              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 750, marginBottom: '20px', textAlign: 'left', color: 'var(--text-primary)' }}>
              Send a Direct Message
            </h3>
            
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-name" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-email" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-subject" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="contact-input-subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                  style={inputStyle}
                  placeholder="TPM Opportunity / Collaboration"
                />
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', textAlign: 'left' }}>
                <label htmlFor="contact-input-message" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>
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
                  placeholder="Hi Rohan, I'd like to chat about..."
                />
              </div>

              {/* Status alerts */}
              {status === 'error' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#b91c1c', fontSize: '0.88rem', backgroundColor: '#fef2f2', padding: '10px', borderRadius: '6px' }}>
                  <AlertCircle size={16} />
                  <span>Please fill out all required fields.</span>
                </div>
              )}

              {status === 'success' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#15803d', fontSize: '0.88rem', backgroundColor: '#f0fdf4', padding: '10px', borderRadius: '6px' }}>
                  <CheckCircle2 size={16} />
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
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
