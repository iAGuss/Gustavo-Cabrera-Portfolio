import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./modal.css";
function Modal({ closeModal }) {
  function sendEmail(e) {
    e.preventDefault();

    const user_name = e.target.user_name.value;
    const user_mail = e.target.user_mail.value;
    const user_message = e.target.user_message.value;
    const notify = () => toast("Mensaje enviado!");

    if (user_name && user_mail && user_message) {
      emailjs
        .sendForm(
          "service_pptd61s",
          "template_hj4jtdu",
          e.target,
          "h6nLxn0VaIHERZe0f"
        )
        .then(
          (result) => {
            console.log(result.text);
            notify();
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    } else {
      alert("Por favor complete todos los campos.");
    }
  }

  return (
    <section className="seccion-modal">
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h2>Contacto</h2>
          <form onSubmit={sendEmail}>
            <label htmlFor="user_name">Nombre:</label>
            <input type="text" id="user_name" name="user_name" />
            <label htmlFor="user_mail">Email:</label>
            <input type="email" id="user_mail" name="user_mail" />
            <label htmlFor="user_message">Mensaje:</label>
            <textarea id="user_message" name="user_message"></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        top="20px"
        autoClose={2500}
        closeOnClick
        rtl={false}
        theme="dark"
      />
    </section>
  );
}

export default Modal;
