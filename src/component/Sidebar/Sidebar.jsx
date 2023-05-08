import React from 'react'
import { AiFillProfile, AiFillHome } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdNotificationsNone } from 'react-icons/md'
import { BsChevronDoubleLeft } from 'react-icons/bs'
import './sidebar.css'
import {NavLink} from 'react-router-dom'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { SiMarketo } from 'react-icons/si'

export default function Sidebar({ openSideBar , setOpenSideBar }) {
  const sideBarItems = [
    {
      name: 'Home',
      icon: <AiFillHome />,
      link:'/home'
    },
    {
      name: 'New Post',
      icon: <BiMessageSquareAdd />,
      link:'/post'
    },
    {
      name: 'Market',
      icon: <SiMarketo />,
      link:'/market'
    },
    {
      name: 'Notification',
      icon: <MdNotificationsNone />,
      link:'/notification'
    },
    {
      name: 'About',
      icon: <AiFillProfile />,
      link:'/about'
    },
  ]

  return (
    <div>
      <div className='sliding-sidebar'>
        {openSideBar ? (
          <div className="logo-name"
          onClick={() => setOpenSideBar((prevState) => !prevState)}
          >
            <h2>MarketMates</h2>
            <hr />
            <div>
              <BsChevronDoubleLeft/>
            </div>
          </div>
        ) : (
          <h1 className="hamburger" 
          onClick={() => setOpenSideBar((prevState) => !prevState)}
          >
            <GiHamburgerMenu />
          </h1>
        )}
        <hr />
        {sideBarItems.map((elem, i) => {
          return (
           <NavLink style={{textDecoration:"none"}} to={elem.link} > <div key={i} className="side-menu">
             <div>{elem.icon} </div>
              {openSideBar && <h5>{elem.name}</h5>}
            </div></NavLink>
          )
        })}
      </div>
      
    </div>
  )
}
