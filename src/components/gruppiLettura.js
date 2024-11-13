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
import {MenuList} from "./menuList.js"



function GruppiLettura(props) {

    const [activeMenu, setActiveMenu] = useState(false);

    const navigate = useNavigate();


    const handleClickMenu = () => setActiveMenu(prevState => !prevState);

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <Container fluid>
        <Row className="d-flex align-items-center sticky-sm-top bg-primary">
      <Col className="m-1">
        <CiMenuBurger
          className=""
          style={{ fontSize: '2.1rem', color:"white", cursor:"pointer"}} 
          onClick={handleClickMenu}></CiMenuBurger>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <GiBlackBook style={{ fontSize: '2.1rem', color:"white" }} />
          <h1 className="text-white">Librify</h1>
          <GiBlackBook style={{ fontSize: '2.1rem', color:"white" }} />
        </Col>
        <Col className="d-flex d-flex justify-content-end m-1">
        <BsHouseDoor
          className=""
          style={{ fontSize: '2.1rem', color:"white", cursor:"pointer"}} 
          onClick={handleClickHome}></BsHouseDoor>
        </Col>
      </Row>
        <Row fluid>
        {activeMenu && (
            <MenuList></MenuList>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
        <Container fluid className="mb-4">
            <Row className="d-flex justify-content-center pt-4">
                <Col className="d-flex justify-content-center">
                <h2   style={{ color: "#33c1ff", textDecoration: "underline" }}>
                Ciao SO_LIBRO, cosa vuoi leggere?
                </h2>
                </Col>
            </Row>
            
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function EventoRiquadro({ text }) {
    return (
      <Container
        className="d-flex bg-info justify-content-center"
        style={{
          borderRadius: "20px",
        }}
      >
        <Row className="mb-1 mt-1">
            <Col>
                <img 
                    src={sei_nov} 
                    style={{ 
                        width: "200px", 
                    }}
                />
        </Col>
        <Col className="d-flex align-items-center">
        <h3 className=" text-white">{text}</h3>
        </Col>
        </Row>
      </Container>
    );
  }

export { GruppiLettura };
