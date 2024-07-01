import { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [isActive, setIsActive] = useState(() => {
    const savedTheme = localStorage.getItem('isActive');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem('isActive', JSON.stringify(isActive));
    if (isActive) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isActive]);

  const contextTheme = useMemo(() => ({
    isActive,
    setIsActive,
  }), [isActive]);

  return (
    <ThemeContext.Provider value={ contextTheme }>
      {children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
