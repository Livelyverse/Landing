import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MemberSlider from './MemberSlider';

const TeamSection = () => (
    <Container fluid className="team-section-container">
        <Row className="title team-section-title">
            <h1>Lively Team</h1>
        </Row>
        <Row>
            <MemberSlider />
        </Row>
    </Container>
);

export default TeamSection;