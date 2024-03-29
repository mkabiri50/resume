import React from 'react';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import NavBarItems from '../NavBarItems/NavBarItems';

import './ToolBar.css';

const ToolBar = (props) => {

    return (
        <div className='Toolbar'>
            <DrawerToggle clicked={props.drawerToggleclicked} />
            <button style={{ backgroundColor: props.color }} className="Btn" onClick={props.chsngeColor}>Click me</button>
            <nav className="DesktopOnly">
            <NavBarItems color={props.color} />
            </nav>
        </div>
    );

}
export default ToolBar;