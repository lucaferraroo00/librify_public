import React, { useState } from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import "./styles.css";
import {MenuList} from "./menuList.js"
import copertina1 from "./calvino_cop_1.jfif"
import ReactSearchBox from "react-search-box";
import Form from 'react-bootstrap/Form';
import cat1 from "./cat1.jpg"
import cat2 from "./cat2.jpg"
import cat3 from "./cat3.jpg"
import cat4 from "./cat4.jpg"
import cat5 from "./cat5.jpg"
import cat6 from "./cat6.jpg"
import cat7 from "./cat7.jpg"



function Catalogo(props) {

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
                <Col className="d-flex ">
                <h1   style={{ textDecoration: "underline" }}>
                Catalogo
                </h1>
                </Col>
                <Col>
                <Form.Control type="email" placeholder="Italo Calv|" />
          </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro imag={cat1} />
                </Col>
                <Col>
                    <EventoRiquadro imag={cat2} />
                </Col>
                <Col>
                    <EventoRiquadro imag={cat3} />
                </Col>
                <Col>
                    <EventoRiquadro imag={cat4} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro imag={cat5} />
                </Col>
                <Col>
                    <EventoRiquadro imag={cat6}/>
                </Col>
                <Col>
                    <EventoRiquadro imag={cat7}/>
                </Col>
            </Row>
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function EventoRiquadro({ text, imag }) {
    return (
      <Container
        className="d-flex justify-content-center"
        style={{
          borderRadius: "20px",
        }}
      >
        <Row className="d-flex mb-1 mt-1">
        <img 
          src={imag} 
          alt={text}
          className="img-fluid" // This makes the image responsive
          style={{ 
            width: "100%", // Make it take full width of its container
            maxWidth: "250px", // Sets a max width limit
          }}
        />
        </Row>
      </Container>
    );
  }

export { Catalogo };
