import React from "react"
import {
  SidebarContainer,
  Brand,
  ProfileCard,
  SearchInput,
  ContactList,
  ContactCard,
  ContactMeta,
  StatusDot,
  SidebarTop,
  SidebarTitle,
  LastMessage
} from "./SidebarStyle"

export const Sidebar = ({
  contacts,
  activeContact,
  search,
  setSearch,
  onSelectContact,
  getLastMessage
}) => {
  return (
    <SidebarContainer>
      <SidebarTop>
        <Brand>
          <span>T4LK</span>
          <small>Modern messaging dashboard</small>
        </Brand>

        <ProfileCard>
          <img
            src="https://picsum.photos/seed/jessica-profile/200/200"
            alt="Jessica profile"
          />
          <div>
            <h3>Jessica</h3>
            <p>Frontend Developer</p>
          </div>
        </ProfileCard>
      </SidebarTop>

      <SearchInput
        type="text"
        placeholder="Search contacts"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SidebarTitle>Recent chats</SidebarTitle>

      <ContactList>
        {contacts.map((contact) => (
          <ContactCard
            key={contact.id}
            isActive={activeContact.id === contact.id}
            onClick={() => onSelectContact(contact)}
            type="button"
          >
            <img
              src={`https://picsum.photos/seed/${contact.name}/200/200`}
              alt={contact.name}
            />

            <ContactMeta>
              <strong>{contact.name}</strong>
              <span>{contact.role}</span>
              <LastMessage>{getLastMessage(contact.id)}</LastMessage>
            </ContactMeta>

            <StatusDot status={contact.status} />
          </ContactCard>
        ))}
      </ContactList>
    </SidebarContainer>
  )
}