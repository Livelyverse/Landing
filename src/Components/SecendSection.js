import React from "react";
import './components.scss';
import core from './../img/core.png';
import { Container, Row , Col } from "react-bootstrap";
import MobileContainer from "./Basic/MobileContainer";

export default function SecondSection(){
    return(
            <MobileContainer className="secondSection ">
                <Row className="justify-content-md-center"> 
                   
                    <Col xs={12} lg={7} className="desc">
                        <h4>Join the ultimate entertaining ecosystem</h4>
                        <p>Lively aims to offer different solutions to solve the actual issues regarding the audiovisual industry, providing new investing opportunities & virtual reality gaming.</p>  
                    </Col>
                    <Col xs={12} lg={5} className="image">
                         <img src={core}/>
                    </Col>
                    
                </Row>
            </MobileContainer>
    )
}