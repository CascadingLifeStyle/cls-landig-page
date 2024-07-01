/* eslint-disable react/jsx-max-depth */
import React, { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { Helmet } from 'react-helmet';
import logo from '../assets/logo.png';
import NavBar from './NavBar';
import NavBarMobile from './NavBarMobile';
import SocialMediaMenu from './SocialMediaMenu';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Helmet>
        <title>GIE</title>
        <link rel="icon" type="image/png" href={ logo } />
      </Helmet>
      <header
        className="bg-bg-light
      dark:bg-bg-dark text-text-dark dark:text-text-light
      flex h-24 fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="px-4
        sm:px-6 lg:px-8 w-full flex
        justify-around items-center"
        >
          <div className="flex items-center">
            <img className="h-12 w-12" src={ logo } alt="Logo" />
          </div>
          <div className="hidden md:flex md:items-center space-x-10">
            <NavBar />
          </div>
          <div className="flex space-x-4">
            <SocialMediaMenu />
            <div className="md:hidden">
              <button
                onClick={ () => setIsOpen(!isOpen) }
                className="inline-flex items-center
                text-primary-light
                justify-center p-2 rounded-md text-gray-400 dark:text-primary-dark
                focus:outline-none focus:ring-2 focus:ring-offset-2 f
                ocus:ring-offset-gray-800 focus:ring-white"
                aria-label={ isOpen ? 'Close menu' : 'Open menu' }
              >
                <CiMenuBurger className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className="bg-bg-light
        dark:bg-bg-dark text-text-dark dark:text-text-light
         md:hidden border-b border-border-color fixed top-24
         left-0 right-0 z-40"
        >
          <NavBarMobile />
        </div>
      )}
    </div>
  );
}

export default Header;
