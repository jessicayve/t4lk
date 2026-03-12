import React, { useState } from "react"
import {
  FooterContainer,
  InputArea,
  MessageInput,
  IconButton,
  SendButton
} from "./FooterStyle"

import {
  Paperclip,
  Image,
  Video,
  SendHorizontal
} from "lucide-react"

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
      <InputArea>
        <IconButton type="button" aria-label="Attach file">
          <Paperclip size={18} />
        </IconButton>

        <MessageInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a message..."
          onKeyDown={handleKeyDown}
        />

        <IconButton type="button" aria-label="Send image">
          <Image size={18} />
        </IconButton>

        <IconButton type="button" aria-label="Send video">
          <Video size={18} />
        </IconButton>
      </InputArea>

      <SendButton type="button" onClick={handleSend}>
        <SendHorizontal size={18} />
      </SendButton>
    </FooterContainer>
  )
}