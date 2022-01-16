import React from "react";
import Button from "./Button";
import './components.scss';
import download from './../img/download.svg';
import { Col, Container, Row } from "react-bootstrap";
export default function Banner() {

    return (
        <Container className="banner" fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={12}>
                    <h2>LIVELY PLANET</h2>
                </Col>
                <Col xs={12} lg={9}>
                    <span>The Latest Blockchain Powered Solution made for audiovisual creators <br /> with the newest paying systems, entertainment platform & with our own tv program show</span>
                </Col>

                <Col xs={12} lg={8}>
                    
                        <Button type="color" className="button download">
                            <a href="http://livelyplanet.io/whitepaper/LivelyPlanetWhitepaperEng.pdf" download>
                                <img src={download} />
                                <div>  Download Whitepaper</div>
                             </a>

                        </Button>
                </Col>
            </Row>

        </Container>

    )
}