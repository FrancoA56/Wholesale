import React from "react";
import Head from "./head.jsx";
import Resumen from "./resumen.jsx";
import Banner from "./banner";

function Home() {
  return (
    <div className="font-gothamB">
      <Head />
      <Banner />
      <Resumen />
    </div>
  );
}

export default Home;
