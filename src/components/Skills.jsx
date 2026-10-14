import React from 'react';
import { Briefcase, Code2, LineChart, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const pillars = [
    {
      id: 'product',
      title: 'Product Strategy & Execution',
      icon: <Briefcase size={20} style={{ color: 'var(--primary)' }} />,
      tagline: 'Bridging strategic customer & operational requirements with disciplined agile execution.',
      groups: [
        {
          category: 'Product Lifecycle',
          items: [
            'PRD & Technical Specifications',
            'Roadmap & Release Planning',
            'RICE / MoSCoW Prioritization',
            'Feature Scoping & MVP Definition'
          ]
        },
        {
          category: 'Cross-Functional Leadership',
          items: [
            'Agile / Scrum Sprint Leadership',
            'Engineering & Trading Desk Stakeholders',
            'Backlog Grooming & Decomposition',
            'Jira / Confluence Workflows'
          ]
        },
        {
          category: 'Governance & Quality',
          items: [
            'User Acceptance Testing (UAT)',
            'Production Release Auditing',
            'A/B Experimentation & Insights',
            'Post-Launch Telemetry & SLOs'
          ]
        }
      ]
    },
    {
      id: 'platform',
      title: 'Platform & Distributed Systems',
      icon: <Code2 size={20} style={{ color: 'var(--primary)' }} />,
      tagline: 'Deep technical foundation in high-concurrency architecture, messaging, and API design.',
      groups: [
        {
          category: 'Distributed Architecture',
          items: [
            'Event-Driven Systems (Apache Kafka)',
            'Microservices Decomposition',
            'IBM MQ Asynchronous Queuing',
            'Idempotent REST API Design'
          ]
        },
        {
          category: 'Backend & Data Scale',
          items: [
            'Java & Spring Boot Framework',
            'Distributed SQL (CockroachDB POC)',
            'Relational Schema Tuning & Indexing',
            'Service Orchestration & Transactions'
          ]
        },
        {
          category: 'Reliability & Observability',
          items: [
            'FitNesse Automated Regression Suites',
            'Incident Post-Mortems & SLAs',
            'High-Volume Fault Isolation',
            'Telemetry Log Parsing & Alerts'
          ]
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Data Analytics & Business Strategy',
      icon: <LineChart size={20} style={{ color: 'var(--emerald)' }} />,
      tagline: 'Quantitative analytical rigor derived from engineering foundations and MBA training.',
      groups: [
        {
          category: 'Data & Telemetry',
          items: [
            'Advanced SQL (Aggregations, Windows)',
            'Python Data Processing & Automation',
            'Operational Health KPI Dashboards',
            'Root-Cause Telemetry Analytics'
          ]
        },
        {
          category: 'Finance & Strategy',
          items: [
            'Corporate Financial Valuation (DCF)',
            'Capital Budgeting & ROI Modeling',
            'Cost-Benefit Tradeoff Analysis',
            'Operations Scheduling & Modeling'
          ]
        },
        {
          category: 'Supply Chain Operations',
          items: [
            'Multi-Criteria Sourcing Scoring',
            'Critical-Path Delay Simulations',
            'Logistics Bottleneck Modeling',
            'Power BI & Advanced Excel'
          ]
        }
      ]
    }
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <div className="section-tag">
            <span className="section-tag-num">03</span>
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Domain Expertise & Technical Depth</h2>
          <p className="section-subtitle">
            An intersection of distributed platform engineering, product management disciplines, and quantitative business strategy.
          </p>
        </div>

        {/* Integrated 3-Column Domain Matrix */}
        <div 
          className="skills-matrix"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid var(--border-hairline)',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
          }}
        >
          {pillars.map((pillar, colIdx) => (
            <div 
              key={pillar.id}
              className="skills-pillar-col"
              style={{
                padding: '40px 32px',
                borderRight: colIdx < 2 ? '1px solid var(--border-hairline)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '28px'
              }}
            >
              {/* Pillar Header */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '8px', 
                    backgroundColor: 'var(--bg-subtle)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    border: '1px solid var(--border-hairline)'
                  }}>
                    {pillar.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {pillar.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                  {pillar.tagline}
                </p>
              </div>

              {/* Sub-groups */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {pillar.groups.map((group, gIdx) => (
                  <div key={gIdx} style={{ textAlign: 'left' }}>
                    <div style={{ 
                      fontSize: '0.74rem', 
                      fontFamily: 'var(--font-mono)', 
                      fontWeight: 650, 
                      color: 'var(--text-primary)', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                      paddingBottom: '4px',
                      borderBottom: '1px solid var(--bg-subtle)'
                    }}>
                      {group.category}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {group.items.map((item, iIdx) => (
                        <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                          <CheckCircle2 
                            size={14} 
                            style={{ 
                              color: pillar.id === 'analytics' ? 'var(--emerald)' : 'var(--primary)', 
                              marginTop: '4px', 
                              flexShrink: 0 
                            }} 
                          />
                          <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-matrix {
            grid-template-columns: 1fr !important;
          }
          .skills-pillar-col {
            border-right: none !important;
            border-bottom: 1px solid var(--border-hairline) !important;
            padding: 32px 16px !important;
          }
          .skills-pillar-col:last-child {
            border-bottom: none !important;
          }
        }
      `}</style>
    </section>
  );
}
