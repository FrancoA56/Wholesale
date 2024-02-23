import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const marcas = ['Ooni', 'Mauviel 1830', 'Emile Henry'];

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleMarcaChange = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <button
          type="button"
          className="sm:inline-flex sm:justify-center w-full text-white flex justify-end "
          id="options-menu"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
        >
          {'Marcas'}
          {/* Icono de flecha abajo */}
          <svg
            className=" ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="sm:origin-top-right absolute w-32 rounded-md shadow-lg origin-top-left right-20 bottom-0 sm:right-0 sm:left-0 sm:top-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {marcas.map((marca, index) => (
            <a key={index} href={`/${marca.replace(/\s+/g, '')}`} activeClassName="bg-gray-100 text-white" className="block">
              <button
                onClick={() => handleMarcaChange()}
                className="flex w-full px-4 py-1 text-sm text-left hover:scale-110 transition transform ease-in-out"
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
