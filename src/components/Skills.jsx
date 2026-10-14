import React, { useState } from 'react';
import { Briefcase, Code2, LineChart, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('product');

  const categories = [
    {
      id: 'product',
      title: 'Product Strategy & Execution',
      icon: <Briefcase size={18} />,
      description: 'Bridging strategic customer and operational requirements with disciplined agile execution.',
      groups: [
        {
          category: 'Product Lifecycle',
          items: ['PRD & Technical Specifications', 'Roadmap & Release Planning', 'RICE / MoSCoW Prioritization', 'Feature Scoping & MVP Definition']
        },
        {
          category: 'Leadership & Methodology',
          items: ['Cross-Functional Team Alignment', 'Agile / Scrum Sprint Leadership', 'Executive & Trading Desk Stakeholders', 'Backlog Grooming (Jira / Confluence)']
        },
        {
          category: 'Product Quality & Delivery',
          items: ['Release Governance', 'User Acceptance Testing (UAT)', 'A/B Testing & Insights', 'Production Readiness Auditing']
        }
      ]
    },
    {
      id: 'platform',
      title: 'Platform & Distributed Systems',
      icon: <Code2 size={18} />,
      description: 'Deep technical foundation in high-concurrency architecture, messaging, and API design.',
      groups: [
        {
          category: 'Distributed Architecture',
          items: ['Event-Driven Systems (Apache Kafka)', 'Microservices Decomposition', 'Asynchronous Message Queues (IBM MQ)', 'Idempotent REST API Design']
        },
        {
          category: 'Backend & Data Layers',
          items: ['Java & Spring Boot Framework', 'Distributed SQL (CockroachDB POC)', 'Relational Database Schema Tuning', 'Service Orchestration']
        },
        {
          category: 'Reliability & Observability',
          items: ['Telemetry & Log Streaming', 'Regression Automation (FitNesse)', 'Incident Post-Mortems & SLAs', 'High-Volume Fault Isolation']
        }
      ]
    },
    {
      id: 'analytics',
      title: 'Data Analytics & Business Strategy',
      icon: <LineChart size={18} />,
      description: 'Quantitative analytical rigor derived from engineering foundations and MBA training.',
      groups: [
        {
          category: 'Data & Telemetry',
          items: ['Advanced SQL Querying', 'Python Data Processing & Automation', 'Operational Health KPI Dashboards', 'Telemetry Log Parsing']
        },
        {
          category: 'Business & Finance',
          items: ['Corporate Financial Valuation', 'Capital Budgeting & Forecasting', 'Operations Scheduling & Modeling', 'Power BI & Advanced Excel']
        },
        {
          category: 'Supply Chain Operations',
          items: ['Multi-Criteria Sourcing Scoring', 'Critical-Path Delay Simulations', 'Logistics Bottleneck Modeling', 'Contingency Sourcing Strategy']
        }
      ]
    }
  ];

  const currentCategory = categories.find(c => c.id === activeTab);

  return (
    <section id="skills" className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-header" style={{ textAlign: 'left' }}>
          <span className="section-label">Core Capabilities</span>
          <h2 className="section-title">Domain Expertise & Skills</h2>
          <p className="section-subtitle">
            An intersection of distributed platform engineering, product management disciplines, and quantitative business strategy.
          </p>
        </div>

        {/* Tab Pills */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '8px',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  border: isActive ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
                  backgroundColor: isActive ? 'var(--primary)' : 'var(--bg-surface)',
                  color: isActive ? '#ffffff' : 'var(--text-secondary)',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat.icon}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <div 
          className="glass-card"
          style={{
            textAlign: 'left',
            padding: '36px'
          }}
        >
          <div style={{ marginBottom: '28px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 750, color: 'var(--text-primary)', marginBottom: '6px' }}>
              {currentCategory.title}
            </h3>
            <p style={{ fontSize: '0.96rem', color: 'var(--text-muted)' }}>
              {currentCategory.description}
            </p>
          </div>

          <div className="grid-3" style={{ gap: '28px' }}>
            {currentCategory.groups.map((group, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--bg-base)',
                  padding: '20px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '14px' }}>
                  {group.category}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CheckCircle2 size={15} style={{ color: 'var(--primary)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
