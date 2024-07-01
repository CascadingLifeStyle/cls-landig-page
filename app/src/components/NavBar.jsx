import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="flex space-x-4">
      <Link
        to="/"
        className="text-[#1b0c44]
        hover:text-orange-500 px-3 py-2 rounded-md text-sm md:text-lg font-medium"
      >
        Início
      </Link>
      <Link
        to="/about"
        className="text-[#1b0c44]
         hover:text-orange-500 px-3 py-2 rounded-md text-sm md:text-lg font-medium"
      >
        Sobre Nós
      </Link>
      <Link
        to="/services"
        className="text-[#1b0c44]
        hover:text-orange-500 px-3 py-2 rounded-md text-sm md:text-lg font-medium"
      >
        Serviços
      </Link>
      <Link
        to="/contact"
        className="text-[#1b0c44]
        hover:text-orange-500 px-3 py-2 rounded-md text-sm md:text-lg font-medium"
      >
        Contatos
      </Link>
    </nav>
  );
}

export default NavBar;
