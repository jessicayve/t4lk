import React, { useState } from 'react'
import { FooterContainer } from './FooterStyle'
import emoji from '../../assets/emoji.png'
import paperclip from '../../assets/paperclip.png'
import microphone from '../../assets/microphone.png'

export const Footer = (props) => {
    const {sendText} = props

    const [text, setText] = useState("")

    const changeText = (e) =>{
        setText(e.target.value)
    }
    
    const clearText = () =>{
        setText("")
    }
   
  return (
    <FooterContainer>
        <div>
            <button className='emoji'>
                <img src={emoji} alt='emoji icon'/>
            </button>

            <input 
            value={text}
            onChange={changeText}
            placeholder='Type a message'
            onKeyDown={(e)=>sendText(e,text, clearText)}
            />

            <button className='paperclip'>
                <img src={paperclip} alt='paperclipe icon'/>
            </button>
            
        </div>
        <button className='microphone'>
            <img src={microphone} alt='microphone icon'/>
        </button>
        
    </FooterContainer>
  )
}
