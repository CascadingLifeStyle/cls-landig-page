import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';
import ThemeProvider from './context/ThemeProvider';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={ <Hero /> } />
      </Routes>
    </ThemeProvider>

  );
}

export default App;
