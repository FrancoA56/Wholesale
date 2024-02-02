import React from "react";
import fotoCos from "../media/cropped-Logo_COS.png"

function Head() {
  return (
    <div className="text-center mx-auto bg-black bg-opacity-80 rounded-xl w-2/5 overflow-hidden shadow-lg my-8">
    <div className="md:flex items-center mx-auto">
      <div className="md:flex-shrink-0 w-60">
        <img className="object-cover" src={fotoCos} alt="Cos logo"/>
      </div>
      <div className="p-8 bg-white bg-opacity-90 w-full">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Mediados de Abril 2024</div>
        <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Evento de Logística</a>
        <p className="mt-2 text-gray-500">¡Te invitamos a participar!</p>
      </div>
    </div>
  </div>
  
  );
}

export default Head;
