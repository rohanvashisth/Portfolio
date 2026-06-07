import React, { useState } from 'react';
import { Code2, Landmark, Settings, Check } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('engineering');

  const skillCategories = [
    {
      id: 'engineering',
      name: 'Software Engineering',
      icon: <Code2 size={18} />,
      skills: [
        { name: 'Java (Spring Boot)', level: 'Advanced', desc: 'Core development platform for high-throughput transactional microservices.' },
        { name: 'Python', level: 'Proficient', desc: 'Scripting, automated utilities, data processing, and validation tests.' },
        { name: 'C++', level: 'Intermediate', desc: 'System-level components and academic base.' },
        { name: 'JavaScript / React', level: 'Proficient', desc: 'Building modern interfaces and full-stack utilities.' },
        { name: 'SQL & CockroachDB', level: 'Advanced', desc: 'Relational query design, distributed SQL evaluations, schema tuning.' },
        { name: 'Microservices & APIs', level: 'Advanced', desc: 'Decoupled system modularity, idempotent API design, REST architectures.' },
        { name: 'Event-Driven Systems', level: 'Advanced', desc: 'Decoupling workflows using Kafka message streaming.' },
        { name: 'Distributed Systems', level: 'Advanced', desc: 'Concurrency, fault tolerance, transaction isolation levels.' }
      ]
    },
    {
      id: 'finance',
      name: 'Business & Finance (MBA)',
      icon: <Landmark size={18} />,
      skills: [
        { name: 'Power BI', level: 'Advanced', desc: 'Building interactive dashboards for data visualization and executive reporting.' },
        { name: 'Financial Modeling', level: 'Proficient', desc: 'Capital budgeting, risk valuation, forecasting in Excel.' },
        { name: 'Supply Chain Operations', level: 'Proficient', desc: 'Operations planning, inventory management, process optimization.' },
        { name: 'Advanced Excel', level: 'Advanced', desc: 'Pivot tables, VBA automation, large-scale financial sheets.' },
        { name: 'Business Analysis', level: 'Advanced', desc: 'Functional requirements gathering, bridging business & engineering.' },
        { name: 'Corporate Strategy', level: 'Intermediate', desc: 'Analyzing market expansion, financial feasibility, risk metrics.' }
      ]
    },
    {
      id: 'devops',
      name: 'DevOps & Tools',
      icon: <Settings size={18} />,
      skills: [
        { name: 'Git & GitHub', level: 'Advanced', desc: 'Repository management, branching strategies, and team collaboration.' },
        { name: 'Kubernetes & Docker', level: 'Proficient', desc: 'Containerization, cluster management, deployment pipelines.' },
        { name: 'FitNesse', level: 'Advanced', desc: 'Automating acceptance and regression test suites in financial systems.' },
        { name: 'Asynchronous MQ', level: 'Advanced', desc: 'IBM MQ/RabbitMQ integration for legacy and modern platform linkages.' },
        { name: 'Unix / Shell', level: 'Proficient', desc: 'Log analysis, environment diagnostics, cron job automation.' },
        { name: 'Monitoring & Logs', level: 'Proficient', desc: 'Splunk, AppDynamics, Grafana service health setups.' }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section" style={{ position: 'relative' }}>
      <div className="container">
        
        <h2 className="section-title">Skills & Capabilities</h2>
        <p className="section-subtitle">
          My multi-disciplinary expertise bridging high-scale computer science and executive business insights.
        </p>

        {/* Tab Buttons */}
        <div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '12px', 
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              id={`skills-tab-${category.id}`}
              onClick={() => setActiveCategory(category.id)}
              className={`btn ${activeCategory === category.id ? 'btn-primary' : 'btn-secondary'}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '9999px',
                fontSize: '0.9rem'
              }}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div 
          className="grid-2"
          key={activeCategory} // forces animation on tab change
          style={{
            animation: 'fadeInUp 0.5s ease forwards'
          }}
        >
          {currentCategory.skills.map((skill) => (
            <div 
              key={skill.name} 
              className="glass-card skill-card"
              style={{
                padding: '20px',
                textAlign: 'left',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                borderLeft: '4px solid hsl(var(--primary))'
              }}
            >
              <div 
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(59, 130, 246, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '4px'
                }}
              >
                <Check size={16} style={{ color: 'hsl(var(--primary))' }} />
              </div>

              <div style={{ flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>{skill.name}</h3>
                  <span 
                    className="badge" 
                    style={{ 
                      fontSize: '0.7rem', 
                      backgroundColor: skill.level === 'Advanced' ? 'rgba(59, 130, 246, 0.15)' : 'rgba(255,255,255,0.05)',
                      color: skill.level === 'Advanced' ? '#60a5fa' : 'hsl(var(--text-secondary))',
                      border: '1px solid rgba(255,255,255,0.05)'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-secondary))', lineHeight: 1.4 }}>
                  {skill.desc}
                </p>

                {/* Micro visual indicator */}
                <div style={{ width: '100%', height: '2px', backgroundColor: 'rgba(255, 255, 255, 0.05)', marginTop: '12px', borderRadius: '1px', overflow: 'hidden' }}>
                  <div 
                    style={{ 
                      height: '100%', 
                      width: skill.level === 'Advanced' ? '90%' : skill.level === 'Proficient' ? '75%' : '55%',
                      background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)))'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .skill-card {
          transition: var(--transition-normal);
        }
        .skill-card:hover {
          border-left-color: hsl(var(--secondary)) !important;
          background: rgba(15, 19, 34, 0.6) !important;
        }
      `}</style>
    </section>
  );
}
