'use client';

import React from 'react';
import { useLanguage } from './language-provider';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      fontSize: '14px',
      fontFamily: "'Switzer', system-ui, sans-serif",
      gap: '4px'
    }}>
      <button
        onClick={() => setLanguage('es')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
          color: language === 'es' ? '#1A1A1A' : '#1A1A1A66',
          fontWeight: language === 'es' ? '600' : '400',
          textDecoration: 'none',
          fontFamily: "'Switzer', system-ui, sans-serif",
          fontSize: '14px'
        }}
      >
        ES
      </button>
      <span style={{ color: '#1A1A1A66' }}>|</span>
      <button
        onClick={() => setLanguage('en')}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px 8px',
          color: language === 'en' ? '#1A1A1A' : '#1A1A1A66',
          fontWeight: language === 'en' ? '600' : '400',
          textDecoration: 'none',
          fontFamily: "'Switzer', system-ui, sans-serif",
          fontSize: '14px'
        }}
      >
        EN
      </button>
    </div>
  );
}