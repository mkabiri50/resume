import React from 'react';
import './NavBarItems.css';
import NavBarItem from './NavBarItem/NavBarItem';
const NavBarItems = (props) => (

        <ul className="NavBarItems">
            <NavBarItem color ={props.color} link= "About" > About </NavBarItem>
            <NavBarItem color ={props.color} link= "Degrees" > Degrees </NavBarItem>
            <NavBarItem color ={props.color} link= "Skills" > Skills </NavBarItem>
        </ul>
       
);
export default NavBarItems;
