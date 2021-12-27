import React from 'react'
import { Container, Row } from 'react-bootstrap';

const ContactUsSection = () => (
    <Container className="mt90px" fluid>
        <Row className="title">
            <h1>Contact Us</h1>
        </Row>
        <Row >
            <div className="contact-us-container mt60px">
                <div className="contact-us-card">
                    <div key="sales" className="contact-us-text-div">
                        <h3>Lively Consulting:</h3>
                        <a className="email-link" href="mailto:info@livelyplanet.es">
                            <span>info@livelyplanet.es</span>
                        </a>
                    </div>
                    <div key="technical" className="contact-us-text-div mt20px">
                        <h3>Technical:</h3>
                        <a className="email-link" href="mailto:info@solunomi.team" >
                            <span>info@solunomi.team</span>
                        </a>
                    </div>
                </div>
            </div>
        </Row>
    </Container>
);

export default ContactUsSection;