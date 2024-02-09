import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import wsBlanco from "../media/imagenes/MONOGRAMA-WHOLESALE-BLANCO.png";
import { NavLink } from "react-router-dom";

function Nav() {

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
     showSuccessAlert("El mensaje fue enviado correctamente. ¡Pronto nuestro personal se estara comunicando contigo!");
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
    <div className="bg-tono1 text-tono5 text-parrafo font-gothamB">
      <div className="flex justify-between items-center py-1 px-3">
        {/* Agregar la imagen a la izquierda */}
        <img className="w-12" src={wsBlanco} alt="wholesale logo" />
        {/* Elementos principales alineados a la derecha */}
        <div className="flex gap-6">
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/">
            Inicio
          </NavLink>
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/contacto">
            Contacto
          </NavLink>
          <NavLink className="hover:scale-110 transition duration-300 ease-in-out transform" to="/acercaDe">
            Acerca de
          </NavLink>
          <button onClick={() => setPopupOpen(true)} className=" bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform">
  Registrarse
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
          <div className="grid grid-cols-2 gap-3">
            <a className="hover:scale-110 transition duration-300 ease-in-out transform"  href="https://www.facebook.com/wholesale.dyr/" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a className="hover:scale-110 transition duration-300 ease-in-out transform"  href="https://www.instagram.com/wholesale.dyr/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
