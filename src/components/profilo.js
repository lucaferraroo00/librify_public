import React, { useState } from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import lillo_img from "./lillo_profilo.jpg";
import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import {MenuList} from "./menuList.js"


import "./styles.css";

function Profilo(props) {
    const [activeMenu, setActiveMenu] = useState(false);

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/')
    }
    const handleClickMenu = () => setActiveMenu(prevState => !prevState);

    
  const handleNavigateProfilo = () => {
    navigate('/profilo')
  }

  const handleNavigateEventi = () => {
    navigate('/eventi')
  }

  const handleNavigateCrea= () => {
    navigate('/crea')
  }


    return (
        <>
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
          <MenuList className="vh-100"></MenuList>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
        <Row className="d-flex justify-content-center">
            <img
              src={lillo_img}
              className="rounded-circle"
              style={{ 
                    width: "500px", 
                    marginTop: "20px",
                    borderColor: "#33c1ff",
                    borderWidth: "20px",
                    borderStyle: "solid"
                 }} // Adjust size as needed
            />
          </Row>
          <Row className="d-flex justify-content-center">
            <h1 className="d-flex justify-content-center"  style={{ color: "#33c1ff" }}>SO_LIBRO</h1>
          </Row>
          <Row className="pt-5">
            <Col>
            <h2 className="d-flex justify-content-center">FOLLOWER: 151</h2>
            </Col>
            <Col>
            <h2 className="d-flex justify-content-center">SEGUITI: 89</h2>
            </Col>
          </Row>
        </Col>
        </Row>
        </Container>
        </>
    );
}

export { Profilo };
