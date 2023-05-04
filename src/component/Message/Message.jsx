import React, { useState } from 'react'
import './message.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { CgClose } from 'react-icons/cg'

export default function Message() {
  const [openMessage, setOpenMessage] = useState(false)
  return (
    <div className='messages-lg'>
      <div className={openMessage ? 'message-sec' : 'closed-message-sec'}>
        <div className="message-head">
          <div
            className="close-message"
            onClick={() => setOpenMessage((prevState) => !prevState)}
          >
            {openMessage && <CgClose style={{ fontSize: '20px' }} />}
          </div>
          <div>
            <h2>Messages</h2>
          </div>
          <div
            className="message-open-btn"
            style={{ opacity: openMessage ? 0 : 1 }}
            onClick={() => setOpenMessage((prevState) => !prevState)}
          >
            {!openMessage && (
              <BsChevronCompactDown style={{ fontSize: '30px' }} />
            )}
          </div>
        </div>
      
      {openMessage && (
        <div className="message-list">
          <div className="message-users">
            <img
              src="https://picsum.photos/200/300"
              alt="avatar"
              style={{
                width: '40px',
                height: '35px',
                borderRadius: '50px',
              }}
            />
            <div>
              <h5>Muhammed Safvan </h5>
              <div>
              <span>Amnas:hii there sdfn skjd sdjbnljlksdz sdnl </span><span>11.59 pm</span>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
