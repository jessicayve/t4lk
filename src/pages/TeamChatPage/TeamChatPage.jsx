import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { AppContainer, ChatSection } from "../../GlobalStyle"
import { Main } from "../../components/Main/Main"
import { Footer } from "../../components/Footer/Footer"
import { Sidebar } from "../../components/Sidebar/Sidebar"
import { ContactPanel } from "../../components/ContactPanel/ContactPanel"
import { ChatHeader } from "../../components/ChatHeader/ChatHeader"
import { initialChats } from "../../assets/initialMessages"
import { contacts } from "../../data/contacts"

const STORAGE_KEY = "t4lk-chats"

export const TeamChatPage = () => {
  const [activeContact, setActiveContact] = useState(contacts[0])
  const [search, setSearch] = useState("")
  const [isMobileContactsOpen, setIsMobileContactsOpen] = useState(false)

  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem(STORAGE_KEY)
    return savedChats ? JSON.parse(savedChats) : initialChats
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats))
  }, [chats])

  useEffect(() => {
    setIsMobileContactsOpen(false)
  }, [activeContact])

  const filteredContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase())
    )
  }, [search])

  const activeMessages = chats[activeContact.id] || []

  const getLastMessage = (contactId) => {
    const messages = chats[contactId] || []
    if (!messages.length) return "No messages yet"
    return messages[messages.length - 1].content
  }

  const deleteMessage = (idToDelete) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to delete this message?"
    )

    if (!shouldDelete) return

    setChats((prevChats) => ({
      ...prevChats,
      [activeContact.id]: prevChats[activeContact.id].filter(
        (message) => message.id !== idToDelete
      )
    }))
  }

  const createMessage = (text) => {
    const trimmedText = text.trim()

    if (!trimmedText) return false

    const newMessage = {
      id: `Me-${Date.now()}`,
      sender: "Me",
      content: trimmedText,
      createdAt: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      })
    }

    setChats((prevChats) => ({
      ...prevChats,
      [activeContact.id]: [...(prevChats[activeContact.id] || []), newMessage]
    }))

    return true
  }

  return (
    <ChatPageShell>
      <MobileSidebarOverlay
        $isOpen={isMobileContactsOpen}
        onClick={() => setIsMobileContactsOpen(false)}
        aria-label="Close contacts"
      />

      <MobileSidebarWrapper $isOpen={isMobileContactsOpen}>
        <Sidebar
          contacts={filteredContacts}
          activeContact={activeContact}
          search={search}
          setSearch={setSearch}
          onSelectContact={setActiveContact}
          getLastMessage={getLastMessage}
          forceMobileVisible
        />
      </MobileSidebarWrapper>

      <AppContainer>
        <Sidebar
          contacts={filteredContacts}
          activeContact={activeContact}
          search={search}
          setSearch={setSearch}
          onSelectContact={setActiveContact}
          getLastMessage={getLastMessage}
        />

        <ChatSection>
          <ChatHeader
            activeContact={activeContact}
            onOpenContacts={() => setIsMobileContactsOpen(true)}
          />

          <Main messages={activeMessages} deleteMessage={deleteMessage} />

          <Footer sendText={createMessage} />
        </ChatSection>

        <ContactPanel activeContact={activeContact} />
      </AppContainer>
    </ChatPageShell>
  )
}

const ChatPageShell = styled.div`
  flex: 1;
  min-height: 0;
  height: 100%;
  overflow: hidden;
`

const MobileSidebarOverlay = styled.button`
  display: none;

  @media (max-width: 860px) {
    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 1200;
    border: none;
    background: rgba(2, 6, 23, 0.58);
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
  }
`

const MobileSidebarWrapper = styled.div`
  display: none;

  @media (max-width: 860px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1210;
    width: min(88vw, 340px);
    height: 100dvh;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateX(0)" : "translateX(-105%)"};
    transition: transform 0.28s ease;
    box-shadow: 16px 0 40px rgba(0, 0, 0, 0.35);
  }
`