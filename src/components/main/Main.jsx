import React, { Component } from "react";

import "./main.css";
import foto from "../../assets/IMG_20220809_164244 (2)-min.jpg";
import Cv from "../../assets/CV-Gus Full Stack Web Developer.pdf";
import Linkedin from "../../assets/linkedin.png";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      words: [
        "React",
        "Node",
        "Express",
        "PostgreSQL",
        "Testing",
        "JavaScript",
      ],
      index: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        index: this.state.index + 1,
      });
    }, 2000);
  }

  render() {
    const { words, index } = this.state;

    return (
      <main className="padre-main">
        <div className="texto-precentacion">
          <h2 className="Mi-nombre">Hi, I'm Gustavo</h2>
          <span className="skills">
            <h2 className="Full-Stack">Full stack web Developer Junior</h2>
            <h3 className="Tectologia">{words[index % words.length]}</h3>
          </span>
          <div className="about-me">
            <p>
              Mis tecnologías principales son ReactJS, JavaScript , Nodejs y
              PostgreSQL además de HTML/CSS cuento con mas de 1 año de
              experiencia en proyectos personales.
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
}

export default Main;
