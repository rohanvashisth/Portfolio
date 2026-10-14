import React, { useState } from 'react';
import { Award, Calendar, MapPin, Building2, SlidersHorizontal, FileText } from 'lucide-react';

export default function Experience() {
  const [viewMode, setViewMode] = useState('product'); // 'product' or 'concise'

  const experiences = [
    {
      id: 'se2',
      role: 'Software Engineer II (Platform Product & Engineering)',
      company: 'JPMorgan Chase & Co.',
      location: 'Bengaluru, India',
      period: '2023 – 2024',
      badge: 'Promoted',
      pmSummary: 'Owned end-to-end delivery of platform capabilities supporting institutional FX settlement processing $10B–$15B in daily value, partnering with trading desks, operations, and engineering to modernize core architecture.',
      points: [
        {
          title: 'Legacy Settlement Architecture Modernization',
          issue: 'A 40-year monolithic FX settlement architecture created severe operational bottlenecks, high manual trade reconciliation, and settlement failure risks as daily trade volume surged.',
          why: 'Crucial to expand JPMC’s market share in institutional FX trading, ensure regulatory compliance, and eliminate millions in operational risk from manual trade settlement exceptions.',
          how: 'Spearheaded product requirements and cross-functional technical delivery to decouple monolithic workflows into modular microservices using Apache Kafka event streams; built standardized idempotent APIs for Corporate FX trade lifecycle (amend, net, split, cancel).',
          metrics: 'Scaled platform capacity to process $10B–$15B in daily settlement value across 250K–300K transactions; elevated Straight-Through Processing (STP) to 95%, reducing manual trade exceptions by 30%+.',
          conciseBullet: 'Led platform requirements and delivery to decompose a 40-year monolithic FX settlement system into event-driven microservices via Apache Kafka, scaling capacity to $10B–$15B in daily settlement value (250K–300K transactions) and increasing Straight-Through Processing (STP) to 95%.'
        },
        {
          title: 'Operational Intelligence Platform & Incident Recovery',
          issue: 'Operations and engineering teams faced 4–5 hours of Mean-Time-to-Resolution (MTTR) per critical trading incident due to fragmented logs across 20+ disconnected services.',
          why: 'Trading desk uptime and SLA compliance are paramount; every minute of downtime risks market financial loss and institutional client churn.',
          how: 'Conceived and led delivery of an internal operational telemetry and log streaming platform; collaborated with operations to design self-service health monitoring dashboards and proactive threshold alerting.',
          metrics: 'Slashed Mean-Time-to-Resolution (MTTR) by 40%, saving 15+ engineering hours per week and maintaining platform availability at 99.95%.',
          conciseBullet: 'Conceived and delivered a real-time operational telemetry and log aggregation platform across 20+ microservices, cutting incident MTTR by 40% and saving 15+ engineering hours per week.'
        },
        {
          title: 'Data-Driven Roadmap & Backlog Prioritization',
          issue: 'Engineering capacity was fragmented across competing stakeholder requests with zero quantitative visibility into which platform bottlenecks caused the highest customer friction.',
          why: 'Needed to maximize engineering velocity and align engineering sprints with the highest-ROI business and operational priorities.',
          how: 'Established platform health KPIs; analyzed production telemetry and transaction failure patterns using SQL and Python to build data-backed PRDs and prioritize the quarterly product roadmap.',
          metrics: 'Accelerated feature delivery velocity by 25% and aligned 4 cross-functional teams (Engineering, Trading Ops, Risk, and Product) around shared platform OKRs.',
          conciseBullet: 'Leveraged SQL and Python to analyze platform telemetry, defining health KPIs and authoring data-backed PRDs that accelerated feature velocity by 25% and aligned engineering sprints with business OKRs.'
        }
      ],
      skills: ['Product Strategy', 'PRD Authoring', 'Roadmap Prioritization', 'Kafka', 'Microservices', 'SQL', 'Python', 'Agile / Scrum']
    },
    {
      id: 'se1',
      role: 'Software Engineer I',
      company: 'JPMorgan Chase & Co.',
      location: 'Bengaluru, India',
      period: '2021 – 2023',
      award: 'J.P. Morgan Impact Award (2022) — Awarded for system modernization & engineering excellence',
      pmSummary: 'Delivered pre-trade validation automation and standardized API infrastructure for Corporate and Brokerage FX, reducing transaction latency and partner onboarding cycle times.',
      points: [
        {
          title: '"Can I Trade" Pre-Trade Validation Engine',
          issue: 'High-volume institutional trades suffered from slow, synchronous pre-trade validation checks across multiple ledgers, creating latency that exposed traders to market price slippage and potential settlement default.',
          why: 'Institutional trading desks required sub-second validation to execute high-frequency corporate FX orders safely at enterprise scale.',
          how: 'Owned the functional requirements, API schema design, and release execution for the "Can I Trade" validation service; utilized Kafka and asynchronous IBM MQ pipelines to decouple risk validation from downstream settlement.',
          metrics: 'Slashed trade validation decision latency by 97% (from seconds to <100ms) while processing $200M to $2B in daily volume; awarded the 2022 J.P. Morgan Impact Award for engineering excellence.',
          conciseBullet: 'Designed and launched the "Can I Trade" pre-payment validation engine supporting $200M–$2B daily volume, slashing trade decision latency by 97% (sub-100ms) and earning the 2022 J.P. Morgan Impact Award.'
        },
        {
          title: 'Corporate & Brokerage FX API Standardization',
          issue: 'Institutional partner apps relied on brittle batch file transfers and non-standard endpoints, resulting in delayed trade confirmations and frequent state divergence.',
          why: 'Needed to improve client integration experience, accelerate partner onboarding, and enable real-time trade status tracking.',
          how: 'Defined API product specifications for idempotent REST services and led integration of Brokerage FX data streams; conducted 10x traffic load testing and led a CockroachDB (distributed SQL) POC evaluating consistency and horizontal elasticity.',
          metrics: 'Standardized 100% of Brokerage FX trade interfaces, eliminating trade state discrepancies and reducing partner onboarding cycle time from weeks to days.',
          conciseBullet: 'Modernized Brokerage FX interfaces by authoring idempotent REST API specifications and integrating event-driven data streams, eliminating trade state discrepancies and reducing partner onboarding time from weeks to days.'
        }
      ],
      skills: ['API Strategy', 'Functional Requirements', 'Kafka', 'IBM MQ', 'REST APIs', 'CockroachDB POC', 'FitNesse', 'STP Optimization']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        
        {/* Section Header with View Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div style={{ textAlign: 'left' }}>
            <span className="section-label">Career Journey</span>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              3+ years driving platform capabilities, high-throughput systems, and operational automation at JPMorgan Chase.
            </p>
          </div>

          {/* Toggle */}
          <div 
            style={{
              display: 'flex',
              backgroundColor: 'var(--bg-subtle)',
              padding: '3px',
              borderRadius: '6px',
              border: '1px solid var(--border-hairline)'
            }}
          >
            <button
              onClick={() => setViewMode('product')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'product' ? '#ffffff' : 'transparent',
                color: viewMode === 'product' ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: viewMode === 'product' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <SlidersHorizontal size={13} />
              <span>Product Framework (Issue / Why / How / Impact)</span>
            </button>
            <button
              onClick={() => setViewMode('concise')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '4px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'concise' ? '#ffffff' : 'transparent',
                color: viewMode === 'concise' ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: viewMode === 'concise' ? '0 1px 2px rgba(0,0,0,0.05)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <FileText size={13} />
              <span>Resume Bullets</span>
            </button>
          </div>
        </div>

        {/* Integrated Timeline (Split Rail) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {experiences.map((exp, idx) => (
            <div 
              key={exp.id}
              style={{
                display: 'grid',
                gridTemplateColumns: '260px 1fr',
                gap: '40px',
                padding: '40px 0',
                borderTop: idx > 0 ? '1px solid var(--border-hairline)' : 'none',
                textAlign: 'left'
              }}
              className="experience-split-row"
            >
              
              {/* Left Column: Organization & Tenure */}
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {exp.role}
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <Building2 size={15} style={{ color: 'var(--primary)' }} />
                  <span>{exp.company}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar size={13} />
                    <span>{exp.period}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {exp.badge && (
                  <span className="badge badge-primary" style={{ marginBottom: '10px' }}>
                    {exp.badge}
                  </span>
                )}

                {exp.award && (
                  <div 
                    style={{
                      marginTop: '8px',
                      padding: '8px 10px',
                      backgroundColor: 'var(--amber-subtle)',
                      border: '1px solid #fde68a',
                      borderRadius: '6px',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#92400e',
                      lineHeight: 1.4
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '2px' }}>
                      <Award size={14} />
                      <span>Impact Award (2022)</span>
                    </div>
                    <span style={{ fontWeight: 400, fontSize: '0.76rem', color: '#78350f' }}>
                      Recognized for system modernization & engineering excellence.
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Narrative & Bullets */}
              <div>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px', fontWeight: 500 }}>
                  {exp.pmSummary}
                </p>

                {viewMode === 'product' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                    {exp.points.map((pt, pIdx) => (
                      <div 
                        key={pIdx}
                        style={{
                          borderLeft: '2px solid var(--border-hairline)',
                          paddingLeft: '18px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px'
                        }}
                      >
                        <div style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                          {pt.title}
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.91rem', lineHeight: 1.55 }}>
                          <div>
                            <span style={{ color: '#b91c1c', fontWeight: 700 }}>Issue: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.issue}</span>
                          </div>
                          <div>
                            <span style={{ color: '#92400e', fontWeight: 700 }}>Why: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.why}</span>
                          </div>
                          <div>
                            <span style={{ color: '#1e40af', fontWeight: 700 }}>How: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.how}</span>
                          </div>
                          <div>
                            <span style={{ color: '#065f46', fontWeight: 700 }}>Metrics: </span>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{pt.metrics}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0 }}>
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: 1.6 }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 800 }}>•</span>
                        <span>
                          <strong style={{ color: 'var(--text-primary)' }}>{pt.title}: </strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{pt.conciseBullet}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '24px' }}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="badge badge-neutral">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .experience-split-row {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
