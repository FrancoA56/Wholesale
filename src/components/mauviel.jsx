import React, { useRef } from "react";
import mauvielLogo from "../media/imagenes/logoMauvielBlanco.png";
import logoMauvielNegro from "../media/imagenes/logoMauvielNegro.png";
import { useMediaQuery } from "react-responsive";
import image1 from "../media/imagenes/mauviel/1.webp";
import image2 from "../media/imagenes/mauviel/2.webp";
import image3 from "../media/imagenes/mauviel/3.webp";
import image4 from "../media/imagenes/mauviel/4.webp";
import image5 from "../media/imagenes/mauviel/5.webp";
import banner from "../media/imagenes/mauviel/banner.webp";
import mauvielCuality2 from "../media/imagenes/mauviel/cualitys/2.png";
import mauvielCuality3 from "../media/imagenes/mauviel/cualitys/3.png";
import mauvielCuality4 from "../media/imagenes/mauviel/cualitys/4.png";
import "../styles/efectoLogo.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/carrousels.css";

function Mauviel() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  const swiperRef = useRef(null);

  const images = [
    { id: 0, image: image1 },
    { id: 1, image: image2 },
    { id: 2, image: image3 },
    { id: 3, image: image4 },
    { id: 4, image: image5 },
  ];

  return (
    <>
      <div className="bg-fondoMauviel bg-cover bg-center h-screen flex justify-center items-center">
        <div className="bg-tonoblackb h-screen w-screen flex justify-center items-center">
          <a
            href="https://www.mauviel.com/en/"
            className="flex justify-center"
            target="_blank"
            title="argentina wholesale dyr venta mayorista mauviel1830"
            rel="noreferrer"
          >
            <img
              src={mauvielLogo}
              alt="argentina wholesale dyr venta mayorista mauviel1830"
              className="tracking-in-contract sm:w-11/12 w-4/5 h-auto flex justify-center items-center hover:scale-125 transition duration-300 ease-in-out transform"
            />
          </a>
          <hr className="absolute bottom-20 text-tono5 w-11/12" />
          <div className="tracking-in-contract absolute bottom-10 text-parrafo font-gothamB text-tono5 ">
            Normandia - Francia
          </div>
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-5 flex flex-col mb-12">
        <div className="sm:w-8/12 w-11/12 sm:ml-20 sm:mr-0 ml-4 mr-4 mt-12 col-span-2">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            autoplay={
              isDesktopOrLaptop
                ? {
                    delay: 3000,
                    disableOnInteraction: false,
                  }
                : false
            }
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="h-[80vh] flex justify-center items-center">

                <img
                  src={image.image}
                  alt="Mauviel Argentina wholesale dyr venta mayorista"
                  className="w-auto h-full rounded-xl"
                  />
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination" />
        </div>
        <div className="col-span-3 flex text-justify items-center sm:mr-20 mr-0 ">
          <div className="flex flex-col sm:mt-0 mt-8">
            <a
              href="https://www.mauviel.com/en/"
              title="Mauviel1830 Argentina DYR"
              className="flex justify-center"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={logoMauvielNegro}
                alt="argentina wholesale dyr venta mayorista mauviel1830"
                className="sm:w-3/5 w-3/4 mx-auto sm:mb-12 mb-0"
              />
            </a>
            <hr className="border-tono3 mb-12 sm:hidden grid mt-12 sm:mt-0 mx-6" />
            <div className="text-gray-700 sm:mb-0 mb-8 sm:mx-0  mx-6 indent-8 font-gothamB">
              Fundada en 1830 en Villedieu-les-Poêles, Normandía,{" "}
              <h1 className="inline text-gray-700 font-gothamB">Mauviel</h1> es
              sinónimo de calidad y artesanía en utensilios de cocina. En este
              histórico pueblo, conocido por su maestría en el trabajo con
              metales, nació una marca que hoy sigue utilizando procesos
              tradicionales transmitidos de generación en generación. Reconocida
              por su rápida conductividad térmica, sus utensilios de cobre son
              esenciales en cocinas profesionales, ideales para preparar salsas
              delicadas y platos clásicos. Además, Mauviel 1830 ha ampliado su
              oferta con colecciones de acero inoxidable, creadas con la misma
              atención al detalle que sus piezas de cobre, manteniendo su legado
              y excelencia en cada producto.
            </div>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-3 sm:mr-6 mr-0 mb-12">
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality2}
            alt="argentina wholesale dyr venta mayorista mauviel1830"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">PRODUCTOS</div>
          <div className="flex justify-center self-start font-gothamB">
            Ofrecemos una variedad de utensilios de cocina diseñados para
            propósitos culinarios específicos.
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality3}
            alt="argentina wholesale dyr venta mayorista mauviel1830"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            MADE IN FRANCE
          </div>
          <div className="flex justify-center self-start font-gothamB">
            La empresa emblemática de la bahía del Mont St Michel{" "}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-2 mx-4 mb-8 sm:grid sm:grid-rows-4">
          <img
            src={mauvielCuality4}
            alt="argentina wholesale dyr venta mayorista mauviel1830"
            className="w-1/3 sm:row-span-2 mx-auto"
          />
          <div className="flex justify-center font-gothamBI">
            PRODUCTOS DE CALIDAD
          </div>
          <div className="flex justify-center self-start font-gothamB">
            La mas alta calidad para los chefs mas exigentes.
          </div>
        </div>
      </div>
      <div>
        <img
          src={banner}
          alt="banner Mauviel1830 Argentina DYR"
          className="w-full mb-12"
        />
      </div>
    </>
  );
}

export default Mauviel;
