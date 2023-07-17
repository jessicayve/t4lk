import React from 'react'
import camera from '../../assets/camera.png'
import cellphone from '../../assets/cellphone.png'
import dots from '../../assets/dots.png'
import { HeaderContainer, Select, Status } from './HeaderStyle'




export const Header = (props) => {

    const { senders, currSender, onChangeSender } = props

    return (
        <HeaderContainer>
            <div className='sender-profile'>
                <img src={`https://picsum.photos/seed/${currSender}/200/200`} alt='Profile picture' />
                <div>
                    <Select value={currSender} onChange={onChangeSender}>
                        {senders.map((sender) => (
                            <option key={sender} value={sender}>
                                {sender}
                            </option>
                        ))}
                    </Select>
                    <Status> Online </Status>
                </div>
            </div>
            <div className="action-menu">
                <button>
                    <img src={camera} alt='cam icon' />
                </button>
                <button>
                    <img src={cellphone} alt='telephone icon' />
                </button>
                <button>
                    <img src={dots} alt='dots icon' />
                </button>
            </div>
        </HeaderContainer>
    )
}
