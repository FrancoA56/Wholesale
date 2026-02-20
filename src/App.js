import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";
import Home from "./components/home";
import Contact from "./components/contact";
import AcercaDe from "./components/nosotros";
import Ooni from "./components/ooni";
import EmileHenry from "./components/emileHenry";
import EmileHenryUy from "./components/emileHenryUy";
import Mauviel from "./components/mauviel";
import Boj from "./components/boj";
import Idioma from "./components/idioma";
import Nav from "./components/nav";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Preguntas from "./components/preguntas";
import Detail from "./components/detail";
import "./App.css";
import ScrollToTop from "./components/scrollToTop";
import WhatsApp from "./components/whatsApp";

// Inicializa Google Analytics una sola vez
ReactGA.initialize("G-2XXT6JCP8P");

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });

    if (window.gtag) {
      window.gtag("config", "G-DD8HG9DPML", {
        page_path: location.pathname,
      });
    }
  }, [location.pathname]);

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
    "/ar/detalle",
  ].includes(location.pathname);

  return (
    <div className="App">
      {shouldShowNavAndFooter && <NavBar />}
      {shouldShowNavAndFooter && shouldShowNav && <Nav />}
      <WhatsApp />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Idioma />} />
        <Route path="/ar" element={<Home />} />
        <Route path="/uy" element={<Home />} />
        <Route path="/ar/detalle" element={<Detail />} />
        <Route path="/ar/contacto" element={<Contact />} />
        <Route path="/uy/contacto" element={<Contact />} />
        <Route path="/ar/nosotros" element={<AcercaDe />} />
        <Route path="/uy/nosotros" element={<AcercaDe />} />
        <Route path="/ar/preguntas" element={<Preguntas />} />
        <Route path="/uy/preguntas" element={<Preguntas />} />
        <Route path="/ar/ooni" element={<Ooni />} />
        <Route path="/ar/emileHenry" element={<EmileHenry />} />
        <Route path="/uy/emileHenry" element={<EmileHenryUy />} />
        <Route path="/ar/mauviel1830" element={<Mauviel />} />
        <Route path="/uy/mauviel1830" element={<Mauviel />} />
        <Route path="/ar/boj" element={<Boj />} />
      </Routes>
      {shouldShowNavAndFooter && <Footer />}
    </div>
  );
}

export default App;
