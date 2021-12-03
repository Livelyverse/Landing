import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import './components.scss';
import FeatureCard from "./FeatureCard";

import blockchain from '../img/feature/blockchain.svg';
import charity from '../img/feature/charity.svg';
import entertaining from '../img/feature/entertaining.svg';
import funding from '../img/feature/funding.svg';
import gaming from '../img/feature/gaming.svg';
import market from '../img/feature/market.svg';


export default function ThirdSection(){
    return(
        <Container className="thirdSection" fluid>
            <Row className="title">
                <h1>What can  do here?</h1>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12} lg={3}>
                    <FeatureCard img={funding} title="Crowdfunding Campaign" shortDesc="Space created for creators to expose their audiovisual ideas and raise funds for his/her project. All community members can participate & be part of the project, either as shareholders" desc="Space created for creators to expose their audiovisual ideas and raise funds for his/her project. All community members can participate & be part of the project, either as shareholders or as team members. We aim to offer a professional environment for talents to grow and connect with each other. " />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={market} title="NFT Marketplace" shortDesc="Available for artists to create their own NFT here and be able to expose it in our marketplace. Creators can also tokenize their contents and sell them within the " desc="Available for artists to create their own NFT here and be able to expose it in our marketplace. Creators can also tokenize their contents and sell them within the marketplace." />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={entertaining} title="Entertaining Platform" shortDesc="In our entertaining section, there would be all kinds of quality audiovisual content for you to enjoy & share. Lively Planet foresees partnerships with different TV channels for " desc="In our entertaining section, there would be all kinds of quality audiovisual content for you to enjoy & share. Lively Planet foresees partnerships with different TV channels for their integration and offer the best programs for our community. Every content creator, youtubers, directors, producers would be able to place their productions here and receive rewards for it.  " />
                </Col>
                
            </Row>
            <Row className="justify-content-md-center" >
                <Col xs={12} lg={3}>
                    <FeatureCard img={charity} title="Lively-Charity" shortDesc="Part of the profits will be destined to humanitarian aid, apart from providing a totally traceable and transparent system in order to raise funds for different NGOs. The mission is to help the world to" desc="Part of the profits will be destined to humanitarian aid, apart from providing a totally traceable and transparent system in order to raise funds for different NGOs. The mission is to help the world to become a better place with the charity section covering all the current issues. Every user would be able to choose the field they want to contribute. " />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={blockchain} title="Open Source network" shortDesc="Our ecosystem is based on a decentralised and open source blockchain infrastructure, enabling creativity, innovation and collaboration for continuous software " desc="Our ecosystem is based on a decentralised and open source blockchain infrastructure, enabling creativity, innovation and collaboration for continuous software development." />
                </Col>
                <Col xs={12} lg={3}>
                    <FeatureCard img={gaming} title="CryptoCity Gaming" shortDesc="The new & coolest crypto version of your life simulation game is here empowering you to create and live the life you always wanted! Explore your imagination" desc="The new & coolest crypto version of your life simulation game is here empowering you to create and live the life you always wanted! Explore your imagination, join us now!" />
                </Col>
                
            </Row>

        </Container>
    )
}