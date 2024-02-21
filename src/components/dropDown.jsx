import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarca, setSelectedMarca] = useState(null);
  const marcas = ['Ooni', 'Mauviel 1830', 'Emile Henry'];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMarcaChange = (marca) => {
    setSelectedMarca(marca);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex justify-center w-full text-gray-700 text-white"
          id="options-menu"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-haspopup="true"
        >
          {'Marcas'}
          {/* Icono de flecha abajo */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
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
          className="origin-top-right absolute mt-2 w-36 bg-tono1 rounded-md shadow-lg "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {marcas.map((marca, index) => (
            <NavLink key={index} to={`/${marca.replace(/\s+/g, '')}`} activeClassName="bg-gray-100 text-gray-900" className="block">
              <button
                onClick={() => handleMarcaChange(marca)}
                className="flex w-full px-4 py-2 text-sm text-left"
                role="menuitem"
              >
                {marca}
              </button>
              <hr className='border-tono3 mx-2'/>
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
