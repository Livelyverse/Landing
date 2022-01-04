import React from 'react';
import {Container} from 'react-bootstrap';
import BackgroundParticles from '../BackgroundParticles';
import Header from '../Header';
import Footer from '../Footer';

export default function Layout(props){
    return(
        <Container className={props.containerClassName} fluid style={{padding:'0'}}>
            <BackgroundParticles />
            <Header active={props.menuActive} />
            {props.children}
            <Footer />
        </Container>
    )
}