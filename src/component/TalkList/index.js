import React, { useState } from 'react';

import TalkListItem from '../TalkListItem/index';

import './styles.css';

export default function TalkList({updateChatSelected, chats}) {    
    const [search, setSearch] = useState("");
    const [chatsFiltered, setChatsFiltered] = useState(chats)
    function updateChat(id){
        updateChatSelected(id);
      }
    return (
        <div className="containerList" id="containerList">
            <div className="containerHeader">
                <div id="block">
                    
                </div>
            </div>
            <div className="containerSearch">
                <input 
                className="inputSearch"
                type="text"
                //value={search}
                onChange={e =>{
                    setChatsFiltered(chats.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase())))
                }
                }
                ></input>
            </div>
            <div className="itens">
            {
                chatsFiltered.map((item, i)=>(
                <div className="containerListItemButton" onClick={e => updateChatSelected(item.id)}>    
                <TalkListItem
                    key={item.id}
                    id={item.id}
                    name= {item.name}
                    hour= {item.hour}
                    image={item.image}
                    updateChat={updateChat}
                ></TalkListItem>
                <hr></hr>
                </div>
                )
                )
            }
            </div>
        </div>
    )
}
