import React from 'react';
import { SocialIcon } from 'react-social-icons';
import FullPage from '../../FullPage/FullPage';
import data from '../../../Data/Data.json';
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

            </div>
        </FullPage>

    )
}
export default Title;