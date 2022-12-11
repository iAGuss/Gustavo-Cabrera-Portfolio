import React from "react";
import "./header.css";

import Modal from "react-modal";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
const customStyles = {
  content: {
    width: "600px",
    height: "700px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "0",
    borderRadius: "30px",
  },
};

const Header = () => {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
      "service_x03yc6q",
      "template_hj4jtdu",
      event.target,
      "h6nLxn0VaIHERZe0f"
    );
    toast
      .success("El mensaje fue enviado correctamente!")
      .catch((error) => console.log(error));
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="header">
      <ul className="links">
        <li>About me</li>
        <li>
          <a href="#Contenedor-proyecto">Projects</a>
        </li>
        <li onClick={openModal}> Contact</li>
      </ul>
      <span className="guss">Guss</span>
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              X
            </span>
            <div className="contact">
              <h2>Contactame</h2>
              <form className="formulario" onSubmit={sendEmail}>
                <ul className="contactame-ul">
                  <li>
                    <label htmlFor="name">Nombre:</label>
                    <input
                      type="text"
                      required="required"
                      id="name"
                      name="user_name"
                    />
                  </li>
                  <li>
                    <label htmlFor="mail">Correo electrónico:</label>
                    <input
                      size="30"
                      type="email"
                      required="required"
                      id="mail"
                      name="user_mail"
                    />
                  </li>
                  <li>
                    <label htmlFor="text">Asunto</label>
                    <input
                      size="30"
                      type="text"
                      required="required"
                      id="asunto"
                      name="asunto_email"
                    />
                  </li>
                  <li id="textareaa">
                    <label htmlFor="msg">Mensaje:</label>
                    <textarea
                      style={{ resize: "none" }}
                      id="msg"
                      rows="4"
                      required="required"
                      cols="40"
                      name="user_message"
                    ></textarea>
                  </li>
                </ul>
                <button className="envio-formulario">Enviar</button>
              </form>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Header;