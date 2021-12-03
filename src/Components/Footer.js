import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './components.scss';

import logo from './../img/footerlogo.svg'
import Button from "./Button";

export default function Footer(){
    return(
        <Container fluid className="footer">
            <Row>
                <Col lg={5} >
                    <img src={logo} />
                    <p>
                        The Latest Blockhain Powered Solution made for streaming creators with the newest paying system & entertainment platform.
                    </p>
                </Col>
                <Col lg={7}>
                    <Row>
                        <Col>
                            <div className="title">
                                Services
                            </div>
                        </Col>
                        <Col>
                            <div className="title">
                                Services
                            </div>
                        </Col>
                        <Col>
                            <div className="title">
                                Services
                            </div>
                        </Col>
                        <Col>
                            <div className="title">
                                Services
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}