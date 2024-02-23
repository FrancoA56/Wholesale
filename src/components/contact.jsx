import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import gifOoni from "../media/imagenes/ooni/gif/Fyra 12_Flame Loop_Transparent.gif";

function AcercaDe() {
  // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const [formData, setFormData] = useState({
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  //Función para manejar el envío del form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.user_email && formData.message) {
      console.log("Form Data:", formData);
      showSuccessAlert(
        "El mensaje fue enviado correctamente. ¡Pronto nuestro personal se estará comunicando contigo!"
      );
    } else {
      showErrorAlert(
        "Tiene que rellenar por lo menos la casilla del correo electrónico y el mensaje"
      );
    }
  };

  //Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
    <div className="font-gothamB pt-16">
      <div className="grid grid-cols-5 pt-6< ">
        <div className="flex col-span-2 justify-end items-center">
          <img src={gifOoni} alt="gifOoni" />
        </div>
        <div className="flex flex-col col-span-3 justify-center">
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-semititulo mt-6 ">
            ¡Envíanos un mensaje!
          </div>
          <div className="w-1/2 mb-12 mx-auto mt-8">
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nombre y Apellido
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:outline-none focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Pedro Alfonso"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="companyName"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Nombre de la empresa
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:outline-none focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="Wholesale"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:outline-none focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="011-2305-3139"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:outline-none focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="hola@ws-dyr.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:outline-none focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="¡Estoy interesado en sus productos! Quisiera saber mas."
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-tono3 shadow-xl transition transform ease-in-out hover:scale-110 hover:bg-tono1 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo mt-6">
        Otros medios de comunicación
      </div>
      <div className="text-tono2">
        <i class="fa-solid fa-arrow-down-long"></i>{" "}
      </div>
    </div>
  );
}

export default AcercaDe;
