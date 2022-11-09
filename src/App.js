import React from 'react'
import './App.css';
import Routing from './Route';
import Navbar from './components/block/Navbar';
// import Footer from './components/block/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
  <Navbar />
  <Routing/>
  </Router>
</div>
  );
}

export default App;
