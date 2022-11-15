import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';
import OddEven from './components/pages/OddEven';
import { Route, Routes } from 'react-router-dom';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/oddEven" element={<OddEven />}/>
      <Route path="/*" element={<Error />}/>
    </Routes>
  );
}

export default Routing;