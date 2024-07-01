import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './sections/Hero';

function App() {
  return (
    <div className="text-orange-500">
      <Routes>
        <Route path="/" element={ <Hero /> } />
      </Routes>

    </div>
  );
}

export default App;
