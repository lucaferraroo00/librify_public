import React, { useState } from "react";

import './App.css';
import {HomePage} from './components/homepage.js'
import {Profilo} from './components/profilo.js'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { Eventi } from "./components/eventi.js";
import { Crea } from "./components/crea.js";
import { GruppiLettura } from "./components/gruppiLettura.js";
import { Catalogo } from "./components/catalogo.js";


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
    <Route path= '/profilo' element  = {<Profilo/>} />
    <Route path= '/eventi' element  = {<Eventi/>} />
    <Route path= '/crea' element  = {<Crea/>} />
    <Route path= '/gruppilettura' element  = {<GruppiLettura/>} />
    <Route path= '/catalogo' element  = {<Catalogo/>} />


    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}

export default App;
