import React from "react";
import { Route, Routes } from 'react-router-dom';

import {Login, Register, Navbar, Home, Cv , Contact, About, Cvmaker, Body} from './Components';
const App = () => {

 
  return (
    <>
    <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cv" element={<Cv />} />
        <Route exact path="/cvmaker" element={<Cvmaker />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/body" element={<Body />} />

      </Routes>
    </>
  );
}
export default App;
