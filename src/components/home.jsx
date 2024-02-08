import React from "react";
import Head from "./head.jsx";
import Footer from "./footer.jsx";
import Resumen from "./resumen.jsx";
import Nav from "./nav.jsx";


function Home() {
  return (
    <div className="font-gothamB">
      <Nav />
      <Head />  
      <Resumen />
      <Footer />
    </div>
  );
}

export default Home;