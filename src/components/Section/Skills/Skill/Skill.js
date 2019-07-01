import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import './Skill.css';
const Skill = (props) => {
  const percentage = props.percent;
  return (
    <div className='Skill'>
      <CircularProgressbarWithChildren value={percentage} text={`${percentage}%`}  
      styles={buildStyles({
          textColor: "darkslateblue",
          pathColor: "lawngreen",
          trailColor: "slategray" })}>
        <div className='Container'>
          <img style={{ marginTop: -10 }} src={require(`../../../../images/logos/${props.image}`)} alt="" className='Image' />
          <div className='Titr'>{props.title}</div>
        </div>
      </CircularProgressbarWithChildren >
    </div>


  )
}
export default Skill;
