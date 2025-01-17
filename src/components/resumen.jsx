import React, { useState, useEffect, useRef } from "react";
import ooniLogo from "../media/imagenes/Ooni-logo negro png.png";
import EmileHenry from "../media/imagenes/EmileHenry-02.png";
import mauvile from "../media/imagenes/logoMauvielNegro.png";
import boj from "../media/imagenes/logo boj negro.png";
import "../styles/resumen.css";

function Resumen() {
  const idioma = localStorage.getItem("ubicacion");

  const [isVisibleOoni, setIsVisibleOoni] = useState(false);
  const [isVisibleEmileHenry, setIsVisibleEmileHenry] = useState(false);
  const [isVisibleMauviel, setIsVisibleMauviel] = useState(false);
  const [isVisibleBoj, setIsVisibleBoj] = useState(false);

  const ooniRef = useRef(null);
  const emileHenryRef = useRef(null);
  const mauvielRef = useRef(null);
  const bojRef = useRef(null);

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
      const topBoj = bojRef.current
        ? bojRef.current.getBoundingClientRect().top
        : null;

      if (topOoni !== null) setIsVisibleOoni(topOoni < window.innerHeight);
      if (topEmileHenry !== null)
        setIsVisibleEmileHenry(topEmileHenry < window.innerHeight);
      if (topMauviel !== null)
        setIsVisibleMauviel(topMauviel < window.innerHeight);
      if (topBoj !== null) setIsVisibleBoj(topBoj < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="py-6">
        <div className="text-gray-700 font-gothamBI flex text-subtitulo justify-center items-center sm:text-start text-center sm:mx-0 mx-4">
          Representamos y distribuimos las mejores marcas premium reconocidas
          por su calidad y diseño para tu negocio.{" "}
        </div>
      </div>

      <hr className="border-tono1 mx-12" />
      {idioma !== "uy" && (
        <>
          <div
            ref={ooniRef}
            className={`animated-section ${
              isVisibleOoni ? "slide-in-left" : ""
            }`}
          >
            <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center py-6 mt-6 mb-6">
              <div className="col-span-1">
                <div className="flex justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/nweqeRpTUiE"
                    width="560"
                    height="315"
                    title="Ooni video presentacion Argentina DYR"
                    frameBorder="0"
                    allowFullScreen={true}
                    className="rounded-xl sm:mx-0 mx-4"
                  ></iframe>
                </div>
              </div>
              <div className="col-span-1 flex justify-center items-center pb-6">
                <div className="sm:grid sm:grid-rows-2 flex flex-col justify-center">
                  <div className="flex justify-center items-center mb-6">
                    <a
                      href="/ooni"
                      title="Argentina venta mayorista wholesale dyr ooni"
                      className="sm:w-1/4 w-1/3 justify-center text-center sm:mr-12 mr-0"
                    >
                      <img
                        src={ooniLogo}
                        alt="Argentina venta mayorista wholesale dyr ooni"
                        className="hover:scale-125  transition duration-300 ease-in-out transform sm:mt-0 mt-8"
                      />
                    </a>
                  </div>
                  <div className="sm:mr-12 sm:ml-0 flex flex-col justify-center mr-4 ml-4">
                    <hr className="border-black w-full" />
                    <div className="text-gray-700 font-gothamB text-subtitulo pt-6 pb-4">
                      Desde Escocia,{" "}
                      <h1 className="inline text-gray-700 font-gothamB text-subtitulo">
                        Ooni
                      </h1>{" "}
                      revoluciona la cocina al aire libre con hornos para pizza
                      que alcanzan los 500°C, perfectos para pizzas napolitanas
                      en minutos.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-tono1 sm:mx-12 mx-2" />
        </>
      )}
      <div
        ref={emileHenryRef}
        className={`animated-section-right ${
          isVisibleEmileHenry ? "slide-in-right" : ""
        }`}
      >
        <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center sm:h-96 h-auto py-6 mt-6 mb-6">
          <div className="sm:col-span-1 flex flex-col justify-center items-center ">
            <div className="sm:grid sm:grid-rows-2 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center mx-4">
                <a
                  href={`/${idioma || "ar"}/emileHenry`}
                  title="Argentina venta mayorista wholesale dyr emile henry"
                  className="sm:w-1/3 w-1/2 justify-center text-center sm:ml-28 ml-4 sm:mr-0 mr-4 pb-4"
                >
                  <img
                    src={EmileHenry}
                    alt="Argentina venta mayorista wholesale dyr emile henry ooni boj mauviel1830"
                    className="hover:scale-125 transition duration-300 ease-in-out transform"
                  />
                </a>
                <hr className="sm:ml-28  sm:mr-0 border-black w-full ml-4 mr-4" />
                <div className="text-gray-700 font-gothamB text-subtitulo pt-6 sm:ml-28 ml-4 mr-4 sm:mr-0">
                  Con más de 6 generaciones de experiencia,{" "}
                  <h1 className="inline text-gray-700 font-gothamB text-subtitulo">
                    Emile Henry
                  </h1>{" "}
                  crea cerámica artesanal en Borgoña, Francia, ideal para
                  fuentes, cacerolas y tajines.
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1 sm:mt-0 mt-4">
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/O_QxcX-ja-4"
                width="560"
                height="315"
                frameBorder="0"
                allowFullScreen={true}
                title="EmileHenry video presentacion Argentina DYR"
                className="rounded-xl sm:mx-0 mx-4"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-tono1 sm:mx-12 mx-2 sm:mt-0 mt-12" />
      <div
        ref={mauvielRef}
        className={`animated-section ${
          isVisibleMauviel ? "slide-in-right" : ""
        }`}
      >
        <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center py-6 mt-6">
          <div className="col-span-1">
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/9pU8luInGtw"
                width="560"
                height="315"
                title="Mauviel video presentacion Argentina DYR"
                frameBorder="0"
                allowFullScreen={true}
                className="rounded-xl sm:mx-0 mx-4"
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 flex justify-center items-center pb-6">
            <div className="sm:grid sm:grid-rows-2 flex flex-col">
              <div className="flex justify-center items-center sm:mb-6 h-40">
                <a
                  href={`/${idioma || "ar"}/mauviel1830`}
                  title="Argentina venta mayorista wholesale dyr mauviel1830"
                  className="sm:w-1/2 w-2/3 justify-center text-center sm:mr-12 mr-0"
                >
                  <img
                    src={mauvile}
                    alt="Argentina venta mayorista wholesale dyr emile henry ooni boj mauviel1830"
                    className="hover:scale-125 transition duration-300 ease-in-out transform"
                  />
                </a>
              </div>
              <div className="sm:mr-12 mr-0">
                <hr className="sm:mx-12 mx-4 border-black" />

                <div className="text-gray-700 font-gothamB text-subtitulo pt-6 pb-4">
                  Desde 1830,{" "}
                  <h1 className="inline text-gray-700 font-gothamB text-subtitulo">
                    Mauviel
                  </h1>{" "}
                  fabrica utensilios de cocina artesanales en Normandía,
                  presentes en más de 100 países y reconocidos por su alta
                  calidad.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {idioma !== "uy" && (
        <>
          <hr className="border-tono1 sm:mx-12 mx-2" />
          <div
            ref={bojRef}
            className={`animated-section-right ${
              isVisibleBoj ? "slide-in-right" : ""
            }`}
          >
            <div className="sm:grid sm:grid-cols-2 flex flex-col justify-center sm:h-96 h-auto mt-8 mb-6">
              <div className="sm:col-span-1 flex flex-col justify-center items-center ">
                <div className="sm:grid sm:grid-rows-2 flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center mx-4">
                    <a
                      href="/ar/boj"
                      title="Argentina venta mayorista wholesale dyr boj"
                      className="sm:w-1/3 w-1/2 justify-center text-center sm:ml-28 ml-4 sm:mr-0 mr-4 pb-4"
                    >
                      <img
                        src={boj}
                        alt="Boj Argentina DYR"
                        className="hover:scale-125 transition duration-300 ease-in-out transform"
                      />
                    </a>
                    <hr className="sm:ml-28  sm:mr-0 border-black w-full ml-4 mr-4" />
                    <div className="text-gray-700 font-gothamB text-subtitulo pt-6 sm:ml-28 ml-4 mr-4 sm:mr-0">
                      Fundada en España en 1905,{" "}
                      <h1 className="inline text-gray-700 font-gothamB text-subtitulo">
                        Boj
                      </h1>{" "}
                      se especializa en la creación de abrelatas, sacacorchos y
                      utensilios de cocina de alta calidad y durabilidad.
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1 sm:mt-0 mt-4">
                <div className="flex justify-center">
                  <iframe
                    src="https://www.youtube.com/embed/ud4j2ppruJ8"
                    width="560"
                    height="315"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="Boj video presentacion Argentina DYR"
                    className="rounded-xl sm:mx-0 mx-4 mt-8"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <div className="my-6"></div>
    </>
  );
}

export default Resumen;
