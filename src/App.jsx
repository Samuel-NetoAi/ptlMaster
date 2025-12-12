import Navbar from "./components/NavBar";
import Stars from "./components/Stars";
import "./components/Sobre.css";


import "./App.css";
import "./components/Hero.css"; // ← novo arquivo da Hero

export default function App() {
  return (
    <>
      <Navbar />
      <Stars />

      {/* ===========================
          HERO SECTION
      ============================ */}
<section id="home" className="hero-section">
  
  <h1
    className="hero-title glitch"
    data-text="Portfólio Futurista - Em Construção"
  >
    Portfólio Futurista - Em Construção
  </h1>

  <div className="hero-box clean-box">

    <h2
      className="hero-subtitle glitch"
      data-text="Bem-vindo ao Futuro"
    >
      Bem-vindo ao Futuro
    </h2>

    <p className="hero-text">
      Este é um projeto pessoal, feito com o intuito de mostrar brevemente
      algumas das minhas capacidades de programação e desenvolvimento.
    </p>

    <div className="hero-buttons">
      <a href="#projetos" className="btn-primary">Ver Projetos</a>
      <a href="#contato" className="btn-secondary">Contato</a>
    </div>
  </div>

</section>



  {/* ===========================
    SOBRE (com vídeo futurista)
=========================== */}
<section id="sobre" className="sobre-section">
  <div className="sobre-box">

    <h2
      className="section-title glitch"
      data-text="Sobre Mim"
    >
      Sobre Mim
    </h2>

      <div className="sobre-video-container">
    <video
      className="sobre-video"
      src="/videos/sobre-video.mp4"
      autoPlay
      muted
      loop
      playsInline
    ></video>
  </div>
<p className="sobre-text">
  Sou <strong>Desenvolvedor e Programador</strong>, atualmente cursando o 8º período de Ciência da Computação na Faculdade FUMEC. <br /><br />

  Com a experiência adquirida nos últimos anos, tive a oportunidade de explorar uma vasta gama de tecnologias através de: <br />
  • Participação em palestras sobre temas de impacto tecnológico global. <br />
  • Desenvolvimento de trabalhos teóricos e práticos. <br />
  • Interação e colaboração com outros futuros programadores em projetos e apresentações públicas. <br /><br />

   <strong>Habilidades e Adaptação</strong> <br />
  Possuo facilidade em trabalhar em equipe, adaptando-me a grupos de qualquer tamanho. Embora com menos experiência em grandes corporações, sou um profissional de aprendizado rápido e altamente adaptável ao funcionamento de novos ambientes. <br /><br />

  Tenho um forte senso de profissionalismo, mantendo respeito pela hierarquia e disciplina no ambiente de trabalho. <br /><br />

   <strong>Formação e Idiomas</strong> <br />
  Sou fluente em Inglês. Além disso, tenho um intercâmbio agendado para Londres em setembro de 2026, com duração de 21 dias. <br /><br />

  Minha formação básica inclui: <br />
  • Ensino Fundamental: Centro Educacional São Tomás de Aquino. <br />
  • Ensino Médio: Colégio Tiradentes, Unidade Prado, da Polícia Militar de Minas Gerais. <br /><br />

  (Nascido e criado em Nova Lima, Minas Gerais, 24 anos.)
</p>


  </div>
</section>


{/* ===========================
      PROJETOS
=========================== */}
<section id="projetos" className="section projetos-section">
 

  <div className="projetos-grid">

  {/* CARD DO NUTRITRACK */}
      <div className="projeto-card">

      <img
          src="/nutri.png"
          alt="NutriTrack Preview"
          className="projeto-img"
      />



  <h3 className="projeto-title">NutriTrack</h3>

  <p className="projeto-desc">
    
    <ul className="projeto-lista">

      
    Aplicativo completo de acompanhamento nutricional, incluindo cadastro de refeições, análise de macronutrientes, gráficos de progresso e interface moderna.<br /><br />
    <li>✔ Acompanhamento diário de refeições, permitindo registrar alimentos e horários.<br /></li>

    <li> ✔ Cálculo automático de macronutrientes (proteínas, carboidratos, gorduras).<br /></li>

    <li>✔ Gráficos de progresso mostrando evolução nutricional e metas.<br /></li>

    <li>✔ Sistema de cadastro de dietas personalizadas, adaptadas ao usuário.<br /></li>

    <li>✔ Interface moderna e intuitiva, construída com Angular + Ionic.<br /></li>
    </ul>
  </p>

  <a
    href="https://github.com/Samuel-NetoAI/nutritrakSamuelF"
    target="_blank"
    className="btn-projeto"
  >
    Ver no GitHub
  </a>
</div>


  </div>
</section>

      {/* ===========================
          CONTATO
      ============================ */}
<div id="contato"></div>
<footer className="footer">
  <div className="footer-links">
    <a href="https://github.com/Samuel-NetoAi" target="_blank">GitHub</a>
    <span className="email-display">Email - samuel071001@gmail.com</span>
    <a href="https://www.linkedin.com/in/samuel-f-91aa84140/" target="_blank">LinkedIn</a>
  </div>
</footer>




    </>
  );
}
