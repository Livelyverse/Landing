import React from 'react';

import { Container } from 'react-bootstrap';
import FifthSection from './../Components/FifthSection';
import FirstSection from './../Components/FirstSection';
import Footer from './../Components/Footer';
import ForthSection from './../Components/ForthSection';
import SecondSection from './../Components/SecendSection';
import ThirdSection from './../Components/ThirdSection';

const Home = function(){
    return(
        <Container fluid className="App" style={{padding:'0'}}>
           <FirstSection />
           <SecondSection />
           <ThirdSection />
           <ForthSection />
           <FifthSection />
           <Footer />
        </Container>
    )
}

export default Home;