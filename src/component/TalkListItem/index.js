import React from 'react';

import './styles.css';

export default function TalkListItem({name, hour, image, updateChat}) {
    return (
        <div className="containerListItem" id="containerListItem">
            <div id="profile">
                <img src={image} alt=""></img>
            </div>
            <p className="itemName">{name}</p>
            <p className="itemHour">{hour}</p>      
        </div>
    )
}
