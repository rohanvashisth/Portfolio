import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronDown, Award, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedRole, setExpandedRole] = useState(null);

  const roles = [
    {
      id: 'se2',
      title: 'Software Engineer II',
      company: 'JP MORGAN CHASE & CO.',
      location: 'Bengaluru, India',
      period: '2023 - 2024',
      type: 'sde',
      tech: ['Java', 'Spring Boot', 'Kafka', 'Microservices', 'FitNesse', 'Distributed Systems'],
      highlights: [
        'Re-architected a 40-year legacy FX settlement platform into microservices, scaling system capacity to handle $10–$15B daily transactions with improved fault isolation and service modularity.',
        'Designed event-driven workflows using Kafka to decouple services, improving system resilience and enabling real-time processing across legacy and modern platforms.',
        'Optimized FX Options settlement pipeline to achieve 95% STP (Straight-Through Processing), reducing manual intervention and improving end-to-end system throughput.',
        'Improved system reliability by automating regression testing (FitNesse), reducing deployment risk and increasing release confidence.',
        'Enhanced production stability by resolving high-priority incidents and improving monitoring, minimizing downtime in a mission-critical trading system.'
      ]
    },
    {
      id: 'se1',
      title: 'Software Engineer I',
      company: 'JP MORGAN CHASE & CO.',
      location: 'Bengaluru, India',
      period: '2021 - 2023',
      type: 'sde',
      award: 'J.P. Morgan Impact Award (2022) for system modernization and engineering excellence',
      tech: ['Java', 'Kafka', 'MQ', 'REST APIs', 'CockroachDB', 'Distributed SQL', 'API Design'],
      highlights: [
        'Built a low-latency pre-trade validation service ("Can I Trade") processing $200M–$2B daily, reducing decision latency by 97% through efficient service orchestration.',
        'Designed and exposed scalable REST APIs for Corporate FX operations (amend/net/split/cancel), enabling idempotent operations and consistent trade lifecycle management.',
        'Implemented asynchronous messaging patterns (Kafka + MQ), reducing service coupling and improving horizontal scalability under peak loads.',
        'Led integration of Brokerage FX data streams, designing real-time ingestion pipelines for high-volume financial data and improving system observability.',
        'Conducted load and stress testing (10x traffic scenarios), validating system elasticity and identifying bottlenecks in distributed components.',
        'Evaluated distributed SQL database (CockroachDB) via POC, analyzing trade-offs in consistency, scalability, and fault tolerance for financial workloads.'
      ]
    }
  ];

  const handleToggleExpand = (id) => {
    if (expandedRole === id) {
      setExpandedRole(null);
    } else {
      setExpandedRole(id);
    }
  };

  return (
    <section id="experience" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Leading engineering initiatives and building high-throughput services for global financial systems.
        </p>

        {/* Timeline Container */}
        <div 
          className="timeline-container" 
          style={{ 
            position: 'relative', 
            maxWidth: '850px', 
            margin: '0 auto',
            padding: '20px 0' 
          }}
        >
          {/* Vertical line decoration */}
          <div 
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '32px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(to bottom, hsl(var(--primary)) 0%, hsl(var(--secondary)) 100%)',
              opacity: 0.3
            }}
          ></div>

          {roles.map((role) => {
            const isExpanded = expandedRole === role.id;
            return (
              <div 
                key={role.id}
                className="timeline-item"
                style={{
                  position: 'relative',
                  paddingLeft: '80px',
                  marginBottom: '40px',
                  textAlign: 'left'
                }}
              >
                {/* Timeline node icon */}
                <div 
                  className="timeline-node"
                  style={{
                    position: 'absolute',
                    left: '18px',
                    top: '4px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'hsl(var(--bg-base))',
                    border: '3px solid hsl(var(--primary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2,
                    boxShadow: '0 0 10px rgba(59, 130, 246, 0.4)'
                  }}
                >
                  <Briefcase size={12} style={{ color: 'hsl(var(--primary))' }} />
                </div>

                {/* Experience Card */}
                <div 
                  className={`glass-card experience-card ${isExpanded ? 'expanded' : ''}`}
                  style={{
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'var(--transition-normal)'
                  }}
                  id={`experience-card-${role.id}`}
                  onClick={() => handleToggleExpand(role.id)}
                >
                  <div 
                    style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '12px' 
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '4px' }}>
                        {role.title}
                      </h3>
                      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'hsl(var(--text-primary))', fontWeight: 500 }}>
                          {role.company}
                        </span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <MapPin size={14} />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span 
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          gap: '6px', 
                          fontSize: '0.85rem', 
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'hsl(var(--text-primary))'
                        }}
                      >
                        <Calendar size={14} style={{ color: 'hsl(var(--primary))' }} />
                        {role.period}
                      </span>
                      <ChevronDown 
                        size={20} 
                        style={{ 
                          color: 'hsl(var(--text-muted))', 
                          transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'var(--transition-fast)'
                        }} 
                      />
                    </div>
                  </div>

                  {role.award && (
                    <div 
                      style={{ 
                        marginTop: '12px', 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        fontSize: '0.85rem', 
                        color: 'hsl(var(--secondary))',
                        backgroundColor: 'rgba(16, 185, 129, 0.05)',
                        border: '1px solid rgba(16, 185, 129, 0.15)',
                        padding: '6px 12px',
                        borderRadius: '6px'
                      }}
                    >
                      <Award size={14} />
                      <strong>Award:</strong> {role.award}
                    </div>
                  )}

                  {/* Highlights section (Collapsible) */}
                  <div 
                    className="role-highlights-container"
                    style={{
                      maxHeight: isExpanded ? '800px' : '0',
                      opacity: isExpanded ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease, opacity 0.3s ease',
                      marginTop: isExpanded ? '20px' : '0'
                    }}
                  >
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '4px' }}>
                      {role.highlights.map((bullet, idx) => (
                        <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem' }}>
                          <CheckCircle2 size={16} style={{ color: 'hsl(var(--primary))', flexShrink: 0, marginTop: '3px' }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack badge container */}
                    <div 
                      style={{ 
                        display: 'flex', 
                        flexWrap: 'wrap', 
                        gap: '8px', 
                        marginTop: '20px', 
                        borderTop: '1px solid rgba(255, 255, 255, 0.06)', 
                        paddingTop: '16px' 
                      }}
                      onClick={(e) => e.stopPropagation()} // Prevent card collapse on tag click
                    >
                      {role.tech.map((tag) => (
                        <span key={tag} className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {!isExpanded && (
                    <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'hsl(var(--text-muted))', display: 'flex', gap: '8px' }}>
                      {role.tech.slice(0, 4).map((tag) => (
                        <span key={tag}>• {tag}</span>
                      ))}
                      <span>+ {role.tech.length - 4} more</span>
                    </div>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .experience-card:hover {
          background: rgba(15, 19, 34, 0.6) !important;
        }
        .experience-card.expanded {
          border-color: rgba(var(--primary-rgb), 0.3) !important;
          box-shadow: 0 16px 40px 0 rgba(var(--primary-rgb), 0.12) !important;
        }
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-node {
            left: 6px !important;
          }
          .timeline-item {
            padding-left: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
