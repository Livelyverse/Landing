import React, { useEffect, useState } from "react";
import BackgroundParticles from './BackgroundParticles';
import Header from './Header';
import Banner from './Banner';

import './components.scss';

export default function FirstSection(){
    const [height , setHeight] = useState('0px');

    useEffect(()=>{
        setHeight((window.innerHeight > 850 ? window.innerHeight : 850)+'px');
    }, [height])
    return(
        <div className="firstSection" style={{minHeight:height}}>
            <BackgroundParticles />
            <Header/>
            <Banner />
        </div>
    )
}