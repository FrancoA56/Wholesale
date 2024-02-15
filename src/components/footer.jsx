import React from "react";
import logoWholesale from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";

function Footer() {
  return (
    <footer className="text-center bg-tono1 bg-opacity-80 py-4 items-end pt-12 text-tono5 ">
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
            <div className="flex">Email: Example@gmail.com</div>
            <div className="flex">Tel: 011-2305-3139</div>
            <div className="flex">Wsp: +54 9 11-2305-3139</div>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="grid grid-col-1">
            <div className="flex grid-span-1">Siguenos en:</div>
            <div className="grid-span-1 items-start justify-start hover:scale-125 transition duration-300 ease-in-out transform ">
              <div className="grid grid-cols-2 items-start justify-start">
                <div className="grid-span-1 text-start justify-start">
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
            <div className="grid-span-1 flex items-center">
              <div className="grid grid-cols-2 text-start justify-start hover:scale-125 transition duration-300 ease-in-out transform">
                <div className="grid-span-1 items-start justify-start">
                  <a
                    href="https://www.instagram.com/wholesale.dyr/"
                    target="_blank"
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
  );
}

export default Footer;
