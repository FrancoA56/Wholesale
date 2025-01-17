import React from "react";

function Preguntas() {
  const faqs = [
    {
      pregunta: "¿Qué tipo de productos ofrecemos?",
      respuesta: "Ofrecemos una amplia gama de artículos de cocina para empresas mayoristas, como utensilios, vajillas, y electrodomésticos pequeños."
    },
    {
      pregunta: "¿Cuál es el pedido mínimo para compras mayoristas?",
      respuesta: "No tenemos una venta mínima"
    },
    {
      pregunta: "¿Hacemos envíos a todo el país?",
      respuesta: "Sí, realizamos envíos a todas las provincias. Los tiempos de entrega varían según la ubicación."
    },
    {
      pregunta: "¿Puedo personalizar los productos?",
      respuesta: "Sí, ofrecemos personalización en ciertos artículos. Consulta las opciones disponibles."
    },
    {
      pregunta: "¿Qué métodos de pago aceptamos?",
      respuesta: "Aceptamos transferencias bancarias, tarjetas de crédito y débito, y pagos mediante plataformas electrónicas."
    }
  ];

  return (
    <div className="font-gothamB pt-16">
      <div className="mx-6 md:mx-40">
        {/* Título */}
        <h1 className="text-center text-2xl md:text-4xl text-gray-700 font-bold mb-8">
          ¡Preguntas frecuentes!
        </h1>
        
        {/* Lista de FAQs */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              {/* Pregunta */}
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {faq.pregunta}
              </h2>
              {/* Respuesta */}
              <p className="text-gray-600">
                {faq.respuesta}
              </p>
            </div>
          ))}
        </div>
        <div className="my-12"></div>
      </div>
    </div>
  );
}

export default Preguntas;
