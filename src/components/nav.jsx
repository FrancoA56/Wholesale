import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import wsBlanco from "../media/imagenes/MONOGRAMA-WHOLESALE-BLANCO.png";
import { useLocation } from "react-router-dom";
import Dropdown from "./dropDown";
import axios from "axios";
import "../styles/navBar.css";

function Nav() {
  const [isExpanded, setExpanded] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const location = useLocation();

  // ? FUNCIONES PARA USAR EMAIL JS
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_lastname: "",
    user_company: "",
    user_phone: "",
    user_email: "",
    user_message: "",
  });

  //Función para manejar el cambio en los inputs del form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  //Función para manejar el envío del form
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
      if (formData.user_message)
        textParts.push(`Mensaje: ${formData.user_message}`);
      try {
        const objetoBody = {
          to: "pamela.v@ws-dyr.com",
          subject: "¡Quiero registrarme!",
          text: textParts.join("\n"),
        };
        const { data } = await axios.post(
          `https://wholesale-api.onrender.com/api/registration`,
          objetoBody,
          { headers: { "Content-Type": "Application/Json" } } // Configurar los encabezados
        );
        showSuccessAlert(data.message);
        setPopupOpen(false);
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
      className={`navbar ${
        isExpanded ? "expanded" : ""
      } sm:bg-pizita bg-pizitaCel text-tono5 font-gothamBI fixed w-screen z-30 pr-3 flex items-start`}
      onMouseEnter={() => {
        setExpanded(true);
      }}
      onMouseLeave={() => {
        setExpanded(false);
      }}
      onClick={()=>setExpanded(true)}
    >
      <div className="flex py-2 px-3 w-screen justify-between">
        <a className="flex justify-start sm:flex-row flex-col" href="/" title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830">
          {/* Agregar la imagen a la izquierda */}
          <img
            className="w-12 hover:scale-125 transition duration-300 ease-in-out transform "
            src={wsBlanco}
            alt="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
          />
        </a>
        <div className="sm:flex-row flex-col sm:contents hidden">
          {/* Elementos principales alineados a la derecha */}
          <div className="flex  gap-6 justify-end mt-1 ">
            {location.pathname !== "/" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Inicio
              </a>
            )}
            {location.pathname !== "/contacto" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/contacto"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Contacto
              </a>
            )}
            {location.pathname !== "/acercaDe" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="/acercaDe"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Nosotros
              </a>
            )}
            <Dropdown isExpanded={isExpanded} />
            <a
              className="hover:scale-110 transition pointer duration-300 ease-in-out transform"
              href="https://app.holded.com/login?lang=es"
              target="_blank"
              title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              rel="noreferrer"
            >
              Ingresar
            </a>
            <button
              onClick={() => setPopupOpen(true)}
              className="shadow-[0_4px_9px_-4px_#000000] font-gothamB bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform"
            >
              Registrarse
            </button>

            {isPopupOpen && (
              <div className="fixed inset-0 bg-tono1 bg-opacity-80 z-50 flex items-center justify-center">
                <form
                  className="mt-1"
                  ref={form}
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  {/* ... Tu formulario aquí */}
                  <div className="isolate w-full h-2/3 bg-tono5 rounded-md px-6 sm:py-3 lg:px-3">
                    {/* Creo q le da animacion y el tamaño */}
                    <div
                      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                      aria-hidden="true"
                    ></div>
                    {/* Encabezado */}
                    <div className="mx-auto flex flex-col items-center justify-center min-w-xl max-w-xl border-b border-tono3">
                      <h2 className="text-3xl font-BodoniB tracking-tight text-tono2  sm:text-4xl  uppercase leading-normal">
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
                            htmlFor="first-name"
                            className="text-sm font-gothamBI text-tono2 px-2"
                          >
                            {" "}
                            Nombre
                          </label>
                          <input
                            name="user_name"
                            id="user_name"
                            autoComplete="Nombre"
                            // autoComplete="off"
                            type="text"
                            placeholder="Pedro"
                            onChange={handleChange}
                            value={formData.user_name}
                            required
                            className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                          />
                        </div>
                        {/* Apellido */}
                        <div className="flex flex-col items-start pr-5 pl-1 py-0.5">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-gothamBI text-tono2 px-2"
                          >
                            {" "}
                            Apellido
                          </label>
                          <input
                            type="text"
                            name="user_lastname"
                            id="user_lastname"
                            autoComplete="Apellido"
                            placeholder="Alfonso"
                            // autoComplete="off"
                            onChange={handleChange}
                            required
                            // value={formData.lastname}
                            className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                          />
                        </div>
                      </div>
                      {/* name (company name)*/}
                      <div className=" flex flex-col items-start px-5 py-0.5">
                        <label
                          htmlFor="name"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="user_company"
                          id="user_company"
                          autoComplete="organization"
                          placeholder="Wholesale"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* phone (phone number)*/}
                      <div className=" flex flex-col items-start px-5 py-0.5">
                        <label
                          htmlFor="phone"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Teléfono
                        </label>
                        <input
                          type="number"
                          name="user_phone"
                          id="user_phone"
                          autoComplete="Teléfono"
                          placeholder="011-2305-3139"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* email */}
                      <div className=" flex flex-col items-start px-5 py-0.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Email
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          autoComplete="email"
                          placeholder="hola@ws-dyr.com"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          value={formData.user_email}
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* message */}
                      <div className=" flex flex-col items-start px-5 py-0.5">
                        <label
                          htmlFor="message"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Mensaje
                        </label>
                        <textarea
                          name="user_message"
                          id="user_message"
                          rows="4"
                          onChange={handleChange}
                          required
                          value={formData.message}
                          placeholder="¡Estoy interesado en sus productos! Quisiera registrarme."
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* Botones */}
                      <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                        <button
                          type="submit"
                          name="submit"
                          value="Send"
                          className="font-gothamB h-10 w-11/12 mt-2 mb-2 bg-tono3 rounded-md md:px-2 md:w-2/3 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-tono2 hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        >
                          Enviar
                        </button>
                        <button
                          onClick={() => setPopupOpen(false)}
                          className="font-gothamB mt-2 mb-2 h-10 w-11/12 inline-block bg-gray-300 text-black md:w-2/3 rounded-md md:px-2 md:m-1 text-sm font-medium uppercase leading-normal hover:text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform"
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex-col contents sm:hidden">
          {/* Elementos principales alineados a la derecha */}
          <div className="flex flex-col gap-6 justify-end mt-1 ">
            <i
              className="fa-solid fa-grip-lines flex justify-center ml-12 mt-1"
              onClick={() => {
                // Agrega una función para manejar el clic en el icono
                // Aquí puedes expandir o contraer la barra de navegación según el estado actual
                setExpanded(!isExpanded);
              }}
            ></i>
        
            {location.pathname !== "/" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Inicio
              </a>
            )}
            {location.pathname !== "/contacto" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/contacto"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Contacto
              </a>
            )}
            {location.pathname !== "/acercaDe" && (
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="/acercaDe"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                Nosotros
              </a>
            )}
            <Dropdown />
            <a
              className="hover:scale-110 transition pointer duration-300 ease-in-out transform flex justify-end"
              href="https://app.holded.com/login?lang=es"
              target="_blank"
              rel="noreferrer"
              title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
            >
              Ingresar
            </a>
            <button
              onClick={() => setPopupOpen(true)}
              className="shadow-[0_4px_9px_-4px_#000000] font-gothamB bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
            >
              Registrarse
            </button>

            {isPopupOpen && (
              <div className="fixed inset-0 bg-tono1 bg-opacity-80 z-50 flex pr-8 items-center justify-center ">
                <form
                  className="mt-1"
                  ref={form}
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  {/* ... Tu formulario aquí */}
                  <div className="isolate w-full mx-4 bg-tono5 rounded-md px-2">
                    {/* Creo q le da animacion y el tamaño */}
                    <div
                      className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                      aria-hidden="true"
                    ></div>
                    {/* Encabezado */}
                    <div className="mx-auto flex flex-col items-center justify-center min-w-xl max-w-xl border-b border-tono3">
                      <h2 className="text-3xl font-BodoniB tracking-tight text-tono2  sm:text-4xl  uppercase leading-normal">
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

                      {/* Nombre */}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="first-name"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Nombre
                        </label>
                        <input
                          name="user_name"
                          id="user_name"
                          autoComplete="Nombre"
                          // autoComplete="off"
                          type="text"
                          placeholder="Pedro"
                          onChange={handleChange}
                          value={formData.user_name}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* Apellido */}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="last-name"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Apellido
                        </label>
                        <input
                          type="text"
                          name="user_lastname"
                          id="user_lastname"
                          autoComplete="Apellido"
                          placeholder="Alfonso"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          // value={formData.lastname}
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* name (company name)*/}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="name"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Empresa
                        </label>
                        <input
                          type="text"
                          name="user_company"
                          id="user_company"
                          autoComplete="organization"
                          placeholder="Wholesale"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* phone (phone number)*/}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="phone"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Teléfono
                        </label>
                        <input
                          type="number"
                          name="user_phone"
                          id="user_phone"
                          autoComplete="Teléfono"
                          placeholder="011-2305-3139"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* email */}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="email"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Mail
                        </label>
                        <input
                          type="email"
                          name="user_email"
                          id="user_email"
                          autoComplete="email"
                          placeholder="hola@ws-dyr.com"
                          // autoComplete="off"
                          onChange={handleChange}
                          required
                          value={formData.user_email}
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* message */}
                      <div className=" flex flex-col items-start pr-5 py-0.5">
                        <label
                          htmlFor="message"
                          className="text-sm font-gothamBI text-tono2 px-2"
                        >
                          {" "}
                          Mensaje
                        </label>
                        <textarea
                          name="user_message"
                          id="user_message"
                          rows="4"
                          onChange={handleChange}
                          required
                          value={formData.message}
                          placeholder="¡Estoy interesado en sus productos! Quisiera registrarme."
                          className="appearance-none border-b-2 border-tono2 focus:border-tono3 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                        />
                      </div>
                      {/* Botones */}
                      <div className="flex flex-col justify-center items-center mt-5 md:px-4 md:flex-row md:justify-center">
                        <button
                          type="submit"
                          name="submit"
                          value="Send"
                          className="h-10 w-11/12 mt-2 mb-2 bg-tono3 rounded-md md:px-2 md:w-2/3 md:m-1 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-tono2 hover:bg-logo hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        >
                          Enviar
                        </button>
                        <button
                          onClick={() => setPopupOpen(false)}
                          className="mt-2 mb-2 h-10 w-11/12 inline-block bg-gray-300 text-black md:w-2/3 rounded-md md:px-2 md:m-1 text-sm font-medium uppercase leading-normal hover:text-white shadow-[0_4px_9px_-4px_#000000] transition duration-150 ease-in-out hover:bg-[#303030] hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.3),0_4px_18px_0_rgba(0,0,0,0.2)]"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="https://www.facebook.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                className="hover:scale-110 transition duration-300 ease-in-out transform flex justify-end"
                href="https://www.instagram.com/wholesale.dyr/"
                target="_blank"
                rel="noreferrer"
                title="Argentina venta mayorista wholesale dyr ooni emile henry boj mauviel1830"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
