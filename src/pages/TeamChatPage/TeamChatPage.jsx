import { useEffect, useMemo, useState } from "react"
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

  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem(STORAGE_KEY)
    return savedChats ? JSON.parse(savedChats) : initialChats
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(chats))
  }, [chats])

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
        <ChatHeader activeContact={activeContact} />

        <Main messages={activeMessages} deleteMessage={deleteMessage} />

        <Footer sendText={createMessage} />
      </ChatSection>

      <ContactPanel activeContact={activeContact} />
    </AppContainer>
  )
}