import Header from "./Header/Header";
import Main from "./main/Main";
import Background from "./background/Background";

import Proyectos from "./Poyectos/Proyectos";
import React from "react";

function Principal() {
  return (
    <>
      <Background />
      <Header />
      <Main />
      <Proyectos />
    </>
  );
}

export default Principal;
