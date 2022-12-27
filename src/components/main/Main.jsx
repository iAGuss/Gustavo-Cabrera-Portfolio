import React from "react";
import Typewriter from "typewriter-effect";
import "./main.css";
import foto from "../../assets/IMG_20220809_164244 (2)-min.jpg";
import Cv from "../../assets/CV-Gus Full Stack Web Developer.pdf";
import Linkedin from "../../assets/linkedin.png";

const Main = () => {
  return (
    <main className="padre-main">
      <div className="texto-precentacion">
        <h2 className="Mi-nombre">
          Hola 👋 <br /> soy Gustavo
        </h2>
        <span className="skills">
          <h2 className="Full-Stack">Full stack web Developer Junior</h2>
          <h3 className="Tectologia">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .start()
                  .typeString("React")

                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Node.js")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("PostgreSQL")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString(" Testing")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Express.js")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("JavaScript")
                  .pauseFor(1000)

                  .start();
              }}
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
