import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Contactame from "./components/contactame/contactame";
import Principal from "./components/principal";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Gustavo-Cabrera">
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/contactame" element={<Contactame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
