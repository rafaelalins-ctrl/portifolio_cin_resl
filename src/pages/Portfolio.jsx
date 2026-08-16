import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import imagemCad from '../cinext.png'; 
import imagemIp from '../pythons_trial.png';

export default function Portfolio() {
  return (
    <div className="container">
      <Header />
      <Navigation activePage="portfolio" />
      <main className="content">
        <div className="project-card">
          <div className="project-info">
            <h3>Projeto CAD</h3>
            <span className="class">CIN0131 - CONCEPÇÃO DE ARTEFATOS DIGITAIS</span>
            <p><strong>CinExt:</strong> Hub de Extensão do Centro de Informática no qual cada discente ou docente pode ter uma conta e postar ou mostrar interesse em ações de extensão. Desenvolvimento de interface e prototipação voltada para a experiência do usuário usando Lovable.</p>
            <a href="https://cinext.lovable.app" className="link-repo">Ver Protótipo</a>
          </div>
          <div className="project-image">
            <img src={imagemCad} alt="Projeto CAD - CinExt" />
          </div>
        </div>

        <div className="project-card">
          <div className="project-info">
            <h3>Projeto IP</h3>
            <span className="class">CIN0133 - INTRODUÇÃO À PROGRAMAÇÃO</span>
            <p><strong>The Python's Trial:</strong> Jogo 2D desenvolvido com Pygame, onde o personagem principal enfrenta 3 inimigos intermédiarios e um chefe final. Possui mecânicas de combate e coleta de itens.</p>
            <a href="https://github.com/RogerioHenrique1403/IP_zelda" className="link-repo">Ver Repositório</a>
          </div>
          <div className="project-image">
            <img src={imagemIp} alt="Projeto IP - The Python's Trial" />
          </div>
        </div>
      </main>
    </div>
  );
}