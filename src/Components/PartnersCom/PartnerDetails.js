import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {partners} from './data';

const PartnerDetails = (props) => {
    let p ;
    for(let i = 0 ; i < partners.length ; i++){
        if(partners[i].name === props.name)
            p = partners[i]
    }
    return(
        <Row className='justify-content-md-center partnerDetails'>
            <Col xs={12} className='partnerDetailsLogo'>
                <img src={p.image} />
            </Col>
            <Col xs={12} className="partnerDetailsdesc">
                {p.description.replace("\\n" , "\n")}
            </Col>
        </Row>
    )
}
export default PartnerDetails;