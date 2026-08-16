import React from 'react';
import fotoPerfil from '../foto_perfil.jpg';

export default function Header() {
  return (
    <header className="profile-header">
      <img src={fotoPerfil} alt="Rafaela Lins" className="profile-img" />
      <div className="profile-info">
        <h1>Rafaela Lins</h1>
        <p>Graduanda em Sistemas de Informação - CIn/UFPE</p>
        
        <div className="contact-buttons">
          <a href="https://github.com/rafaelalins-ctrl" target="_blank" rel="noreferrer" className="btn">GitHub</a>
          <a href="https://www.linkedin.com/in/rafaela-lins-5091262a4/" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
        </div>
        <p style={{ marginTop: '15px', fontSize: '0.95rem' }}>
          📧 Email: <strong>resl@cin.ufpe.br</strong>
        </p>  
      </div>
    </header>
  );
}