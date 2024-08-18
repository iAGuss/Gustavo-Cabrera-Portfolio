import React, { useState } from "react";
import "./header.css";

function Header({ openModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="header">
      <span>Guss</span>
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`links ${isMenuOpen ? "show" : ""}`}>
        <li>
          <a href="#sobre-mi" onClick={toggleMenu}>
            Sobre mi
          </a>
        </li>
        <li>
          <a href="#proyectos" onClick={toggleMenu}>
            Proyectos
          </a>
        </li>
        <li
          onClick={() => {
            toggleMenu();
            openModal();
          }}
        >
          Contactame
        </li>
      </ul>
    </nav>
  );
}

export default Header;
