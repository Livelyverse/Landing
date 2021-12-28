import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';

import './components.scss';
import coin1 from './../img/coin1.svg';
import coin2 from './../img/coin2.svg';

import chart from './../img/chart.png';


export default function ForthSection() {
    return (
        <Container className="forthSection justify-content-md-center" fluid>
            <Row className="title">
                <h1>LIVELY TOKEN</h1>
                <span>Lively Token (LVL) is a standard utility token ERC-20 created on Polygon Network.</span>
            </Row>
            <Stack gap={2} className="col-md-3 col-xs-12 mx-auto links">
                <Row className="linkRow" >
                    <Col xs={2} style={{ textAlign: 'right' }}>
                        <img src={coin1} />
                    </Col>
                    <Col xs={10} style={{ textAlign: 'left' }} className="link">
                        <span>Available soon on Uniswap: </span> <a href="#">Comming Soon...</a>
                    </Col>
                </Row>
                <Row className="linkRow">
                    <Col xs={2} style={{ textAlign: 'right' }}>
                        <img src={coin2} />

                    </Col>
                    <Col xs={10} style={{ textAlign: 'left' }} className="link">
                        <span>Smart Contract:</span> <a href="https://polygonscan.com/address/0x60BC68f6B2F4eD1D1525D7BF01aA968155C8E52c" target={'_blank'}>Trace on Polygon Scan</a>
                    </Col>
                </Row>

            </Stack>
            <Row className="title second">
                <h1>Tokenomics</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={7} className="tokenomics">
                    <Row>
                        <Col lg={5} xs={12} className="data">
                            <span>Total Supply :</span><span> 1.000.000.000</span>
                            <div className="dividerCircle"></div>
                        </Col>
                        <Col lg={3} xs={12} className="data">
                            <span> Type : </span><span>  ERC-20</span>
                            <div className="dividerCircle"></div>
                        </Col>
                        <Col lg={4} xs={12} className="data">
                            <span>Initial Price : </span><span>0,0376 $</span>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="chart">
                <Col xs={12}>
                    <img src={chart} />
                </Col>
            </Row>

        </Container>
    )
}