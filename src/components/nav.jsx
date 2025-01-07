import React from "react";
import wsAzul from "../media/imagenes/logoAzul.webp";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav className="bg-tono5 absolute text-black mt-10 font-gothamB h-auto w-screen z-30 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src={wsAzul} className="w-20" alt="Logo Azul" />
      </a>

      {/* Links de navegación */}
      <div className="flex gap-10">
        <a
          href="/emilehenry"
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/emilehenry" ? "text-tono2" : "hover:text-tono2"
          }`}
        >
          E M I L E &#8194;H E N R Y
        </a>
        <div className="text-parrafo">|</div>
        <a
          href="/ooni"
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/ooni" ? "text-tono2" : "hover:text-tono2"
          }`}
        >
          O O N I
        </a>
        <div className="text-parrafo">|</div>
        <a
          href="/boj"
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/boj" ? "text-tono2" : "hover:text-tono2"
          }`}
        >
          B O J
        </a>
        <div className="text-parrafo">|</div>
        <a
          href="/mauviel1830"
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/mauviel1830" ? "text-tono2" : "hover:text-tono2"
          }`}
        >
          M A U V I E L 1 8 3 0
        </a>
      </div>
      <div></div>
    </nav>
  );
}

export default Nav;
