import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle, Sparkles } from 'lucide-react';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState('gpay-upi');
  const [filter, setFilter] = useState('all');

  const toggleExpand = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  const caseStudies = [
    {
      id: 'gpay-upi',
      type: 'product',
      featured: true,
      title: 'Google Pay: Transforming Failed & Pending UPI Payment Recovery',
      hmwPrompt: 'How might we improve user confidence, eliminate point-of-sale anxiety, and prevent double-debits when a UPI payment doesn’t complete successfully?',
      org: 'Product Strategy & Teardown Case Study',
      category: 'Consumer FinTech • Product Teardown • UPI Payments',
      summary: 'A comprehensive product teardown addressing the #1 customer pain point in digital payments: transactions where money is debited but the payment is left in an ambiguous "Pending" or "Failed" state at checkout counters.',
      metrics: [
        { label: 'Primary Target', value: '-35% Support Escalations' },
        { label: 'Trust Metric', value: '+20% Post-Failure Retention' },
        { label: 'Resolution Speed', value: '<3s Instant Reassurance' }
      ],
      theIssue: 'In India’s 14B+ monthly UPI ecosystem, bank Core Banking System (CBS) timeouts and network drops leave payments in a "Pending" limbo. The sender’s bank debits the funds, but the merchant never receives them. Users panic: "Did the money go through? Should I pay again? Will I be double-charged?" This causes retail checkout friction, cashier arguments, duplicate payments, and accounts for over 60% of all payment support grievances.',
      whySolve: 'UPI payment failure damages consumer trust at the most vulnerable point of interaction (physical retail checkout). Stalled queues force frustrated users to switch to rival payment apps (PhonePe, Paytm) or cash. Eliminating payment anxiety drives brand loyalty, reduces high customer support servicing costs, and increases offline merchant stickiness.',
      howWeSolve: [
        {
          name: '1. Predictive Pre-Transaction Bank Health Radar',
          desc: 'Leverages real-time network latency telemetry across PSP banks. If the user’s selected bank server is experiencing CBS delays (>15% failure rate), Google Pay proactively warns the user *before* they enter their UPI PIN: "HDFC Bank servers experiencing delays. Switch to ICICI for 1-tap checkout."'
        },
        {
          name: '2. 4-Stage Transparent Payment Journey Tracker (Replacing Cryptic Codes)',
          desc: 'Replaces ambiguous error messages (e.g. "U16", "Bank Server Busy") with a clear live progress stepper: [Sender Bank (Debited)] ➔ [NPCI Gateway (Cleared)] ➔ [Merchant Bank (Syncing)] ➔ [Settlement]. Displays an explicit auto-refund guarantee countdown timer: "Your money is safe. If merchant bank does not acknowledge in 8 mins, funds automatically reverse by 6:15 PM."'
        },
        {
          name: '3. Instant Merchant Escrow Hold (Offline POS Resolution)',
          desc: 'At physical QR checkouts, Google Pay issues an instant, cryptographically backed digital promissory escrow token to the merchant Soundbox / POS terminal, guaranteeing payment settlement so the merchant releases the goods without forcing the customer to make a duplicate cash or UPI payment.'
        },
        {
          name: '4. Proactive Reversal Webhook Notifications',
          desc: 'Background polling and automated bank webhook listeners notify the user the exact second their funds are credited back, removing the need for anxious repeated bank balance queries.'
        }
      ],
      deepDive: {
        targetPersonas: [
          'The Hurried Retail Shopper: Paying at a crowded grocery store or taxi; faces high social embarrassment and urgency if payment stalls.',
          'The Offline Merchant: Dependent on instant audio confirmation; refuses to let customer leave without visual or audible proof of funds.',
          'The Bill / EMI Payer: High anxiety over penalties if payment deadline passes during pending status.'
        ],
        successMetrics: {
          northStar: '% of failed / pending payment occurrences resolved without user initiating a customer support ticket.',
          guardrailMetric: 'False-positive merchant escrow guarantee loss rate maintained below 0.005%.',
          secondaryMetrics: 'Repeat transaction rate within 7 days of failure (+18%), double-debit dispute frequency (-45%).'
        },
        rolloutStrategy: 'Phase 1: Pre-transaction bank health radar + 4-stage transparent journey tracker. Phase 2: Pilot merchant escrow guarantee with verified high-volume retail merchants.'
      },
      tags: ['Product Strategy', 'Consumer FinTech', 'UPI 2.0 Architecture', 'User Journey Mapping', 'Product Teardown', 'Metrics & OKRs']
    },
    {
      id: 'fx-settlement',
      type: 'platform',
      featured: false,
      title: 'Global FX Settlement Platform Modernization',
      hmwPrompt: 'How might we scale a 40-year legacy settlement engine to support $10B–$15B in daily transactions while cutting manual exceptions?',
      org: 'JPMorgan Chase & Co.',
      category: 'Enterprise FinTech • Platform Architecture & Delivery',
      summary: 'Re-architected a legacy monolithic FX settlement engine into resilient, event-driven microservices processing $10B–$15B in daily transactional value with 95% Straight-Through Processing.',
      metrics: [
        { label: 'Daily Settlement Value', value: '$10B–$15B' },
        { label: 'Straight-Through Processing', value: '95% STP' },
        { label: 'Daily Transactions', value: '250K–300K' }
      ],
      theIssue: 'The legacy settlement platform operated as a decades-old monolith with tightly coupled batch jobs, frequent manual trade reconciliation, and high operational risk during market volatility peaks.',
      whySolve: 'Essential to protect JPMC’s market share in institutional FX trading, ensure regulatory compliance, and eliminate millions in operational risk from manual trade settlement exceptions.',
      howWeSolve: [
        {
          name: 'Decoupled Event-Driven Microservices',
          desc: 'Decomposed monolithic workflows into independent, domain-bounded microservices orchestrated through Apache Kafka event streaming.'
        },
        {
          name: 'Idempotent Trade Lifecycle APIs',
          desc: 'Engineered idempotent REST APIs for Corporate FX trade operations (amend, net, split, cancel) ensuring consistent trade state across distributed ledgers.'
        },
        {
          name: 'Continuous Verification & Test Automation',
          desc: 'Automated regression verification suites using FitNesse, establishing continuous verification pipelines and lowering production deployment risks.'
        }
      ],
      deepDive: {
        pattern: 'Event-Driven Microservices with Distributed Asynchronous Messaging',
        coreComponents: 'Spring Boot Services, Apache Kafka Clusters, IBM MQ Bridges, FitNesse Test Harness',
        tradeoffs: 'Migrated from synchronous database-level locks to eventual consistency with idempotent event deduplication, eliminating database contention under high peak volume.'
      },
      tags: ['Java', 'Spring Boot', 'Apache Kafka', 'Distributed Systems', 'FitNesse', 'Microservices', 'REST APIs']
    },
    {
      id: 'can-i-trade',
      type: 'platform',
      featured: false,
      title: '"Can I Trade" — Low-Latency Pre-Trade Validation Engine',
      hmwPrompt: 'How might we eliminate trade validation bottlenecks to enable high-frequency trading while preventing settlement default risk?',
      org: 'JPMorgan Chase & Co. • 2022 Impact Award',
      category: 'Low-Latency Systems • Trading Automation',
      summary: 'Designed and deployed an automated pre-payment confirmation engine supporting $200M–$2B daily trading volume, slashing trade decision latency by 97% to prevent settlement defaults.',
      metrics: [
        { label: 'Decision Latency', value: '97% Reduction' },
        { label: 'Daily Volume Processed', value: '$200M–$2B' },
        { label: 'Recognition', value: 'JPMC Impact Award' }
      ],
      theIssue: 'Pre-trade credit and balance validation required slow, manual queries across multi-region databases, creating execution bottlenecks that exposed trading desks to volatile market slippage.',
      whySolve: 'Institutional trading desks required sub-second validation to execute high-frequency corporate FX orders safely at enterprise scale.',
      howWeSolve: [
        {
          name: 'High-Throughput Validation Microservice',
          desc: 'Architected a low-latency pre-trade validation service exposing high-throughput REST APIs consumed by institutional FX trading applications.'
        },
        {
          name: 'Asynchronous Risk Decoupling',
          desc: 'Implemented asynchronous message streaming with Kafka and IBM MQ to decouple validation decisions from downstream ledger settlement.'
        },
        {
          name: '10x Stress Testing & Distributed SQL POC',
          desc: 'Conducted rigorous 10x traffic stress tests and evaluated CockroachDB (distributed SQL) in a POC analyzing horizontal elasticity and transactional ACID guarantees.'
        }
      ],
      deepDive: {
        pattern: 'Low-Latency Cache-Aside & Asynchronous Queue Ingestion',
        coreComponents: 'Java, REST Framework, IBM MQ, Kafka, CockroachDB POC',
        tradeoffs: 'Optimized memory caching and parallel risk checks, shrinking trade validation from several seconds to sub-100ms.'
      },
      tags: ['Java', 'REST APIs', 'Apache Kafka', 'IBM MQ', 'CockroachDB POC', 'Latency Optimization', 'Agile']
    },
    {
      id: 'securesync',
      type: 'product',
      featured: false,
      title: 'SecureSync — AI Infrastructure Supply Chain Risk Engine',
      hmwPrompt: 'How might we proactively forecast hardware supply chain bottlenecks to prevent multimillion-dollar cloud infrastructure launch slippages?',
      org: 'Rutgers Business School • MBA Capstone',
      category: 'AI & Operations Research • Supply Chain Strategy',
      summary: 'Developed an end-to-end AI sourcing and supply chain risk optimization platform with delay-impact simulators and predictive logistics disruption telemetry for critical hardware deployments.',
      metrics: [
        { label: 'Optimization Framework', value: 'Cost / Lead Time / Risk' },
        { label: 'Simulation Engine', value: 'Critical Path Delay' },
        { label: 'Disruption Signals', value: 'Port & Geopolitical' }
      ],
      theIssue: 'Modern hardware and cloud infrastructure supply chains suffer from severe component lead time volatility, opaque multi-tier supplier dependencies, and unpredictable shipping port disruptions.',
      whySolve: 'Component delays cause launch slippages for multi-million-dollar AI infrastructure buildouts, incurring high inventory carrying costs and lost compute revenue.',
      howWeSolve: [
        {
          name: 'Multi-Criteria AI Sourcing Scoring',
          desc: 'Engineered an AI-driven sourcing scoring engine evaluating suppliers across total landed cost, historical lead times, tariff risks, and operational resilience.'
        },
        {
          name: 'Critical-Path Delay Simulator',
          desc: 'Built a delay-impact simulator identifying critical-path bottlenecks and forecasting delivery launch date slippage under weather and port anomalies.'
        },
        {
          name: 'Executive Operational Control Tower',
          desc: 'Designed an interactive executive control tower dashboard delivering real-time anomaly alerts and automated contingency sourcing recommendations.'
        }
      ],
      deepDive: {
        pattern: 'Predictive Risk Analytics Pipeline & Decision Support Dashboard',
        coreComponents: 'Python, SQL, Operations Research Scoring Algorithms, Interactive Dashboards',
        tradeoffs: 'Balanced cost minimization against risk tolerance by applying weighted multi-objective scoring models for sourcing alternatives.'
      },
      tags: ['Python', 'SQL', 'Predictive Modeling', 'Supply Chain Analytics', 'Operations Research', 'Executive Dashboards']
    },
    {
      id: 'ai-financial-research',
      type: 'product',
      featured: false,
      title: 'AI Financial Research & Analysis Platform',
      hmwPrompt: 'How might we accelerate fundamental financial research across complex SEC filings while ensuring verifiable data grounding and zero-hallucination metric extraction?',
      org: '0➔1 Generative AI Product',
      category: 'Generative AI • Financial NLP • Multi-Document Synthesis',
      summary: 'Architected an end-to-end AI product leveraging LLMs, LangChain, and Gemini to automate fundamental equity research across 10-K/10-Q SEC filings, financial earnings calls, and fragmented market datasets with deterministic metric verification.',
      metrics: [
        { label: 'Research Acceleration', value: '10x Faster Analysis' },
        { label: 'Extraction Fidelity', value: '100% Sourced Citations' },
        { label: 'Core Tech', value: 'Python • LangChain • Gemini' }
      ],
      theIssue: 'Financial analysts and researchers spend hours manually combing through 100+ page SEC filings (10-K, 10-Q), earnings call transcripts, and tables to extract, cross-reference, and compare historical metrics. Traditional keyword search misses semantic context, while generic LLMs hallucinate figures and fail on complex nested financial tables.',
      whySolve: 'High-quality investment analysis requires rigorous speed, zero tolerance for hallucinations, and verifiable source traceability. Automating cross-document synthesis frees analysts to focus on high-conviction decision-making.',
      howWeSolve: [
        {
          name: '1. Structured Financial Table Parsing & Ingestion',
          desc: 'Engineered specialized table extraction pipelines preserving row-column relational structures across SEC 10-K/10-Q balance sheets, income statements, and cash flow disclosures.'
        },
        {
          name: '2. Multi-Stage Validation & Grounding Workflows',
          desc: 'Designed deterministic verification workflows with LangChain and Gemini, enforcing strict citation linking to exact filing sections and page numbers to eliminate hallucinations.'
        },
        {
          name: '3. Comparative Metric Synthesis & Sentiment Analysis',
          desc: 'Built comparative financial query engines and NLP sentiment analysis on management discussion & analysis (MD&A) sections to contextualize guidance and risk factors.'
        }
      ],
      deepDive: {
        targetPersonas: [
          'Equity Research Analysts: Needing instant peer-group comparison and historical trend extraction without manual spreadsheet transcription.',
          'Portfolio Managers: Seeking quick verification of management commentary sentiment and sudden risk-factor changes across quarters.'
        ],
        successMetrics: {
          northStar: '% of extracted financial datapoints with verifiable audit trail and zero hallucination.',
          secondaryMetrics: '90%+ reduction in manual filing lookup time; multi-quarter comparison speed <5 seconds.'
        },
        rolloutStrategy: 'Phase 1: Table parsing and verified 10-K Q&A engine. Phase 2: Cross-company comparative dashboard with sentiment scoring on earnings transcripts.'
      },
      tags: ['Generative AI', 'Python', 'LangChain', 'Google Gemini', 'NLP', 'Prompt Engineering', 'Financial Modeling', 'Table Parsing']
    }
  ];

  const filteredStudies = filter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.type === filter);

  return (
    <section id="projects" className="section section-pastel-blue">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
          <div style={{ textAlign: 'left' }}>
            <div className="section-tag section-tag-blue">
              <span className="section-tag-num">02</span>
              <span>Case Studies & Initiatives</span>
            </div>
            <h2 className="section-title">Product & Platform Case Studies</h2>
            <p className="section-subtitle">
              Structured product teardowns, distributed platform modernizations, and quantitative risk engines.
            </p>
          </div>

          {/* Filter Pills */}
          <div 
            style={{
              display: 'flex',
              backgroundColor: '#ffffff',
              padding: '4px',
              borderRadius: '8px',
              border: '1px solid var(--pastel-blue-border)'
            }}
          >
            <button
              onClick={() => setFilter('all')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 650,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: filter === 'all' ? 'var(--primary)' : 'transparent',
                color: filter === 'all' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              All Initiatives ({caseStudies.length})
            </button>
            <button
              onClick={() => setFilter('product')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 650,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: filter === 'product' ? 'var(--primary)' : 'transparent',
                color: filter === 'product' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              Product Teardowns
            </button>
            <button
              onClick={() => setFilter('platform')}
              style={{
                padding: '6px 14px',
                borderRadius: '6px',
                fontSize: '0.84rem',
                fontWeight: 650,
                cursor: 'pointer',
                border: 'none',
                backgroundColor: filter === 'platform' ? 'var(--primary)' : 'transparent',
                color: filter === 'platform' ? '#ffffff' : 'var(--text-muted)',
                transition: 'all 0.15s ease'
              }}
            >
              Platform Products
            </button>
          </div>
        </div>

        {/* Integrated Case Studies List (Seamless Canvas) */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {filteredStudies.map((proj, idx) => {
            const isExpanded = expandedProject === proj.id;
            return (
              <div 
                key={proj.id}
                style={{
                  padding: '44px 0',
                  borderTop: idx > 0 ? '1px solid var(--border-hairline)' : 'none',
                  textAlign: 'left'
                }}
              >
                {/* Featured Indicator */}
                {proj.featured && (
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 650, marginBottom: '10px' }}>
                    <Sparkles size={13} />
                    <span>Featured Product Teardown</span>
                  </div>
                )}

                {/* Header */}
                <div style={{ marginBottom: '16px' }}>
                  <span style={{ 
                    fontFamily: 'var(--font-mono)', 
                    fontSize: '0.78rem', 
                    color: 'var(--text-muted)', 
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    {proj.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '4px' }}>
                    {proj.title}
                  </h3>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    {proj.org}
                  </div>
                </div>

                {/* HMW Box (Clean Integrated Callout) */}
                {proj.hmwPrompt && (
                  <div 
                    style={{
                      padding: '14px 20px',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--pastel-blue-border)',
                      borderLeft: '4px solid var(--primary)',
                      borderRadius: '0 8px 8px 0',
                      marginBottom: '20px',
                      fontSize: '0.94rem',
                      color: 'var(--text-primary)',
                      lineHeight: 1.55,
                      boxShadow: '0 2px 8px rgba(37, 99, 235, 0.04)'
                    }}
                  >
                    <span style={{ fontWeight: 700, color: 'var(--primary)' }}>How Might We: </span>
                    <em>"{proj.hmwPrompt}"</em>
                  </div>
                )}

                {/* Summary */}
                <p style={{ fontSize: '1.02rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '24px' }}>
                  {proj.summary}
                </p>

                {/* Metrics Rail */}
                <div 
                  style={{ 
                    display: 'grid', 
                    gridTemplateColumns: 'repeat(3, 1fr)', 
                    gap: '20px',
                    marginBottom: '28px'
                  }}
                  className="projects-metrics-grid"
                >
                  {proj.metrics.map((m, i) => {
                    const bgs = ['var(--pastel-blue-bg)', 'var(--pastel-green-bg)', 'var(--pastel-teal-bg)'];
                    const borders = ['var(--pastel-blue-border)', 'var(--pastel-green-border)', 'var(--pastel-teal-border)'];
                    const textColors = ['var(--pastel-blue-text)', 'var(--pastel-green-text)', 'var(--pastel-teal-text)'];
                    return (
                      <div 
                        key={i}
                        style={{
                          backgroundColor: bgs[i % 3],
                          border: `1px solid ${borders[i % 3]}`,
                          borderRadius: '8px',
                          padding: '16px 20px',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                        }}
                      >
                        <div style={{ fontSize: '1.3rem', fontWeight: 800, color: textColors[i % 3] }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '2px', fontWeight: 550 }}>
                          {m.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Core Issue & Why Solve (2-Column Integrated) */}
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '24px',
                    marginBottom: '28px'
                  }}
                  className="projects-two-col"
                >
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #fecdd3', borderTop: '3px solid #f43f5e', padding: '20px 22px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 750, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#be123c', marginBottom: '8px' }}>
                      The Problem Space (Customer & Operational Pain Point)
                    </div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {proj.theIssue}
                    </p>
                  </div>

                  <div style={{ backgroundColor: '#ffffff', border: '1px solid #a7f3d0', borderTop: '3px solid #10b981', padding: '20px 22px', borderRadius: '10px', boxShadow: '0 2px 6px rgba(0,0,0,0.02)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 750, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#047857', marginBottom: '8px' }}>
                      Why We Solved It (Business Impact & Strategy)
                    </div>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {proj.whySolve}
                    </p>
                  </div>
                </div>

                {/* Proposed Solutions / Engineering Deliverables */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 750, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '14px' }}>
                    How We Solved It (Product Requirements & Execution)
                  </div>
                  <div 
                    style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                      gap: '16px' 
                    }}
                  >
                    {proj.howWeSolve.map((sol, i) => (
                      <div 
                        key={i} 
                        style={{ 
                          display: 'flex', 
                          gap: '12px', 
                          alignItems: 'flex-start',
                          padding: '16px',
                          backgroundColor: '#ffffff',
                          borderRadius: '8px',
                          border: '1px solid var(--pastel-blue-border)',
                          boxShadow: '0 2px 6px rgba(37, 99, 235, 0.03)'
                        }}
                      >
                        <CheckCircle size={16} style={{ color: 'var(--emerald)', marginTop: '2px', flexShrink: 0 }} />
                        <div style={{ fontSize: '0.91rem', lineHeight: 1.55, color: 'var(--text-secondary)' }}>
                          <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>{sol.name}</strong>
                          <span>{sol.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expandable PM Deep Dive */}
                {isExpanded && (
                  <div 
                    style={{
                      marginTop: '24px',
                      padding: '28px',
                      backgroundColor: 'var(--bg-subtle)',
                      borderRadius: '8px',
                      border: '1px solid var(--border-hairline)',
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                      gap: '24px'
                    }}
                  >
                    {proj.deepDive.targetPersonas && (
                      <div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Target Users & Pain Points
                        </span>
                        <ul style={{ listStyle: 'disc', paddingLeft: '20px', marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {proj.deepDive.targetPersonas.map((persona, pIdx) => (
                            <li key={pIdx} style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                              {persona}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {proj.deepDive.successMetrics && (
                      <div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--emerald)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Success Metrics & Guardrails
                        </span>
                        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                          <div><strong style={{ color: 'var(--text-primary)' }}>North Star: </strong>{proj.deepDive.successMetrics.northStar}</div>
                          <div><strong style={{ color: 'var(--text-primary)' }}>Guardrail: </strong>{proj.deepDive.successMetrics.guardrailMetric}</div>
                          <div><strong style={{ color: 'var(--text-primary)' }}>Secondary: </strong>{proj.deepDive.successMetrics.secondaryMetrics}</div>
                        </div>
                      </div>
                    )}

                    {proj.deepDive.rolloutStrategy && (
                      <div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--amber)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Product Phasing & Rollout Strategy
                        </span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '10px', lineHeight: 1.55 }}>
                          {proj.deepDive.rolloutStrategy}
                        </p>
                      </div>
                    )}

                    {proj.deepDive.pattern && (
                      <div>
                        <span style={{ fontSize: '0.82rem', fontWeight: 750, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                          Architectural Pattern & Trade-offs
                        </span>
                        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '10px', lineHeight: 1.55 }}>
                          <strong>Pattern:</strong> {proj.deepDive.pattern}<br />
                          <strong>Components:</strong> {proj.deepDive.coreComponents}<br />
                          <strong>Key Trade-off:</strong> {proj.deepDive.tradeoffs}
                        </p>
                      </div>
                    )}
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
                    marginTop: '20px'
                  }}
                >
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tag} className={tIdx % 2 === 0 ? "badge badge-blue" : "badge badge-green"}>
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
                      gap: '5px',
                      cursor: 'pointer',
                      padding: '4px 0'
                    }}
                  >
                    <span>{isExpanded ? 'Hide Teardown Details' : 'View Full Case Study'}</span>
                    {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .projects-two-col {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
