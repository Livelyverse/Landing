import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './components.scss';

import partner from './../img/ucl.svg';
import ucl from './../img/partners/ucl.svg';

import PartnersLogo from "./PartnersLogo";

export default function FifthSection(){
    const responsive = {
        0: { items: 2 },
        568: { items: 3 },
        1024: { items: 5 },
    };
    
    const items = [
        <Col data-value="1"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="2"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="3"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="4"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="5"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="6"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="7"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="8"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="9"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="10"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="11"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="12"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="13"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="14"><PartnersLogo img={ucl} /></Col>,
        <Col data-value="15"><PartnersLogo img={ucl} /></Col>,
        
    ];
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
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay={true}
                autoPlayInterval={3000}
                disableSlideInfo={true}
                disableDotsControls={true}
                disableButtonsControls
                keyboardNavigation={true}
            />
            </Row>
        </Container>
    )
}