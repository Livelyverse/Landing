import React, { useState }  from "react";
import './components.scss';
import logo from './../img/logo.svg';
import menu from './../img/menu.svg';
import Button from "./Button";
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";

export default function Header(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(

        // </Navbar>
        <Container className="header" fluid>

            <Offcanvas show={show} onHide={handleClose} placement="end" style={{backgroundColor:"black", width:"200px"}}> 
                <Offcanvas.Header>
                    <Offcanvas.Title>LiveLy Planet</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row>
                        <Col xs={12}>
                            Home
                        </Col>
                        <Col xs={12}>
                            Development
                        </Col>
                        <Col xs={12}>
                            Partners
                        </Col>
                        <Col xs={12}>
                            Team
                        </Col>
                        <Col xs={12}>
                            News
                        </Col>
                        <Col xs={12}>
                            About Us
                        </Col>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
            <Row>
                <Col xs={6}>  
                    <img src={logo} className="logo"/>
                </Col>
                <Col xs={6}>
                    <Row className="rightMenu">
                        <Col xs={4} lg={1}  onClick={handleShow}>
                            <img className="menutoggle" src={menu}></img>
                        </Col>
                        <Col xs={6} lg={2}>
                            <Button type="transparent"> Register </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>           
        </Container>
    )
}