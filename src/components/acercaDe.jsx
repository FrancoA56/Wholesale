import React from "react";

function Contacto() {
  return (
    <div className="font-gothamB pt-12">
      <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo mt-6">
        ¿Quienes somos?
      </div>
      <div className="grid grid-cols-2">
        <div className="items-center justify-center items-center flex p-12 text-gray-700 font-gothamB py-12 text-parrafo">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
          sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur
          tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
          Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
          egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis,
          luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris
          ipsum. Nulla metus metus,{" "}
        </div>
        <div className="flex justify-center text-center items-center p-6 ">
          <img
            src="https://www.emilehenryusa.com/cdn/shop/products/Bread-cloche-1_1024x1024@2x.gif?v=1701888711"
            alt="emile henry gif"
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div></div>
        <div></div>
        <div>
          <div className="flex justify-center items-center text-gray-700 font-gothamB text-subtitulo mt-6">
            ¡Nuestras redes!
          </div>
          <div className="text-tono2 flex justify-center items-center my-1">
            <i class="fa-solid fa-arrow-down-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
