import React, { useState } from "react";
import logo from "./Logo_Biblioteche_d0.jpg";
import dorian from "./dorian_gray.jpg";
import prof from "./profiloIcona.png";
import dante from "./Portrait_de_Dante.jpg"
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.css";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GiBlackBook } from "react-icons/gi"; 
import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import {MenuList} from "./menuList.js"


function HomePage(props) {
  const [activeMenu, setActiveMenu] = useState(false);

  const navigate = useNavigate();


  const handleClickMenu = () => setActiveMenu(prevState => !prevState);

  const handleClickHome = () => {
    navigate('/')
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
      <Row>
        {activeMenu && (
          <MenuList></MenuList>
        )}
        <Col {...(activeMenu ? { md: 9 } : {})}>
          <Row className="d-flex justify-content-center mt-1">
            <img
              src={logo}
              style={{ width: "auto", height: "200px" }} // Adjust size as needed
            />
          </Row>
          <div className="container mt-2">
            <RectangleComponent
              title="Fra Dorian Gray"
              text="Ciao @SofiaDeiLibri. Ho appena finito di leggere 'Atti osceni in luogo privato'. Te lo consiglio, so che lo apprezzerai :)"
              borderColor="blue" // Change the color as needed
              image={dorian}
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="Sofia Dei Libri"
              text="@FraDorianGray Ma daiii ! Anche a me piace Missiroli, ma ho letto solo 'Fedeltà'… Recupererò!"
              borderColor="blue" // Change the color as needed
              image={prof}
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="Virginia Woolf"
              text="Ieri ho partecipato alla serata Question and Answer sul Signore degli Anelli. Sapevo tutte le risposte, sono troppo orgogliosa!"
              borderColor="blue" // Change the color as needed
              image={prof}
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="Dante Alighieri"
              text="Sto pensando a Beatrice"
              borderColor="#1976d2" // Change the color as needed
              image={dante}
            />
          </div>
        </Col>
      </Row>
      </Container>
    </>
  );
}

function RectangleComponent({ title, text, borderColor, image }) {
  return (
    <div
      style={{
        borderWidth: "5px",
        borderStyle: "solid",
        borderRadius: "20px",
      }}
      className="border-primary"
    >
      <h2 className="text-center" style={{ textDecoration: "underline" }}>
        {image && (
          <img
            src={image}
            alt="Icon"
            style={{
              width: "50px",
              height: "50px",
              marginRight: "10px",
              marginTop: "10px",
              borderRadius: "50%",
            }}
          />
        )}{" "}
        {/* Adjust size and margin */}
        {title}
      </h2>
      <h4 className="text-center text-secondary">{text}</h4>
    </div>
  );
}

export { HomePage };
