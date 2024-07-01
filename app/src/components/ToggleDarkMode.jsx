import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function ToogleDarkMode() {
  const { isActive, setIsActive } = useContext(ThemeContext);

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={ isActive }
        onChange={ () => setIsActive(!isActive) }
        className="sr-only peer"
      />
      <div
        className="w-11 h-5 bg-gray-200
        peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300
        dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
        peer-checked:after:translate-x-full
        peer-checked:after:border-white after:content-['']
        after:absolute after:top-0.6 after:left-0.5
        after:bg-white after:border-gray-300
        after:border after:rounded-full after:h-5 after:w-5 after:transition-all
        dark:border-gray-600 peer-checked:bg-blue-600"
      />
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {isActive ? 'Light Mode' : 'Dark Mode'}
      </span>
    </label>
  );
}

export default ToogleDarkMode;
