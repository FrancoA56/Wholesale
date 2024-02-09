import React from "react";
import logoWholesale from "../media/imagenes/LOGO-WHOLESALE-BLANCO.png";

function Footer() {
  return (
    <footer className="text-center bg-tono1 bg-opacity-80 py-4 items-end mt-12">
      <div className="flex my-12">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={logoWholesale}
            alt="logoWholesale"
            className="hover:scale-110 transition duration-300 ease-in-out transform"
          />
        </div>
        <div className="flex-1 flex justify-center items-center text-tono5">
          <div className="flex flex-col">
            <div>Email: Example@gmail.com</div>
            <div className="flex">Tel: 011-2305-3139</div>
            <div>Wsp: +54 9 11-2305-3139</div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                className="hover:scale-150 transition duration-300 ease-in-out transform "
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:scale-150 transition duration-300 ease-in-out transform"
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
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
