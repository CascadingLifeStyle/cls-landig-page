import React from 'react';
import { Link } from 'react-router-dom';

function NavBarMobile() {
  return (
    <nav className="flex flex-col items-center justify-center space-y-4">
      <Link
        to="/"
        className="text-primary-light  dark:text-primary-dark
        hover:text-secondary-light hover:dark:text-secondary-dark
          px-3 py-2 rounded-md text-sm text-xl text-xl md:text-2xl font-medium"
      >
        Início
      </Link>
      <Link
        to="/about"
        className="text-primary-light dark:text-primary-dark
        hover:text-secondary-light hover:dark:text-secondary-dark
          px-3 py-2 rounded-md text-sm text-xl md:text-2xl font-medium"
      >
        Sobre Nós
      </Link>
      <Link
        to="/services"
        className="text-primary-light dark:text-primary-dark
        hover:text-secondary-light hover:dark:text-secondary-dark
          px-3 py-2 rounded-md text-sm text-xl md:text-2xl font-medium"
      >
        Serviços
      </Link>
      <Link
        to="/contact"
        className="text-primary-light dark:text-primary-dark
        hover:text-secondary-light hover:dark:text-secondary-dark
          px-3 py-2 rounded-md text-sm text-xl md:text-2xl font-medium"
      >
        Contatos
      </Link>
    </nav>
  );
}

export default NavBarMobile;
