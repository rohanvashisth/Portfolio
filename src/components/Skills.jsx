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
    <section id="skills" className="section section-pastel-green">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <div className="section-tag section-tag-green">
            <span className="section-tag-num section-tag-num-green">03</span>
            <span>Core Capabilities</span>
          </div>
          <h2 className="section-title">Domain Expertise & Technical Depth</h2>
          <p className="section-subtitle">
            An intersection of distributed platform engineering, product management disciplines, and quantitative business strategy.
          </p>
        </div>

        {/* Integrated 3-Column Domain Matrix with Pastel Themes */}
        <div 
          className="skills-matrix"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }}
        >
          {pillars.map((pillar, colIdx) => {
            const themes = [
              {
                bg: 'var(--pastel-blue-surface)',
                border: 'var(--pastel-blue-border)',
                titleColor: 'var(--pastel-blue-text)',
                checkColor: 'var(--primary)'
              },
              {
                bg: 'var(--pastel-teal-bg)',
                border: 'var(--pastel-teal-border)',
                titleColor: 'var(--pastel-teal-text)',
                checkColor: 'var(--pastel-teal-text)'
              },
              {
                bg: 'var(--pastel-green-surface)',
                border: 'var(--pastel-green-border)',
                titleColor: 'var(--pastel-green-text)',
                checkColor: 'var(--emerald)'
              }
            ];
            const currentTheme = themes[colIdx % 3];

            return (
              <div 
                key={pillar.id}
                className="skills-pillar-col"
                style={{
                  backgroundColor: currentTheme.bg,
                  border: `1px solid ${currentTheme.border}`,
                  borderRadius: '12px',
                  padding: '36px 28px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                {/* Pillar Header */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ 
                      width: '40px', 
                      height: '40px', 
                      borderRadius: '10px', 
                      backgroundColor: '#ffffff', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      border: `1px solid ${currentTheme.border}`,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.03)'
                    }}>
                      {pillar.icon}
                    </div>
                    <h3 style={{ fontSize: '1.18rem', fontWeight: 800, color: currentTheme.titleColor, lineHeight: 1.25 }}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                    {pillar.tagline}
                  </p>
                </div>

                {/* Sub-groups */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  {pillar.groups.map((group, gIdx) => (
                    <div key={gIdx} style={{ textAlign: 'left', backgroundColor: '#ffffff', padding: '16px 18px', borderRadius: '8px', border: `1px solid ${currentTheme.border}` }}>
                      <div style={{ 
                        fontSize: '0.74rem', 
                        fontFamily: 'var(--font-mono)', 
                        fontWeight: 750, 
                        color: currentTheme.titleColor, 
                        textTransform: 'uppercase', 
                        letterSpacing: '0.08em',
                        marginBottom: '10px',
                        paddingBottom: '4px',
                        borderBottom: '1px solid var(--border-hairline)'
                      }}>
                        {group.category}
                      </div>

                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {group.items.map((item, iIdx) => (
                          <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <CheckCircle2 
                              size={14} 
                              style={{ 
                                color: currentTheme.checkColor, 
                                marginTop: '4px', 
                                flexShrink: 0 
                              }} 
                            />
                            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45, fontWeight: 500 }}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .skills-matrix {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
