import React from "react"
import {
  ContactPanelContainer,
  Avatar,
  Section,
  TagList,
  Tag,
  AboutText
} from "./ContactPanelStyle"

export const ContactPanel = ({ activeContact }) => {
  return (
    <ContactPanelContainer>
      <Avatar
        src={`https://picsum.photos/seed/${activeContact.name}-panel/300/300`}
        alt={activeContact.name}
      />

      <h3>{activeContact.name}</h3>
      <p>{activeContact.role}</p>

      <Section>
        <strong>Status</strong>
        <span>{activeContact.status}</span>
      </Section>

      <Section>
        <strong>Email</strong>
        <span>{activeContact.email}</span>
      </Section>

      <Section>
        <strong>About</strong>
        <AboutText>{activeContact.about}</AboutText>
      </Section>

      <Section>
        <strong>Shared topics</strong>
        <TagList>
          <Tag>Design</Tag>
          <Tag>Frontend</Tag>
          <Tag>UI</Tag>
        </TagList>
      </Section>
    </ContactPanelContainer>
  )
}