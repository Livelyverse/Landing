import React from 'react';
import { Col, Row } from 'react-bootstrap';

import './components.scss';

export default function FeatureCard(props){
    return(
        <Row className=" justify-content-md-center">
            <Col lg={10} xs={12}>
                <Row className="justify-content-md-center featureBox">
                    <Col xs={12} lg={10} className="image">
                        <img src={props.img} />
                    </Col>
                    <Col xs={12} lg={10} className="title">
                        {props.title}
                    </Col>
                    <Col xs={12} lg={12} className="desc">
                        {props.desc}
                    </Col>
                </Row>
            </Col>
            
        </Row>
    )
}