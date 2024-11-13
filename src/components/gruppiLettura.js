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
                <h2   style={{ color: "#33c1ff", textDecoration: "underline" }}>
                Ciao SO_LIBRO, cosa vuoi leggere?
                </h2>
                </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood} modal_text="Leggiti questi libri.."></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-3">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" grp_image={norw_wood}></GruppoRiquadro>
            </Col>
            </Row>
            
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function GruppoRiquadro({ text, grp_image, modal_text }) {

    const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Body>{modal_text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        <Container
          className="d-flex bg-info justify-content-center hover-effect"
          style={{
            borderRadius: "20px",
          }}
          onClick={handleShow}
        >
          <Row className="d-flex mb-1 mt-1">
              <Col>
                  <img 
                      src={grp_image} 
                      style={{ 
                          width: "80px", 
                          backgroundColor: "transparent",
                      }}
                  />
          </Col>
          <Col className="d-flex align-items-center">
          <p className=" text-white">{text}</p>
          </Col>
          </Row>
        </Container>
        </>
    )
  }

export { GruppiLettura };
