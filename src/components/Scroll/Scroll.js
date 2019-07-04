import React from 'react';

import { Link} from "react-scroll";
const Scroll = (props) => {

    return (
        <Link
        activeClass="active"
        to={props.link}
        spy={true}
        smooth={true}
        offset={0}
        duration={500}  
        style={{color:props.color}}        
     >
        {props.children}
     </Link>
         
    ) 
}
export default Scroll;