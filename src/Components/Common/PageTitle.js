import React from 'react';
import { Container } from 'react-bootstrap';

import './../components.scss';
import arc from '../../img/arc.png';
export default function PageTitle(props){
    const {title} = props;

    return(
        <Container fluid className='pageTitleWrapper'>
            <span className='pageTitle'>{title}</span>
            <div className='pageTitleArc'>
                <img src={arc} />
            </div>
        </Container>
    )
}