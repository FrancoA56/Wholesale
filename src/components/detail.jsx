import imagen from "../media/imagenes/ooni/karu16pizzaovenUS.jpg"; // cambiá por la imagen que quieras

function Detail() {
  const product = {
    name: "Horno Karu 16",
    description: "La cocina al aire libre más versátil de Ooni.",
    brand: "Ooni",
    category: "Horno",
    image: imagen,
  };

  return (
    <>
      <div className="text-black mt-12"> </div>
      <div className="mb-6 bg-white px-6 flex justify-center items-start font-gothamB">
        <div className=" text-black rounded-xl overflow-hidden w-full grid md:grid-cols-2 gap-20 p-6">
          <div className="w-full h-[500px] bg-slate-700 rounded-lg overflow-hidden flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="object-contain "
            />
          </div>
          <div className="flex flex-col justify-between items-left text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2 text-tono1">
                {product.name}
              </h2>
              <p className="text-black mb-4 text-parrafo">
                {product.description}
              </p>
              <p className=" text-slate-600">
                Marca: <span className="text-black">{product.brand}</span>
              </p>
              <p className=" text-slate-600">
                Categoría:{" "}
                <span className="text-black">{product.category}</span>
              </p>
              <p className="text-slate-600">
                SKU: <span className="text-black">UU-P0E400</span>
              </p>
              <hr className="my-2" />
              <p className="text-slate-600">
                Unidades por caja: <span className="text-black">1 </span>
              </p>
              <p className="text-slate-600 mt-6 mb-2">¿Queres saber más? </p>
              <div className="inline-block py-2 bg-green-200 px-4 rounded-lg">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                  href={`https://web.whatsapp.com/send?phone=5491123053139&text=${encodeURIComponent(
                    `Hola, quiero consultar sobre el producto ${product.name}`
                  )}`}
                >
                  <i
                    class="fa fa-whatsapp text-green-700 "
                    aria-hidden="true"
                  />
                  <p className=" ml-2 text-green-700">Consultar por WhatsApp</p>
                </a>
              </div>
            </div>
            <div className="mt-8 flex flex-col items-start justify-start">
              <p className="mb-2 text-slate-600">¿Ya sos cliente?</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-600 hover:bg-slate-500 text-white font-semibold py-2 px-4 rounded transition"
                href="https://tradeampshippingcompanysrl9812.holded.com/portal/catalog/668c4e67306646dea00d034f"
              >
                Comprar en Holded
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 border-b-2 border-tono3"
                href="https://tradeampshippingcompanysrl9812.holded.com/portal/login"
              >
                <p className="text-sm">
                  <i
                    class="fa fa-long-arrow-right text-tono3 mr-2 text-sm "
                    aria-hidden="true"
                  ></i>
                  Iniciar sesión en Holded para visualizar los precios
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="text-tono3 mx-12 " />
      <div className="bg-white mb-6 px-6 flex justify-center items-start font-gothamB">
        <div className=" text-black rounded-xl overflow-hidden w-full p-6 flex flex-col">
          <p className=" text-slate-800 justify-start items-start text-left">
            <p>
              Cocine comidas épicas al aire libre con leña o carbón u opte por
              una cocción de bajo mantenimiento con un quemador de gas Ooni Karu
              16 (se vende por separado). <br />
              <br />
              ✅ Fantásticas pizzas. <br />
              ✅ Carnes asadas <br />
              ✅ Verduras braseadas <br />✅ Pan recién hecho.
            </p>
            <br />
            <p>
              Gracias a las nuevas características de diseño, prepare pizzas de
              16 pulgadas mientras disfruta de un mejor control de la
              temperatura, un flujo de aire más eficiente, un mayor aislamiento
              del horno y una mejor visibilidad.
              <br />
              Después de solo 15 minutos de precalentamiento, podrá cocinar a
              950 °F (500 °C), preparar pizzas cocidas al fuego en 60 segundos,
              filetes Tomahawk perfectamente chamuscados, verduras asadas y
              mucho más con el horno Ooni Karu 16.
            </p>
          </p>
        </div>
      </div>

      <div className="bg-white mb-12 mx-12 flex justify-center items-start font-gothamB">
        <div className="text-black rounded-xl overflow-hidden w-full flex flex-col">
          <h2 className=" font-bold mb-2 text-slate-800 text-left">
            Especificaciones:
          </h2>
          <div className="text-slate-800 text-left flex flex-row justify-between gap-6">
            <div className="flex flex-col">
              <p className=" text-slate-600">Peso de caja:</p>
              <p>39.3 kg</p>
            </div>
            <div className="flex flex-col">
              <p className=" text-slate-600">Dimensiones del producto:</p>
              <p>95 x 61 x 40 cm</p>
            </div>
            <div className="flex flex-col">
              <p className=" text-slate-600">Materiales:</p>
              <p>
                Acero al carbon - Acero inoxidable - Cordierita - Vidrio
                templado
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
