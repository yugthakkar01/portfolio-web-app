"use client";

import React from 'react';
import Image from 'next/image';

interface HeroProps {
  name: string;
  headline: string;
}

const Hero = ({ name, headline }: HeroProps) => {
  return (
    <header className="section fade-in" style={{ 
      paddingTop: '180px', 
      paddingBottom: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }}>
      <div style={{
        position: 'relative',
        width: '180px',
        height: '180px',
        marginBottom: '30px',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid var(--surface-border)',
        boxShadow: '0 0 40px rgba(0, 242, 254, 0.2)'
      }}>
        <Image 
          src="/1.jpg" 
          alt={name} 
          fill 
          style={{ objectFit: 'cover' }}
        />
      </div>
      
      <h1 style={{ fontSize: '4.5rem', marginBottom: '10px' }}>
        Hi, I'm <span className="gradient-text">{name}</span>
      </h1>
      
      <p style={{ 
        maxWidth: '700px', 
        fontSize: '1.25rem', 
        color: 'var(--text-muted)', 
        marginBottom: '40px',
        fontWeight: 400
      }}>
        {headline}
      </p>
      
      <div style={{ display: 'flex', gap: '20px' }}>
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#consultation" style={{
          padding: '12px 28px',
          borderRadius: '50px',
          border: '1px solid var(--glass-border)',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 600,
          transition: 'background 0.3s ease'
        }}>Book Consultation</a>
      </div>
    </header>
  );
};

export default Hero;
