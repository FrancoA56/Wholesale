import React, { useRef, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const PopupRegistro = ({ isOpen, isClose }) => {
  const form = useRef();
  const idioma = localStorage.getItem("ubicacion");

  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_company: "",
    user_phone: "",
    user_cuit: "",
    user_email: "",
    user_message: "",
  });

  if (!isOpen) return null; // No renderizar si no está abierto

  // Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Función para manejar el envío del form
  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.user_email && formData.user_message) {
      const textParts = [];
      if (formData.user_name) textParts.push(`Nombre: ${formData.user_name}`);
      if (formData.user_lastname)
        textParts.push(`Apellido: ${formData.user_lastname}`);
      if (formData.user_company)
        textParts.push(`Nombre de la Empresa: ${formData.user_company}`);
      if (formData.user_email) textParts.push(`Email: ${formData.user_email}`);
      if (formData.user_phone)
        textParts.push(`Telefono: ${formData.user_phone.toString()}`);
      if (formData.user_cuit)
        textParts.push(`Cuit: ${formData.user_cuit.toString()}`);
      if (formData.user_message)
        textParts.push(`Mensaje: ${formData.user_message}`);
      if (idioma) textParts.push(`Ubicacion: ${idioma}`);
      try {
        const objetoBody = {
          to: "ximena.r@ws-dyr.com",
          subject: "¡Quiero registrarme!",
          text: textParts.join("\n"),
        };
        const { data } = await axios.post(
          `https://wholesale-api.onrender.com/api/registration`,
          objetoBody,
          { headers: { "Content-Type": "Application/Json" } } // Configurar los encabezados
        );
        showSuccessAlert(data.message);
        isClose(false); // Cerrar el popup después del envío
      } catch (error) {
        showErrorAlert(error.message);
      }
    } else {
      showErrorAlert(
        "Tiene que rellenar por lo menos la casilla del mail y el mensaje"
      );
    }
  }

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
    <div
      onClick={isClose}
      className="fixed inset-0 bg-tono1 bg-opacity-80 z-50 flex items-center justify-center"
    >
      <form
        className="mt-1"
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="isolate w-auto h-auto bg-tono5 rounded-md px-6 sm:py-3 lg:px-3 "
        >
          {/* Encabezado */}
          <div className="mx-auto flex flex-col items-center justify-center  max-w-xl border-b border-tono3">
            <h2 className="text-3xl mt-6 font-BodoniB tracking-tight text-tono2 sm:text-4xl uppercase leading-normal ">
              ¡Regístrate!
            </h2>
            <div className=" mt-2 font-gothamB tracking-tight text-tono2 uppercase leading-normal mb-3">
              Nos comunicaremos contigo a la brevedad
            </div>
          </div>

          {/* Formulario */}
          <div className=" max-w-xl mt-5 p-5 sm:mx-5">
            <div className="grid md:grid-rows-4 gap-3 content-center">
              {/* Nombre y Apellido en la misma fila */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Nombre
                  </label>
                  <input
                    name="user_name"
                    type="text"
                    placeholder="Pedro"
                    onChange={handleChange}
                    value={formData.user_name}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Apellido
                  </label>
                  <input
                    name="user_lastname"
                    type="text"
                    placeholder="Alfonso"
                    onChange={handleChange}
                    value={formData.user_lastname}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
              </div>

              {/* Empresa y Teléfono en la misma fila */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Empresa
                  </label>
                  <input
                    name="user_company"
                    type="text"
                    placeholder="Wholesale"
                    onChange={handleChange}
                    value={formData.user_company}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Teléfono
                  </label>
                  <input
                    name="user_phone"
                    type="number"
                    placeholder="011-2305-3139"
                    onChange={handleChange}
                    value={formData.user_phone}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full  px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Email
                  </label>
                  <input
                    name="user_email"
                    type="email"
                    placeholder="hola@ws-dyr.com"
                    onChange={handleChange}
                    value={formData.user_email}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                    Cuit
                  </label>
                  <input
                    name="user_cuit"
                    type="cuit"
                    placeholder="20-12312312-2"
                    onChange={handleChange}
                    value={formData.user_cuit}
                    required
                    className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="text-sm font-gothamBI text-tono2 px-2 justify-start flex">
                  Mensaje
                </label>
                <textarea
                  name="user_message"
                  rows="4"
                  placeholder="¡Estoy interesado en sus productos! Quisiera registrarme."
                  onChange={handleChange}
                  value={formData.user_message}
                  required
                  className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none"
                />
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col justify-center items-center mt-10 md:px-4 md:flex-row md:justify-center">
              <button
                type="submit"
                className="font-gothamB h-10 w-11/12  mb-2 bg-tono3 rounded-md md:px-2 md:w-2/3 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-tono2"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={isClose} // Cerrar el popup
                className="font-gothamB  mb-2 h-10 w-11/12 inline-block bg-gray-300 text-black md:w-2/3 rounded-md md:px-2 md:m-1 text-sm font-medium uppercase leading-normal hover:text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030]"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PopupRegistro;
