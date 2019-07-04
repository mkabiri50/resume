import React from 'react';

import NavBarItems from '../NavBarItems/NavBarItems';
import './ToolBar.css';

const ToolBar =(props)=>{
 
        return (
            <div className='Toolbar'>
                <button className="Btn" onClick={props.chsngeColor}></button>
                <NavBarItems color ={props.color} />
            </div>
        );
    
}
export default ToolBar;