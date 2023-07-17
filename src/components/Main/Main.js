import React from 'react'
import { MainContainer, ChatBalloon } from './MainStyle'
import doubletick from '../../assets/doubletick.png'
import doubletickwhite from '../../assets/doubletickwhite.png'

export const Main = (props) => {

    const {messages, deleteMessage} = props

    
    return (
        <MainContainer>
            {messages.map((message) => (
                <div>
                    <ChatBalloon 
                    sender={message.sender}
                    onDoubleClick={() => deleteMessage(message.id)}
                    >
                        {message.sender !== "Me" && <h1>{message.sender}</h1>}
                        <p>{message.content}</p>
                        <div>
                            <span>{message.createdAt}</span>
                         {
                            message.sender === "Me" ? <img src={doubletickwhite} alt = "view status icon"/> 
                            :
                            <img src={doubletick} alt= "view status icon"/>
                         }
                        </div>
                    </ChatBalloon>
                </div>
            ))}
        </MainContainer>
    )
}
