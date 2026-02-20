import React, { useEffect, useState } from "react";
import wholesaleLogo from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";
import fondoAr from "../media/imagenes/principalAr.webp";
import fondoArMobil from "../media/imagenes/principalArMobil.webp";
import fondoAr2 from "../media/imagenes/bannerAr2.webp";
import fondoAr2Mobil from "../media/imagenes/bannermobil.webp";

function Head() {
  const idioma = localStorage.getItem("ubicacion");

  const [currentBg, setCurrentBg] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const [showText, setShowText] = React.useState(false);

  // Detectar resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fondos según dispositivo
  const backgrounds = isMobile
    ? [fondoArMobil, fondoAr2Mobil] // en mobile solo una imagen (podés agregar más)
    : [fondoAr, fondoAr2];

  // Animación solo si hay más de 1 imagen
  useEffect(() => {
    if (idioma === "ar" && backgrounds.length > 1) {
      const interval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % backgrounds.length);
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [idioma, backgrounds.length]);

  React.useEffect(() => {
    if (currentBg === 1) {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 300); // ⬅ retraso de 0.5s

      return () => clearTimeout(timeout);
    } else {
      setShowText(false);
    }
  }, [currentBg]);

  return (
    <>
      {idioma === "ar" ? (
        <div
          className="bg-cover bg-center h-screen flex justify-center items-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${backgrounds[currentBg]})`,
          }}
        >
          <div className="bg-gradient-to-t from-black/50 to-black/0 h-screen w-screen flex justify-center items-end">
            {showText && (
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 transition-opacity duration-1000 animate-fadeIn">
                <h2 className="text-4xl sm:text-6xl font-BodoniB mb-2">
                  Nueva Línea Madeleine
                </h2>
                <p className="text-lg sm:text-2xl font-gothamB">
                  Tradición francesa en cada detalle
                </p>
              </div>
            )}
            <img
              src={wholesaleLogo}
              alt="wholesale dyr venta mayorista ooni emile henry boj mauviel1830"
              className={`sm:w-1/3 w-1/2 h-auto mb-24 transition-opacity duration-1000 ${
                isMobile
                  ? "opacity-100"
                  : currentBg === 0
                    ? "opacity-100"
                    : "opacity-0"
              }`}
            />
            <hr className="absolute bottom-20 text-tono5 w-5/6" />
            <div className="absolute bottom-24 md:bottom-10 text-parrafo font-gothamB text-tono5">
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
              className="sm:w-1/3 w-1/2 h-auto mb-24"
            />
            <hr className="absolute bottom-20 text-tono5 w-5/6" />
            <div className="absolute bottom-24 md:bottom-10 text-parrafo font-gothamB text-tono5">
              Únicamente venta mayorista
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Head;
