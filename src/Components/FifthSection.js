import React from "react";
import { Col, Container, Row } from "react-bootstrap";


import './components.scss';

import partner from './../img/ucl.svg';
import ucl from './../img/partners/ucl.svg';

import PartnersLogo from "./PartnersLogo";

export default function FifthSection(){
    return(
        <Container fluid className="fifthSection ">
            <Row className="title">
                <h1>Our Partners</h1>
            </Row>
            <Row>
                <Col className="map">
                    <img src={partner} />
                </Col>
            </Row>
            <Row className="carousel">
                <Col>
                    <PartnersLogo img={ucl} />
                </Col>
                <Col>
                    <PartnersLogo img={ucl} />
                </Col>
                <Col>
                    <PartnersLogo img={ucl} />
                </Col>
                <Col>
                    <PartnersLogo img={ucl} />
                </Col>
                <Col>
                    <PartnersLogo img={ucl} />
                </Col>
            </Row>
        </Container>
    )
}