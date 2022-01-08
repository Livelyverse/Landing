import React from 'react';
import { Container } from 'react-bootstrap';

import './../components.scss';
import arc from '../../img/arc.png';
export default function PageTitle(props){
    const {title} = props;

    return(
        <Container fluid className='pageTitleWrapper'>
            <div className='pageTitleArc'>
               <div className='pageTitle'>{title}</div>
                <img src={arc} />
            </div>
        </Container>
    )
}