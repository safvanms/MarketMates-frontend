import React from 'react'
import './header.css'
import { CiSearch } from 'react-icons/ci'
import { BsChatText } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export default function Header({ openSideBar }) {
  return (
    <>
      <div className="header">
        <div className="head-logo" style={{ opacity: openSideBar ? 0 : 1 }}>
          {!openSideBar && <h1>MarketMates</h1>}
        </div>

        <div className="small-device-nav">
          <img
            src="https://picsum.photos/200/300"
            alt="avatar"
            style={{ width: '35px', height: '35px', borderRadius: '50px' }}
          />
        </div>

        <div>
          <form>
            <div className="head-search-sec">
              <input  name="search" placeholder="Search" />
              <div>
                <CiSearch style={{ marginBottom: '10px' }} />
              </div>
            </div>
          </form>
        </div>

        <div className="head-items">
          <img
            src="https://picsum.photos/200/300"
            alt="avatar"
            style={{ width: '35px', height: '35px', borderRadius: '50px' }}
          />
          <h5>USER_NAME</h5>
        </div>
        <div className="small-device-nav">
          <Link to="/chat">
            <h1 style={{ color: 'black', fontSize:"24px"}}>
              <BsChatText />
            </h1>
          </Link>
        </div>
      </div>
    </>
  )
}
