import React, { useState } from 'react';
import { Layers, ChevronDown, ChevronUp, CheckCircle, ExternalLink, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const projects = [
    {
      id: 'fx-settlement',
      title: 'Global FX Settlement Platform Modernization',
      org: 'JPMorgan Chase & Co.',
      category: 'Enterprise FinTech • Platform Architecture',
      summary: 'Re-architected a 40-year legacy monolithic FX settlement engine into resilient, event-driven microservices processing $10B–$15B in daily transactional value with 95% Straight-Through Processing.',
      metrics: [
        { label: 'Daily Settlement Value', value: '$10B–$15B' },
        { label: 'Straight-Through Processing', value: '95% STP' },
        { label: 'Daily Transactions', value: '250K–300K' }
      ],
      challenge: 'The legacy settlement platform operated as a decades-old monolith with tightly coupled batch jobs, frequent manual trade reconciliation, and high operational risk during market volatility peaks.',
      solution: [
        'Decomposed monolithic workflows into independent, domain-bounded microservices orchestrated through Apache Kafka event streaming.',
        'Engineered idempotent REST APIs for Corporate FX trade operations (amend, net, split, cancel) ensuring consistent trade state across distributed ledgers.',
        'Automated regression verification suites using FitNesse, establishing continuous verification pipelines and lowering production deployment risks.'
      ],
      architectureDeepDive: {
        pattern: 'Event-Driven Microservices with Distributed Asynchronous Messaging',
        coreComponents: 'Spring Boot Services, Apache Kafka Clusters, IBM MQ Bridges, FitNesse Test Harness',
        tradeoffs: 'Migrated from synchronous database-level locks to eventual consistency with idempotent event deduplication, eliminating database contention under high peak volume.'
      },
      tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Distributed Systems', 'FitNesse', 'Microservices', 'REST APIs']
    },
    {
      id: 'can-i-trade',
      title: '"Can I Trade" — Low-Latency Pre-Trade Validation Engine',
      org: 'JPMorgan Chase & Co. • 2022 Impact Award',
      category: 'Low-Latency Systems • Trading Automation',
      summary: 'Designed and deployed an automated pre-payment confirmation engine supporting $200M–$2B daily trading volume, slashing trade decision latency by 97% to prevent settlement defaults.',
      metrics: [
        { label: 'Decision Latency', value: '97% Reduction' },
        { label: 'Daily Volume Processed', value: '$200M–$2B' },
        { label: 'Recognition', value: 'JPMC Impact Award' }
      ],
      challenge: 'Pre-trade credit and balance validation required slow, manual queries across multi-region databases, creating execution bottlenecks that exposed trading desks to volatile market slippage.',
      solution: [
        'Architected a low-latency pre-trade validation service exposing high-throughput REST APIs consumed by institutional FX trading applications.',
        'Implemented asynchronous message streaming with Kafka and IBM MQ to decouple validation decisions from downstream ledger settlement.',
        'Conducted rigorous 10x traffic stress tests and evaluated CockroachDB (distributed SQL) in a POC analyzing horizontal elasticity and transactional ACID guarantees.'
      ],
      architectureDeepDive: {
        pattern: 'Low-Latency Cache-Aside & Asynchronous Queue Ingestion',
        coreComponents: 'Java, REST Framework, IBM MQ, Kafka, CockroachDB POC',
        tradeoffs: 'Optimized memory caching and parallel risk checks, shrinking trade validation from several seconds to sub-100ms.'
      },
      tags: ['Java', 'REST APIs', 'Apache Kafka', 'IBM MQ', 'CockroachDB POC', 'Latency Optimization', 'Agile']
    },
    {
      id: 'securesync',
      title: 'SecureSync — AI Infrastructure Supply Chain Risk Engine',
      org: 'Rutgers Business School • MBA Capstone',
      category: 'AI & Operations Research • Supply Chain Strategy',
      summary: 'Developed an end-to-end AI sourcing and supply chain risk optimization platform with delay-impact simulators and predictive logistics disruption telemetry for critical hardware deployments.',
      metrics: [
        { label: 'Optimization Framework', value: 'Cost / Lead Time / Risk' },
        { label: 'Simulation Engine', value: 'Critical Path Delay' },
        { label: 'Disruption Signals', value: 'Port & Geopolitical' }
      ],
      challenge: 'Modern hardware and cloud infrastructure supply chains suffer from severe component lead time volatility, opaque multi-tier supplier dependencies, and unpredictable shipping port disruptions.',
      solution: [
        'Engineered an AI-driven sourcing scoring engine evaluating suppliers across total landed cost, historical lead times, tariff risks, and operational resilience.',
        'Built a delay-impact simulator identifying critical-path bottlenecks and forecasting delivery launch date slippage under weather and port anomalies.',
        'Designed an interactive executive control tower dashboard delivering real-time anomaly alerts and automated contingency sourcing recommendations.'
      ],
      architectureDeepDive: {
        pattern: 'Predictive Risk Analytics Pipeline & Decision Support Dashboard',
        coreComponents: 'Python, SQL, Operations Research Scoring Algorithms, Interactive Dashboards',
        tradeoffs: 'Balanced cost minimization against risk tolerance by applying weighted multi-objective scoring models for sourcing alternatives.'
      },
      tags: ['Python', 'SQL', 'Predictive Modeling', 'Supply Chain Analytics', 'Operations Research', 'Executive Dashboards']
    }
  ];

  return (
    <section id="projects" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Featured Case Studies</span>
          <h2 className="section-title">Selected Platform & Product Initiatives</h2>
          <p className="section-subtitle">
            A deep dive into distributed systems modernization, low-latency trading engines, and supply chain risk platforms.
          </p>
        </div>

        {/* Project Cards List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', maxWidth: '960px' }}>
          {projects.map((proj) => {
            const isExpanded = expandedProject === proj.id;
            return (
              <div 
                key={proj.id}
                className="glass-card"
                style={{
                  textAlign: 'left',
                  padding: '32px',
                  position: 'relative'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <div>
                    <span style={{ 
                      fontFamily: 'var(--font-mono)', 
                      fontSize: '0.78rem', 
                      color: 'var(--primary)', 
                      fontWeight: 600,
                      display: 'block',
                      marginBottom: '6px'
                    }}>
                      {proj.category}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {proj.title}
                    </h3>
                    <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                      {proj.org}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {proj.summary}
                </p>

                {/* Metrics Grid */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '16px',
                    backgroundColor: 'var(--bg-base)',
                    padding: '16px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '24px'
                  }}
                >
                  {proj.metrics.map((m, i) => (
                    <div key={i}>
                      <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key Deliverables Bullet Points */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '12px' }}>
                    Key Engineering & Product Contributions
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {proj.solution.map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle size={16} style={{ color: 'var(--emerald)', marginTop: '3px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable Architecture & Decisions Deep Dive */}
                {isExpanded && (
                  <div 
                    style={{
                      marginTop: '20px',
                      padding: '20px',
                      backgroundColor: 'var(--bg-surface-subtle)',
                      borderRadius: '10px',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '14px',
                      animation: 'fadeInUp 0.25s ease'
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        The Challenge
                      </span>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
                        {proj.challenge}
                      </p>
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Architectural Pattern & Trade-offs
                      </span>
                      <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: '4px', lineHeight: 1.5 }}>
                        <strong>Pattern:</strong> {proj.architectureDeepDive.pattern}<br />
                        <strong>Components:</strong> {proj.architectureDeepDive.coreComponents}<br />
                        <strong>Key Decision:</strong> {proj.architectureDeepDive.tradeoffs}
                      </p>
                    </div>
                  </div>
                )}

                {/* Card Footer: Tags & Toggle */}
                <div 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    flexWrap: 'wrap', 
                    gap: '14px',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {proj.tags.map((tag) => (
                      <span key={tag} className="badge badge-neutral">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => toggleExpand(proj.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary)',
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      padding: '4px 0'
                    }}
                  >
                    <span>{isExpanded ? 'Hide Architecture Notes' : 'View Architecture Notes'}</span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
