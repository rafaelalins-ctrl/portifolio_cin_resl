import React from 'react';

export default function Navigation({ activePage }) {
  return (
    <nav className="tabs">
      <a href=".." className={activePage === 'home' ? 'active' : ''}>INÍCIO</a>
      <a href="../sobre/" className={activePage === 'sobre' ? 'active' : ''}>SOBRE MIM</a>
      <a href="../portfolio/" className={activePage === 'portfolio' ? 'active' : ''}>PORTFÓLIO</a>
    </nav>
  );
}