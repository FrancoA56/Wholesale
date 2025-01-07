import React from "react";
import wholesaleLogo from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";

function Head() {
  return (
    <>
      <div className="bg-fondo bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tonoblackb h-screen w-screen flex justify-center items-center">
          <img
            src={wholesaleLogo}
            alt="wholesale dyr venta mayorista ooni emile henry boj mauviel1830"
            className="sm:w-1/3 w-1/2 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
          />
          <hr className="absolute bottom-20 text-tono5 w-11/12"/>
          <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Argentina - Uruguay
          </div>
        </div>
      </div>
    </>
  );
}

export default Head;
