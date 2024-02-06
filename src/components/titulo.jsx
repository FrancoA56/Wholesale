import React from "react";
import logoAzul from "../media/imagenes/LOGO-WHOLESALE-AZUL.png";

function Titulo() {
  return (
    <div className="bg-tono3 flex justify-center py-12">
      {/* Moví la clase justify-end al contenedor principal */}
      <div className="flex justify-start">
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <img className="" src={logoAzul} alt="" /> {/* No es necesario utilizar flex aquí */}
    </div>
  );
}

export default Titulo;
