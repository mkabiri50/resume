import React from 'react';
import SnowStorm from 'react-snowstorm';

import './FullPage.css'
const FullPage =(props)=>{
    return(
        <div className ={`FullPage ${props.classname|| ''}`}>
            <SnowStorm />
        {props.children}
        </div>     
    ) 
}
export default FullPage