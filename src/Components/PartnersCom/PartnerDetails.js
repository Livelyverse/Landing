import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {partners} from './data';

const PartnerDetails = (props) => {
    let p ;
    for(let i = 0 ; i < partners.length ; i++){
        if(partners[i].name === props.name)
            p = partners[i]
    }
    return(
        <Container  className='partnerDetails' fluid>
            <Container>
                <Row className='justify-content-md-center '>
                    <Col xs={12} className='partnerDetailsLogo'>
                        <img src={p.fullImage} />
                    </Col>
                    <Col xs={12} className="partnerDetailsdesc">
                        {p.description.replace("\\n" , "\n")}
                    </Col>
                    <Col xs={12} className='partnerBackButton'>
                        <Link to={'/partners'}>
                            Back To Partners
                        </Link>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
export default PartnerDetails;