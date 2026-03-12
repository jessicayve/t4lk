import React from "react"
import { Menu } from "lucide-react"
import {
  ChatHeaderContainer,
  HeaderLeft,
  MobileContactsButton,
  ContactInfo,
  HeaderActions,
  HeaderButton
} from "./ChatHeaderStyle"

export const ChatHeader = ({ activeContact, onOpenContacts }) => {
  return (
    <ChatHeaderContainer>
      <HeaderLeft>
        <MobileContactsButton
          type="button"
          onClick={onOpenContacts}
          aria-label="Open contacts"
        >
          <Menu size={18} />
        </MobileContactsButton>

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
      </HeaderLeft>

      <HeaderActions>
        <HeaderButton type="button">Call</HeaderButton>
        <HeaderButton type="button">Video</HeaderButton>
      </HeaderActions>
    </ChatHeaderContainer>
  )
}