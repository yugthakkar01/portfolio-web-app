"use client";

import React from 'react';

interface ConsultationProps {
  link: string;
}

const Consultation = ({ link }: ConsultationProps) => {
  return (
    <section id="consultation" className="section" style={{ paddingBottom: '150px' }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.05) 0%, rgba(79, 172, 254, 0.05) 100%)',
        border: '1px solid var(--glass-border)',
        borderRadius: '32px',
        padding: '80px 40px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          background: 'var(--primary)',
          filter: 'blur(100px)',
          opacity: 0.1,
          zIndex: 0
        }}></div>
        
        <h2 style={{ fontSize: '3rem', marginBottom: '20px', position: 'relative', zIndex: 1 }}>
          Ready to <span className="gradient-text">Collaborate?</span>
        </h2>
        <p style={{ 
          maxWidth: '600px', 
          margin: '0 auto 40px', 
          color: 'var(--text-muted)',
          fontSize: '1.2rem',
          position: 'relative',
          zIndex: 1
        }}>
          If you're looking for data-driven insights, dashboards, or technical consultation, let's connect.
        </p>
        
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary" 
          style={{ fontSize: '1.1rem', padding: '16px 40px', position: 'relative', zIndex: 1 }}
        >
          Book a Consultation on Techferment
        </a>
      </div>
      
      <footer style={{ marginTop: '100px', textAlign: 'center', color: 'var(--surface-border)', fontSize: '0.85rem' }}>
        © 2026 Yug Thakkar. Built with Next.js and ❤️
      </footer>
    </section>
  );
};

export default Consultation;
