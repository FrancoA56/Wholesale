import React from "react";
import calidad from "../media/imagenes/calidad.png";
import compromiso from "../media/imagenes/compromiso.png";
import comunidad from "../media/imagenes/comunidad.png";

function Nosotros() {
  return (
    <div className="font-gothamB pt-16">
      <div className="sm:grid sm:grid-cols-5 flex-row">
        <div className="col-span-3 sm:pr-28 pr-12 pl-12">
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-semititulo mt-6">
            ¿Quiénes somos?
          </div>
          <h1 className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo ">Wholesale DyR</h1>
          <div className="items-center justify-center text-justify flex  text-gray-700 font-gothamB py-4 text-parrafo indent-8">
            Somos una empresa con especial enfoque en la representación de
            marcas internacionales y distribución de mercancías dentro de la
            región sudamericana. Estamos ubicados en la cosmopolita ciudad de
            Buenos Aires, Argentina.
          </div>
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-semititulo mt-6">
            Nuestros valores
          </div>
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo">
            Lo que promovemos
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 flex flex-col">
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img src={comunidad} alt="comunidad" className="w-1/2" />
              </div>
              <div className="text-gray-700 font-gothamB text-subtitulo">
                Comunidad
              </div>
              <div className="text-gray-700 font-gothamB text-parrafo">
                Nuestros clientes son nuestra mayor inspiración.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img src={calidad} alt="calidad" className="w-1/2" />
              </div>
              <div className="text-gray-700 font-gothamB text-subtitulo">
                Calidad
              </div>
              <div className="text-gray-700 font-gothamB text-parrafo">
                Traemos a la Argentina productos importados de primera calidad.
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-center items-center">
                <img src={compromiso} alt="compromiso" className="w-1/2" />
              </div>
              <div className="text-gray-700 font-gothamB text-subtitulo">
                Compromiso
              </div>
              <div className="text-gray-700 font-gothamB text-parrafo">
                La entrega de nuestros productos es segura y efectiva.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center text-center items-center p-6 col-span-2 mt-6 sm:mr-12">
          <img
            src="https://www.emilehenryusa.com/cdn/shop/products/Bread-cloche-1_1024x1024@2x.gif?v=1701888711"
            alt="emile henry gif"
            className="rounded-2xl "
          />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-4 flex justify-center">
        <div></div>
        <div></div>
        <div></div>
        <div>
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo mt-6">
            ¡Nuestras redes!
          </div>
          <div className="text-tono2 flex justify-center items-center my-1">
            <i className="fa-solid fa-arrow-down-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
