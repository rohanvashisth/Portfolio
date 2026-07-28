import React, { useState } from 'react';
import { Layers, Activity, GitFork, ArrowUpRight, BarChart3, Database, Truck, AlertTriangle, Globe } from 'lucide-react';

export default function Projects() {
  const [projectViews, setProjectViews] = useState({
    monitoring: 'details', // 'details' or 'architecture'
    messaging: 'details', // 'details' or 'architecture'
    securesync: 'details' // 'details' or 'architecture'
  });

  const toggleProjectView = (projId, view) => {
    setProjectViews(prev => ({ ...prev, [projId]: view }));
  };

  return (
    <section id="projects" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <h2 className="section-title">Technical Projects</h2>
        <p className="section-subtitle">
          Engineered systems focusing on observability, enterprise-scale reliability, and high-performance communication.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '950px', margin: '0 auto' }}>
          
          {/* Project 1: Real-Time Trade Monitoring Platform */}
          <div className="glass-card project-card" style={{ padding: '32px', textAlign: 'left', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-primary">Full Stack</span>
                  <span className="badge badge-accent">Observability</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Real-Time Trade Monitoring Platform</h3>
              </div>

              {/* View Toggle Buttons */}
              <div 
                style={{ 
                  display: 'flex', 
                  backgroundColor: 'rgba(15, 23, 42, 0.04)', 
                  padding: '4px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(15, 23, 42, 0.08)' 
                }}
              >
                <button
                  id="btn-proj-monitoring-details"
                  onClick={() => toggleProjectView('monitoring', 'details')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.monitoring === 'details' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.monitoring === 'details' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Overview
                </button>
                <button
                  id="btn-proj-monitoring-arch"
                  onClick={() => toggleProjectView('monitoring', 'architecture')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.monitoring === 'architecture' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.monitoring === 'architecture' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Live Architecture
                </button>
              </div>
            </div>

            <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
              {/* Left Column: Conditional Content */}
              <div>
                {projectViews.monitoring === 'details' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))' }}>
                      Designed and built a distributed monitoring framework to monitor services in real-time. This system provides critical production tracking across microservice endpoints, capturing latency trends, heap usage, and database connection pools.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>✓</span>
                        <span>Tracked real-time service health logs across 20+ active financial microservices.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>✓</span>
                        <span>Reduced end-to-end incident resolution time by ~40% through log streaming.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--primary))', fontWeight: 'bold' }}>✓</span>
                        <span>Created unified UI dashboards with React and metrics ingestors with Spring Boot.</span>
                      </li>
                    </ul>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {['React', 'Spring Boot', 'WebSockets', 'ChartJS', 'Prometheus', 'Java'].map(t => (
                        <span key={t} className="badge badge-secondary" style={{ textTransform: 'none', fontSize: '0.75rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Live Architecture Simulation (interactive graphic mockup)
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', background: 'rgba(15, 23, 42, 0.03)', borderRadius: '12px', border: '1px solid rgba(15, 23, 42, 0.06)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--primary))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Activity size={14} className="pulse-icon" />
                      SYSTEM OBSERVABILITY TOPOLOGY
                    </div>
                    
                    {/* SVG Diagram showing Microservices flowing into React UI */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '12px 0', padding: '0 8px' }}>
                      {/* Microservices Nodes */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div className="sim-node active">FX-Svc 1 <span className="ping-dot green"></span></div>
                        <div className="sim-node active">FX-Svc 2 <span className="ping-dot green"></span></div>
                        <div className="sim-node active">Val-Svc 3 <span className="ping-dot green"></span></div>
                      </div>

                      {/* Messaging Arrow */}
                      <div style={{ flexGrow: 1, height: '2px', position: 'relative', margin: '0 16px', borderBottom: '2px dashed rgba(59, 130, 246, 0.4)' }}>
                        <span className="sim-data-packet"></span>
                      </div>

                      {/* Metrics Ingestor (Spring Boot) */}
                      <div className="sim-central-node">
                        <Database size={14} />
                        Spring Boot
                      </div>

                      {/* UI Display */}
                      <div style={{ flexGrow: 1, height: '2px', position: 'relative', margin: '0 16px', borderBottom: '2px dashed rgba(16, 185, 129, 0.4)' }}>
                        <span className="sim-data-packet secondary"></span>
                      </div>

                      {/* React UI Node */}
                      <div className="sim-node react-node">
                        React UI Dashboard
                      </div>
                    </div>

                    <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', textAlign: 'center' }}>
                      WebSockets stream real-time JSON metrics directly to React dashboard.
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key Metrics Panel */}
              <div 
                style={{ 
                  background: 'rgba(59, 130, 246, 0.03)', 
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <BarChart3 size={24} style={{ color: 'hsl(var(--primary))' }} />
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>40% Faster</div>
                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Incident resolution (MTTR reduction)</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>20+ Microservices</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Aggregated health & log telemetry</div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>&lt; 50ms</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Ingestion to dashboard latency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Messaging & Integration Framework */}
          <div className="glass-card project-card" style={{ padding: '32px', textAlign: 'left', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-secondary">Systems</span>
                  <span className="badge badge-primary">Infrastructure</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Messaging & Integration Framework</h3>
              </div>

              {/* View Toggle Buttons */}
              <div 
                style={{ 
                  display: 'flex', 
                  backgroundColor: 'rgba(15, 23, 42, 0.04)', 
                  padding: '4px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(15, 23, 42, 0.08)' 
                }}
              >
                <button
                  id="btn-proj-messaging-details"
                  onClick={() => toggleProjectView('messaging', 'details')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.messaging === 'details' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.messaging === 'details' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Overview
                </button>
                <button
                  id="btn-proj-messaging-arch"
                  onClick={() => toggleProjectView('messaging', 'architecture')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.messaging === 'architecture' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.messaging === 'architecture' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Live Queue
                </button>
              </div>
            </div>

            <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
              {/* Left Column: Content */}
              <div>
                {projectViews.messaging === 'details' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))' }}>
                      Engineered generic integration libraries for enterprise-grade message queuing (Kafka, IBM MQ). Standardized serialization, automatic tracing, error-handling retry blocks, and dead-letter queue (DLQ) behaviors across distributed ledger systems.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>✓</span>
                        <span>Reduced developer debugging loops by 4-5 hours per MQ incident.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>✓</span>
                        <span>Guaranteed at-least-once message processing using idempotent acknowledgments.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--secondary))', fontWeight: 'bold' }}>✓</span>
                        <span>Integrated automated retries with backoff schemas to resolve transient lockouts.</span>
                      </li>
                    </ul>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {['Apache Kafka', 'IBM MQ', 'Java', 'JSON Schema', 'Spring Kafka', 'Distributed Systems'].map(t => (
                        <span key={t} className="badge badge-primary" style={{ textTransform: 'none', fontSize: '0.75rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Live Queue Simulation
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', background: 'rgba(15, 23, 42, 0.03)', borderRadius: '12px', border: '1px solid rgba(15, 23, 42, 0.06)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--secondary))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <GitFork size={14} />
                      GUARANTEED AT-LEAST-ONCE PROCESSING PIPELINE
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {/* Step 1: Ingestion */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                        <span>1. Message Ingested</span>
                        <span style={{ color: 'hsl(var(--secondary))', fontWeight: 600 }}>Active</span>
                      </div>
                      
                      {/* Visual Kafka Broker with slide packets */}
                      <div 
                        style={{ 
                          height: '34px', 
                          background: 'rgba(15, 23, 42, 0.03)', 
                          border: '1px solid rgba(15, 23, 42, 0.08)', 
                          borderRadius: '6px', 
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'center',
                          padding: '0 12px',
                          overflow: 'hidden'
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'hsl(var(--text-muted))' }}>KAFKA BROKER</div>
                        <div className="sim-queue-msg msg-1">Payload 1</div>
                        <div className="sim-queue-msg msg-2">Payload 2</div>
                        <div className="sim-queue-msg msg-3">Payload 3</div>
                      </div>

                      {/* Step 2: Processing & Retry */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem' }}>
                        <span>2. Failure Detection & Retry</span>
                        <span style={{ color: '#fb7185', fontWeight: 600 }}>Auto-Triggered</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'hsl(var(--text-muted))', borderLeft: '2px solid #fb7185', paddingLeft: '8px' }}>
                        Transient error &rarr; Triggers backoff interval &rarr; Re-processes automatically without duplicate writes.
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key Metrics Panel */}
              <div 
                style={{ 
                  background: 'rgba(16, 185, 129, 0.03)', 
                  border: '1px solid rgba(16, 185, 129, 0.1)',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Layers size={24} style={{ color: 'hsl(var(--secondary))' }} />
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>4-5 Hours</div>
                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Saved per debugging incident</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>100% Guaranteed</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>At-least-once transactional delivery</div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>Reusable Library</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Deployed across 5 core teams</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3: SecureSync AI Supply Chain Platform */}
          <div className="glass-card project-card" style={{ padding: '32px', textAlign: 'left', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="badge badge-accent">AI & Analytics</span>
                  <span className="badge badge-secondary">Supply Chain</span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800 }}>SecureSync: AI Supply Chain Platform</h3>
              </div>

              {/* View Toggle Buttons */}
              <div 
                style={{ 
                  display: 'flex', 
                  backgroundColor: 'rgba(15, 23, 42, 0.04)', 
                  padding: '4px', 
                  borderRadius: '8px', 
                  border: '1px solid rgba(15, 23, 42, 0.08)' 
                }}
              >
                <button
                  id="btn-proj-securesync-details"
                  onClick={() => toggleProjectView('securesync', 'details')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.securesync === 'details' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.securesync === 'details' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Overview
                </button>
                <button
                  id="btn-proj-securesync-arch"
                  onClick={() => toggleProjectView('securesync', 'architecture')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    border: 'none',
                    backgroundColor: projectViews.securesync === 'architecture' ? 'hsl(var(--primary))' : 'transparent',
                    color: projectViews.securesync === 'architecture' ? '#fff' : 'hsl(var(--text-secondary))',
                    transition: 'var(--transition-fast)'
                  }}
                >
                  Control Tower
                </button>
              </div>
            </div>

            <div className="grid-2" style={{ gap: '32px', alignItems: 'center' }}>
              {/* Left Column: Content */}
              <div>
                {projectViews.securesync === 'details' ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <p style={{ fontSize: '1rem', color: 'hsl(var(--text-secondary))' }}>
                      Engineered an enterprise-grade AI-driven sourcing and supply chain risk optimization platform. The system simulates global logistics disruptions, aggregates geopolitical & weather factors, and recommends contingency options.
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--accent))', fontWeight: 'bold' }}>✓</span>
                        <span>Built delay-impact simulators forecasting bottleneck slippages in critical paths.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--accent))', fontWeight: 'bold' }}>✓</span>
                        <span>Optimized supplier selection using multi-criteria cost, lead time, and tariff scoring.</span>
                      </li>
                      <li style={{ display: 'flex', gap: '8px', fontSize: '0.95rem' }}>
                        <span style={{ color: 'hsl(var(--accent))', fontWeight: 'bold' }}>✓</span>
                        <span>Designed an interactive shipment tracking control tower for real-time risk mitigation.</span>
                      </li>
                    </ul>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                      {['Python', 'SQL', 'Risk Modeling', 'Interactive Dashboards', 'Operations Research', 'Data Pipelines'].map(t => (
                        <span key={t} className="badge badge-accent" style={{ textTransform: 'none', fontSize: '0.75rem' }}>{t}</span>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Live Control Tower Simulation
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', background: 'rgba(15, 23, 42, 0.03)', borderRadius: '12px', border: '1px solid rgba(15, 23, 42, 0.06)' }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'hsl(var(--accent))', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Globe size={14} className="pulse-icon" />
                      ACTIVE CONTROL TOWER SHIPMENT MONITORING
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {/* Nodes flow */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 8px' }}>
                        <div className="sim-node active" style={{ borderColor: 'rgba(var(--secondary-rgb), 0.3)' }}>
                          Sourcing
                          <span className="ping-dot green"></span>
                        </div>
                        
                        <div style={{ flexGrow: 1, height: '2px', position: 'relative', margin: '0 8px', borderBottom: '2px dashed rgba(15, 23, 42, 0.15)' }}>
                          <Truck size={12} className="sim-truck-icon" style={{ position: 'absolute', top: '-6px', color: 'hsl(var(--primary))' }} />
                        </div>
                        
                        <div className="sim-node active" style={{ borderColor: '#fb7185' }}>
                          Port Transit
                          <span className="ping-dot red-pulse"></span>
                        </div>

                        <div style={{ flexGrow: 1, height: '2px', position: 'relative', margin: '0 8px', borderBottom: '2px dashed rgba(15, 23, 42, 0.15)' }}>
                          <span className="sim-data-packet secondary"></span>
                        </div>

                        <div className="sim-node react-node">
                          Fulfillment
                        </div>
                      </div>

                      {/* Alert Message */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#fb7185', backgroundColor: 'rgba(251, 113, 133, 0.05)', border: '1px solid rgba(251, 113, 133, 0.15)', padding: '8px', borderRadius: '6px' }}>
                        <AlertTriangle size={14} style={{ flexShrink: 0 }} />
                        <span><strong>Delay Risk (High):</strong> Port congestion detected. delay-impact simulator suggests 4.5 day delay. Recommending contingency supplier.</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Key Metrics Panel */}
              <div 
                style={{ 
                  background: 'rgba(168, 85, 247, 0.03)', 
                  border: '1px solid rgba(168, 85, 247, 0.1)',
                  borderRadius: '12px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  justifyContent: 'center',
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Layers size={24} style={{ color: 'hsl(var(--accent))' }} />
                  <div>
                    <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'hsl(var(--text-primary))' }}>Cost & Risk</div>
                    <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Optimized supplier scoring model</div>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>Delay Simulation</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Bottleneck forecasting for launches</div>
                </div>
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'hsl(var(--text-primary))' }}>Interactive Control Tower</div>
                  <div style={{ fontSize: '0.85rem', color: 'hsl(var(--text-secondary))' }}>Real-time shipment anomaly alerts</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Simulator Styles */}
      <style>{`
        .pulse-icon {
          animation: pulse-op 1.5s ease-in-out infinite;
        }
        @keyframes pulse-op {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .sim-node {
          padding: 6px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: hsl(var(--text-primary));
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .ping-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }
        .ping-dot.green {
          background-color: hsl(var(--secondary));
          box-shadow: 0 0 8px hsl(var(--secondary));
          animation: pulse-op 1s ease-in-out infinite;
        }
        .sim-central-node {
          padding: 8px 12px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 8px;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          color: hsl(var(--primary));
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .sim-node.react-node {
          border-color: rgba(16, 185, 129, 0.3);
          color: hsl(var(--secondary));
          background: rgba(16, 185, 129, 0.05);
        }
        .sim-data-packet {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: hsl(var(--primary));
          top: -3px;
          left: 0;
          animation: move-packet 2s linear infinite;
        }
        .sim-data-packet.secondary {
          background-color: hsl(var(--secondary));
          animation: move-packet 2.5s linear infinite;
        }
        @keyframes move-packet {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        .sim-queue-msg {
          position: absolute;
          padding: 3px 6px;
          background-color: rgba(16, 185, 129, 0.15);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: 4px;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: hsl(var(--secondary));
          top: 6px;
          animation: move-queue 6s linear infinite;
        }
        .sim-queue-msg.msg-1 { animation-delay: 0s; }
        .sim-queue-msg.msg-2 { animation-delay: 2s; }
        .sim-queue-msg.msg-3 { animation-delay: 4s; }
        
        @keyframes move-queue {
          0% { left: 100%; opacity: 0; }
          10% { left: 85%; opacity: 1; }
          80% { left: 15%; opacity: 1; }
          90% { left: 0%; opacity: 0; }
          100% { left: 0%; opacity: 0; }
        }
        @keyframes move-truck {
          0% { left: 0%; transform: scaleX(1); }
          50% { left: 80%; transform: scaleX(1); }
          51% { transform: scaleX(-1); }
          99% { left: 0%; transform: scaleX(-1); }
          100% { left: 0%; transform: scaleX(1); }
        }
        .sim-truck-icon {
          animation: move-truck 7s ease-in-out infinite;
        }
        .ping-dot.red-pulse {
          background-color: #fb7185;
          box-shadow: 0 0 8px #fb7185;
          animation: pulse-op 0.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
