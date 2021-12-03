import React from "react";

import './components.scss';

export default function PartnersLogo(props){

    return(
        <div className="logo">
            <img src={props.img} />
        </div>
    )
}