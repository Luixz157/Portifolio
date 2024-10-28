"use client"; // Para habilitar hooks e estado

import { useEffect, useRef, useState } from "react";
import Step from "./Step"; // Importando o componente Step

const stepsData = [
  {
    stepNumber: "01",
    title: "Primeiros Passos na Programação",
    heading: "2021 – Primeiros Passos na Programação",
    paragraph: `Primeiras incursões no mundo da programação, explorando cursos gratuitos no YouTube.
Descoberta da paixão pelo desenvolvimento web e resolução de problemas.
Primeiros contatos com HTML, CSS e JavaScript.`,
    imgSrc: "https://via.placeholder.com/400",
  },
  {
    stepNumber: "02",
    title: "Aprofundamento e Primeiros Projetos",
    heading: "2022 – Aprofundamento e Primeiros Projetos",
    paragraph: `Estudo aprofundado em JavaScript e desenvolvimento front-end.
Inscrição no curso de Front-end do CodeBoost para solidificar conhecimentos.
Desenvolvimento de projetos práticos usando HTML, CSS, JS, SASS.
Início dos estudos em React e Next.js.
Experimentos com Tailwind CSS, Bootstrap e Styled Components.
Primeiros passos no Node.js para back-end.`,
    imgSrc: "https://via.placeholder.com/400",
  },
  {
    stepNumber: "03",
    title: "Faculdade e Aprendizados Diversificados",
    heading: "2023 – Começo de Faculdade e Aprendizados Diversificados",
    paragraph: `Criação de projetos com TDD (Test-Driven Development) e arquitetura limpa.
Participação no curso da Webflow University para explorar novas ferramentas.
Mergulho no universo de UI/UX, utilizando Figma, Invision e Canva.
Introdução a Arduino e conceitos básicos de Python.
Experimentos com sistemas operacionais como Linux, Windows e Debian.`,
    imgSrc: "https://via.placeholder.com/400",
  },
];

export function Steps() {
  const trackRef = useRef(null); // Referência para a track dos passos
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = window.scrollY / maxScroll; // Percentual do scroll
      const maxTranslateX = trackRef.current.scrollWidth - window.innerWidth;

      // Move a track proporcionalmente ao scroll vertical
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${scrollPercent * maxTranslateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="steps-container relative z-30 h-[500vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={trackRef}
          className="steps-track flex h-full transition-transform duration-300 ease-out"
        >
          {stepsData.map((step, index) => (
            <div
              key={index}
              className="step-wrapper w-screen h-full flex-shrink-0"
            >
              <Step {...step} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Steps;
