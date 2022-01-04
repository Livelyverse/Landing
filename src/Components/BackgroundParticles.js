import React, { useEffect, useState } from 'react';
import Particles from "react-tsparticles";
import './components.scss';
import particlesOptions from "../particles.js";

export default function BackgroundParticles(){
  
    return(
        <>
            <Particles options={particlesOptions}/>

        </>
    )
}