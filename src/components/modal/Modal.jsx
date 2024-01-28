import React from "react";
import "./modal.css";
function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div>Contenido del modal</div>
      <button onClick={closeModal}>Cerrar modal</button>
    </div>
  );
}

export default Modal;
