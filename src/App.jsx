import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header/Header";
import Modal from "./components/modal/Modal";
import Background from "./components/background/Background";
import Main from "./components/main/Main";
import Proyectos from "./components/Poyectos/Proyectos";
function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <Header openModal={openModal} />
      {modalOpen && <Modal closeModal={closeModal} />}
      <Background />
      <Main />
      <Proyectos />
    </div>
  );
}

export default App;
