import React from "react";
import madeleineImg1 from "../media/imagenes/madeleine/1.jpg";
import madeleineImg2 from "../media/imagenes/madeleine/2.jpg";
import madeleineImg3 from "../media/imagenes/madeleine/3.jpg";
import madeleineImg4 from "../media/imagenes/madeleine/4.jpg";
import bbqImg1 from "../media/imagenes/bbq/1.jpg";
import bbqImg2 from "../media/imagenes/bbq/2.jpg";
import bbqImg3 from "../media/imagenes/bbq/3.jpg";
import halo1 from "../media/imagenes/halo/1.webp";
import halo2 from "../media/imagenes/halo/2.webp";
import halo3 from "../media/imagenes/halo/3.webp";
import halo4 from "../media/imagenes/halo/4.webp";
import halo5 from "../media/imagenes/halo/5.webp";
import halo6 from "../media/imagenes/halo/6.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "react-responsive";

function New() {
  const slidesMadeleine = [
    { id: 1, image: madeleineImg1 },
    { id: 2, image: madeleineImg2 },
    { id: 3, image: madeleineImg3 },
    { id: 4, image: madeleineImg4 },
  ];

  const slidesBbq = [
    { id: 1, image: bbqImg1 },
    { id: 2, image: bbqImg2 },
    { id: 3, image: bbqImg3 },
  ];

  const slidesHalo = [
    { id: 1, image: halo1 },
    { id: 2, image: halo2 },
    { id: 3, image: halo3 },
    { id: 4, image: halo4 },
    { id: 5, image: halo5 },
    { id: 6, image: halo6 },
  ];

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 640px)",
  });

  return (
    <div className="font-gothamB text-gray-800 mt-20">
      {/* ===== HERO ===== */}
      <section className="flex min-h-[30vh] gap-20 bg-gray-100 items-center justify-center text-center px-6 pt-32 pb-20">
        <div className="flex flex-col z-10 text-gray-800">
          <h1 className="text-4xl md:text-6xl tracking-wide mb-4">Novedades</h1>
          {/* <img
          src={emile}
          alt="Emile Henry"
          className="w-auto h-auto max-w-lg hover:scale-105 transition duration-500"
        /> */}
          <p className="text-lg md:text-2xl font-gotham">
            Descubrí las últimas incorporaciones de <span className="font-semibold">Emile Henry </span> y{" "}
            <span  className="font-semibold">Ooni</span>
          </p>
        </div>
      </section>

      {/* ===== CONTENIDO ===== */}
      <div className="w-full px-6 md:px-16 py-10 space-y-12">
        {" "}
        {/* ===== MADELEINE ===== */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="w-full h-[400px] overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={
                isDesktopOrLaptop
                  ? {
                      delay: 3000,
                      disableOnInteraction: false,
                    }
                  : false
              }
              loop={true}
            >
              {slidesMadeleine.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt="Línea Madeleine Emile Henry"
                    className="w-full h-[400px] object-contain bg-white"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-4 text-left">
            <h2 className="text-3xl md:text-4xl">Línea Madeleine</h2>
            <h3 className="text-lg text-gray-600">
              Elegancia y tradición francesa
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Inspirada en la herencia de Emile Henry, la colección Madeleine
              está dedicada al arte de la pastelería. Diseñada para tortas,
              budines y postres que combinan tradición, delicadeza y calidad
              profesional.
            </p>
            <a
              href="/ar/contacto"
              className="inline-block mt-4 border border-black px-6 py-3 hover:bg-tono1 hover:text-white transition"
            >
              Consultar
            </a>
          </div>
        </section>
        {/* ===== BBQ ===== */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4 text-left">
            <h2 className="text-3xl md:text-4xl">Línea BBQ</h2>
            <h3 className="text-lg text-gray-600">
              Potencia y sabor al máximo
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Diseñadas para plancha, parrilla o fuego a leña, las piezas BBQ
              permiten lograr aromas ahumados, texturas caramelizadas y una
              doradura perfecta en carnes, pescados y vegetales.
            </p>
            <a
              href="/ar/contacto"
              className="inline-block mt-4 border border-black px-6 py-3 hover:bg-tono1 hover:text-white transition"
            >
              Consultar
            </a>
          </div>

          <div className="w-full h-[400px] overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={
                isDesktopOrLaptop
                  ? {
                      delay: 3500,
                      disableOnInteraction: false,
                    }
                  : false
              }
              loop={true}
            >
              {slidesBbq.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt="Línea BBQ Emile Henry"
                    className="w-full h-[400px] object-contain bg-white"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* ===== HALO PRO MIXER ===== */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4 text-left">
            <h2 className="text-3xl md:text-4xl">Ooni Halo Pro Mixer</h2>
            <h3 className="text-lg text-gray-600">
              Amasado profesional en casa
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Con tecnología de amasado en espiral inspirada en panaderías
              profesionales, la Ooni Halo Pro Mixer permite lograr masas más
              elásticas, homogéneas y perfectas para pizza, pan y pastas.
            </p>
            <a
              href="/ar/contacto"
              className="inline-block mt-4 border border-black px-6 py-3 hover:bg-tono1 hover:text-white transition"
            >
              Consultar
            </a>
          </div>

          <div className="w-full h-[400px] overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={
                isDesktopOrLaptop
                  ? {
                      delay: 3500,
                      disableOnInteraction: false,
                    }
                  : false
              }
              loop={true}
            >
              {slidesHalo.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt="Halo Pro Mixer OONI"
                    className="w-full h-[400px] object-contain bg-white"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default New;
