import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {partners} from './data';

const PartnersList = () =>{
    return(
        <Row>
            {partners.map((item) => {
                return(
                    <Col lg={2} xs={6} className='PartnersLogo' key={item.id}>
                        <Link to={'/partner/' + item.name}>
                            <img src={item.image} />
                        </Link>
                    </Col>
                )
            })}
        </Row>
    )
}
export default PartnersList;