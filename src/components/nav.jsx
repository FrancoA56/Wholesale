import React from "react";
import wsBlanco from "../media/imagenes/MONOGRAMA-WHOLESALE-BLANCO.png";

function Nav() {
  return (
    <div className="bg-tono2 text-tono5 text-parrafo font-BodoniB">
      <div className="flex justify-between items-center py-1 px-3">
        {/* Agregar la imagen a la izquierda */}
        <img className="w-12" src={wsBlanco} alt="wholesale logo" />
        {/* Elementos principales alineados a la derecha */}
        <div className="flex gap-6">
          <div className="">Contacto</div>
          <div className="">Acerca de</div>
          <div className="bg-tono3 px-2 rounded-md">Registrarse</div>
          <div className="">Ingresar</div>
          <div className="grid grid-cols-3 gap-3">
            <a>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
