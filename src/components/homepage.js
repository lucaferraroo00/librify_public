import React, { useState } from "react";
import logo from "./Logo_Biblioteche_d0.jpg";
import dorian from "./dorian_gray.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./styles.css";
import { Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { GiBlackBook } from "react-icons/gi"; 
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate} from 'react-router-dom';



function HomePage(props) {
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

  return (
    <>
    <Navbar bg="primary" className="d-flex justify-content-between align-items-center fixed-top">
        <Button variant="light" className="ml-2" onClick={handleClickMenu}
        >Menu</Button>
        <div className="flex-grow-1 text-center"> {/* Center the logo and title */}
          <GiBlackBook style={{ fontSize: '2.5rem' }} /> {/* Adjust font size as needed */}
          <h1 className="d-inline ml-2 text-white">Librify</h1> {/* Add margin-left and change text color */}
        </div>
      </Navbar>
    <Container fluid className="navbar-spacing">
      <Row>
        {activeMenu && (
          <Col className="bg-secondary text-white">
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
            <Col className="d-flex justify-content-center  pt-4"> <h3>Crea</h3></Col>
            </Row>
          </Col>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
          <Row className="d-flex justify-content-center">
            <img
              src={logo}
              style={{ width: "auto", height: "200px" }} // Adjust size as needed
            />
          </Row>
          <div className="container mt-2">
            <RectangleComponent
              title="Dorian Gray"
              text="This is some text inside the rectangle."
              borderColor="blue" // Change the color as needed
              image={dorian}
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="Sofia Peleggi"
              text="This is some text inside the rectangle."
              borderColor="blue" // Change the color as needed
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="My Title"
              text="This is some text inside the rectangle."
              borderColor="blue" // Change the color as needed
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="My Title"
              text="This is some text inside the rectangle."
              borderColor="blue" // Change the color as needed
            />
          </div>
          <div className="container mt-5">
            <RectangleComponent
              title="My Title"
              text="This is some text inside the rectangle."
              borderColor="blue" // Change the color as needed
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
        borderColor: borderColor,
        borderWidth: "5px",
        borderStyle: "solid",
        borderRadius: "20px",
      }}
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
      <p className="text-center">{text}</p>
    </div>
  );
}

export { HomePage };
