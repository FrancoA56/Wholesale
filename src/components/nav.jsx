import React, { useState } from "react";
import wsAzul from "../media/imagenes/logoAzul.webp";
import { useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const idioma = localStorage.getItem("ubicacion");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-tono5 absolute text-black mt-10 font-gothamB h-auto w-full z-25 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <a href={`/${idioma || "ar"}`} className="flex items-center">
        <img src={wsAzul} className="w-20" alt="Logo Azul" />
      </a>

      {/* Links de navegación */}
      <div className="sm:flex gap-10 hidden ">
        <a
          href={`/${idioma || "ar"}/emilehenry`}
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/ar/emilehenry" ||
            location.pathname === "/uy/emilehenry"
              ? "text-tono2"
              : "hover:text-tono2"
          }`}
        >
          E M I L E &#8194;H E N R Y
        </a>
        <div className="text-parrafo">|</div>
        {idioma === "ar" && (
          <>
            <a
              href="/ar/ooni"
              className={`transition-colors duration-300 text-parrafo ${
                location.pathname === "/ar/ooni"
                  ? "text-tono2"
                  : "hover:text-tono2"
              }`}
            >
              O O N I
            </a>
            <div className="text-parrafo">|</div>
          </>
        )}
        {idioma === "ar" && (
          <>
            <a
              href="/ar/boj"
              className={`transition-colors duration-300 text-parrafo ${
                location.pathname === "/ar/boj"
                  ? "text-tono2"
                  : "hover:text-tono2"
              }`}
            >
              B O J
            </a>
            <div className="text-parrafo">|</div>
          </>
        )}
        <a
          href={`/${idioma || "ar"}/mauviel1830`}
          className={`transition-colors duration-300 text-parrafo ${
            location.pathname === "/ar/mauviel1830" ||
            location.pathname === "/uy/mauviel1830"
              ? "text-tono2"
              : "hover:text-tono2"
          }`}
        >
          M A U V I E L 1 8 3 0
        </a>
      </div>
      <div></div>
      {!menuOpen && (
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden flex items-center text-parrafo font-gothamB"
        >
          M A R C A S
        </div>
      )}

      {menuOpen && (
        <div className="flex flex-col gap-2 text-end">
          <a
            href={`/${idioma || "ar"}/emilehenry`}
            className={`transition-colors duration-300 text-parrafo ${
              location.pathname === "/ar/emilehenry" ||
              location.pathname === "/uy/emilehenry"
                ? "text-tono2"
                : "hover:text-tono2"
            }`}
          >
            E M I L E &#8194;H E N R Y
          </a>{" "}
          {idioma === "ar" && <hr />}
          {idioma === "ar" && (
            <>
              <a
                href="/ar/ooni"
                className={`transition-colors duration-300 text-parrafo ${
                  location.pathname === "/ar/ooni"
                    ? "text-tono2"
                    : "hover:text-tono2"
                }`}
              >
                O O N I
              </a>
            </>
          )}{" "}
          {idioma === "ar" && <hr />}
          {idioma === "ar" && (
            <>
              <a
                href="/ar/boj"
                className={`transition-colors duration-300 text-parrafo ${
                  location.pathname === "/ar/boj"
                    ? "text-tono2"
                    : "hover:text-tono2"
                }`}
              >
                B O J
              </a>
            </>
          )}{" "}
          <hr />
          <a
            href={`/${idioma || "ar"}/mauviel1830`}
            className={`transition-colors duration-300 text-parrafo ${
              location.pathname === "/ar/mauviel1830" ||
              location.pathname === "/uy/mauviel1830"
                ? "text-tono2"
                : "hover:text-tono2"
            }`}
          >
            M A U V I E L 1 8 3 0
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
