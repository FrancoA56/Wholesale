import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import ooniLogo from "../media/imagenes/Ooni-logo negro png.png";
import emileLogo from "../media/imagenes/EmileHenry-logo blanco png.png";
import mauvielLogo from "../media/imagenes/logoMauvielNegro.png";
import EmileHenry from "../media/imagenes/EmileHenry-02.png";
import mauvile from "../media/imagenes/logoMauvielNegro.png";

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
      <div className="py-3"></div>

      <div className="grid grid-rows-2">
        <div className="font-gothamB text-gray-700 text-semititulo flex justify-center items-center text-start">
          Nuestras marcas
        </div>
        <div className="text-gray-700 font-gothamBI flex text-subtitulo justify-center items-center text-start">
          Representamos y distribuimos las marcas premium
        </div>
      </div>

      <hr className="border-tono1 mx-12" />
      <div className="grid grid-cols-2 justify-center py-6 mt-6">
        <div className="col-span-1">
          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/nweqeRpTUiE"
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen=""
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center pb-6">
          <div className="grid grid-rows-2">
            <div className="flex justify-center items-center mb-6">
              <img
                src={ooniLogo}
                alt="ooniLogo"
                className="hover:scale-125 mr-12 transition duration-300 ease-in-out transform w-1/4 justify-center text-center"
              />
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
      <hr className="border-tono1 mx-12" />
      <div className="grid grid-cols-2 justify-center py-6 mt-6">
        <div className="col-span-1 flex justify-center items-center pb-6">
          <div className="grid grid-rows-2">
            <div className="flex justify-center items-center mb-6">
              <img
                src={EmileHenry}
                alt="EmileHenry"
                className="hover:scale-125 ml-12 transition duration-300 ease-in-out transform w-1/3 justify-center text-center"
              />
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
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
      </div>
      <hr className="border-tono1 mx-12" />
      <div className="grid grid-cols-2 justify-center py-6 mt-6">
        <div className="col-span-1">
          <div className="flex justify-center">
            <iframe
              src="https://www.youtube.com/embed/9pU8luInGtw"
              width="560"
              height="315"
              frameborder="0"
              allowfullscreen=""
              className="rounded-xl"
            ></iframe>
          </div>
        </div>
        <div className="col-span-1 flex justify-center items-center pb-6">
          <div className="grid grid-rows-2">
            <div className="flex justify-center items-center mb-6">
              <img
                src={mauvile}
                alt="mauvile"
                className="hover:scale-125 mr-12 transition duration-300 ease-in-out transform w-1/2 justify-center text-center"
              />
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
      <div className="my-6"></div>
    </>
  );
}

export default Resumen;
