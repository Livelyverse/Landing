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
                        <p>Lively provides the opportunity for entrepreneurs to feature their project and give them exposure in our tv program and streaming platform, while gaining validationfrom our investors, funds they need fot their business through our ecosystem and access to  our crowdfunding section.</p>  
                    </Col>
                    <Col xs={12} lg={5} className="image">
                         <img src={core}/>
                    </Col>
                    
                </Row>
            </MobileContainer>
    )
}