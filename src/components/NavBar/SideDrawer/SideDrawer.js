import React from 'react';
import NavBarItems from '../NavBarItems/NavBarItems'
import './SideDrawer.css';
import Bachdrop from '../../Backdrop/Backdrop';
const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open]
    }

    return (
        <div>
            <Bachdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}
                onClick={props.closed}>
                <nav>
                    <NavBarItems/>
                </nav>
            </div>
        </div>



    )
}
export default sideDrawer;
