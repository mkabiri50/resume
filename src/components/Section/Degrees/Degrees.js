import React from 'react';
import './Degrees.css';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';

const Degrees = (props) => {
    const degArr = [];
    for (let i in data.education) {
        degArr.push({
            id: i,
            deg: data.education[i]
        })
    }
    const mapDeg = degArr.map(d => {
        return <li key={d.id}
        className='.Degree-Content'>
            {d.deg}
        </li>
    })
  
        const articleArr = [];
        for (let i in data.poblication) {
            articleArr.push({
                id: i,
                art: data.poblication[i]
            })
        }
        const mapArt = articleArr.map(d => {
            return <li key={d.id}
            className='.Degree-Content'>
                {d.art}
            </li>
        })
    return (
        <FullPage>
            <div className='Degrees'>
                <div className='Degree-Content' style={{ color: props.color }}>
                <img style={{widgh:200, height:100}} src = {require("../../../images/logos/ed.jpeg")}  alt="Education and training"/>
                    <ul>
                       
                        {mapDeg}
                        {mapArt}
                    </ul>
                </div>
            </div>

        </FullPage>


    )
}
export default Degrees;