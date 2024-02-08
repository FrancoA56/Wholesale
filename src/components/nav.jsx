import React from "react";
import wsBlanco from "../media/imagenes/MONOGRAMA-WHOLESALE-BLANCO.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="bg-tono1 text-tono5 text-parrafo font-BodoniB">
      <div className="flex justify-between items-center py-1 px-3">
        {/* Agregar la imagen a la izquierda */}
        <img className="w-12" src={wsBlanco} alt="wholesale logo" />
        {/* Elementos principales alineados a la derecha */}
        <div className="flex gap-6">
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/">
            Inicio
          </NavLink>
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/contacto">
            Contacto
          </NavLink>
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/acercaDe">
            Acerca de
          </NavLink>
          <a className="bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform">
            Registrarse
          </a>
          <a className="hover:scale-110 transition duration-300 ease-in-out transform">
            Ingresar
          </a>
          <div className="grid grid-cols-3 gap-3">
            <a className="hover:scale-110 transition duration-300 ease-in-out transform"  href="https://www.facebook.com" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="hover:scale-110 transition duration-300 ease-in-out transform"  href="https://www.instagram.com" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="hover:scale-110 transition duration-300 ease-in-out transform"  href="https://www.twitter.com" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
