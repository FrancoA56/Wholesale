import React from "react";
import Head from "./components/head.jsx";
import Titulo from "./components/titulo.jsx";
import Footer from "./components/footer.jsx";
import Resumen from "./components/resumen.jsx";
import Nav from "./components/nav.jsx";
import foto from "./media/aviones.png";
import "./App.css";

function App() {
  return (
    <div
      className="bg-cover items-center bg-center h-full bg-fixed"
      style={{ backgroundImage: `url(${foto})` }}
    >
      <Nav />
      <Titulo />
      <Head />
      <Resumen />
      <Footer />
    </div>
  );
}

export default App;
