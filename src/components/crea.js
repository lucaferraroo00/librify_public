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
import io_e_te from "./io-e-te.jpg"
import cime_temp from "./cime-temp.jpg"

import { CiMenuBurger } from "react-icons/ci";
import { BsHouseDoor } from "react-icons/bs";
import {MenuList} from "./menuList.js"
import { BsHeartFill } from "react-icons/bs";


function Crea(props) {
  const [activeMenu, setActiveMenu] = useState(false);

  const navigate = useNavigate();

  const handleClickHome = () => {
    navigate("/");
  };

  const handleClickMenu = () => setActiveMenu(prevState => !prevState);


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
        <Row className="pt-4">
          <Col className="d-flex align-items-center justify-content-center">
          <BsHeartFill style={{ fontSize: '2.1rem', color:"red" }} />
          <h1 style={{  textDecoration: "underline" }}>
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
            <LibroRiquadro text="Norwegian wood, Haruki Murakami" copertina_libro={norw_wood}></LibroRiquadro>
            </Col>
        </Row>
        <Row className="m-3">
            <Col>
            <LibroRiquadro text="Io e te, Niccolò Ammaniti" copertina_libro={io_e_te}></LibroRiquadro>
            </Col>
        </Row>
        <Row className="m-3">
            <Col>
            <LibroRiquadro text="Cime tempestose, Emily Brontë" copertina_libro={cime_temp}></LibroRiquadro>
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
        className="d-flex bg-primary justify-content-center"
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
