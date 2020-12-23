import React from 'react';

import './styles.css';

import img from '../../assets/default-user-image.png'

export default function TalkListItem({name, hour, image}) {
    return (
        <div className="containerListItem" id="containerListItem">
            <div id="profile">
                <img src={img} alt=""></img>
            </div>
            <p className="itemName">{name}</p>
            <p className="itemHour">{hour}</p>      
        </div>
    )
}
