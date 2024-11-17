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
import { BsCalendar2 } from "react-icons/bs";
import due_dic from "./due-dic.png"
import ventisette_nov from "./ventisette-nov.png"
import ventotto_ot from "./28-ot.png"
import tredici from "./tredici-15-nov.png"
import dodici from "./12-dic.png"
import venti from "./20-dic.png"




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
            <MenuList></MenuList>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
        <Container fluid className="mb-4">
            <Row className="d-flex justify-content-center pt-4">
            <Col className="d-flex align-items-center justify-content-center">
          <BsCalendar2 style={{ fontSize: '2.1rem' }} className="m-1"/>
          <h1 style={{  textDecoration: "underline" }}>
              Eventi
            </h1>
        </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="CINEFORUM: Colazione da Tiffany" img_calendar={ventotto_ot}  />
                </Col>
                <Col>
                    <EventoRiquadro text="Gita della Firenze dantesca" img_calendar={tredici} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="Q&A: Hunger Games" img_calendar={ventisette_nov} />
                </Col>
                <Col>
                    <EventoRiquadro text=" 'I miserabili' in scena" img_calendar={due_dic} />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col>
                    <EventoRiquadro text="CINEFORUM: Mrs. Dalloway" img_calendar={dodici} />
                </Col>
                <Col>
                    <EventoRiquadro text="Q&A: Il Signore degli Anelli" img_calendar={venti}  />
                </Col>
            </Row>
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function EventoRiquadro({ text, img_calendar }) {
    return (
      <Container
        className="d-flex bg-primary justify-content-center"
        style={{
          borderRadius: "20px",
        }}
      >
        <Row className="mb-1 mt-1">
            <Col>
                <img 
                    src={img_calendar} 
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
