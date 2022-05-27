import React from "react";
import Button from "./Button";
import './components.scss';
import download from './../img/download.svg';
import { Col, Container, Row } from "react-bootstrap";
export default function Banner() {

    return (
        <Container className="banner" fluid>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={12}>
                    <h2>LIVELY PLANET</h2>
                </Col>
                <Col xs={12} lg={9}>
                <span>The first blockchain platform that has its own TV show(Lively World) with the capacity of fundraising for start ups & companies with our new model, “Decentralized Venture”. Apart from our streaming platform for projects´ crowdfunding & audiovisual content creations. <br /> <br />Thus we have media on one hand, and investment on the other hand. And that brings us power.</span>
                </Col>

                <Col xs={12} lg={8}>
                    
                        <Button type="color" className="button download">
                            <a href="http://livelyplanet.io/whitepaper/LivelyPlanetWhitepaperEng.pdf" download>
                                <img src={download} />
                                <div>  Download Whitepaper</div>
                             </a>

                        </Button>
                </Col>
            </Row>

        </Container>

    )
}