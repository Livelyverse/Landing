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
            <div style={{width:'100%', height:'100%', position:'absolute' ,top:'0', background:'#000', background:'linear-gradient(0deg, rgba(0,0,0,0.70) 0%,  rgba(9,9,121,0) 50%, rgba(0,0,0,0.95) 95%)'}}></div>

            <Banner />
        </div>
    )
}