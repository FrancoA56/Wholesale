import React from "react";
import logoWholesale from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function Footer() {
  const tel = "011-2305-3139";
  const wsp = "5491123053139";

  const copiarTel = () => {
    navigator.clipboard.writeText(tel);
    toast.info("Número de telefono copiado");
  };
  const copiarWsp = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const url = isMobile ? `https://wa.me/${wsp}` : `https://web.whatsapp.com/send?phone=${wsp}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} />
      <footer className="text-center bg-tono1 py-4 items-end pt-12 text-tono5 ">
        <div className="grid sm:flex grid-rows-3 gap-12 sm:gap-0 pb-8">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={logoWholesale}
              alt="logoWholesale"
              className="w-80 h-auto"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="flex flex-col text-parrafo sm:mt-4 mt-0 sm:gap-0 gap-4">
              <div className="flex relative right-8">Contáctanos en:</div>
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
                style={{ cursor: "pointer", border: 'none', background: 'none', padding: '0', margin: '0' }}
                onClick={copiarWsp}
              >
                <i className="fa-brands fa-whatsapp mr-2 mt-1 text-subtitulo"></i>
                +54 9 11-2305-3139
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center text-parrafo">
            <div className="grid grid-col-1">
              <div className="flex grid-span-1 pl-4">Siguenos en:</div>
              <div className="grid-span-1 items-start justify-start hover:scale-110 transition duration-300 ease-in-out transform ">
                <div className="grid grid-cols-2 items-start justify-start">
                  <div className="grid-span-1 text-center justify-start">
                    <a
                      href="https://www.facebook.com/wholesale.dyr/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa-brands fa-facebook w-0 ml-3"></i>
                    </a>
                  </div>
                  <div className=" grid-span-1">
                    <a
                      href="https://www.facebook.com/wholesale.dyr/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex justify-start"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid-span-1 items-start justify-start hover:scale-110 transition duration-300 ease-in-out transform">
                <div className="grid grid-cols-2 items-start justify-start">
                  <div className="grid-span-1 text-center justify-start">
                    <a
                      href="https://www.instagram.com/wholesale.dyr/"
                      target="_blank"
                      rel="noreferrer"
                      className="pl-4"
                    >
                      <i className="fa-brands fa-instagram w-0 mr-0.5"></i>

                    </a>
                  </div>
                  <a
                    href="https://www.instagram.com/wholesale.dyr/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className=" grid-span-1">Instagram</div>
                  </a>
                </div>
              </div>
              <div className="grid-span-1 items-start justify-start hover:scale-110 transition duration-300 ease-in-out transform">
                <div className="grid grid-cols-2 items-start justify-start">
                  <div className="grid-span-1 text-center justify-start">
                    <a
                      href="https://www.linkedin.com/company/wholesale-by-d-r/"
                      target="_blank"
                      rel="noreferrer"
                      className="pl-4"
                    >
                      <i className="fa-brands fa-linkedin w-0 mr-0.5"></i>
                    </a>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/wholesale-by-d-r/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-start"
                  >
                    <div className=" grid-span-1">Linkedin</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white">
          © Wholesale by D & R 2024. Todos los derechos reservados.
        </p>
      </footer>
    </>
  );
}

export default Footer;
