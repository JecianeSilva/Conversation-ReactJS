import React from 'react';

import './styles.css';

export default function Messenger({type, text,hours}) {
    return (
        <div className={`containerMessage ${type}`}>
            <div className={`message ${type}`}>
                <p className="messageText">{text}</p>
                <p className="messageHour">{hours}</p>
            </div>
        </div>
    )
}
