import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import hornoOoni from "../media/imagenes/ooni/gif/Fyra 12_Flame Loop_Transparent.webp";

function AcercaDe() {
  // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (formData.email && formData.message) {
      const textParts = [];
      if (formData.name) textParts.push(`Nombre y Apellido: ${formData.name}`);
      if (formData.companyName)
        textParts.push(`Nombre de la Empresa: ${formData.companyName}`);
      if (formData.email) textParts.push(`Email: ${formData.email}`);
      if (formData.phone)
        textParts.push(`Telefono: ${formData.phone.toString()}`);
      if (formData.message) textParts.push(`Mensaje: ${formData.message}`);
      try {
        const objetoBody = {
          to: "franco.a@castradeandco.com",
          subject: "¡Quiero comunicarme con ustedes!",
          text: textParts.join("\n"), // Concatenar los elementos con un salto de linea
        };
        const { data } = await axios.post(
          `https://wholesale-api.onrender.com/api/message`,
          objetoBody,
          { headers: { "Content-Type": "Application/Json" } } // Configurar los encabezados
        );
        showSuccessAlert(data.message);
      } catch (error) {
        showErrorAlert(error.message);
      }
    } else {
      showErrorAlert(
        "Tienes que completar al menos el campo de correo electrónico y el mensaje."
      );
    }
  }

  //Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
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
      <div className=" flex flex-col pt-6< ">
       
        <div className="flex flex-col col-span-3 justify-center">
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-semititulo mt-6 ">
            ¡Envíanos un mensaje!
          </div>
          <div className="sm:w-1/2 w-4/5 mb-12 mx-auto mt-8">
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
                  id="name"
                  name="name"
                  autocomplete="ApellidoYNombre"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  required
                  autocomplete="organization"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  required
                  autocomplete="Teléfono"
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  required
                  onChange={handleChange}
                  autocomplete="email"
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
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
                  required
                  onChange={handleChange}
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  placeholder="¡Estoy interesado en sus productos! Quisiera saber más."
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
      <div className="grid grid-cols-4">
        <div></div>
        <div>
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo mt-6">
            Otros medios de comunicación
          </div>
          <div className="text-tono2">
            <i class="fa-solid fa-arrow-down-long"></i>{" "}
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default AcercaDe;
