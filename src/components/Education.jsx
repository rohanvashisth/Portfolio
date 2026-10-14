import React from 'react';
import { Award, GraduationCap, MapPin, Calendar } from 'lucide-react';

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
      description: 'Coursework and applied capstone research focused on corporate valuation, operations scheduling, logistics modeling, capital budgeting, and translating quantitative data into strategic decisions.'
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
    <section id="education" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Academic Foundations</span>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Complementing deep computer science foundations with business acumen in corporate finance and supply chain.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid-2" style={{ maxWidth: '960px', gap: '32px' }}>
          {educationList.map((edu) => (
            <div 
              key={edu.id} 
              className="glass-card"
              style={{
                textAlign: 'left',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Degree & Year */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-primary">
                    {edu.graduation}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {edu.degree}
                </h3>

                <div style={{ fontSize: '0.96rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '12px' }}>
                  {edu.specialization}
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 650, color: 'var(--text-primary)' }}>
                  {edu.institution}
                </div>

                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px', marginBottom: '18px' }}>
                  <MapPin size={13} />
                  <span>{edu.location}</span>
                </div>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {edu.description}
                </p>
              </div>

              {/* Honors / Badges */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {edu.honors.map((honor, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    <Award size={15} style={{ color: 'var(--emerald)', flexShrink: 0 }} />
                    <span style={{ fontWeight: 550 }}>{honor}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
