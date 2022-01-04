import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import './components.scss';

import logo from './../img/footerlogo.svg'

import telegram from './../img/social/telegram.png';
import twitter from './../img/social/twitter.png';
import github from './../img/social/github.png';

export default function Footer() {
    return (
        <Container fluid className="footer">
            <Row className="logoWrapper">
                <Col>
                    <img src={logo} />
                </Col>
            </Row>
            <Row className="footerWrapper">
                <Col lg={7} className="footerInfo">
                    <p>
                        The Latest Blockchain Powered Solution made for streaming creators with the newest paying system & entertainment platform.
                    </p>
                </Col>
                <Col lg={5}>
                    <Row className="footerLinks">
                        <Col lg={6} xs={12} className="footerColumn">
                            <div className="footerTitle">
                                Contact
                            </div>
                            <Row>
                                <Col xs={6} className="footerItem">
                                    Lively Consulting
                                </Col>
                                <Col xs={6} className="footerItem">
                                    <a href="mailto:Info@livelyplanet.io">Info@livelyplanet.io</a>
                                </Col>
                                <Col xs={6} className="footerItem">
                                    Technical
                                </Col>
                                <Col xs={6} className="footerItem">
                                    <a href="mailto:info@solunomi.team">info@solunomi.team</a>
                                </Col>
                            </Row>
                        </Col>
                        
                        <Col lg={6} xs={12} className="footerColumn hideOnMobile">
                            <div className="footerTitle" style={{textAlign:'right'}}>
                                Follow Us
                            </div>
                            <Row style={{textAlign:'right'}}>
                                <Col xs={12} className="footerSocial ">
                                    
                                    <a href="https://t.me/livelyplanet">
                                        <Row>
                                            <Col xs={9} style={{textAlign:'right'}} >
                                                <img src={telegram} />
                                            </Col>
                                            <Col xs={2}>
                                                Telegram
                                            </Col>
                                        </Row>
                                    </a>
                                </Col>
                                <Col xs={12} className="footerSocial">
                                    <a href="https://twitter.com/lively_planet?s=11">
                                        <Row>
                                            <Col xs={9} style={{textAlign:'right'}} >
                                                <img src={twitter} />
                                            </Col>
                                            <Col xs={2}>
                                                Twitter
                                            </Col>
                                        </Row>
                                    </a>
                                </Col>
                                <Col xs={12} className="footerSocial">
                                    <a href="https://github.com/Livelyplanet">
                                        <Row>
                                            <Col xs={9} style={{textAlign:'right'}} >
                                                <img src={github} />
                                            </Col>
                                            <Col xs={2}>
                                                Github
                                            </Col>
                                        </Row>
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={12} className="footerColumn showOnMobile">
                            <div className="footerTitle">
                                Follow Us
                            </div>
                            <Row style={{marginBottom:'20px'}}>
                                <Col xs={4} style={{textAlign:'center'}}>
                                    <a href="https://t.me/livelyplanet">
                                        <img src={telegram} />
                                    </a>
                                </Col>
                                <Col xs={4} style={{textAlign:'center'}}>
                                    <a href="https://twitter.com/lively_planet?s=11">
                                        <img src={twitter} />
                                    </a>
                                </Col>
                                <Col xs={4} style={{textAlign:'center'}}>
                                    <a href="https://github.com/Livelyplanet">
                                        <img src={github} />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="copyRight">
                <span> &copy; 2021 Lively planet Development Foundation</span>
                <div className="socials">

                </div>
            </Row>
        </Container>
    )
}