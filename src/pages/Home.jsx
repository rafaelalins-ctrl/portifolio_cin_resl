import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Navigation activePage="home" />
      <main className="content">
        <h2>Apresentação</h2>
        <p>
          Olá! Sou estudante de Sistemas de Informação na UFPE e estou no 3º período do curso. Tenho formação prévia em Controle de Tráfego Aéreo, mas decidi migrar para a área de tecnologia por acreditar que ela oferece mais oportunidades de crescimento e aprendizado contínuo.
          Estou muito animada para explorar o mundo da tecnologia, e estou comprometida em adquirir habilidades técnicas sólidas para me tornar uma profissional competente na área.
          Este espaço foi desenvolvido para apresentar minha trajetória, meus interesses na área de tecnologia e os 
          projetos que venho construindo ao longo do curso.
        </p>
      </main>
    </div>
  );
}