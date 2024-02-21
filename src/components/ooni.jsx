import React from "react";
import ooniLogo from "../media/imagenes/Ooni-logo blanco png.png"

function Ooni() {
  return (
    <>
      <div className="bg-fondoOoni bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={ooniLogo}
            alt="wholesaleLogo"
            className="w-1/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12"/>
          <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 hover:scale-125 transition duration-300 ease-in-out transform">
          Edimburgo - Escocia
          </div>
        </div>
      </div>
    </>
  );
}

export default Ooni;
