import React from 'react'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import cami from '../../assets/cami.png'
import teli from '../../assets/teli.png'
import doti from '../../assets/doti.png'
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
                    <img src={cami} alt='cam icon' />
                </button>
                <button>
                    <img src={teli} alt='telephone icon' />
                </button>
                <button>
                    <img src={doti} alt='dots icon' />
                </button>
            </div>
        </HeaderContainer>
    )
}
