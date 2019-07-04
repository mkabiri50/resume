import React from 'react';
import  './NavBarItem.css';
import Scroll from '../../../Scroll/Scroll';
const NavBarItem = (props) => (
   <li className="NavBarItem">
            <Scroll link={props.link}  color={props.color}>
            {props.children}
            </Scroll>


   </li>
);
export default NavBarItem;  