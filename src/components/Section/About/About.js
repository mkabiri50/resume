import React from 'react';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';

import './About.css';
const About = (props)=> {
    return (
        <FullPage>
            <div className='About' >
                <div className='About-Content' style={{color:props.color}}>
                <h1>About:</h1>
            <p> {data.about.content}  </p>
                </div>
           
        </div>
        </FullPage>
      
    )
}
export default About;