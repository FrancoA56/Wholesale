import React, { useState, useRef } from "react";
import PopupRegistro from "./register";
import Swal from "sweetalert2";
import axios from "axios";

function Contact() {
  const [popupOpen, setPopupOpen] = useState(false);
  const idioma = localStorage.getItem("ubicacion");
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_company: "",
    user_phone: "",
    user_email: "",
    user_message: "",
  });

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
      if (formData.user_company)
        textParts.push(`Nombre de la Empresa: ${formData.user_company}`);
      if (formData.user_email) textParts.push(`Email: ${formData.user_email}`);
      if (formData.user_phone)
        textParts.push(`Telefono: ${formData.user_phone.toString()}`);
      if (formData.user_message)
        textParts.push(`Mensaje: ${formData.user_message}`);
      if (idioma) textParts.push(`Ubicacion: ${idioma}`);
      try {
        const objetoBody = {
          to: "comunicaciones@ws-dyr.com",
          subject: "¡Quiero hablar!",
          text: textParts.join("\n"),
        };
        const { data } = await axios.post(
          `https://wholesale-api.onrender.com/api/registration`,
          objetoBody,
          { headers: { "Content-Type": "Application/Json" } } // Configurar los encabezados
        );
        showSuccessAlert(data.message);
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
    <div className="font-gothamB pt-16">
      <div className="flex flex-col sm:mx-40 mx-4">
        <div className="items-center justify-center text-center flex font-bold text-gray-700 font-gothamB pt-3 text-parrafo">
          Únicamente venta mayorista.{" "}
        </div>
        <div className="flex justify-center items-center text-gray-700 font-gothamB text-semititulo mt-1 mb-4">
          ¡Contáctate con nosotros!
        </div>
        <div className="sm:grid sm:grid-cols-10 flex flex-col">
          <div className="col-span-1"></div>
          <div className="col-span-4">
            <div className="items-center justify-center sm:text-left text-center sm:indent-6 indent-0 flex text-gray-700 font-gothamB py-3 text-parrafo ">
              Si quieres registrarte para poder ver todos nuestros productos
              rellena este formulario y nos pondremos en contacto contigo lo
              antes posible.
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setPopupOpen(true)}
                className="shadow-[0_4px_9px_-4px_#000000] font-gothamB text-white bg-tono3 sm:px-4 px-24 py-1 my-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform"
              >
                Formulario
              </button>
            </div>
            <div className="py-4 flex flex-col sm:text-left text-center justify-center">
              <div className="text-gray-700 font-gothamB ">
                Si ya tienes una cuenta, puedes ir a "
                <a
                  href="https://app.holded.com/login?lang=es"
                  target="_blank"
                  rel="noreferrer"
                  className="text-tono2 hover:underline"
                >
                  Ingresar
                </a>
                ", y colocar tu usuario y contraseña para iniciar sesión.
              </div>
              <div className="text-gray-700 font-gothamB py-2">
                Si no recuerdas tu contraseña, puedes ir a "
                <a
                  href="https://app.holded.com/login?lang=es"
                  target="_blank"
                  rel="noreferrer"
                  className="text-tono2 hover:underline"
                >
                  Ingresar
                </a>
                ", y hacer clic en "¿Has olvidado tu contraseña?".
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-0 gap-2 justify-center text-center">
              <div className="text-gray-700 font-gothamB py-2 flex flex-col justify-center text-left">
                Telefono:
                <div className="inline">+54 9 11-2305-3139</div>
              </div>
              <div className="text-gray-700 font-gothamB py-2 flex flex-col justify-center text-left">
                Ventas:
                <div className="inline">hola@ws-dyr.com</div>
              </div>
            </div>
            <hr className="block sm:hidden my-6"/>
            {popupOpen && (
              <PopupRegistro
                isOpen={popupOpen}
                isClose={() => setPopupOpen(false)}
              />
            )}
          </div>
          <div className="col-span-4 w-full">
            <div className="flex flex-col">
              <div className="text-center justify-center items-center flex text-gray-700 font-gothamB pt-4 pb-2 text-parrafo">
                ¿Tienes preguntas sobre nuestros productos o servicios antes de
                registrarte?
              </div>
              <div className="flex justify-center">
                {/* Formulario */}
                <form
                  onSubmit={(e) => handleSubmit(e)}
                  ref={form}
                  className="w-screen p-5 sm:mx-5  flex flex-col justify-center items-center"
                >
                  <div className="w-full flex flex-col md:grid-rows-4  content-center">
                    {/* Nombre y Apellido en la misma fila */}
                    <div className="flex flex-row gap-1 mb-3">
                      <div className="">
                        <label className="text-sm font-gothamBI text-tono2 p-2 justify-start flex">
                          Nombre Completo
                        </label>
                        <input
                          name="user_name"
                          type="text"
                          placeholder="Pedro Alfonso"
                          onChange={handleChange}
                          value={formData.user_name}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>

                      {/* Empresa y Teléfono en la misma fila */}

                      <div>
                        <label className="text-sm font-gothamBI text-tono2 p-2 justify-start flex">
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
                    </div>
                    <div className="flex flex-row gap-1 mb-3">
                      <div>
                        {" "}
                        <label className="text-sm font-gothamBI text-tono2 p-2 justify-start flex">
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

                      {/* Email */}
                      <div>
                        <label className="text-sm font-gothamBI text-tono2 p-2 justify-start flex">
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
                    </div>

                    {/* Mensaje */}
                    <div className="mb-3">
                      <label className="text-sm font-gothamBI text-tono2 p-2 justify-start flex">
                        Mensaje
                      </label>
                      <textarea
                        name="user_message"
                        rows="4"
                        placeholder="¡Estoy interesado en sus productos!"
                        onChange={handleChange}
                        value={formData.user_message}
                        required
                        className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full h-10 px-3 text-gray-700 leading-tight focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Botones */}
                  <button
                    type="submit"
                    className="font-gothamB sm:px-4 px-24 py-1 bg-tono3 rounded-md text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-tono2"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
      <div className="items-center justify-center text-center flex text-gray-700 font-gothamB py-2 text-parrafo font-bold my-6 sm:mx-0 mx-4">
        Nos tomaremos tiempo para validar los datos. Te sugerimos completar
        todos los datos de tu empresa para evitar demoras.
      </div>
    </div>
  );
}

export default Contact;
