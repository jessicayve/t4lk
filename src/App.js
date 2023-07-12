import { useState } from "react"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { AppContainer } from "./GlobalStyle"




function App() {
  const [currSender, setCurrSender] = useState("Me")
  const [senders, setSenders] = useState([
    "Me",
    "Fulana",
    "Beltrano",
    "Ciclana",
    "Astrodev"
  ])
  
  const onChangeSender = (e) =>{
    setCurrSender(e.target.value)
  }
  return (
    <AppContainer>
    <Header 
    senders={senders}
    currSender={currSender}
    onChangeSender={onChangeSender}
    />
    
    </AppContainer>
  
    
  );
}

export default App;
