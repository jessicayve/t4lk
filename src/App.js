import { useState } from "react"
import { Header } from "./components/Header/Header"
import { AppContainer } from "./GlobalStyle"
import { Main } from "./components/Main/Main"
import { initialMessages } from "./assets/initialMessages"

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

  return (
    <AppContainer>
      <Header
        senders={senders}
        currSender={currSender}
        onChangeSender={onChangeSender}
      />
      <Main messages={messages} deleteMessage={deleteMessage} />
    </AppContainer>


  );
}

export default App;
