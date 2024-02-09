import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import imagen1 from "../media/imagenes/ooni/funda.jpeg";
import imagen2 from "../media/imagenes/ooni/balanza.jpeg";
import imagen3 from "../media/imagenes/ooni/fullKit.jpeg";
import imagen4 from "../media/imagenes/ooni/hornoAbierto.jpeg";
import imagen5 from "../media/imagenes/ooni/hornoConPala.jpeg";
import imagen6 from "../media/imagenes/ooni/hornoConPizza.jpeg";
import imagen7 from "../media/imagenes/ooni/hornoInterperie.jpeg";
import imagen8 from "../media/imagenes/ooni/hornosHilera.jpeg";
import imagen9 from "../media/imagenes/ooni/hornoSinPizza.jpeg";
import imagen10 from "../media/imagenes/ooni/juntada.jpeg";
import imagen11 from "../media/imagenes/ooni/ollitas.jpeg";
import imagen12 from "../media/imagenes/ooni/utensillos1.jpeg";
import imagen13 from "../media/imagenes/ooni/utensillos2.jpeg";
import emile1 from "../media/imagenes/emile/bowl.jpeg";
import emile2 from "../media/imagenes/emile/budinera.jpeg";
import emile3 from "../media/imagenes/emile/corazon.jpeg";
import emile4 from "../media/imagenes/emile/fondue.jpeg";
import emile5 from "../media/imagenes/emile/fuente.jpeg";
import emile6 from "../media/imagenes/emile/fuenteCebolla.jpeg";
import emile7 from "../media/imagenes/emile/fuenteOnda.jpeg";
import emile8 from "../media/imagenes/emile/fuenteOndulada.jpeg";
import emile9 from "../media/imagenes/emile/fuentePlana.jpeg";
import emile10 from "../media/imagenes/emile/fuentePlana2.jpeg";
import emile11 from "../media/imagenes/emile/panera.jpeg";
import emile12 from "../media/imagenes/emile/ramekin.jpeg";
import emile13 from "../media/imagenes/emile/tajine.jpeg";
import ooniLogo from "../media/imagenes/Ooni-logo blanco png.png";
import emileLogo from "../media/imagenes/EmileHenry-logo blanco grande.png";

function Resumen() {
  // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (formData.user_email && formData.message) {
      emailjs
        .sendForm(
          "service_rjik02h",
          "template_w2je5xe",
          form.current,
          "ncTuTVkphxHhuJbUE"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_phone: "",
    user_company: "",
    user_email: "",
    message: "",
  });

  //Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Función para manejar el envío del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_email && formData.message) {
      console.log("Form Data:", formData);
      showSuccessAlert(
        "El mensaje fue enviado correctamente. ¡Pronto nuestro personal se estara comunicando contigo!"
      );
    } else {
      showErrorAlert(
        "Tiene que rellenar por lo menos la casilla del mail y el mensaje"
      );
    }
    setPopupOpen(false);
  };
  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "Confirmado",
      confirmButtonColor: "rgb(94 195 191)",
      text: `${message}`,
    });
  };
  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: `${message}`,
    });
  };
  return (
    <>
      <div className="flex justify-center my-12">
        <div className="text-black flex font-BodoniB text-semititulo">
          ¿Tienes una tienda y quieres vender nuestros productos?
          <button
            onClick={() => setPopupOpen(true)}
            className="text-subtitulo font-gothamB shadow-xl mx-12 bg-tono3 px-4 text-white rounded-md hover:bg-tono2 hover:scale-125 transition duration-300 ease-in-out transform"
          >
            ¡Registrate!
          </button>
          {isPopupOpen && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center">
              <form
                className="mt-1"
                ref={form}
                onSubmit={(e) => {
                  handleSubmit(e);
                  sendEmail(e);
                }}
              >
                {/* ... Tu formulario aquí */}
                <div className="isolate w-full h-2/3 bg-tono4 rounded-md px-6 sm:py-3 lg:px-3">
                  {/* Creo q le da animacion y el tamaño */}
                  <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                  ></div>
                  {/* Encabezado */}
                  <div className="mx-auto flex flex-col items-center justify-center min-w-xl max-w-xl border-b border-[#303030]">
                    <h2 className="text-3xl font-BodoniB tracking-tight text-[#303030]  sm:text-4xl  uppercase leading-normal">
                      ¡Contactanos para registrarte!
                    </h2>
                  </div>
                  {/* Formulario */}
                  <div
                    action="#"
                    method="POST"
                    className="mx-auto max-w-xl mt-5"
                  >
                    {/* Formulario container */}
                    <div className="grid md:grid-rows-5"></div>
                    {/* Nombre y apellido */}
                    <div className="grid md:grid-cols-2 grid-cols-1">
                      {/* Nombre */}
                      <div className=" flex flex-col items-start pl-5 pr-1 py-0.5">
                        <label
                          for="first-name"
                          className="text-sm font-gothamBI text-[#303030] px-2"
                        >
                          {" "}
                          Nombre
                        </label>
                        <input
                          name="user_name"
                          id="name"
                          autocomplete="Nombre"
                          // autocomplete="off"
                          type="text"
                          onChange={handleChange}
                          value={formData.user_name}
                          required
                          className="text-gothamB shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:bg-[#505050]"
                        />
                      </div>
                      {/* Apellido */}
                      <div className="flex flex-col items-start pr-5 pl-1 py-0.5">
                        <label
                          for="last-name"
                          className="text-sm font-gothamBI text-[#303030] px-2"
                        >
                          {" "}
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          autocomplete="Apellido"
                          // autocomplete="off"
                          onChange={handleChange}
                          required
                          // value={formData.lastname}
                          className="text-gothamB shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:bg-[#505050]"
                        />
                      </div>
                    </div>
                    {/* name (company name)*/}
                    <div className=" flex flex-col items-start px-5 py-0.5">
                      <label
                        for="name"
                        className="text-sm font-gothamBI text-[#303030] px-2"
                      >
                        {" "}
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autocomplete="organization"
                        // autocomplete="off"
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                      />
                    </div>
                    {/* phone (phone number)*/}
                    <div className=" flex flex-col items-start px-5 py-0.5">
                      <label
                        for="phone"
                        className="text-sm font-gothamBI text-[#303030] px-2"
                      >
                        {" "}
                        Teléfono
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone"
                        autocomplete="Teléfono"
                        // autocomplete="off"
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                      />
                    </div>
                    {/* email */}
                    <div className=" flex flex-col items-start px-5 py-0.5">
                      <label
                        for="email"
                        className="text-sm font-gothamBI text-[#303030] px-2"
                      >
                        {" "}
                        Mail
                      </label>
                      <input
                        type="email"
                        name="user_email"
                        id="email"
                        autocomplete="email"
                        // autocomplete="off"
                        onChange={handleChange}
                        required
                        value={formData.user_email}
                        className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                      />
                    </div>
                    {/* message */}
                    <div className=" flex flex-col items-start px-5 py-0.5">
                      <label
                        for="message"
                        className="text-sm font-gothamBI text-[#303030] px-2"
                      >
                        {" "}
                        Mensaje
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        onChange={handleChange}
                        required
                        value={formData.message}
                        className="shadow appearance-none border rounded-md w-full py-2 px-3 text-[#303030] leading-tight focus:outline-[#909090] focus:shadow-outline dark:text-white dark:bg-[#505050]"
                      />
                    </div>
                    {/* Botones */}
                    <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                      <button
                        type="submit"
                        name="submit"
                        value="Send"
                        className="h-10 w-11/12 mt-2 mb-2 bg-tono3 rounded-md md:px-2 md:w-2/3 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-tono2 dark:hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      >
                        Enviar
                      </button>
                      <button
                        onClick={() => setPopupOpen(false)}
                        className="mt-2 mb-2 h-10 w-11/12 inline-block bg-[#505050] md:w-2/3 rounded-md md:px-2 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      >
                        Cerrar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <div className="flex bg-tono3 py-6">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={ooniLogo}
            alt="ooniLogo"
            className="w-1/4 ml-6 hover:scale-125 transition duration-300 ease-in-out transform"
          />
        </div>
        <div className="flex flex-col text-tono5">
          <div className="font-gothamB text-semititulo">Distribuidores</div>
          <div className="font-gothamB text-semititulo">oficiales</div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={emileLogo}
            alt="emileLogo"
            className="w-1/4 mr-24 hover:scale-125 transition duration-300 ease-in-out transform"
          />
        </div>
      </div>

      <div className="flex justify-center gap-12 bg-tono2 py-12">
        <div className="w-2/5">
          <CarouselProvider
            naturalSlideHeight={36}
            naturalSlideWidth={52}
            totalSlides={13}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={imagen7} alt="Ooni" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={imagen3} alt="Ooni" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={imagen2} alt="Ooni" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={imagen4} alt="Ooni" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={imagen5} alt="Ooni" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={imagen1} alt="Ooni" />{" "}
                </Slide>
                <Slide index={6}>
                  {" "}
                  <img src={imagen6} alt="Ooni" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={imagen8} alt="Ooni" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={imagen9} alt="Ooni" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={imagen10} alt="Ooni" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={imagen11} alt="Ooni" />{" "}
                </Slide>
                <Slide index={11}>
                  {" "}
                  <img src={imagen12} alt="Ooni" />{" "}
                </Slide>
                <Slide index={12}>
                  {" "}
                  <img src={imagen13} alt="Ooni" />{" "}
                </Slide>
              </Slider>
              <div className="flex gap-12 justify-center">
                <ButtonBack className="text-tono4">
                  <i class="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <ButtonNext className="text-tono4">
                  <i class="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
        <div className="w-2/5 mx-12">
          <CarouselProvider
            naturalSlideHeight={36}
            naturalSlideWidth={52}
            totalSlides={13}
          >
            <div>
              <Slider className="rounded-xl">
                <Slide index={0}>
                  {" "}
                  <img src={emile13} alt="emile henry" />{" "}
                </Slide>
                <Slide index={1}>
                  {" "}
                  <img src={emile2} alt="emile henry" />{" "}
                </Slide>
                <Slide index={2}>
                  {" "}
                  <img src={emile3} alt="emile henry" />{" "}
                </Slide>
                <Slide index={3}>
                  {" "}
                  <img src={emile4} alt="emile henry" />{" "}
                </Slide>
                <Slide index={4}>
                  {" "}
                  <img src={emile5} alt="emile henry" />{" "}
                </Slide>
                <Slide index={5}>
                  {" "}
                  <img src={emile6} alt="emile henry" />{" "}
                </Slide>
                <Slide index={6}>
                  {" "}
                  <img src={emile7} alt="emile henry" />{" "}
                </Slide>
                <Slide index={7}>
                  {" "}
                  <img src={emile8} alt="emile henry" />{" "}
                </Slide>
                <Slide index={8}>
                  {" "}
                  <img src={emile9} alt="emile henry" />{" "}
                </Slide>
                <Slide index={9}>
                  {" "}
                  <img src={emile10} alt="emile henry" />{" "}
                </Slide>
                <Slide index={10}>
                  {" "}
                  <img src={emile11} alt="emile henry" />{" "}
                </Slide>
                <Slide index={11}>
                  {" "}
                  <img src={emile12} alt="emile henry" />{" "}
                </Slide>
                <Slide index={12}>
                  {" "}
                  <img src={emile1} alt="emile henry" />{" "}
                </Slide>
              </Slider>
              <div className="flex gap-12 justify-center ">
                <ButtonBack className="text-tono4">
                  <i class="fa-solid fa-circle-left"></i>
                </ButtonBack>
                <ButtonNext className="text-tono4">
                  <i class="fa-solid fa-circle-right"></i>
                </ButtonNext>
              </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}

export default Resumen;
