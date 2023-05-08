import React from 'react'
import './bottomBar.css'
import { MdSlowMotionVideo } from 'react-icons/md'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { MdNotificationsNone } from 'react-icons/md'
import { SiMarketo } from 'react-icons/si'
import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'

export default function BottomBar() {
  const bottomOptions = [
    {
      icon: <AiFillHome />,
      name: 'Home',
      link: '/home',
    },
    {
      icon: <MdSlowMotionVideo />,
      name: 'Reels',
      link: '/story',
    },
    {
      icon: <BiMessageSquareAdd />,
      name: 'Post',
      link: '/post',
    },
    {
      icon: <MdNotificationsNone />,
      name: 'Alert',
      link: '/notification',
    },

    {
      icon: <SiMarketo />,
      name: 'Market',
      link: '/market',
    },
  ]

  return (
    <div className="bottom-bar">
      <div className="option-bar">
        {bottomOptions.map((element) => (
          <div key={element.link}>
            <h1>
              <NavLink style={{marginTop:"10px"}} className='navLink' exact to={element.link}>
                <span style={{fontSize:"22px"}} >{element.icon}</span>
                <p className='option-names'>{element.name}</p>
              </NavLink>
            </h1>
          </div>
        ))}
      </div>
    </div>
  )
}
