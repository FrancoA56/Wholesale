import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import imagen from "../media/imagenes/madeleine/4.jpg";

function PopupNewLines() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const alreadySeen = localStorage.getItem("popupNewLines");

    if (location.pathname === "/ar" && !alreadySeen) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("popupNewLines", "true");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [location]);

  const closePopup = () => {
    setOpen(false);
    localStorage.setItem("popupNewLines", "true");
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">

      <div className="bg-white max-w-5xl w-full rounded-xl shadow-xl relative overflow-hidden min-h-[320px]">

        {/* botón cerrar */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-[1.2fr_1fr] h-full">

          {/* imagen */}
          <div className="overflow-hidden">
            <img
              src={imagen}
              alt="Nueva línea Madeleine"
              className="w-full h-full object-cover"
            />
          </div>

          {/* texto */}
          <div className="p-10 flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">
              Nuevas líneas de Emile Henry
            </h2>

            <p className="text-gray-600 text-xl mb-6">
              Acabamos de incorporar dos nuevas líneas de Emile Henry.
              <br />
              Descubrí los nuevos productos disponibles.
            </p>

            <a
              href="/ar/new"
              className="inline-block bg-tono1 md:mr-auto mr-0 text-white px-6 py-3 rounded hover:opacity-90 transition"
            >
              Ver novedades
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PopupNewLines;