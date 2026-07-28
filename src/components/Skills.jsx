import React, { useState } from 'react';
import { Code2, Briefcase, Users, Check } from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('product');

  const skillCategories = [
    {
      id: 'product',
      name: 'Product Strategy & Execution',
      icon: <Briefcase size={18} />,
      skills: [
        { name: 'Product Strategy', level: 'Advanced', desc: 'Defining product vision, market positioning, and growth vectors.' },
        { name: 'Product Roadmap', level: 'Advanced', desc: 'Planning and aligning product milestones and feature rollouts.' },
        { name: 'Product Lifecycle Management', level: 'Advanced', desc: 'Managing products from requirements, design, launch, to deprecation.' },
        { name: 'Product Requirements', level: 'Advanced', desc: 'Translating business needs into technical spec sheets and requirements.' },
        { name: 'Product Prioritization', level: 'Advanced', desc: 'Using data-driven frameworks (RICE, MoSCoW) to prioritize initiatives.' },
        { name: 'Roadmap Planning', level: 'Advanced', desc: 'Aligning timeline executions with engineering, operations, and stakeholders.' },
        { name: 'A/B Testing & Insights', level: 'Proficient', desc: 'Hypothesis testing, user experiments, and platform optimization.' }
      ]
    },
    {
      id: 'techdata',
      name: 'Technical & Data Analytics',
      icon: <Code2 size={18} />,
      skills: [
        { name: 'Platform Products', level: 'Advanced', desc: 'Designing backend capabilities, transaction engines, and core infra.' },
        { name: 'API Strategy', level: 'Advanced', desc: 'Structuring REST, event-driven, and microservices API schemas.' },
        { name: 'SQL & Database Design', level: 'Advanced', desc: 'Data aggregation, querying metrics, and auditing database logs.' },
        { name: 'Python Analytics', level: 'Proficient', desc: 'Scripting, parsing telemetry data, and modeling analytics.' },
        { name: 'KPI Development', level: 'Advanced', desc: 'Defining and tracking metrics for application health and product value.' },
        { name: 'Data Visualization', level: 'Advanced', desc: 'Building operational dashboards in Power BI and Excel.' },
        { name: 'Telemetry & Log Aggregation', level: 'Advanced', desc: 'Aggregating metrics across distributed microservices.' }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership & Methodology',
      icon: <Users size={18} />,
      skills: [
        { name: 'Stakeholder Management', level: 'Advanced', desc: 'Bridging engineering, operations, finance, and business teams.' },
        { name: 'Cross-Functional Leadership', level: 'Advanced', desc: 'Leading collaborative delivery efforts without direct authority.' },
        { name: 'Agile (Scrum)', level: 'Advanced', desc: 'Sprint planning, backlog grooming, retrospectives, and velocity tracking.' },
        { name: 'Jira & Confluence', level: 'Advanced', desc: 'Tracking requirements, roadmap epics, and engineering tasks.' },
        { name: 'Customer Insights', level: 'Proficient', desc: 'Conducting interviews, analyzing user behavior, and mapping feedback.' },
        { name: 'Product Delivery', level: 'Advanced', desc: 'Ensuring stable releases, validating fixes, and managing deployments.' }
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
