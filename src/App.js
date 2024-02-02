import React from "react";
import Head from "./components/head.jsx";
import Footer from "./components/footer.jsx";
import Nav from "./components/nav.jsx";
import foto from "./media/aviones.png";
import "./App.css";

function App() {
  return (
    <div
      className="bg-cover items-center bg-center h-full bg-fixed"
      style={{ backgroundImage: `url(${foto})` }}
    >
      <Nav />
      <h1 className="text-3xl text-indigo-500 font-bold bg-white bg-opacity-80 mx-auto rounded-xl py-1 w-2/5 text-center mt-8">
        Evento de Logística Abril '24
      </h1>
      <div className="container mx-auto px-4">
        {/* Contenido del blog aquí */}
      </div>

      <Head />
      <div className="flex justify-center">
        <a
          href="https://denis-ros.com"
          className="bg-indigo-500 mx-auto text-center hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded inline-block mt-4 transition duration-300 ease-in-out transform hover:scale-110"
        >
          ¡Regístrate ahora!
        </a>
      </div>
      <div className="text-center mx-auto bg-white bg-opacity-90 rounded-xl w-3/5 overflow-hidden shadow-lg my-8">
        <div className="px-12 py-6">        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa.

Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.

Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.

Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.

Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus.

Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor.

Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris.       </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
