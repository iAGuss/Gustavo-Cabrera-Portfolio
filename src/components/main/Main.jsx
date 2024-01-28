import React from "react";

import "./main.css";
import foto from "../../assets/fotoperfil.jpg";
import Cv from "../../assets/Curriculum-Gustavo-Cabrera .pdf";
import Linkedin from "../../assets/linkedin.png";
import { TypeAnimation } from "react-type-animation";
const Main = () => {
  return (
    <main className="padre-main">
      <div className="texto-precentacion">
        <h2 id="about-me" className="Mi-nombre">
          Hola 👋 <br /> soy Gustavo
        </h2>
        <span className="skills">
          <h2 className="Full-Stack">Full stack web Developer Junior</h2>
          <h3 className="Tectologia">
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
                "ReactJs",
                2000,
                "JavaScript",
                2000,
                "Node.Js",
                2000,
                "PostgreSQL",
                2000,
                "Testing",
                2000,
                "Express.Js",
                2000,
              ]}
              speed={5} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: "1.5em" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
          </h3>
        </span>
        <div className="about-me">
          <p>
            Mis tecnologías principales son ReactJS, JavaScript , Nodejs y
            PostgreSQL además de HTML/CSS cuento con mas de 1 año de experiencia
            en proyectos personales.
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
};

export default Main;
