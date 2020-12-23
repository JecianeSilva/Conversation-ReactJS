import React, { useState } from 'react';

import TalkList from '../../component/TalkList/index';
import Talk from '../../component/Talk/index';

//Importar dados json
import { data } from "../../messages";

import './styles.css';

export default function Chat() {
  const [chatSelected, setChatSelected] = useState(-1);
  const [name, setName] = useState("")
  const [chats, setChats] = useState(data)
  const [messages, setMessages] = useState({})

  function updateChatSelected(id){    
    setChatSelected(chats[chats.indexOf(chats.filter(item => item.id === id)[0])].id);
    setMessages(chats.filter(item => item.id === id)[0].messages);
    setName(chats.filter(item => item.id === id)[0].name);    
  }

  function newMessage(message, id){    
    let chatsTemp=[];
    for(let i=0; i< chats.length; i++){   
      if(chats[i].id === id){
        let chat={
          id: id,
          name: chats[i].name,
          hour: chats[i].hour, 
          image: chats[i].image,
          messages: [...messages,
            {
              type: "Send",
              text: message,
              hours: "18:00"
             }
          ]
        }
        console.log(chat)
        setMessages(chat.messages);
        chatsTemp.push(chat);
      }else{
        chatsTemp.push(chats[i]);
      }
    }
    setChats(chatsTemp);    
    console.log(chats)
  }

  return (
    <div className="containerChat" id="containerChat">
      <TalkList updateChatSelected={updateChatSelected} chats={chats}></TalkList>
      <Talk chatSelected={chatSelected} newMessage={newMessage} messages={messages} name={name}></Talk>
    </div>
  );
}
