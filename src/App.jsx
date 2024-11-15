import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
// import Politics from './pages/Politics';
// import Sports from './pages/Sports';

const App = () => {
  return (
   <>
    <Navbar />
    <Home />
   </>
  );
};

export default App;
