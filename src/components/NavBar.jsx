import { useEffect } from "react";
import "./NavBar.css";

export default function Navbar() {
  useEffect(() => {
    let lastScroll = 0;
    const nav = document.querySelector(".navbar");

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        // Descendo → esconder navbar
        nav.classList.add("navbar-hidden");
      } else {
        // Subindo → mostrar navbar
        nav.classList.remove("navbar-hidden");
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
   <div className="navbar-logo">
  <img 
    src="/prtfLogo.webp"
    alt="Logo do Portfólio"
    className="logo-img"
  />
</div>


<ul className="navbar-links">
    <li><a href="#home" data-text="Home">Home</a></li>
    <li><a href="#sobre" data-text="Sobre">Sobre</a></li>
    <li><a href="#projetos" data-text="Projetos">Projetos</a></li>
    <li><a href="#contato" data-text="Contato">Contato</a></li>
</ul>

    </nav>
  );
}

