import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import partners from './../../img/partner.png';
import PartnersList from './partnersList';

const PartnersCom = () => {

    return(
        <Container fluid className='partnersDesc'>
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <h3> Welcome to LivelyPlanet </h3>
                        <p>
                    Lively Planet has strong partnerships in place to create alliances that lead to audience expansion and community growth. Our current partners are an important part of our ecosystem, share our vision and provide benefits to each other.

                    If you have any questions about partnership agreements please contact us through our email: <a href='mailto:suppoer@livelyplanet.io'> suppoer@livelyplanet.io</a> 
                    </p>
                    </Col>
                    <Col xs={12} lg={4} style={{lineHeight:'360px'}}>
                        <img src={partners} />
                    </Col>
                    <PartnersList />
                </Row>
            </Container>
        </Container>
    )
}

export default PartnersCom;