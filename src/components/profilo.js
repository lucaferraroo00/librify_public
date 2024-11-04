import React from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import lillo_img from "./lillo_profilo.jpg";
import "./styles.css";

function Profilo(props) {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/')
    }

    return (
        <>
        <Navbar
            bg="primary"
            className="d-flex justify-content-center align-items-center fixed-top"
        >
            <Button variant="light" className="ml-2" onClick={handleClickHome}
            >Home</Button>
            <div className="flex-grow-1 text-center">
            {/* Center the logo and title */}
            <GiBlackBook style={{ fontSize: "2.5rem" }} />{" "}
            {/* Adjust font size as needed */}
            <h1 className="d-inline ml-2 text-white">Librify</h1>{" "}
            {/* Add margin-left and change text color */}
            </div>
        </Navbar>
        <Container fluid className="navbar-spacing">
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
        </Container>
        </>
    );
}

export { Profilo };
