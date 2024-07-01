import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ToogleDarkMode from './ToggleDarkMode';

function SocialMediaMenu() {
  return (
    <>
      <a
        href="https://www.linkedin.com"
        target="_blank"
        aria-label="Linkedin logo"
        rel="noopener noreferrer"
        className="text-primary-light
              dark:text-primary-dark
              hover:text-secondary-light
              dark:hover:text-secondary-dark mx-2"
      >
        <FaLinkedin className="h-6 w-6" />
      </a>
      <a
        href="https://www.instagram.com"
        target="_blank"
        aria-label="Instagram logo"
        rel="noopener noreferrer"
        className="text-primary-light
            dark:text-primary-dark hover:text-secondary-light
            dark:hover:text-secondary-dark mx-2"
      >
        <FaInstagram className="h-6 w-6" />
      </a>
      <a
        href="https://wa.me/yourwhatsappnumber"
        aria-label="Whatsapp logo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-light
            dark:text-primary-dark hover:text-secondary-light
            dark:hover:text-secondary-dark mx-2"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
      <ToogleDarkMode />
    </>
  );
}

export default SocialMediaMenu;
