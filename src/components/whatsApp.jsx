import Imagen from "../media/imagenes/whatsapp.png";
import { useState, useRef } from "react";
import AlertWsp from "./alertWsp";
import ReactPixel from "react-facebook-pixel";

function WhatsApp() {
  const [hover, setHover] = useState(false);
  const hideTimeout = useRef(null);
  const wsp = "5491131618802";

  const copiarWsp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${wsp}`
      : `https://web.whatsapp.com/send?phone=${wsp}`;
    window.open(url, "_blank");
    ReactPixel.track("Contacto", { method: "WhatsApp" });
  };

  const handleMouseEnter = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setHover(true);
  };

  const handleMouseLeave = () => {
    hideTimeout.current = setTimeout(() => {
      setHover(false);
    }, 300); // Espera 500ms antes de ocultar
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hover && <AlertWsp />}
      <button
        onClick={copiarWsp}
        className=" bg-white rounded-full transition-transform hover:scale-110 focus:outline-none"
        aria-label="Contactar por WhatsApp"
      >
        <img
          src={Imagen}
          alt="Icono de WhatsApp"
          className="w-16 h-16 "
        />
      </button>
    </div>
  );
}

export default WhatsApp;
