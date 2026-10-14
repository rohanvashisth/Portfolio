import React from 'react';
import { Award, GraduationCap, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      id: 'rutgers',
      institution: 'Rutgers Business School',
      university: 'Rutgers, The State University of New Jersey',
      location: 'Newark & New Brunswick, NJ',
      degree: 'Master of Business Administration (MBA)',
      specialization: 'Finance and Supply Chain Management',
      graduation: 'May 2026',
      honors: [
        'Dean\'s Excellence Award Recipient',
        'Secretary, RBS MBA Finance Club'
      ],
      description: 'Coursework and applied research focused on corporate valuation, operations scheduling, logistics modeling, capital budgeting, and translating quantitative data into strategic decisions.'
    },
    {
      id: 'vit',
      institution: 'Vellore Institute of Technology (VIT)',
      university: 'School of Computer Science & Engineering',
      location: 'Chennai, India',
      degree: 'Bachelor of Technology (B.Tech)',
      specialization: 'Computer Science & Engineering',
      graduation: 'May 2021',
      honors: [
        'Focus in Distributed Systems & Databases',
        'Advanced Algorithms & Operating Systems'
      ],
      description: 'Comprehensive engineering foundation spanning low-level system design, concurrency primitives, network protocols, object-oriented software engineering, and relational database systems.'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Academic Foundations</span>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Complementing deep computer science foundations with business acumen in corporate finance and supply chain.
          </p>
        </div>

        {/* Integrated Education Stream */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {educationList.map((edu, idx) => (
            <div 
              key={edu.id}
              className="integrated-item"
              style={{
                display: 'grid',
                gridTemplateColumns: '280px 1fr',
                gap: '40px',
                textAlign: 'left'
              }}
            >
              {/* Left Column: School, Degree & Timeline */}
              <div>
                <div style={{ display: 'inline-block', marginBottom: '12px' }}>
                  <span className="badge badge-primary">
                    {edu.graduation}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 750, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '6px' }}>
                  {edu.degree}
                </h3>

                <div style={{ fontSize: '0.94rem', fontWeight: 650, color: 'var(--primary)', marginBottom: '4px' }}>
                  {edu.specialization}
                </div>

                <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 550, marginTop: '4px' }}>
                  {edu.institution}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '6px' }}>
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </div>
              </div>

              {/* Right Column: Narrative & Honors */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                  {edu.description}
                </p>

                {/* Honors & Activities */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', paddingTop: '8px' }}>
                  {edu.honors.map((honor, hIdx) => (
                    <div 
                      key={hIdx} 
                      style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '6px', 
                        padding: '4px 10px',
                        background: 'var(--bg-subtle)',
                        borderRadius: '4px',
                        border: '1px solid var(--border-hairline)',
                        fontSize: '0.82rem', 
                        color: 'var(--text-primary)',
                        fontWeight: 550 
                      }}
                    >
                      <Award size={14} style={{ color: 'var(--emerald)' }} />
                      <span>{honor}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .integrated-item {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
