import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './components.scss';

import logo from './../img/footerlogo.svg'
import Button from "./Button";

export default function Footer(){
    return(
        <Container fluid className="footer">
            {/* <Row className="logoWrapper">
                <Col>
                    <img src={logo} />
                </Col>
            </Row> */}
            {/* <Row className="footerWrapper">
                <Col lg={7} className="footerInfo">
                    <p>
                        The Latest Blockhain Powered Solution made for streaming creators with the newest paying system & entertainment platform.
                    </p>
                </Col>
                <Col lg={5}>
                    <Row className="footerLinks">
                        <Col xs={8} className="footerColumn">
                            <div className="footerTitle">
                                Contact
                            </div>
                        </Col>
                        
                        <Col xs={4} className="footerColumn">
                            <div className="footerTitle">
                                Follow Us
                            </div>
                        </Col>

                    </Row>
                </Col>
            </Row> */}
            <Row className="copyRight">
                <span> &copy; 2021 Lively planet Development Foundation</span>
                <div className="socials">
                    
                </div>
            </Row>
        </Container>
    )
}