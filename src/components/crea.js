import React from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import sei_nov from "./6_nov.png"
import "./styles.css";


function Crea(props) {

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
            <GiBlackBook style={{ fontSize: "2.1rem" }} />
            {/* Adjust font size as needed */}
            <h1 className="d-inline ml-2 text-white">Librify</h1>{" "}
            {/* Add margin-left and change text color */}
            </div>
        </Navbar>
        <Container fluid className="navbar-spacing mb-4">
            <Row className="pt-4">
                <Col className="d-flex justify-content-center">
                <h1   style={{ color: "#33c1ff", textDecoration: "underline" }}>
                La mia booklist
                </h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export { Crea };
