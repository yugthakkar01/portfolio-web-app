"use client";

import React from 'react';

interface Project {
  title: string;
  description: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="section">
      <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', textAlign: 'center' }}>
        Featured <span className="gradient-text">Projects</span>
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card">
            <div style={{ 
              height: '8px', 
              width: '60px', 
              background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
              marginBottom: '25px',
              borderRadius: '10px'
            }}></div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {project.description}
            </p>
            <div style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>EXCEL</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--secondary)', fontWeight: 600 }}>ANALYSIS</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
