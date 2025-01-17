import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import AcercaDe from "./components/nosotros";
import Ooni from "./components/ooni";
import EmileHenry from "./components/emileHenry";
import Mauviel from "./components/mauviel";
import Boj from "./components/boj";
import Idioma from "./components/idioma";
import Nav from "./components/nav";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Preguntas from "./components/preguntas";
import axios from "axios";
import "./App.css";

function App() {
  const [start, setStart] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!start) {
      const startServer = async () => {
        try {
          const { data } = await axios.get(
            "https://wholesale-api.onrender.com/api/start"
          );
          if (data.message === "ok") {
            setStart(true);
          }
        } catch (error) {
          console.error("Error starting the server:", error);
        }
      };
      startServer();
    }
  }, [start]);

  // Determinar si mostrar NavBar y Footer
  const shouldShowNavAndFooter = location.pathname !== "/";

  // Determinar si mostrar Nav
  const shouldShowNav = ![
    "/ar/contacto",
    "/uy/contacto",
    "/ar/nosotros",
    "/uy/nosotros",
    "/uy/preguntas",
    "/ar/preguntas",
  ].includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavAndFooter && <NavBar />}
      {shouldShowNavAndFooter && shouldShowNav && <Nav />}
      <Routes>
        <Route path="/" element={<Idioma />} />
        <Route path="/ar" element={<Home />} />
        <Route path="/uy" element={<Home />} />
        <Route path="/ar/contacto" element={<Contact />} />
        <Route path="/uy/contacto" element={<Contact />} />
        <Route path="/ar/nosotros" element={<AcercaDe />} />
        <Route path="/uy/nosotros" element={<AcercaDe />} />
        <Route path="/ar/preguntas" element={<Preguntas />} />
        <Route path="/uy/preguntas" element={<Preguntas />} />
        <Route path="/ar/ooni" element={<Ooni />} />
        <Route path="/ar/emileHenry" element={<EmileHenry />} />
        <Route path="/uy/emileHenry" element={<EmileHenry />} />
        <Route path="/ar/mauviel1830" element={<Mauviel />} />
        <Route path="/uy/mauviel1830" element={<Mauviel />} />
        <Route path="/ar/boj" element={<Boj />} />
      </Routes>
      {shouldShowNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
