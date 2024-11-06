import React, { useState } from "react";

import './App.css';
import {HomePage} from './components/homepage.js'
import {Profilo} from './components/profilo.js'
import 'bootstrap/dist/css/bootstrap.min.css';  
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { Eventi } from "./components/eventi.js";

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


    <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  );
}

export default App;
