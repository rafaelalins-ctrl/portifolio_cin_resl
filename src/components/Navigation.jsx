import React from 'react';

export default function Navigation({ activePage }) {
  const baseUrl = import.meta.env.BASE_URL; 

  return (
    <nav className="tabs">
      <a href={baseUrl} className={activePage === 'home' ? 'active' : ''}>
        INÍCIO
      </a>
      
      <a href={`${baseUrl}sobre/`} className={activePage === 'sobre' ? 'active' : ''}>
        SOBRE MIM
      </a>
      
      <a href={`${baseUrl}portfolio/`} className={activePage === 'portfolio' ? 'active' : ''}>
        PORTFÓLIO
      </a>
    </nav>
  );
}