"use client";

import React from 'react';

interface AboutProps {
  summary: string;
  skills: string[];
}

const About = ({ summary, skills }: AboutProps) => {
  return (
    <section id="about" className="section">
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.5fr) minmax(0, 1fr)', gap: '60px' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>About <span className="gradient-text">Me</span></h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '30px' }}>
            {summary}
          </p>
        </div>
        
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '25px' }}>Technical <span className="gradient-text">Arsenal</span></h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {skills.map((skill, index) => (
              <span key={index} style={{
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '8px 16px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'var(--foreground)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
