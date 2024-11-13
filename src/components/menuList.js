import React, { useState } from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import sei_nov from "./6_nov.png"
import "./styles.css";


function MenuList() {

    const navigate = useNavigate();

    const handleNavigateProfilo = () => {
        navigate('/profilo')
      }
    
      const handleNavigateEventi = () => {
        navigate('/eventi')
      }
    
      const handleNavigateCrea= () => {
        navigate('/crea')
      }

      const handleNavigateGruppi= () => {
        navigate('/gruppilettura')
      }

    return (
        <Col className="bg-secondary text-white">
        <Row 
        style={{ cursor: 'pointer' }}
        onClick={handleNavigateProfilo} >
          <Col className="d-flex justify-content-center  pt-4"> <h4>Profilo</h4></Col>
        </Row>
        <Row
        style={{ cursor: 'pointer' }}
        onClick={handleNavigateEventi} >
        <Col className="d-flex justify-content-center  pt-4"> <h4>Eventi</h4></Col>
        </Row>
        <Row
        style={{ cursor: 'pointer' }}
        onClick={handleNavigateGruppi} >
        <Col className="d-flex justify-content-center  pt-4"> <h4>Gruppi Lettura</h4></Col>
        </Row>
        <Row
        style={{ cursor: 'pointer' }}
        onClick={handleNavigateCrea} >
        <Col className="d-flex justify-content-center  pt-4"> <h4>Crea</h4></Col>
        </Row>
      </Col>
    );
  }

export { MenuList };