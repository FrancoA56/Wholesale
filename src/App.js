import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import AcercaDe from "./components/acercaDe";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
      </Routes>
    </div>
  );
}

export default App;
