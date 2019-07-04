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
                <div className='Degree-Section' >
                    <img style={{ widgh: 200, height: 100 }} src={require("../../../images/logos/ed.jpeg")} alt="Education and training" />
                    <div className="Degree-Content">
                        {mapDeg}
                    </div>

                </div>
                <div className='Article-Content' >
                    <h3>ACADEMIC PUBLICATION</h3>
                    {mapArt}
                </div>
                <Scroll link= "Skills" >
                <img style={{position: "relative", width: 30, marginBottom:-20}} src= {require('../../../images/logos/drop-down-round-button.png')} alt="down btn" />
              </Scroll>
            </div>

        </FullPage >


    )
}
export default Degrees;