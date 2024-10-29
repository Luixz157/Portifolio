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
  {
    stepNumber:"04",
    title: "Primeiras Experiências Profissionais e Faculdade",
    heading: "2024 – Primeiras Experiências Profissionais e Faculdade" ,
    paragraph: `Aprendizado contínuo em MySQL, explorando comandos e consultas.
    Estudo aprofundado em Java, incluindo conceitos como SOLID.
    Uso das plataformas IntelliJ IDEA e Eclipse para projetos Java.
    Implementação de testes e projetos com Netlify.
    Desenvolvedor Freelancer para a Formula Idiomas:
    Criação de um site dinâmico e responsivo.
    Desenvolvimento de sistema de teste de nivelamento de inglês.
    Desafio: utilização de PHP para envio de formulários.
    Início dos estudos de inglês para aprimorar habilidades de comunicação.`
  },
  {
    stepNumber:"05",
    title: "Evolução Contínua Em andamento: 4º período do curso de Desenvolvimento de Sistemas de Informação.",
    heading: "Até o Momento –",
    paragraph: `Aperfeiçoamento constante em design e desenvolvimento.
    Aplicação de práticas para ampliar conhecimentos e habilidades.
    Em busca da primeira oportunidade profissional fixa na área de tecnologia.`
  },
];

export function Steps() {
  const trackRef = useRef(null); // Referência para a trilha de passos
  const stepsContainerRef = useRef(null); // Referência para o container de steps
  const [scrollPercent, setScrollPercent] = useState(0); // Percentual de rolagem

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsContainerRef.current || !trackRef.current) return;

      const containerTop = stepsContainerRef.current.getBoundingClientRect().top;
      const containerHeight = stepsContainerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Verifica se o container está parcialmente visível na tela
      const isInViewport =
        containerTop < windowHeight && containerTop + containerHeight > 0;

      if (isInViewport) {
        const maxScroll = containerHeight - windowHeight;
        const scrolled = window.scrollY - stepsContainerRef.current.offsetTop;
        const scrollPercentage = Math.min(scrolled / maxScroll, 1);

        setScrollPercent(scrollPercentage);

        const maxTranslateX =
          trackRef.current.scrollWidth - window.innerWidth;

        // Aplica a transformação horizontal proporcionalmente ao scroll vertical
        trackRef.current.style.transform = `translateX(-${
          scrollPercentage * maxTranslateX
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={stepsContainerRef}
      className="steps-container relative z-30 h-[500vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={trackRef}
          className="steps-track flex h-full transition-transform duration-500 ease-out"
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