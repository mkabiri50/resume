import React from 'react';
import  './NavBarItem.css';
import { Link} from "react-scroll";
const NavBarItem = (props) => (
   <li className="NavBarItem">
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


   </li>
);
export default NavBarItem;  