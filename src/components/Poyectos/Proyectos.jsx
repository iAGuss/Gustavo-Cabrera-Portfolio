import React from "react";

import "./proyectos.css";
import Cartap from "../cartaproyectos/Cartap";
import listaproyectos from "../../constantes/listaproyectos";
function Proyectos() {
  return (
    <section className="Padre-proyectos">
      <div className="Tipo-de-proyectos">
        <span>Proyectos</span>
      </div>
      <div data-aos="zoom-in" className="container">
        {listaproyectos.map((proyecto) => (
          <Cartap
            key={proyecto.name}
            name={proyecto.name}
            imagen={proyecto.imagen}
            descripcion={proyecto.descripcion}
            GitHub={proyecto.GitHub}
          />
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
