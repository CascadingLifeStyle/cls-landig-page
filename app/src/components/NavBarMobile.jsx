import React from 'react';
import { Link } from 'react-router-dom';

function NavBarMobile() {
  return (
    <nav className="flex flex-col items-center justify-center space-y-4">
      <Link
        to="/"
        className="text-[#1b0c44]
         hover:text-[#1b0c44] block px-3 py-2
         rounded-md text-base font-medium"
      >
        Início
      </Link>
      <Link
        to="/about"
        className="text-[#1b0c44]
        hover:text-[#1b0c44] block px-3 py-2
        rounded-md text-base font-medium"
      >
        Sobre Nós
      </Link>
      <Link
        to="/services"
        className="text-[#1b0c44]
        hover:text-[#1b0c44] block px-3 py-2
        rounded-md text-base font-medium"
      >
        Serviços
      </Link>
      <Link
        to="/contact"
        className="text-[#1b0c44]
         hover:text-[#1b0c44] block px-3 py-2
         rounded-md text-base font-medium"
      >
        Contatos
      </Link>
    </nav>
  );
}

export default NavBarMobile;
