import React, { useState } from "react"
import { FooterContainer, SendButton } from "./FooterStyle"
import emoji from "../../assets/emoji.png"
import paperclip from "../../assets/paperclip.png"

export const Footer = ({ sendText }) => {
  const [text, setText] = useState("")

  const handleSend = () => {
    const didSend = sendText(text)

    if (didSend) {
      setText("")
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const didSend = sendText(text)

      if (didSend) {
        setText("")
      }
    }
  }

  return (
    <FooterContainer>
      <div className="input-area">
        <button type="button" className="emoji">
          <img src={emoji} alt="Emoji icon" />
        </button>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message..."
          onKeyDown={handleKeyDown}
        />

        <button type="button" className="paperclip">
          <img src={paperclip} alt="Attachment icon" />
        </button>
      </div>

      <SendButton type="button" onClick={handleSend}>
        Send
      </SendButton>
    </FooterContainer>
  )
}