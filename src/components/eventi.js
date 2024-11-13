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


function Eventi(props) {

    const [activeMenu, setActiveMenu] = useState(false);

    const navigate = useNavigate();


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
          <Col className="bg-secondary text-white d-flex flex-column" >
            <Row 
            style={{ cursor: 'pointer' }}
            onClick={handleNavigateProfilo} >
              <Col className="d-flex justify-content-center  pt-4"> <h3>Profilo</h3></Col>
            </Row>
            <Row
            style={{ cursor: 'pointer' }}
            onClick={handleNavigateEventi} >
            <Col className="d-flex justify-content-center  pt-4"> <h3>Eventi</h3></Col>
            </Row>
            <Row
            style={{ cursor: 'pointer' }}
            onClick={handleNavigateCrea} >
            <Col className="d-flex justify-content-center pt-4">  <h3>Crea</h3></Col>
            </Row>
          </Col>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
        <Container fluid className="mb-4">
            <Row className="d-flex justify-content-center pt-4">
                <Col className="d-flex justify-content-center">
                <h1   style={{ color: "#33c1ff", textDecoration: "underline" }}>
                Eventi
                </h1>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="Gita della firenze dantesca" />
                </Col>
                <Col>
                    <EventoRiquadro text="Colazione da Tiffany" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="Gita della firenze dantesca" />
                </Col>
                <Col>
                    <EventoRiquadro text="Colazione da Tiffany" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="Gita della firenze dantesca" />
                </Col>
                <Col>
                    <EventoRiquadro text="Colazione da Tiffany" />
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

export { Eventi };
