import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TokenUtilitySlider from './slider';
import '../components.scss';


export default function TokenUtlitySection() {

    return (
    <Container className="justify-content-md-center token-section" fluid>
        <Row>
            <h1 className="title">Token Utility</h1>
        </Row>
        <Container className="token-parent-container">
            <TokenUtilitySlider />
        </Container>
        
        
    </Container>)
}
