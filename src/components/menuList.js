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

      const handleNavigateCatalogo= () => {
        navigate('/catalogo')
      }

    return (
        <Col className="bg-secondary text-white">
        <Row 
        className="d-flex hover-menu align-items-center justify-content-center p-3"
        onClick={handleNavigateProfilo} >
        <Col className="d-flex justify-content-center">
          <h4>Profilo</h4>
        </Col>
        </Row>
        <Row 
        className="d-flex hover-menu align-items-center justify-content-center p-3"
        onClick={handleNavigateEventi} >
        <Col className="d-flex justify-content-center">
          <h4>Eventi</h4>
        </Col>
        </Row>
        <Row 
        className="d-flex hover-menu align-items-center justify-content-center p-3"
        onClick={handleNavigateGruppi} >
        <Col className="d-flex justify-content-center">
          <h4>Gruppi Lettura</h4>
        </Col>
        </Row>
        <Row 
        className="d-flex hover-menu align-items-center justify-content-center p-3"
        onClick={handleNavigateCrea} >
        <Col className="d-flex justify-content-center">
          <h4>Crea</h4>
        </Col>
        </Row>
        <Row 
        className="d-flex hover-menu align-items-center justify-content-center p-3"
        onClick={handleNavigateCatalogo} >
        <Col className="d-flex justify-content-center align-items-center">
          <h4>Catalogo</h4>
        </Col>
        </Row>
      </Col>
    );
  }

export { MenuList };
