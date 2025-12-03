import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Routess/Home'
import About from './Routess/About';
import Service from './Routess/Service';
import Contact from './Routess/Contact';

function App() {

  return (
    <>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    
     {/* <Home /> */}
    </>
  )
}

export default App
