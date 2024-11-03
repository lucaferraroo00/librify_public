import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';
import {HomePage} from './components/homepage.js'
import {MyNavbar} from './components/navbar.js'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';

function App() {
  return (
    <Router>
      <App2 />
    </Router>
  )
}

function App2() {


  return (
    <>
    <Routes>
    <Route path= "/" element  = {<HomePage/>} />
    <Route path= '/pofilo' element  = {<HomePage/>} />
    </Routes>
    </>
  );
}

export default App;
