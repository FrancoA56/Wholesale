import React from "react";
import mauvielLogo from "../media/imagenes/logoMauvielBlanco.png"

function Mauviel() {
  return (
    <>
      <div className="bg-fondoMauviel bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tono1b h-screen w-screen flex justify-center items-center">
          <img
            src={mauvielLogo}
            alt="wholesaleLogo"
            className="w-1/3 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12"/>
          <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 hover:scale-125 transition duration-300 ease-in-out transform">
            Normandia - Francia
          </div>
        </div>
      </div>
    </>
  );
}

export default Mauviel;
