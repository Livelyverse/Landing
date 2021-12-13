import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TokenUtilitySlider from './slider';
import '../components.scss';


export default function TokenUtlitySection() {

    return (<Container className="justify-content-md-center Token-Section" fluid>
        <Row>
            <h1 className="title">Token Utility</h1>
        </Row>
        <Container>
            <TokenUtilitySlider />
        </Container>
    </Container>)
}
