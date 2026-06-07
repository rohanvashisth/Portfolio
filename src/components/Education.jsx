import React from 'react';
import { GraduationCap, Award, Landmark, MapPin, Calendar, CheckSquare } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      id: 'rutgers',
      institution: 'RUTGERS, THE STATE UNIVERSITY OF NEW JERSEY',
      campus: 'Rutgers Business School | Newark, NJ',
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Finance and Supply Chain Management',
      graduation: 'May 2026',
      icon: <Landmark size={22} style={{ color: 'hsl(var(--secondary))' }} />,
      highlights: [
        { label: 'Dean\'s Excellence Award Recipient', icon: <Award size={14} style={{ color: 'hsl(var(--secondary))' }} /> },
        { label: 'Secretary, RBS MBA Finance Club', icon: <CheckSquare size={14} style={{ color: 'hsl(var(--secondary))' }} /> }
      ],
      details: 'Deepening business analysis capabilities, corporate valuation, operations scheduling, logistics modeling, and analytical frameworks to lead engineering teams in global finance and trading architectures.'
    },
    {
      id: 'vit',
      institution: 'VELLORE INSTITUTE OF TECHNOLOGY',
      campus: 'Chennai, India',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science & Engineering',
      graduation: 'May 2021',
      icon: <GraduationCap size={22} style={{ color: 'hsl(var(--primary))' }} />,
      highlights: [
        { label: 'Focus on Distributed Databases & Networks', icon: <CheckSquare size={14} style={{ color: 'hsl(var(--primary))' }} /> },
        { label: 'Data Structures, Algorithms & OS foundations', icon: <CheckSquare size={14} style={{ color: 'hsl(var(--primary))' }} /> }
      ],
      details: 'Built core foundations in software engineering, low-level architecture, concurrency primitives, compiler design, socket networking, and transactional database modeling.'
    }
  ];

  return (
    <section id="education" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <h2 className="section-title">Education & Credentials</h2>
        <p className="section-subtitle">
          Fusing advanced algorithms and distributed ledger engineering with corporate valuation and operations strategy.
        </p>

        <div className="grid-2" style={{ maxWidth: '950px', margin: '0 auto', gap: '32px' }}>
          {educationList.map((edu) => (
            <div 
              key={edu.id} 
              className="glass-card education-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px',
                textAlign: 'left',
                borderTop: edu.id === 'rutgers' ? '4px solid hsl(var(--secondary))' : '4px solid hsl(var(--primary))'
              }}
              id={`education-card-${edu.id}`}
            >
              <div>
                {/* Header Info */}
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {edu.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '2px' }}>
                      {edu.institution}
                    </h3>
                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-muted))', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} />
                      {edu.campus}
                    </div>
                  </div>
                </div>

                {/* Degree Title */}
                <div style={{ marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>
                    {edu.degree}
                  </h4>
                  <span style={{ fontSize: '0.95rem', color: edu.id === 'rutgers' ? 'hsl(var(--secondary))' : 'hsl(var(--primary))', fontWeight: 600 }}>
                    {edu.specialization}
                  </span>
                </div>

                {/* Highlights list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                  {edu.highlights.map((h, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'hsl(var(--text-primary))' }}>
                      {h.icon}
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div 
                style={{ 
                  borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}
              >
                <p style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))', fontStyle: 'italic', lineHeight: 1.4 }}>
                  {edu.details}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'hsl(var(--text-primary))', fontWeight: 600 }}>
                  <Calendar size={14} style={{ color: edu.id === 'rutgers' ? 'hsl(var(--secondary))' : 'hsl(var(--primary))' }} />
                  Graduated: {edu.graduation}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .education-card {
          transition: var(--transition-normal);
        }
        .education-card:hover {
          background: rgba(15, 19, 34, 0.6) !important;
        }
      `}</style>
    </section>
  );
}
