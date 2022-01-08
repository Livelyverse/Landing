import React from 'react';
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {partners} from './data';

const PartnersList = () =>{
    return(
        <Container fluid>
        <Row className='justify-content-md-center'>
            {partners.map((item) => {
                return(
                    <Col lg={2} xs={6}  key={item.id}>
                        <OverlayTrigger placement='top' overlay={
                            <Tooltip>
                                <strong> {item.name} </strong>
                            </Tooltip>
                        }>
                            <div className='PartnersLogo'>
                                <Link to={'/partner/' + item.name}>
                                    <img src={item.image} />
                                </Link>
                            </div>
                        </OverlayTrigger>
                    </Col>
                )
            })}
        </Row>
        </Container>
    )
}
export default PartnersList;