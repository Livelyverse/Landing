import React from 'react';
import { Container } from 'react-bootstrap';
import FirstSection from './Components/FirstSection';
import ForthSection from './Components/ForthSection';
import SecondSection from './Components/SecendSection';
import ThirdSection from './Components/ThirdSection';


function App() {
    return (
        <Container fluid className="App" style={{padding:'0'}}>
           <FirstSection />
           <SecondSection />
           <ThirdSection />
           <ForthSection />
           <div style={{height:'100px' , width:'100%'}}></div>
        </Container>
    
    );
}

export default App;
