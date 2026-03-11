import React from "react"
import camera from "../../assets/camera.png"
import cellphone from "../../assets/cellphone.png"
import dots from "../../assets/dots.png"
import { HeaderContainer, Select, Status } from "./HeaderStyle"

export const Header = ({ senders, currSender, onChangeSender }) => {
  return (
    <HeaderContainer>
      <div className="sender-profile">
        <img
          src={`https://picsum.photos/seed/${currSender}/200/200`}
          alt="Profile picture"
        />

        <div>
          <Select value={currSender} onChange={onChangeSender}>
            {senders.map((sender) => (
              <option key={sender} value={sender}>
                {sender}
              </option>
            ))}
          </Select>

          <Status>Online</Status>
        </div>
      </div>

      <div className="action-menu">
        <button type="button">
          <img src={camera} alt="Camera icon" />
        </button>

        <button type="button">
          <img src={cellphone} alt="Phone icon" />
        </button>

        <button type="button">
          <img src={dots} alt="Menu icon" />
        </button>
      </div>
    </HeaderContainer>
  )
}