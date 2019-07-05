import React from 'react';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';
import Scroll from '../../Scroll/Scroll';

import './About.css';
const About = (props) => {
    return (
        <FullPage>
            <div className='About' style={{ color: props.color }}>
                <h1>About:</h1>
                <p> {data.about.content}  </p>
                <Scroll link="Degrees" >
                    <img style={{ position: "relative", width: 30, bottom: 0 }} src={require('../../../images/logos/drop-down-round-button.png')} alt="down btn" />
                </Scroll>
            </div>

        </FullPage>

    )
}
export default About;