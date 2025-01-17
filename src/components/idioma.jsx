import React from "react";
import wholesaleLogo from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";
import argentina from "../media/imagenes/argentina.webp";
import uruguay from "../media/imagenes/uruguay.webp";

function Idioma() {
  const setUbicacion = (ubicacion) => {
    localStorage.setItem("ubicacion", ubicacion);
  };

  return (
    <div className="font-gothamB bg-fondoPrincipal bg-cover bg-center h-screen flex justify-center items-center relative">
      {/* Imagen movida a la esquina superior izquierda */}

      <div className="bg-negro h-screen w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <img
            src={wholesaleLogo}
            alt="wholesale dyr venta mayorista ooni emile henry boj mauviel1830 argentina uruguay"
            className=" w-96 h-auto hover:scale-110 transition duration-300 ease-in-out transform mb-12"
          />
          <div className="flex gap-8">
            {/* Botones alineados horizontalmente */}

            <a
              className=" shadow-xl transition transform ease-in-out hover:scale-110 hover:bg-tono1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="/ar"
              onClick={() => setUbicacion("ar")}
            >
              <img
                src={argentina}
                alt="Argentina Wholesale DYR"
                className="w-10 h-7 mr-2 inline"
              />
              Argentina
            </a>
            <a
              className=" shadow-xl transition transform ease-in-out hover:scale-110 hover:bg-tono1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="/uy"
              onClick={() => setUbicacion("uy")}
            >
              <img
                src={uruguay}
                alt="Uruguay Wholesale DYR"
                className="w-10 h-7 mr-2 inline rounded-lg"
              />
              Uruguay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Idioma;
