import React from "react";

import "./main.css";

import foto from "../../assets/IMG_20220809_164244 (2)-min.jpg";
import GitHub from "../../assets/30b150cd489202db131009ac9540cec0.png";
import Cv from "../../assets/CV-Gus Full Stack Web Developer.pdf";
import Linkedin from "../../assets/linkedin.png";

function Main() {
  return (
    <main className="padre-main">
      <div className="texto-precentacion">
        <p className="Mi-nombre">Hola, soy Gus</p>

        <span className="skills">
          <h2 className="Full-Stack" style={{ fontSize: "30px" }}>
            Full stack web Developer Junior
          </h2>
          <p style={{ fontSize: "15px" }}>
            (React,JavaScript,Node.js,Express.js,PostgreSQL,Testing)
          </p>
        </span>
        <div className="about-me">
          <p>
            Mis tecnologías principales son ReactJS, JavaScript y Nodejs además
            de HTML/CSS cuento con mas de 1 año de experiencia en proyectos
            personales.
          </p>
        </div>
      </div>

      <div className="imagen-precentacion">
        <img className="mi-foto" src={foto} alt="" />
        <span className="link-social">
          <button className="Descargar-cv">
            <a href={Cv} download="Curriculum-Gustavo-Cabrera">
              Descarga CV
            </a>
          </button>
         
          <a
            href="https://www.linkedin.com/in/gusc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </span>
      </div>
    </main>
  );
}

export default Main;
