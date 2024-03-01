// Dropdown.js

import React, { useState, useEffect } from "react";
import "../styles/dropDown.css";

const Dropdown = ({ isExpanded }) => {
  const [isOpen, setIsOpen] = useState(false);
  const marcas = ["Boj", "Ooni", "Emile Henry", "Mauviel 1830"];

  useEffect(() => {
    if (!isExpanded) {
      setIsOpen(false);
    }
  }, [isExpanded]);

  const handleMarcaChange = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left hover:scale-110 transition transform ease-in-out"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div>
        {/* Icono de flecha izq */}
        {isOpen ? (
          <i className="fa-solid fa-chevron-right sm:hidden absolute left-9 text-sm top-0.5"></i>
        ) : (
          <i className="fa-solid fa-chevron-left sm:hidden absolute left-9 text-sm top-0.5"></i>
        )}
        <button
          type="button"
          className="sm:inline-flex sm:justify-center w-full text-white flex justify-end"
          id="options-menu"
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
        >
          {"Marcas"}
          {/* Icono de flecha abajo */}
          <div className="ml-1">
            {isOpen ? (
              <i className="fa-solid fa-chevron-up sm:contents hidden text-sm"></i>
            ) : (
              <i className="fa-solid fa-angle-down sm:contents hidden text-sm"></i>
            )}
          </div>
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="sm:origin-top-right absolute w-32 mt-2 rounded-md shadow-lg origin-top-left right-20 bottom-0 sm:right-0 sm:left-0 sm:top-5 -top-8 slow-open"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {marcas.map((marca, index) => (
            <a
              key={index}
              href={`/${marca.replace(/\s+/g, "")}`}
              activeClassName="bg-gray-100 text-white"
              className="block"
            >
              <button
                onClick={() => handleMarcaChange()}
                className="flex w-full px-4 py-1 text-sm hover:scale-110 transition transform ease-in-out bg-tono1 bg-opacity-60 text-opacity-80 rounded-md"
                role="menuitem"
              >
                {marca}
              </button>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
