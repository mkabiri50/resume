import React from 'react';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';
import Scroll from '../../Scroll/Scroll';

import './About.css';
const About = (props) => {
    return (
        <FullPage>
            <div className='About' style={{ color: props.color }}>
               <div className='About-Comtent'>
               <h1>About:</h1>
                <p> {data.about.content}  </p>
               </div>
               
                <Scroll link="Degrees" >
                    <img className='DownIcon-2' src={require('../../../images/logos/drop-down-round-button.png')} alt="down btn" />
                </Scroll>
            </div>

        </FullPage>

    )
}
export default About;