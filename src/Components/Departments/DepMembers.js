import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';


export default function DepMembers(props) {
    const {image , name , position , bio} = props;
    const [showBio , setShowBio] = useState(false)
    return (
        
            <Col lg={4} xs={12} >
                <div className='memberCard'  onMouseOver={() => setShowBio(true) } onMouseLeave={() => setShowBio(false)}>
                    <img src={image}/>
                    <div className='overlayData'>
                        <span className='memberName'> {name} </span> <br/>
                        <span className='memberPosition'> {position} </span>
                        <p className={`memberBio ${showBio ? 'open' : 'close'}`}> {bio} </p>
                    </div>
                </div>
            </Col>
       
    )
}

