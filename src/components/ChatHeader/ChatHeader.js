import React from "react"
import {
  ChatHeaderContainer,
  ContactInfo,
  HeaderActions,
  HeaderButton
} from "./ChatHeaderStyle"

export const ChatHeader = ({ activeContact }) => {
  return (
    <ChatHeaderContainer>
      <ContactInfo>
        <img
          src={`https://picsum.photos/seed/${activeContact.name}-header/200/200`}
          alt={activeContact.name}
        />

        <div>
          <h2>{activeContact.name}</h2>
          <p>{activeContact.status}</p>
        </div>
      </ContactInfo>

      <HeaderActions>
        <HeaderButton type="button">Call</HeaderButton>
        <HeaderButton type="button">Video</HeaderButton>
      </HeaderActions>
    </ChatHeaderContainer>
  )
}