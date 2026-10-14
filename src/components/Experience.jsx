import React from 'react';
import { Award, Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      id: 'se2',
      role: 'Software Engineer II',
      company: 'JPMorgan Chase & Co.',
      location: 'Bengaluru, India',
      period: '2023 – 2024',
      badge: 'Promotion',
      highlights: [
        {
          title: 'End-to-End Platform Delivery',
          desc: 'Led delivery of platform capabilities supporting FX and derivatives systems processing 250K–300K daily transactions, translating business needs into high-reliability product solutions.'
        },
        {
          title: 'Cross-Functional Product Ownership',
          desc: 'Partnered with product managers, engineering teams, trading operations, and business stakeholders to define requirements, groom backlog epics, and align release roadmaps.'
        },
        {
          title: 'Large-Scale Settlement Infrastructure',
          desc: 'Owned delivery for backend platform services settling $10B–$15B in daily transactional value, balancing high concurrency, strict fault isolation, and fault tolerance.'
        },
        {
          title: 'Operational Intelligence & Observability',
          desc: 'Architected a telemetry and log aggregation platform across 20+ microservices, reducing production incident resolution time by 40% and enhancing platform visibility.'
        },
        {
          title: 'Data-Driven Product Prioritization',
          desc: 'Leveraged SQL and Python to analyze platform telemetry, identify operational bottlenecks, establish platform health KPIs, and steer engineering prioritization.'
        }
      ],
      skills: ['Product Strategy', 'Platform Engineering', 'Kafka', 'Microservices', 'SQL', 'Python', 'System Architecture', 'Agile / Scrum']
    },
    {
      id: 'se1',
      role: 'Software Engineer I',
      company: 'JPMorgan Chase & Co.',
      location: 'Bengaluru, India',
      period: '2021 – 2023',
      award: 'J.P. Morgan Impact Award (2022) — Awarded for system modernization & engineering excellence',
      highlights: [
        {
          title: 'Pre-Trade Validation Automation ("Can I Trade")',
          desc: 'Designed and launched the "Can I Trade" validation capability supporting $200M–$2B in daily trades, reducing decision latency by 97% through asynchronous orchestration.'
        },
        {
          title: 'FX Modernization & 95% STP',
          desc: 'Modernized Brokerage FX workflows by integrating legacy platforms with event-driven microservices, increasing straight-through processing (STP) to 95% and eliminating manual trade exceptions.'
        },
        {
          title: 'Idempotent Corporate FX APIs',
          desc: 'Designed and exposed high-throughput REST APIs for Corporate FX operations (amend, net, split, cancel) ensuring idempotent trade lifecycle execution.'
        },
        {
          title: 'Messaging & Distributed SQL Evaluation',
          desc: 'Optimized Kafka and IBM MQ messaging infrastructure under peak market loads; spearheaded a distributed SQL (CockroachDB) POC analyzing transaction consistency and resilience.'
        }
      ],
      skills: ['Java', 'Spring Boot', 'Kafka', 'IBM MQ', 'REST API Design', 'CockroachDB', 'FitNesse', 'Event-Driven Systems']
    }
  ];

  return (
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Career Journey</span>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            3+ years delivering platform capabilities, high-throughput systems, and operational automation at JPMorgan Chase.
          </p>
        </div>

        {/* Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '920px' }}>
          {experiences.map((exp) => (
            <div 
              key={exp.id}
              className="glass-card"
              style={{
                textAlign: 'left',
                padding: '32px',
                position: 'relative'
              }}
            >
              {/* Card Header */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '20px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 750, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="badge badge-primary">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Building2 size={15} style={{ color: 'var(--primary)' }} />
                      {exp.company}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div 
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-secondary)',
                    backgroundColor: 'var(--bg-base)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Award Banner if applicable */}
              {exp.award && (
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    backgroundColor: 'var(--amber-light)',
                    border: '1px solid var(--amber-border)',
                    borderRadius: '8px',
                    marginBottom: '20px',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    color: '#92400e'
                  }}
                >
                  <Award size={18} style={{ flexShrink: 0 }} />
                  <span>{exp.award}</span>
                </div>
              )}

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                {exp.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div 
                      style={{ 
                        width: '6px', 
                        height: '6px', 
                        borderRadius: '50%', 
                        backgroundColor: 'var(--primary)', 
                        marginTop: '8px', 
                        flexShrink: 0 
                      }} 
                    />
                    <div style={{ fontSize: '0.96rem', lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                      <strong style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{item.title}: </strong>
                      <span>{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology & Tooling Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                {exp.skills.map((skill) => (
                  <span key={skill} className="badge badge-neutral">
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
