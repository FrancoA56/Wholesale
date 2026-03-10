import React from "react";

function Preguntas() {
  const idioma = localStorage.getItem("ubicacion");

  const faqsAr = [
    {
      pregunta: "¿Quiénes pueden obtener nuestros productos?",
      respuesta:
        "Ofrecemos nuestros productos a profesionales de la cocina, restaurantes, hoteles.",
    },
    {
      pregunta: "¿Cómo obtener nuestros productos?",
      respuesta:
        'Ingresa a <a href="https://www.ws-dyr.com/ar/contacto" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://www.ws-dyr.com/ar/contacto</a>, completá los datos solicitados y validá tu casilla de correo. Esto puede demorar hasta 48hs hábiles en obtener la confirmación del usuario habilitado.<strong> Por favor, no olvides consultar tu casilla de correo y revisar la carpeta de SPAM.</strong><br/><br/>Una vez que tengas el usuario de Holded, podés hacer tu pedido. En caso de necesitar ayuda con tu pedido, por favor no dudes en contactarnos por <a href="https://web.whatsapp.com/send?phone=5491123053139" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Whatsapp</a>.<br/><br/>Una vez hecho el pedido de compra, nos comunicamos con vos para gestionar el envío y confirmación.',
    },
    {
      pregunta: "¿Cuándo se entrega mi pedido?",
      respuesta:
        "Una vez confirmado el pedido, con previa aceptación de condiciones comerciales, tu pedido estará disponible para su retiro de 24 a 48 horas hábiles.",
    },
    {
      pregunta: "¿Puedo comprar por unidad o solo por bulto cerrado?",
      respuesta:
        "¡No tenemos mínimo de compra! Podes comprar por unidad, o por bulto.",
    },
  ];

  const faqsUy = [
    {
      pregunta: "¿Quiénes pueden obtener nuestros productos?",
      respuesta:
        "Ofrecemos nuestros productos a profesionales de la cocina, restaurantes, hoteles.",
    },
    {
      pregunta: "¿Cómo obtener nuestros productos?",
      respuesta:
        'Ingresa a <a href="https://www.ws-dyr.com/uy/contacto" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">https://www.ws-dyr.com/uy/contacto</a>, completá los datos solicitados y validá tu casilla de correo. Esto puede demorar hasta 48hs hábiles en obtener la confirmación del usuario habilitado.<strong> Por favor, no olvides consultar tu casilla de correo y revisar la carpeta de SPAM.</strong><br/><br/>Una vez que tengas el usuario de Holded, podés hacer tu pedido. En caso de necesitar ayuda con tu pedido, por favor no dudes en contactarnos por <a href="https://web.whatsapp.com/send?phone=5491123053139" target="_blank" rel="noopener noreferrer" class="text-blue-600 underline">Whatsapp</a>.<br/><br/>Una vez hecho el pedido de compra, nos comunicamos con vos para gestionar el envío y confirmación.',
    },
    {
      pregunta: "¿Cuándo se entrega mi pedido?",
      respuesta:
        "Una vez confirmado el pedido, con previa aceptación de condiciones comerciales, tu pedido estará disponible para su retiro de 24 a 48 horas hábiles.",
    },
    {
      pregunta: "¿Puedo comprar por unidad o solo por bulto cerrado?",
      respuesta:
        "¡No tenemos mínimo de compra! Podes comprar por unidad, o por bulto.",
    },
  ];

  return (
    <div className="font-gothamB pt-16">
      <div className="mx-6 md:mx-40">
        <h1 className="text-center text-2xl md:text-4xl text-gray-700 font-bold mb-8">
          ¡Preguntas frecuentes!
        </h1>

        {idioma === "ar" ? (
          <div className="space-y-6">
            {faqsAr.map((faqAr, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {faqAr.pregunta}
                </h2>
                <p
                  className="text-gray-600 px-4"
                  dangerouslySetInnerHTML={{ __html: faqAr.respuesta }}
                ></p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {faqsUy.map((faq, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {faq.pregunta}
                </h2>
                <p
                  className="text-gray-600 px-6"
                  dangerouslySetInnerHTML={{ __html: faq.respuesta }}
                ></p>
              </div>
            ))}
          </div>
        )}

        <div className="my-12"></div>
      </div>
    </div>
  );
}

export default Preguntas;
