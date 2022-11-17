import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
// import Error from './components/pages/Error';
import OddEven from './components/pages/OddEven';
import FetchData from './components/pages/FetchData';
import Dynamic from './components/pages/Dynamic';
import { Route, Routes } from 'react-router-dom';
import Annoucement from './components/pages/Annoucement';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/oddEven" element={<OddEven />}/>
      <Route path="/fetchdata" element={<FetchData />}/>
      <Route path="/dynamic" element={<Dynamic />}/>
      <Route path="/annoucement/:id" element={<Annoucement />} />
      {/* <Route path="/*" element={<Error />}/> */}
    </Routes>
  );
}

export default Routing;