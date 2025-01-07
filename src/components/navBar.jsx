import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import PopupRegistro from "./register";

function NavBar() {
  const location = useLocation();

  const [popupOpen, setPopupOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed bg-tono1 text-white py-2 z-30 w-screen font-gothamBI pr-12">
      <div className="flex justify-end items-center px-4">
        {/* Logo o nombre de la empresa */}
        {/* Menú de navegación */}
        <div className="hidden sm:flex flex-row gap-6">
          {location.pathname !== "/" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/"
            >
              Inicio
            </a>
          )}
          {location.pathname !== "/contacto" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/contacto"
            >
              Contacto
            </a>
          )}
          {location.pathname !== "/nosotros" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/nosotros"
            >
              Nosotros
            </a>
          )}
          <a
            className="hover:scale-110 transition pointer duration-300 ease-in-out transform"
            href="https://app.holded.com/login?lang=es"
            target="_blank"
            rel="noreferrer"
          >
            Ingresar
          </a>
          <button
            onClick={() => setPopupOpen(true)}
            className="shadow-[0_4px_9px_-4px_#000000] font-gothamB bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform"
          >
            Registrarse
          </button>

          {/* Redes sociales */}
          <div className="flex gap-3">
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="https://www.facebook.com/wholesale.dyr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="https://www.instagram.com/wholesale.dyr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Menú móvil */}
        <div className="sm:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {menuOpen && (
        <div className="flex flex-col items-center gap-4 bg-tono1 text-white py-4 sm:hidden">
          {location.pathname !== "/" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/"
            >
              Inicio
            </a>
          )}
          {location.pathname !== "/contacto" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/contacto"
            >
              Contacto
            </a>
          )}
          {location.pathname !== "/nosotros" && (
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="/nosotros"
            >
              Nosotros
            </a>
          )}
          <a
            className="hover:scale-110 transition pointer duration-300 ease-in-out transform"
            href="https://app.holded.com/login?lang=es"
            target="_blank"
            rel="noreferrer"
          >
            Ingresar
          </a>
          <button
            onClick={() => setPopupOpen(true)}
            className="shadow-[0_4px_9px_-4px_#000000] font-gothamB bg-tono3 px-4 py-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform"
          >
            Registrarse
          </button>

          {/* Redes sociales */}
          <div className="flex gap-3">
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="https://www.facebook.com/wholesale.dyr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              className="hover:scale-110 transition duration-300 ease-in-out transform"
              href="https://www.instagram.com/wholesale.dyr/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      )}
      {popupOpen ? (
        <PopupRegistro isOpen={popupOpen} isClose={() => setPopupOpen()} />
      ) : (
        <div />
      )}
    </div>
  );
}
export default NavBar;
