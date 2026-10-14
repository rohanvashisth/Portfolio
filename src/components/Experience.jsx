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
      period: '2023 – July 2024',
      badge: 'Promoted',
      pmSummary: 'Technical product engineering across high-volume financial platforms processing 250K–300K daily transactions worth $10B–$15B. Led discovery through delivery across Product, Engineering, Finance, Risk, Operations, and QA.',
      points: [
        {
          title: '40-Year Platform Modernization & Microservices Transition',
          issue: 'A 40-year monolithic FX settlement architecture created severe operational bottlenecks, high manual trade reconciliation, and settlement failure risks as daily trade volume surged.',
          why: 'Crucial to expand JPMC’s market share in institutional FX trading, ensure regulatory compliance, and eliminate millions in operational risk from manual trade settlement exceptions.',
          how: 'Transitioned core workflows to distributed microservices orchestrated through Apache Kafka event streaming; coordinated Product, Engineering, Finance, Risk, Operations, and QA across end-to-end delivery.',
          metrics: 'Scaled platform capacity to process $10B–$15B in daily settlement value across 250K–300K transactions; elevated Straight-Through Processing (STP) to 95%.',
          conciseBullet: 'Modernized a 40-year-old platform to address scalability and maintainability challenges, transitioning core workflows to distributed microservices while coordinating Product, Engineering, Finance, Risk, Operations, and QA for a platform processing 250K-300K daily transactions worth $10B-$15B.'
        },
        {
          title: 'High-Volume Trade Lifecycle API Re-Engineering',
          issue: 'Legacy trade lifecycle workflows suffered from scalability constraints and batch delays during market volatility peaks.',
          why: 'Essential to eliminate trade state discrepancies and enable institutional partners to seamlessly amend, net, split, and cancel orders in real time.',
          how: 'Re-engineered four high-volume trade lifecycle capabilities (amendment, split, cancellation, and netting) into reusable, idempotent REST APIs.',
          metrics: 'Expanded trade processing capacity by 10x while standardizing trade interfaces across distributed ledgers.',
          conciseBullet: 'Re-engineered four high-volume trade lifecycle capabilities—amendment, split, cancellation, and netting—to address scalability constraints, converting them into reusable APIs that increased processing capacity 10x.'
        },
        {
          title: '"Can I Trade" Automated Validation Engine',
          issue: 'Trade-approval validation was fragmented across multiple ledgers, causing slow synchronous pre-trade checks and exposing traders to price slippage and settlement default.',
          why: 'Institutional trading desks required sub-second validation to safely execute high-volume corporate FX orders without latency.',
          how: 'Built "Can I Trade" validation service, translating complex business rules into an automated workflow using Kafka and asynchronous IBM MQ pipelines.',
          metrics: 'Improved trade-approval efficiency by 97% (sub-100ms decision latency) while supporting $200M–$2B in daily approvals.',
          conciseBullet: 'Built "Can I Trade" to solve fragmented and inefficient trade-approval validation, translating complex business rules into an automated workflow that improved approval efficiency by 97% while supporting $200M-$2B in daily approvals.'
        },
        {
          title: 'Real-Time Product & Operational Telemetry Platform',
          issue: 'Operations and engineering teams faced 4–5 hours of MTTR per critical trading incident due to limited visibility into transaction failure patterns across 20+ disconnected services.',
          why: 'Trading desk uptime and SLA compliance are paramount; downtime directly risks market financial loss and institutional client churn.',
          how: 'Built real-time product and operational analytics monitoring across 20+ Kubernetes microservices with self-service health dashboards and proactive alerting.',
          metrics: 'Reduced incident resolution time by 40%, saving 15+ engineering hours per week and maintaining platform availability at 99.95%+.',
          conciseBullet: 'Built real-time product and operational analytics to address limited visibility into failures across distributed services, creating monitoring across 20+ Kubernetes microservices that reduced incident resolution time by 40%.'
        }
      ],
      skills: ['Product Requirements', 'PRDs', 'Microservices', 'Kafka', 'Kubernetes', 'APIs', 'STP Optimization', 'Agile / Scrum', 'Cross-Functional Leadership']
    },
    {
      id: 'se1',
      role: 'Software Engineer I',
      company: 'JPMorgan Chase & Co.',
      location: 'Bengaluru, India',
      period: 'January 2021 – December 2023',
      award: 'J.P. Morgan Impact Award — Awarded for driving platform modernization & engineering excellence',
      pmSummary: 'Translated ambiguous business needs into user journeys, PRDs, and engineering execution plans while optimizing messaging reliability and delivery predictability across high-volume financial platforms.',
      points: [
        {
          title: 'Stakeholder Alignment & Clearer Product Requirements',
          issue: 'Ambiguity across business and technology teams led to misaligned delivery expectations and fragmented engineering sprint velocity.',
          why: 'Needed to establish a predictable delivery process, reduce scope ambiguity, and accelerate time-to-market for enterprise FX capabilities.',
          how: 'Translated needs from 5+ stakeholder groups (Product, Engineering, QA, Finance, Operations) into clear user journeys, acceptance criteria, technical specifications, and actionable engineering plans.',
          metrics: 'Eliminated requirement ambiguity, establishing a predictable delivery cadence across quarterly release milestones.',
          conciseBullet: 'Created clearer product requirements to address ambiguity across business and technology teams, translating needs from 5+ stakeholder groups into user journeys, acceptance criteria, technical specifications, and actionable engineering plans.'
        },
        {
          title: 'Messaging Reliability & Failure Pattern Mitigation',
          issue: 'High-volume financial workflows suffered recurring transaction-processing and dependency failures during market volume spikes.',
          why: 'Critical to prevent trade state divergence and eliminate lengthy manual exception troubleshooting.',
          how: 'Analyzed Kafka and IBM MQ messaging workflows supporting 250K+ daily transactions to identify failure patterns; implemented reusable architectural improvements and automated retry policies.',
          metrics: 'Reduced troubleshooting effort by 4–5 hours per incident and prevented transaction drops across distributed services.',
          conciseBullet: 'Improved messaging reliability to address recurring transaction-processing failures, analyzing Kafka and IBM MQ workflows to identify failure patterns and implement reusable improvements that reduced troubleshooting effort by 4-5 hours per incident.'
        },
        {
          title: 'Cross-Functional Delivery Governance & Production Readiness',
          issue: 'Execution gaps across siloed QA, operations, and engineering teams caused unexpected release defects during deployment windows.',
          why: 'Enterprise banking platforms require continuous verification, zero-downtime releases, and robust deployment governance.',
          how: 'Established a more predictable delivery process coordinating Product, Engineering, QA, Finance, and Operations through UAT, defect resolution, deployment validation, and production readiness auditing.',
          metrics: 'Achieved flawless production readiness across release cycles with zero P0 deployment rollbacks.',
          conciseBullet: 'Established a more predictable delivery process to address cross-team execution gaps, coordinating Product, Engineering, QA, Finance, and Operations through UAT, defect resolution, deployment validation, and production readiness.'
        }
      ],
      skills: ['Product Discovery', 'User Journeys', 'Acceptance Criteria', 'Kafka', 'IBM MQ', 'Java', 'Spring Boot', 'UAT Governance', 'Python', 'SQL']
    }
  ];

  return (
    <section id="experience" className="section section-pastel-green">
      <div className="container">
        
        {/* Section Header with View Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          <div style={{ textAlign: 'left' }}>
            <div className="section-tag section-tag-green">
              <span className="section-tag-num section-tag-num-green">01</span>
              <span>Career Journey</span>
            </div>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-subtitle">
              4+ years driving platform capabilities, high-throughput systems, and operational automation at J.P. Morgan.
            </p>
          </div>

          {/* Toggle */}
          <div 
            style={{
              display: 'flex',
              backgroundColor: '#ffffff',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid var(--pastel-green-border)'
            }}
          >
            <button
              onClick={() => setViewMode('product')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 650,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'product' ? 'var(--primary)' : 'transparent',
                color: viewMode === 'product' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              <SlidersHorizontal size={14} />
              <span>Product Framework</span>
            </button>
            <button
              onClick={() => setViewMode('concise')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 650,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'concise' ? 'var(--primary)' : 'transparent',
                color: viewMode === 'concise' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              <FileText size={14} />
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
                gridTemplateColumns: '320px 1fr',
                gap: '48px',
                padding: '48px 0',
                borderTop: idx > 0 ? '1px solid var(--border-hairline)' : 'none',
                textAlign: 'left'
              }}
              className="experience-split-row"
            >
              
              {/* Left Column: Organization & Tenure */}
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '4px' }}>
                  {exp.role}
                </div>

                <div style={{ fontSize: '0.98rem', fontWeight: 650, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                  <Building2 size={16} style={{ color: 'var(--primary)' }} />
                  <span>{exp.company}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.84rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} style={{ color: 'var(--emerald)' }} />
                    <span>{exp.period}</span>
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} style={{ color: 'var(--emerald)' }} />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {exp.badge && (
                  <span className="badge badge-green" style={{ marginBottom: '10px', display: 'inline-block' }}>
                    {exp.badge}
                  </span>
                )}

                {exp.award && (
                  <div 
                    style={{
                      marginTop: '8px',
                      padding: '10px 12px',
                      backgroundColor: 'var(--amber-subtle)',
                      border: '1px solid var(--amber-border)',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      color: 'var(--amber-text)',
                      lineHeight: 1.45
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                      <Award size={15} />
                      <span style={{ fontWeight: 750 }}>Impact Award</span>
                    </div>
                    <span style={{ fontWeight: 400, fontSize: '0.78rem' }}>
                      Recognized for system modernization & engineering excellence.
                    </span>
                  </div>
                )}
              </div>

              {/* Right Column: Narrative & Clean Editorial Breakdown */}
              <div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px', fontWeight: 500 }}>
                  {exp.pmSummary}
                </p>

                {viewMode === 'product' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {exp.points.map((pt, pIdx) => (
                      <div 
                        key={pIdx}
                        style={{
                          backgroundColor: '#ffffff',
                          borderRadius: '10px',
                          border: '1px solid var(--border-hairline)',
                          padding: '22px 24px',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '12px'
                        }}
                      >
                        <div style={{ fontSize: '1.05rem', fontWeight: 750, color: 'var(--text-primary)' }}>
                          {pt.title}
                        </div>

                        {/* Clean Editorial Text Rows - No distracting multi-color boxes */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.92rem', lineHeight: 1.6 }}>
                          <div>
                            <span style={{ fontWeight: 750, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Issue: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.issue}</span>
                          </div>
                          <div>
                            <span style={{ fontWeight: 750, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Why: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.why}</span>
                          </div>
                          <div>
                            <span style={{ fontWeight: 750, color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>How: </span>
                            <span style={{ color: 'var(--text-secondary)' }}>{pt.how}</span>
                          </div>
                          <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '8px', marginTop: '4px' }}>
                            <span style={{ fontWeight: 750, color: 'var(--primary)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Impact & Metrics: </span>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{pt.metrics}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', padding: 0 }}>
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: 1.65, backgroundColor: '#ffffff', padding: '18px 22px', borderRadius: '8px', border: '1px solid var(--border-hairline)', boxShadow: '0 1px 4px rgba(0,0,0,0.02)' }}>
                        <span style={{ color: 'var(--primary)', fontWeight: 800, fontSize: '1.2rem', lineHeight: 1 }}>•</span>
                        <span>
                          <strong style={{ color: 'var(--text-primary)' }}>{pt.title}: </strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{pt.conciseBullet}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '24px' }}>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={skill} className={sIdx % 2 === 0 ? "badge badge-blue" : "badge badge-green"}>
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
