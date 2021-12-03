import React, { useRef, useState } from 'react';
import { Col, Row, OverlayTrigger,Popover, ToggleButton } from 'react-bootstrap';

import './components.scss';

export default function FeatureCard(props){
    const {title , img , desc , shortDesc} = props;
    const [fullText , setFullText] = useState(false);

    const moreTiggle = () =>{
        setFullText(!{...fullText});
    }

    const popover = (
        <Popover id="popover">
          <Popover.Body>
           {desc}
          </Popover.Body>
        </Popover>
      );
    return(
        <Row className=" justify-content-md-center">
            <Col lg={10} xs={12}>
                <Row className="justify-content-md-center featureBox">
                    <Col xs={12} lg={10} className="image">
                        <img src={img} />
                    </Col>
                    <Col xs={12} lg={10} className="title">
                        {title}
                    </Col>
                    <Col xs={12} lg={12} className="desc">
                        {shortDesc} 
                        <OverlayTrigger trigger={['hover' , 'focus']} placement="top-start" overlay={popover} onToggle={moreTiggle} flip="false">
                            <span className="moreBtn"> more </span>
                        </OverlayTrigger>
                    </Col>
                </Row>
            </Col>
            
        </Row>
    )
}