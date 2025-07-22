import React, { useState, useRef } from "react";
import Swal from "sweetalert2";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const ubicacion = localStorage.getItem("ubicacion") || "desconocida";
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      showErrorAlert("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    setLoading(true);

    const mensaje = `Nuevo suscriptor al newsletter de Wholesale by D&R desde ${ubicacion}`;

    const formPayload = {
      access_key: "fc4fd88f-5f36-44bb-adf5-c0fa126d8f50",
      subject: "Nuevo suscriptor al newsletter",
      from_name: "Newsletter Web",
      email: email,
      message: `Email: ${email}\n${mensaje}`,
      captcha: "true",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formPayload),
      });

      const data = await res.json();

      if (data.success) {
        showSuccessAlert("Gracias por suscribirte al newsletter.");
        setEmail(""); // limpiar campo
      } else {
        showErrorAlert("Error al enviar. Intenta nuevamente.");
      }
    } catch (error) {
      showErrorAlert("Ocurrió un error. Intenta más tarde.");
    } finally {
      setLoading(false);
    }
  };

  const showSuccessAlert = (message) => {
    Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: message,
      confirmButtonColor: "rgb(94 195 191)",
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  return (
    <div className="font-gothamB bg-tono1 py-6 flex flex-row items-center justify-center px-32 text-white mt-6">
      <div className="w-full flex flex-col text-end justify-right mr-4">
        <div className="text-subtitulo">
          Suscríbete a nuestro{" "}
          <p className="font-gothamBI inline-block">Newsletter</p>
        </div>
        <div className="text-parrafo">
          No te pierdas de todas nuestras promociones y novedades
        </div>
      </div>

      {/* Formulario */}
      <form className="w-full" onSubmit={handleSubmit} ref={form}>
        {/* Honeypot (anti-bot) */}
        <input
          type="text"
          name="honeypot"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-tono1 mr-2 border-b-2 text-white px-2 py-1"
        />
        <button
          className="shadow-[0_4px_9px_-4px_#000000] font-gothamB bg-tono3 px-2 rounded-md hover:bg-tono2 hover:scale-110 transition duration-300 ease-in-out transform"
          type="submit"
          disabled={loading}
        >
          {loading ? "Enviando..." : "Suscríbete"}
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
