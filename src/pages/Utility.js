import React from "react";

import { Container } from 'react-bootstrap';
import Footer from "../Components/Footer";
import FirstSection from './../Components/FirstSection';

const Utitlity = function(){
    return(
        <Container fluid className="App" style={{padding:'0'}}>
           <FirstSection />
           <Footer />
        </Container>
    )
}

export default Utitlity;