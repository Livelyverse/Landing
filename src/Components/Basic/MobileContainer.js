import React from 'react';
import { Container } from 'react-bootstrap';

import {isMobile} from 'react-device-detect';

const mobileContainer = (props) =>{
    console.log(isMobile);
    if(isMobile){
        return(
            <Container fluid className={props.className}>
                {props.children}
            </Container>
        )
    }
    return(
        <Container fluid className={props.className}>
            <Container className={props.classNameSecond}>
                {props.children}
            </Container>
        </Container>
    )
}

export default mobileContainer;