import React from 'react';
import { Container, Row } from 'react-bootstrap';

import './../components.scss';
export default function PageBorderTitle(props){
    const {title , icon} = props;


    return(
        <Container fluid className='pageBorder'>
            <Container>
            <div className='pageBorderTtitle'>
                    
                    {' '}{title}
                    <img  src={icon}/>
                </div>
            <Row className='pageBorderinner'>
                
                {props.children}
            </Row>
            </Container>
        </Container>
    )
}