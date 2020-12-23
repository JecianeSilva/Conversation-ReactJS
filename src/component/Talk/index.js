import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Messenger from '../Messenger';
import img from '../../assets/default-user-image.png'

import './styles.css';

export default function Talk({newMessage,chatSelected, messages, name}) {
    const [messageInput, setMessageInput] = useState("");
    return (
        <div className="containerTalk" id="containerTalk">
            <div className="containerHeader">
                <div id="block">
                    <img src={img} alt="image profile" />
                </div>
                <p className="headerText">{name}</p>
            </div>
            <div className="containerConversation">
            {messages.length>0&&<Link className="showConversation" to="#">Show Previous Message!</Link>}
                <div className="containerMessenger">
                    {
                    
                    messages.length>0&&messages.map((item, i) => (
                        <Messenger
                            key={i}
                            type={item.type}
                            text={item.text}
                            hours={item.hours}
                        >
                        </Messenger>
                    ))
                    }
                    {!(messages.length>0)&& 
                        <div className="conversationBackground">
                            <img src="https://soulphia.com/wp-content/uploads/2020/09/Asset-2.png"  alt="logo"/>
                       </div>
                    }
                    
                    
                </div>
            </div>  
            <div className="sendMessage">
                    <input 
                    type="text"
                    value={messageInput}
                    onChange={e => setMessageInput(e.target.value)
                    
                    }
                    onKeyDown={event =>{
                        if (event.key === 'Enter' && chatSelected !== -1 && messageInput !== '') {
                            newMessage(messageInput, chatSelected);
                            setMessageInput('');
                            let containerConv = document.getElementsByClassName('containerConversation');
                            console.log(containerConv[0].scrollTop += 100);
                        }
                    }}
                    >                        
                    </input>
             </div>          
        </div>
    )
}
