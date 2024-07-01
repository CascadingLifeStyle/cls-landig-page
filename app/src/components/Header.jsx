/* eslint-disable react/jsx-max-depth */
import React, { useState, useEffect } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Helmet>
        <title>GIE</title>
        <link rel="icon" type="image/png" href={ logo } />
      </Helmet>
      <header className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark flex h-24 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-center">
          <div className="flex items-center">
            <img className="h-12 w-12" src={logo} alt="Logo" />
          </div>
          <div className="hidden md:flex md:items-center space-x-10">
            <NavBar />
          </div>
          <div className="flex items-center space-x-6">
            <a href="https://www.linkedin.com" target="_blank" aria-label="Linkedin logo" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark mx-2">
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.instagram.com" target="_blank" aria-label="Instagram logo" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark mx-2">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="https://wa.me/yourwhatsappnumber" aria-label="Whatsapp logo" target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:text-secondary-light dark:hover:text-secondary-dark mx-2">
              <FaWhatsapp className="h-6 w-6" />
            </a>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </label>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                <CiMenuBurger className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div className="bg-bg-light dark:bg-bg-dark text-text-light dark:text-text-dark md:hidden border-b border-border-color fixed top-24 left-0 right-0 z-40">
          <NavBarMobile />
        </div>
      )}
    </div>
  );
}

export default Header;
