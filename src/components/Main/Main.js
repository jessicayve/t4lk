import React, { useEffect, useRef } from "react"
import {
  MainContainer,
  ChatBalloon,
  MessageWrapper,
  DateDivider,
  EmptyState
} from "./MainStyle"
import doubletick from "../../assets/doubletick.png"
import doubletickwhite from "../../assets/doubletickwhite.png"

export const Main = ({ messages, deleteMessage }) => {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    })
  }, [messages])

  return (
    <MainContainer>
      <DateDivider>Today</DateDivider>

      {messages.length === 0 && (
        <EmptyState>
          <h3>No messages yet</h3>
          <p>Start the conversation and send the first message.</p>
        </EmptyState>
      )}

      {messages.map((message) => (
        <MessageWrapper key={message.id} sender={message.sender}>
          <ChatBalloon
            sender={message.sender}
            onDoubleClick={() => deleteMessage(message.id)}
            title="Double click to delete"
          >
            {message.sender !== "Me" && <h1>{message.sender}</h1>}

            <p>{message.content}</p>

            <div>
              <span>{message.createdAt}</span>

              {message.sender === "Me" ? (
                <img src={doubletickwhite} alt="Seen status icon" />
              ) : (
                <img src={doubletick} alt="Seen status icon" />
              )}
            </div>
          </ChatBalloon>
        </MessageWrapper>
      ))}

      <div ref={bottomRef} />
    </MainContainer>
  )
}