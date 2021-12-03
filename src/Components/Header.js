import React, { useState }  from "react";
import './components.scss';
import logo from './../img/logo.svg';
import menu from './../img/menu.svg';
import drawer from './../img/drawer.svg';
import Button from "./Button";
import { Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Offcanvas, Row } from "react-bootstrap";

export default function Header(){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [active , setActive] = useState(0);

    return(

        // </Navbar>
        <Container className="header" fluid>

            {/* <Offcanvas show={show} onHide={handleClose} placement="end" className="drawer"> 
                <Offcanvas.Header className="title">
                    <Offcanvas.Title className="titleChild">
                        <Row>
                            <Col xs={10}>
                                LiveLy Planet
                            </Col>
                            <Col xs={2} style={{textAlign:'right'}}>
                                <img src={drawer} onClick={handleClose} />
                            </Col>
                        </Row>
                    </Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className="drawerMenu">
                        <Col xs={12} className="active">
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
            </Offcanvas> */}
            <Row>
                <Col xs={6}>  
                    <img src={logo} className="logo"/>
                </Col>
                {/* <Col xs={6}>
                    <Row className="rightMenu">
                        <Col xs={4} lg={1}  onClick={handleShow}>
                            <img className="menutoggle" src={menu}></img>
                        </Col>
                        <Col xs={6} lg={2}>
                            <Button type="transparent"> Register </Button>
                        </Col>
                    </Row>
                </Col> */}
            </Row>           
        </Container>
    )
}