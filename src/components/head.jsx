import React from "react";
import hornosOoni from "../media/imagenes/hornosOoni.jpeg";
import emile1 from "../media/imagenes/emile 1.jpeg";
import emile2 from "../media/imagenes/emile 2.jpeg";
import emile3 from "../media/imagenes/emile 3.jpeg";
import emile4 from "../media/imagenes/emile 4.jpeg";
import emile5 from "../media/imagenes/emile 5.jpeg";
import ooniBlanco from "../media/imagenes/Ooni-04.png";
import emilyBlanco from "../media/imagenes/EmileHenry-logo blanco png.png";
import ooniHorno from "../media/imagenes/ooni horno.jpeg"
import ooniHornoFull from "../media/imagenes/ooni horno full.jpeg"

function Head() {
  return (
    <>
      <div className=""></div>
      <div className="flex ">
        <img className="w-1/5" src={emile2} alt="emile henry" />
        <img className="w-1/5" src={ooniHorno} alt="Ooni" />
        <img className="w-1/5" src={emile3} alt="emile henry" />
        <img className="w-1/5" src={ooniHornoFull} alt="Ooni" />
        <img className="w-1/5" src={emile5} alt="emile henry" />
      </div>
    </>
  );
}

export default Head;
