import React from "react";
import "./header.css";

function Header({ openModal }) {
  return (
    <nav className="header">
      <span>Guss</span>
      <ul className="links">
        <li>Sobre mi</li>
        <li>Proyectos</li>
        <li onClick={openModal}>Contactame</li>
      </ul>
    </nav>
  );
}

export default Header;
