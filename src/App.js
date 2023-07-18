import { useState } from "react"
import { Header } from "./components/Header/Header"
import { AppContainer } from "./GlobalStyle"
import { Main } from "./components/Main/Main"
import { initialMessages } from "./assets/initialMessages"
import { Footer } from "./components/Footer/Footer"

function App() {
  const [currSender, setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Mark",
    "Lester",
    "Rebeca",
    "Astrodev"
  ])

  const [messages, setMessages] = useState(initialMessages)
  console.log(messages)

  const onChangeSender = (e) => {
    setCurrSender(e.target.value)
  }

  const deleteMessage = (idToDelete) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      const newMessages = [...messages]

      const indexToDelete = newMessages.findIndex(
        (message) => message.id === idToDelete)

      if (indexToDelete > -1) {
        newMessages.splice(indexToDelete, 1)
        setMessages(newMessages)
      }
    }
  }

  const sendText = (e, text, cbCleartText) => {
    if (e.key === "Enter") {
      const newMessage = {
        id: `${currSender}-${Math.ceil(Math.random() * 1000000)}`,
        sender: currSender,
        content: text,
        createdAt: new Date().toLocaleTimeString(
          "en-us",
          {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          }
        )
      }
      const newMessages = [...messages, newMessage]
      setMessages(newMessages)
      cbCleartText()
    }

  }

  return (
    <AppContainer>
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />

      <Main 
      messages={messages} 
      deleteMessage={deleteMessage} 
      />

      <Footer
        sendText={sendText}

      />
    </AppContainer>


  );
}

export default App;
