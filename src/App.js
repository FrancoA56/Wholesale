import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import AcercaDe from "./components/acercaDe";
import Ooni from "./components/ooni";
import EmileHenry from "./components/emileHenry";
import Mauviel from "./components/mauviel";
import Boj from "./components/boj";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/acercaDe" element={<AcercaDe />} />
        <Route path="/ooni" element={<Ooni />} />
        <Route path="/emileHenry" element={<EmileHenry />} />
        <Route path="/mauviel1830" element={<Mauviel />} />
        <Route path="/boj" element={<Boj />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
