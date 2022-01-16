import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import 'react-alice-carousel/lib/alice-carousel.css';
import './components.scss';
import MapSection from "./MapSection";
import clsx from "clsx";
import ContactUsSection from "./ContactUs";

export default function FifthSection() {
    return (
        <Container fluid className="fifthSection">
            <Row className="title">
                <h1>Our Partners</h1>
            </Row>
            <Row>
                <Col >
                    <MapSection />
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactUsSection />
                </Col>
            </Row>
        </Container>
    )
}