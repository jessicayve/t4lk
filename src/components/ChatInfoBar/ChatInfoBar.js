import React from "react"
import { ChatInfoBarContainer, InfoItem } from "./ChatInfoBarStyle"

export const ChatInfoBar = ({
  totalMessages,
  currentUser,
  currentStatus
}) => {
  return (
    <ChatInfoBarContainer>
      <InfoItem>
        <strong>Chat with:</strong> {currentUser}
      </InfoItem>

      <InfoItem>
        <strong>Messages:</strong> {totalMessages}
      </InfoItem>

      <InfoItem>
        <strong>Status:</strong> {currentStatus}
      </InfoItem>
    </ChatInfoBarContainer>
  )
}