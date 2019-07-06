import React from 'react';
import NavBarItems from '../NavBarItems/NavBarItems'
import Bachdrop from '../../Backdrop/Backdrop';
import './SideDrawer.css';
const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer","Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer","Open"]
    }

    return (
        <div>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
                onClick={props.closed}>
                <nav>
                    <NavBarItems color={props.color} />
                </nav>
            </div>
        </div>
    )
}
export default sideDrawer;
