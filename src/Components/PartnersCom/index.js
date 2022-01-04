import React from 'react';
import { Col, Row } from 'react-bootstrap';
import partners from './../../img/partner.png';
import PartnersList from './partnersList';

const PartnersCom = () => {

    return(
        <Row className='partnersDesc'>
            <Col xs={12} lg={8}>
                <h3> Welcome to LivelyPlanet </h3>
                <p>
            Lively Planet has strong partnerships in place to create alliances that lead to audience expansion and community growth. Our current partners are an important part of our ecosystem, share our vision and provide benefits to each other.

            If you have any questions about partnership agreements please contact us through our email: <a href='mailto:info@livelyplanet.io'> info@livelyplanet.io</a> 
            </p>
            </Col>
            <Col xs={12} lg={4}>
                <img src={partners} />
            </Col>
            <PartnersList />
        </Row>
    )
}

export default PartnersCom;