import React from "react";
import wholesaleLogo from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";

function Head() {
  const idioma = localStorage.getItem("ubicacion");

  return (
    <>
      {idioma === "ar" ? (
        <div className="bg-fondo bg-cover bg-center h-screen flex justify-center items-center">
          <div className="bg-gradient-to-t from-black/90 to-black/0 h-screen w-screen flex justify-center items-end">
            <img
              src={wholesaleLogo}
              alt="wholesale dyr venta mayorista ooni emile henry boj mauviel1830"
              className="sm:w-1/3 w-1/2 h-auto flex justify-center items-center  mb-24"
            />
            <hr className="absolute bottom-20 text-tono5 w-5/6" />
            <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
              Únicamente venta mayorista
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-fondoUy bg-cover bg-center h-screen flex justify-center items-center">
          <div className="bg-gradient-to-t from-black/90 to-black/0 h-screen w-screen flex justify-center items-end">
            <img
              src={wholesaleLogo}
              alt="wholesale dyr venta mayorista ooni emile henry boj mauviel1830"
              className="sm:w-1/3 w-1/2 h-auto flex justify-center items-center  mb-24"
            />
            <hr className="absolute bottom-20 text-tono5 w-5/6" />
            <div className="absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
              Únicamente venta mayorista
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Head;
