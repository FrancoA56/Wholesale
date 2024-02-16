import React from "react";
import logoWholesale from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer  } from "react-toastify";


function Footer() {
  const email = "hola@ws-dyr.com";
  const tel = "011-2305-3139";
  const wsp = "+54 9 11-2305-3139";

  const copiarEmail = () => {
    navigator.clipboard.writeText(email);
    toast.info("Correo copiado");
  };
  const copiarTel = () => {
    navigator.clipboard.writeText(tel);
    toast.info("Número de telefono copiado");
  };
  const copiarWsp = () => {
    navigator.clipboard.writeText(wsp);
    toast.info("Número de Whats App copiado");
  };

  return (
    <>
    <ToastContainer position="top-right" autoClose={1500} />
    <footer className="text-center bg-tono1 py-4 items-end pt-12 text-tono5 ">
      <div className="flex pb-8">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={logoWholesale}
            alt="logoWholesale"
            className="w-80 h-auto hover:scale-110 transition duration-300 ease-in-out transform"
          />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex flex-col">
            <div
              className="flex hover:scale-110 transition duration-300 ease-in-out transform"
              style={{ cursor: "pointer" }}
              onClick={copiarEmail}
            >
              <i class="fa-regular fa-envelope mr-2 mt-1"></i>
              hola@ws-dyr.com
            </div>
            <div
              className="flex hover:scale-110 transition duration-300 ease-in-out transform"
              style={{ cursor: "pointer" }}
              onClick={copiarTel}
            >
              <i class="fa-solid fa-phone mr-2 mt-1"></i>
              011-2305-3139
            </div>
            <div
              className="flex hover:scale-110 transition duration-300 ease-in-out transform"
              style={{ cursor: "pointer" }}
              onClick={copiarWsp}
            >
              <i class="fa-brands fa-whatsapp mr-2 mt-1"></i>
              +54 9 11-2305-3139
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="grid grid-col-1">
            <div className="flex grid-span-1 pl-4">Siguenos en:</div>
            <div className="grid-span-1 items-start justify-start hover:scale-125 transition duration-300 ease-in-out transform ">
              <div className="grid grid-cols-2 items-start justify-start">
                <div className="grid-span-1 text-center justify-start">
                  <a
                    href="https://www.facebook.com/wholesale.dyr/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook w-0"></i>
                  </a>
                </div>
                <div className=" grid-span-1">
                  <a
                    href="https://www.facebook.com/wholesale.dyr/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-span-1 items-start justify-start hover:scale-125 transition duration-300 ease-in-out transform">
              <div className="grid grid-cols-2 items-start justify-start">
                <div className="grid-span-1 text-center justify-start">
                  <a
                    href="https://www.instagram.com/wholesale.dyr/"
                    target="_blank"
                    className="pl-4"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
                <a
                  href="https://www.instagram.com/wholesale.dyr/"
                  target="_blank"
                >
                  <div className=" grid-span-1">Instagram</div>
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
