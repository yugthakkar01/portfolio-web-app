"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '20px 0',
      background: 'rgba(5, 5, 5, 0.7)',
      backdropFilter: 'blur(15px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px'
      }}>
        <div style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-1px' }}>
          YUG<span className="gradient-text">.DATA</span>
        </div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>About</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>Projects</a>
          <a href="#consultation" style={{ color: 'var(--foreground)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600 }}>Consultation</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
