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
import brevi_lib1 from "./brevi_lib1.jpg"
import brevi_lib2 from "./brevi_lib2.jpg"
import crime_lib1 from "./crime_lib1.jpg"
import crime_lib2 from "./crime_lib2.jpg"
import russi_lib1 from "./russi_lib1.jpg"
import russi_lib2 from "./russi_lib2.jpg"
import spezzati_lib1 from "./spezzati_lib1.jpg"
import spezzati_lib2 from "./spezzati_lib2.jpg"





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
            <Row className="m-5">
            <Col>
            <GruppoRiquadro text="Se ti sei appena lasciato" lib_img1={spezzati_lib1} lib_img2={spezzati_lib2} modal_title={"Gruppo per cuori spezzati"}></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-5">
            <Col>
            <GruppoRiquadro text="Libri russi (RU)" lib_img1={russi_lib1} lib_img2={russi_lib2} modal_title={"Gruppo per appasionati russi"}  ></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-5">
            <Col>
            <GruppoRiquadro text="Meno di 150 pagine" lib_img1={brevi_lib1} lib_img2={brevi_lib2} modal_title={"Gruppo per lettori con poco tempo"} ></GruppoRiquadro>
            </Col>
            </Row>
            <Row className="m-5">
            <Col>
            <GruppoRiquadro text="True Crime" lib_img1={crime_lib1} lib_img2={crime_lib2} modal_title={"Gruppo per amanti del crimine"} ></GruppoRiquadro>
            </Col>
            </Row>            
        </Container>
        </Col>
        </Row>
        </Container>
    );
}

function GruppoRiquadro({ text, lib_img1, lib_img2, modal_title }) {

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
                      src={lib_img1} 
                      style={{ 
                        width: "100%", // Make it take full width of its container
                        maxWidth: "150px", // Sets a max width limit
                      }}
                  />
                  </Col>
                  <Col className="d-flex justify-content-center">
                  <img 
                      src={lib_img2} 
                      style={{ 
                        width: "100%", // Make it take full width of its container
                        maxWidth: "150px", // Sets a max width limit
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
          <Row className="d-flex p-3 mb-2 mt-2">
          <Col className="d-flex align-items-center">
          <h4 className=" text-white">{text}</h4>
          </Col>
          </Row>
        </Container>
        </>
    )
  }

export { GruppiLettura };
