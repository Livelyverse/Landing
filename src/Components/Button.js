import React, { Children } from "react";

import './components.scss';

export default function Button(props){
    const {type} = props;
    


    return(
        <div className={` button ${type=== 'transparent' ? 'transparent' : 'color'}`} {...props}>
           {props.children}
        </div>
    )
}