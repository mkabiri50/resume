import React from 'react';
import { SocialIcon } from 'react-social-icons';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';
import Scroll from '../../Scroll/Scroll';
import ScrollTop from 'react-scrolltop-button';
import './Title.css';


const Title = (props) => {

    const mapLinks = Object.keys(data.title.items).map(link => {
        return (
            <SocialIcon
                key={data.title.items[link]}
                className='Icon'
                url={data.title.items[link]}
                bgColor={props.color}
                style={{ height: 40, width: 40, margin: 15 }} />
        )
    });

    return (
        <FullPage>
            <div className='Title' style={{ color: props.color }}>
                <h1>Hi, I AM {data.title.name}</h1>
                <p> {data.title.job} </p>
                <div className='IconContainer'>
                    {mapLinks}
                </div>
                <ScrollTop 
                  text="up"
                  distance={100}
                  breakpoint={768}
                  style={{ backgroundColor: "red"}}
                  className="scroll-your-role"
                  speed={1000}
                  target={75}
                 />;
                <Scroll link="About" >
                    <img style={{ position: "absolute", width: 30, bottom: 20 }} src={require('../../../images/logos/drop-down-round-button.png')} alt="down btn" />
                </Scroll>
            </div>
        </FullPage>

    )
}
export default Title;