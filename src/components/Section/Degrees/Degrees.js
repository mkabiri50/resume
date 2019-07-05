import React from 'react';
import './Degrees.css';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';
import Scroll from '../../Scroll/Scroll';


const Degrees = (props) => {
    const degArr = [];
    for (let i in data.education) {
        degArr.push({
            id: i,
            deg: data.education[i]
        })
    }
    const mapDeg = degArr.map(d => {
        return <li key={d.id}>
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
        return <li key={d.id}>
            {d.art}
        </li>
    })
    return (
        <FullPage>
            <div className='Degrees' style={{ color: props.color }}>
                <img className='Logo' src={require("../../../images/logos/ed.jpeg")} alt="Education and training" />
                {mapDeg}
                <h5>ACADEMIC PUBLICATION</h5>
                {mapArt}
                <Scroll link="Skills" >
                    <img style={{ position: "relative", width: 30, bottum: 0 }} src={require('../../../images/logos/drop-down-round-button.png')} alt="down btn" />
                </Scroll>
            </div>

        </FullPage >


    )
}
export default Degrees;