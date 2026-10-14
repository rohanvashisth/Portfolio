import React, { useState } from 'react';
import { Award, Calendar, MapPin, Building2, CheckCircle2, SlidersHorizontal, FileText, ArrowRight } from 'lucide-react';

export default function Experience() {
  const [viewMode, setViewMode] = useState('product'); // 'product' (Issue/Why/How/Impact) or 'concise' (Standard Resume)

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
    <section id="experience" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
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

          {/* Toggle Button */}
          <div 
            style={{
              display: 'flex',
              backgroundColor: 'var(--bg-surface-subtle)',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid var(--border-subtle)'
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
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'product' ? '#ffffff' : 'transparent',
                color: viewMode === 'product' ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: viewMode === 'product' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <SlidersHorizontal size={14} />
              <span>Product Framework (Issue ➔ Why ➔ How ➔ Impact)</span>
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
                fontWeight: 600,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: viewMode === 'concise' ? '#ffffff' : 'transparent',
                color: viewMode === 'concise' ? 'var(--text-primary)' : 'var(--text-muted)',
                boxShadow: viewMode === 'concise' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              <FileText size={14} />
              <span>Resume Bullets</span>
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '960px' }}>
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
                  marginBottom: '16px',
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

              {/* Summary */}
              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                {exp.pmSummary}
              </p>

              {/* Points: Either Product Framework or Concise Bullets */}
              {viewMode === 'product' ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '24px' }}>
                  {exp.points.map((pt, idx) => (
                    <div 
                      key={idx}
                      style={{
                        padding: '18px 20px',
                        backgroundColor: 'var(--bg-base)',
                        borderRadius: '10px',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px'
                      }}
                    >
                      <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                        {pt.title}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '8px', fontSize: '0.92rem', lineHeight: 1.55 }}>
                        <div>
                          <strong style={{ color: '#b91c1c', fontWeight: 700 }}>• What was the issue: </strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{pt.issue}</span>
                        </div>
                        <div>
                          <strong style={{ color: '#92400e', fontWeight: 700 }}>• Why we solved it: </strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{pt.why}</span>
                        </div>
                        <div>
                          <strong style={{ color: '#1e40af', fontWeight: 700 }}>• How we solved it: </strong>
                          <span style={{ color: 'var(--text-secondary)' }}>{pt.how}</span>
                        </div>
                        <div>
                          <strong style={{ color: '#065f46', fontWeight: 700 }}>• Quantified Metrics: </strong>
                          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{pt.metrics}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                  {exp.points.map((pt, idx) => (
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
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 650 }}>{pt.title}: </strong>
                        <span>{pt.conciseBullet}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

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
