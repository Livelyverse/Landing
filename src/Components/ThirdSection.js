import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import './components.scss';
import FeatureCard from "./FeatureCard";

import opensourcee from '../img/feature/opensourcee.png';
import charity from '../img/feature/charity.svg';
// import entertaining from '../img/feature/entertaining.svg';
// import funding from '../img/feature/funding.svg';
// import gaming from '../img/feature/gaming.svg';
// import market from '../img/feature/market.svg';
import LivelyWorld from '../img/feature/Livelyworld.png'
import Crowdfunding from '../img/feature/Crowdfunding.png'
import enterteining from '../img/feature/enterteining.png'
import Livelyverse from '../img/feature/Livelyverse.png'
import developments from '../img/feature/developments.png'

export default function ThirdSection() {
    return (
        <Container className="thirdSection" fluid>
            <Row className="title">
                <h1>Our Ecosystem</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={3}>
                    <FeatureCard img={LivelyWorld} title="Lively World" shortDesc="Our TV show, launched through UCL Latam, reaches 40 million households in Latin America and allows us to raise awareness of crypto projects" desc="Our TV show, launched through UCL Latam, reaches 40 million households in Latin America and allows us to raise awareness of crypto projects, educate about blockchain technology and provide the latest news and developments in the decentralized world." />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={Crowdfunding} title="Crowdfunding section" shortDesc="In this section, and in order to support the community, startups and companies, validated by our DAO, will be able to expose their projects and get funding " desc="In this section, and in order to support the community, startups and companies, validated by our DAO, will be able to expose their projects and get funding, also, depending on their actions, they may have access to our LivelyWorld program." />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={Livelyverse} title="LivelyVerse" shortDesc="Through LivelyVerse, companies and entrepreneurs will be able to empower their projects by accessing TV marketing and being validated by our DAO validators. " desc="Through LivelyVerse, companies and entrepreneurs will be able to empower their projects by accessing TV marketing and being validated by our DAO validators. Obtaining as well, our tokens as a common financial tool for all the companies that join LivelyVerse." />
                </Col>

            </Row>
            <Row className="justify-content-md-center" >
                <Col xs={12} lg={3}>
                    <FeatureCard img={charity} title="Technology developments" shortDesc="LivelyVerse has technology professionals capable of all types of blockchain and artificial intelligence development, with extensive experience and the best prices." desc="LivelyVerse has technology professionals capable of all types of blockchain and artificial intelligence development, with extensive experience and the best prices. Contact us to find out more " />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={opensourcee} title="Open Source network" shortDesc="Our ecosystem is based on a decentralised and open source blockchain infrastructure, enabling creativity, innovation and collaboration for continuous software " desc="Our ecosystem is based on a decentralised and open source blockchain infrastructure, enabling creativity, innovation and collaboration for continuous software development." />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={enterteining} title="Entertaining Platform" shortDesc="Our streaming platform will be focused on technology and cryptocurrency content. Both content creators and other users will be able to receive rewards for " desc="Our streaming platform will be focused on technology and cryptocurrency content. Both content creators and other users will be able to receive rewards for different actions within our ecosystem. Any interactions would be rewarded in our system." />
                </Col>

            </Row>

        </Container>
    )
}