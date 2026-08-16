import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

export default function Sobre() {
  return (
    <div className="container">
      <Header />
      <Navigation activePage="sobre" />
      <main className="content">
        <h2>Trajetória Acadêmica e Pessoal</h2>
        <p>
          Tenho 24 anos, sou natural do Rio Grande do Sul, mas cresci em Recife. 
          No cenário acadêmico atual, atuo como monitora da disciplina de Concepção de Artefatos Digitais (CAD).
          Atualmente estou matriculada nas disciplinas de Estruturas de Dados Orientadas a Objetos; Desenvolvimento de Software; e Tecnologia, Diversidade, Equidade e Inclusão.
        </p>
        <h2>Interesses e Habilidades</h2>
        <ul>
          <li><strong>Tecnologias:</strong> Python, C++, JavaScript, React, HTML/CSS, Figma, Git.</li>
          <li><strong>Interesses:</strong> UX/UI, Design de Produtos, Engenharia de Software, Dados no setor de aviação.</li>
          <li><strong>Experiência:</strong> Desenvolvimento de protótipos e interfaces, programação orientada a objetos, versionamento de código com Git.</li>
          <li><strong>Objetivo:</strong> Busco oportunidades de estágio ou trabalho na área de tecnologia, com foco em desenvolvimento de software e design de produtos.</li>
          <li><strong>Idiomas:</strong> Inglês Avançado, com capacidade de comunicação, leitura e compreensão de textos técnicos.</li>
          <li><strong>Hobbies:</strong> Para além dos estudos, meus momentos de lazer são dedicados a tocar violão e acompanhar séries.</li>
        </ul>
      </main>
    </div>
  );
}