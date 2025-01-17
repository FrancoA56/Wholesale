import React from "react";
import logoWholesale from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Footer() {
  const tel = "011-2305-3139";
  const wsp = "5491123053139";
  const idioma = localStorage.getItem("ubicacion");

  const copiarTel = () => {
    navigator.clipboard.writeText(tel);
    toast.info("Número de telefono copiado");
  };
  const copiarWsp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile
      ? `https://wa.me/${wsp}`
      : `https://web.whatsapp.com/send?phone=${wsp}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <footer className="text-center bg-tono1 py-4 items-end pt-6 text-tono5 ">
        <div className="grid sm:flex grid-rows-3 gap-12 sm:gap-0 pb-8">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={logoWholesale}
              alt="wholesale dyr venta mayorista "
              className="w-80 h-auto"
            />
          </div>
          <div className="flex-1 flex justify-start sm:justify-center">
            <div className="flex flex-col text-parrafo sm:mt-4 mt-0 sm:gap-0 gap-4 sm:ml-0 ml-28 ">
              <div className="flex relative ">Contáctanos en:</div>
              <a
                href="mailto:hola@ws-dyr.com?subject=Solicitud%20de%20información&body=Hola%20equipo%20de%20nombre%20de%20tu%20empresa,%0D%0A%0D%0AQuisiera%20solicitar%20más%20información%20sobre%20sus%20servicios.%20Me%20interesa%20conocer%20sus%20métodos%20de%20trabajo,%20formas%20de%20pago%20disponibles%20y%20cualquier%20otra%20información%20relevante%20que%20puedan%20proporcionar.%0D%0A%0D%0AMuchas%20gracias%20por%20su%20atención.%0D%0A%0D%0ASaludos%20cordiales,%0D%0ATu%20nombre%20aquí"
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{ cursor: "pointer" }}
              >
                <i className="fa-regular fa-envelope mr-2 mt-1"></i>
                hola@ws-dyr.com
              </a>
              <a
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{ cursor: "pointer" }}
                onClick={copiarTel}
                href="tel:011-2305-3139"
              >
                <i className="fa-solid fa-phone mr-2 mt-1"></i>
                011-2305-3139
              </a>
              <button
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: "0",
                  margin: "0",
                }}
                onClick={copiarWsp}
              >
                <i className="fa-brands fa-whatsapp mr-2 mt-1 text-subtitulo"></i>
                +54 9 11-2305-3139
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-start sm:justify-center">
            <div className="flex flex-col text-parrafo sm:mt-4 mt-0 sm:gap-0 gap-4 sm:ml-0 ml-28 ">
              <div className="flex relative ">Síguenos en:</div>
              <a
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{ cursor: "pointer" }}
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook w-0 mr-6 mt-1"></i>
                Facebook
              </a>
              <a
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: "0",
                  margin: "0",
                }}
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram w-0 mr-6 mt-1"></i>
                Instagram
              </a>
              <a
                className="flex hover:scale-110 transition duration-300 ease-in-out transform"
                style={{
                  cursor: "pointer",
                  border: "none",
                  background: "none",
                  padding: "0",
                  margin: "0",
                }}
                href="https://www.linkedin.com/company/wholesale-by-d-r/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin w-0 mr-6 mt-1"></i>
                Linkedin
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="flex flex-col text-parrafo z-40 sm:mt-4 mt-0 sm:gap-0 gap-4">
              {idioma === "ar" ? (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6554.052052432209!2d-58.2262164!3d-34.7801201!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328d06d77b5a3%3A0xe6ab5b22c3a007a1!2sAv.%20Valent%C3%ADn%20Vergara%202164%2C%20B1884%20Berazategui%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1734108627815!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  className="rounded"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Mapa Wholesale DYR Argentina"
                ></iframe>
              ) : (
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.99990477172!2d-55.993251799999996!3d-34.78077770000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a027bc90d6489f%3A0x3d9a6f1b8d8d26ff!2sMirentex%20S.A.!5e0!3m2!1ses-419!2sar!4v1734109066037!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  className="rounded"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Mapa Wholesale DYR Argentina"
                ></iframe>
              )}
            </div>
          </div>
        </div>
        <hr className="border-white mx-2 mb-2" />

        <p className="text-white">
          © Wholesale by D & R 2024. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default Footer;
