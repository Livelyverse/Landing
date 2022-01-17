import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import {isMobile} from 'react-device-detect';

export default function DepMembers(props) {
    const {image , name , position , bio} = props;
    const [showBio , setShowBio] = useState(false);

    if(isMobile){
        return(
            <Col lg={4} xs={12} >
                <div className='memberCard'  onMouseOver={() => setShowBio(true) } onMouseLeave={() => setShowBio(false)}>
                    <img src={image}/>
                    <div className={`overlayData`} >
                        <span className='memberName'> {name} </span> <br/>
                        <span className='memberPosition'> {position} </span>
                        {/* <p className={`memberBio ${showBio ? 'open' : 'close'}`}> {bio} </p> */}
                    </div>
                </div>
            </Col>
        )
    }
    return (
        
            <Col lg={4} xs={12} >
                <div className='memberCard'  onMouseOver={() => setShowBio(true) } onMouseLeave={() => setShowBio(false)}>
                    <img src={image}/>
                    <div className={`overlayData ${showBio ? 'open' : 'close'}`}>
                        <span className='memberName'> {name} </span> <br/>
                        <span className='memberPosition'> {position} </span>
                        <p className={`memberBio ${showBio ? 'open' : 'close'}`}> {bio} </p>
                    </div>
                </div>
            </Col>
       
    )
}

