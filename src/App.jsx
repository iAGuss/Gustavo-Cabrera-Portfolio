import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";

import Main from "./components/main/Main";
import Background from "./components/background/Background";
import { Toaster } from "react-hot-toast";
import Proyectos from "./components/Poyectos/Proyectos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Background />
      <Header />
      <Main />
      <Proyectos />
    
      <Toaster />
    </div>
  );
}

export default App;
