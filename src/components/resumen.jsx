import React, { useState, useEffect, useRef } from "react";
import ooniLogo from "../media/imagenes/Ooni-logo negro png.png";
import EmileHenry from "../media/imagenes/EmileHenry-02.png";
import mauvile from "../media/imagenes/logoMauvielNegro.png";
import "../styles/resumen.css";

function Resumen() {
  const [isVisibleOoni, setIsVisibleOoni] = useState(false);
  const [isVisibleEmileHenry, setIsVisibleEmileHenry] = useState(false);
  const [isVisibleMauviel, setIsVisibleMauviel] = useState(false);

  const ooniRef = useRef(null);
  const emileHenryRef = useRef(null);
  const mauvielRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const topOoni = ooniRef.current
        ? ooniRef.current.getBoundingClientRect().top
        : null;
      const topEmileHenry = emileHenryRef.current
        ? emileHenryRef.current.getBoundingClientRect().top
        : null;
      const topMauviel = mauvielRef.current
        ? mauvielRef.current.getBoundingClientRect().top
        : null;

      if (topOoni !== null) setIsVisibleOoni(topOoni < window.innerHeight);
      if (topEmileHenry !== null)
        setIsVisibleEmileHenry(topEmileHenry < window.innerHeight);
      if (topMauviel !== null)
        setIsVisibleMauviel(topMauviel < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="grid grid-rows-2 py-3">
        <div className="font-gothamB text-gray-700 text-semititulo flex justify-center items-center text-start">
          Nuestras marcas
        </div>
        <div className="text-gray-700 font-gothamBI flex text-subtitulo justify-center items-center text-start">
          Representamos y distribuimos las marcas premium
        </div>
      </div>

      <hr className="border-tono1 mx-12" />
      <div
        ref={ooniRef}
        className={`animated-section ${isVisibleOoni ? "slide-in-left" : ""}`}
      >
        <div className="grid grid-cols-2 justify-center py-6 mt-6">
          <div className="col-span-1">
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/nweqeRpTUiE"
                width="560"
                height="315"
                title="Ooni video presentacion"
                frameborder="0"
                allowfullscreen=""
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center pb-6">
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center mb-6">
                <a
                  href="/ooni"
                  className="w-1/4 justify-center text-center mr-12"
                >
                  <img
                    src={ooniLogo}
                    alt="ooniLogo"
                    className="hover:scale-125  transition duration-300 ease-in-out transform "
                  />
                </a>
              </div>
              <div className="mr-12">
                <hr className="px-12 border-black" />

                <div className="text-gray-700 font-gothamB text-subtitulo pt-6 pb-4">
                  Ooni se especializa en hornos de pizza al aire libre de alta
                  temperatura para clientes residenciales.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-tono1 mx-12" />
      <div
        ref={emileHenryRef}
        className={`animated-section-right ${
          isVisibleEmileHenry ? "slide-in-right" : ""
        }`}
      >
        <div className="grid grid-cols-2 justify-center py-6 mt-6">
          <div className="col-span-1 flex justify-center items-center pb-6">
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center mb-6">
                <a
                  href="/emileHenry "
                  className="w-1/3 justify-center text-center ml-12"
                >
                  <img
                    src={EmileHenry}
                    alt="EmileHenry"
                    className="hover:scale-125 transition duration-300 ease-in-out transform "
                  />
                </a>
              </div>
              <div className="ml-12">
                <hr className="px-12 border-black" />

                <div className="text-gray-700 font-gothamB text-subtitulo pt-6 pb-4">
                  Emile Henry es un fabricante francés de hornos de cerámica,
                  vajilla y utensilios de cocina.
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/O_QxcX-ja-4"
                width="560"
                height="315"
                frameborder="0"
                allowfullscreen=""
                title="EmileHenry video presentacion"
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-tono1 mx-12" />
      <div
        ref={mauvielRef}
        className={`animated-section ${
          isVisibleMauviel ? "slide-in-right" : ""
        }`}
      >
        <div className="grid grid-cols-2 justify-center py-6 mt-6">
          <div className="col-span-1">
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/9pU8luInGtw"
                width="560"
                height="315"
                title="Mauviel video presentacion"
                frameborder="0"
                allowfullscreen=""
                className="rounded-xl"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center pb-6">
            <div className="grid grid-rows-2">
              <div className="flex justify-center items-center mb-6">
                <a
                  href="/mauviel1830"
                  className="w-1/2 justify-center text-center mr-12"
                >
                  <img
                    src={mauvile}
                    alt="mauvile"
                    className="hover:scale-125 transition duration-300 ease-in-out transform "
                  />
                </a>
              </div>
              <div className="mr-12">
                <hr className="px-12 border-black" />

                <div className="text-gray-700 font-gothamB text-subtitulo pt-6 pb-4">
                  Lorem ipsum dolor sit consectetuer adipiscing elit sed diam
                  nonummy nibh euismod tincidunt.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6"></div>
    </>
  );
}

export default Resumen;
