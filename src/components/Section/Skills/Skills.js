import React from 'react';
import data from '../../../Data/Data.json';
import Skill from './Skill/Skill';
import FuulPage from '../../FullPage/FullPage';

import './Skills.css';
const Skills = (props) => {
    data.skills.map((item, i) => {
        return (item.id = i + 1)
    });
    const skillData =
        data.skills.map(p => (
            <Skill
                key={p.id}
                title={p.title}
                image={p.image}
                percent={p.percent} />))
    return (
        <FuulPage>
            <div  className='Skills' style={{color:props.color}}>
                <h1 style={{margin:50}}>Skills</h1>
                <div className ='Percents'> 
                {skillData} 
                </div>
                
            </div>
        </FuulPage>

    )
}
export default Skills;