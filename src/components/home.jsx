import React from "react";
import Head from "./head.jsx";
import Resumen from "./resumen.jsx";
// import Banner from "./banner";
import Newsletter from "./newsletter.jsx";

function Home() {
  return (
    <div className="font-gothamB">
      <Head />
      <Newsletter />
      {/* <Banner /> */}
      <Resumen />
    </div>
  );
}

export default Home;
