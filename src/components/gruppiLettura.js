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
import norw_wood from "./cuore_spez.png"
import Modal from 'react-bootstrap/Modal';





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
        <Col {...(activeMenu ? { md: 9 } : {})}>
        <Container fluid className="mb-4">
            <Row className="d-flex justify-content-center pt-4">
                <Col className="d-flex justify-content-center">
                <h2   style={{ textDecoration: "underline" }}>
                Ciao SO_LIBRO, cosa vuoi leggere?
                </h2>
                </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood} modal_title={"Gruppo libri per single"}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Libri russi (RU)" modal_title={"Gruppo libri russi"} grp_image={norw_wood} ></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Meno di 150 pagine" modal_title={"Gruppo libri brevi"} grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="True Crime" ></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-6">
            <Col>
            <GruppoRiquadro text="Per conoscere il mondo" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function GruppoRiquadro({ text, grp_image, modal_title }) {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <h3>{modal_title}</h3>
            </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className="d-flex justify-content-center">
          <img 
                      src={grp_image} 
                      style={{ 
                        width: "100%", // Make it take full width of its container
                        maxWidth: "80px", // Sets a max width limit
                      }}
                  />
                  </Col>
                  <Col className="d-flex justify-content-center">
                  <img 
                      src={grp_image} 
                      style={{ 
                        width: "100%", // Make it take full width of its container
                        maxWidth: "80px", // Sets a max width limit
                      }}
                  />
                  </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button>Iscriviti</Button>
        </Modal.Footer>
      </Modal>
        <Container
          className="d-flex bg-primary justify-content-center hover-effect"
          style={{
            borderRadius: "20px",
          }}
          onClick={handleShow}
        >
          <Row className="d-flex mb-1 mt-1">
          <Col className="d-flex align-items-center">
          <h4 className=" text-white">{text}</h4>
          </Col>
          </Row>
        </Container>
        </>
    )
  }

export { GruppiLettura };
