import React, { useState } from "react";
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
import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";

function Crea(props) {
  const [activeMenu, setActiveMenu] = useState(false);

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

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
          <Col className="bg-secondary text-white d-flex flex-column" >
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
            <Col className="d-flex justify-content-center pt-4">  <h3>Crea</h3></Col>
            </Row>
          </Col>
        )}
        <Col {...(activeMenu ? { md: 10 } : {})}>
      <Container fluid className="mb-4">
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
      </Col>
      </Row>
    </Container>
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
