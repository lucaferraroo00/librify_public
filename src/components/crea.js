import React from "react";
import { GiBlackBook } from "react-icons/gi";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  useNavigate,
  Navigate,
} from "react-router-dom";
import ReactSearchBox from "react-search-box";
import "./styles.css";
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import norw_wood from "./norwegian_wood.jfif"

function Crea(props) {
  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar
        bg="primary"
        className="d-flex justify-content-center align-items-center fixed-top"
      >
        <Button variant="light" className="ml-2" onClick={handleClickHome}>
          Home
        </Button>
        <div className="flex-grow-1 text-center ">
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
            <h1 style={{ color: "#33c1ff", textDecoration: "underline" }}>
              La mia booklist
            </h1>
          </Col>
        </Row>
        <Row className="d-flex  align-items-center pt-4">
          <Col className="d-flex justify-content-end">
            <BsFillPlusCircleFill style={{ fontSize: "2.1rem" }}/>
          </Col>
          <Col>
            <ReactSearchBox className="w-50" />
          </Col>
          <Col>
          <BsSearch style={{ fontSize: "2.1rem" }} />
          </Col>
        </Row>
        <Row className="m-3 bg-primary">
            <hr></hr>
        </Row>
        <Row className="m-3">
            <Col>
            <LibroRiquadro text="norwegian wood, Murakami" copertina_libro={norw_wood}></LibroRiquadro>
            </Col>
        </Row>
        <Row className="m-3">
            <Col>
            <LibroRiquadro text="norwegian wood, Murakami" copertina_libro={norw_wood}></LibroRiquadro>
            </Col>
        </Row>
        <Row className="m-3">
            <Col>
            <LibroRiquadro text="norwegian wood, Murakami" copertina_libro={norw_wood}></LibroRiquadro>
            </Col>
        </Row>
        
      </Container>
    </>
  );
}


function LibroRiquadro({ text, copertina_libro }) {
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
                    src={copertina_libro} 
                    style={{ 
                        width: "150px", 
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

export { Crea };
