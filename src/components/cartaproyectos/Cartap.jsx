import React from "react";
import "./cartap.css";

export default function Cartap(proyecto) {
  return (
    <div id="Contenedor-proyecto">
      <div className="Imagen-here-proyectos">
        <img className="imagen" src={proyecto.imagen} alt="" />

        <a target="_blank" href={proyecto.GitHub} rel="noopener noreferrer">
          <div className="informacion-proyecto">
            <h2>{proyecto.name}</h2>
            <section>{proyecto.descripcion}</section>
          </div>
        </a>
      </div>
    </div>
  );
}
