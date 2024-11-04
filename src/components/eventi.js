import React from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, useNavigate, Navigate} from 'react-router-dom';
import lillo_img from "./lillo_profilo.jpg";
import "./styles.css";

function Eventi(props) {

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
        zio pera
        </Container>
        </>
    );
}

export { Eventi };
