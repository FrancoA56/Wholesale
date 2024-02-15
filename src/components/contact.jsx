import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import Nav from "./nav.jsx";
import Footer from "./footer.jsx";
import imagen1 from "../media/imagenes/emile/imagen1.jpeg";
import imagen2 from "../media/imagenes/emile/imagen2.jpeg";
import imagen3 from "../media/imagenes/emile/imagen3.jpeg";
import imagen4 from "../media/imagenes/emile/imagen4.jpeg";
import imagen5 from "../media/imagenes/emile/imagen5.jpeg";

function AcercaDe() {
  // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_enterprise: "",
    user_email: "",
    message: "",
  });

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
    <div className="font-gothamB">
      <Nav />
      <div className=""></div>
      <div className="my-4 text-semititulo font-BodoniB bg-tono3 text-tono5">
        ¡Contactanos!
      </div>
      <div className="flex ">
        <img className="w-1/5" src={imagen1} alt="emile henry" />
        <img className="w-1/5" src={imagen2} alt="emile henry" />
        <img className="w-1/5" src={imagen3} alt="emile henry" />
        <img className="w-1/5" src={imagen4} alt="emile henry" />
        <img className="w-1/5" src={imagen5} alt="emile henry" />
      </div>
      <div className="">
        <div className="flex justify-center">
          <div className="w-1/2">
            <div className="my-4 text-semititulo font-BodoniB bg-tono3 text-tono5 text-center">
              ¡Envíanos un mensaje!
            </div>
          </div>
          <div className="w-1/2">
            <div className="my-4 pr-32 text-semititulo font-BodoniB bg-tono3 text-tono5 text-center">
              Otros medios de contacto
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-full max-w-lg ml-28">
            <form
              className="bg-tono2 shadow-3xl rounded px-8 pt-6 pb-4 mb-4"
              ref={form}
              onSubmit={(e) => {
                handleSubmit(e);
                sendEmail(e);
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="first-name"
                  className="block  text-tono5 text-sm font-gothamBI mb-2"
                >
                  Nombre
                </label>
                <input
                  name="user_name"
                  id="name"
                  autoComplete="name"
                  type="text"
                  onChange={handleChange}
                  value={formData.user_name}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="enterprise-name"
                  className="block  text-tono5 text-sm font-gothamBI mb-2"
                >
                  Empresa
                </label>
                <input
                  name="user_enterprise"
                  id="enterprise-name"
                  autoComplete="organization"
                  type="text"
                  onChange={handleChange}
                  value={formData.user_enterprise}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="user-email"
                  className="block  text-tono5 text-sm font-gothamBI mb-2"
                >
                  Email
                </label>
                <input
                  name="user_email"
                  id="user-email"
                  autoComplete="email"
                  type="email"
                  onChange={handleChange}
                  value={formData.user_email}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-tono5 text-sm font-gothamBI mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  onChange={handleChange}
                  value={formData.message}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="bg-tono3 shadow-[0_4px_9px_-4px_#000000] hover:bg-tono1 hover:scale-125 transition ease-in-out transform text-tono5 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center mb-4 bg-tono2 text-tono5 rounded mx-auto">
            <div className="flex flex-col items-center justify-center mb-4 p-12">
              <div className="px-4 py-2 mb-2">
                <div className="flex">
                  Nuestro Whats App
                  <p className="text-green-400 ml-4">
                    <i className="fab fa-whatsapp"></i>
                  </p>
                </div>
              </div>
              <div className="shadow-[0_4px_9px_-4px_#000000] px-4 py-2 rounded bg-tono3 hover:scale-125 transition ease-in-out transform">
              +54 9 11-2305-3139
              </div>
            </div>
            <div className="mb-8">Y nuestro</div>
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="px-4 py-2 mb-2">
                <div className="flex">
                  Numero de linea 
                  <p className="text-tono4 ml-4">
                    
                    <i className="fas fa-mobile-alt"></i>
                    </p>
                </div>
              </div>
              <div className="shadow-[0_4px_9px_-4px_#000000] px-4 py-2 rounded bg-tono3 hover:scale-125 transition ease-in-out transform">011-2305-3139</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AcercaDe;
