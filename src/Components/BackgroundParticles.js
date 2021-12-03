import React, { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import './components.scss';
import particlesOptions from "../particles.js";

export default function BackgroundParticles(){
  
    
    return(
        <>
            <Particles options={particlesOptions}/>

            <div style={{width:'100%', height:'100%', position:'absolute' ,top:'0', background:'#000', background:'linear-gradient(0deg, rgba(0,0,0,0.95) 0%,  rgba(9,9,121,0) 50%, rgba(0,0,0,0.95) 95%)'}}></div>
        </>
    )
}