import React, { useState } from 'react'
import './Home.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import BottomBar from '../BottomBar/BottomBar'
import Message from '../Message/Message'
import FeedPage from '../FeedPage/FeedPage'
import NoPage from '../NoPage/NoPage'
import Chat from '../Chats/Chat'
import Login from '../Auth/Login'
import Signup from '../Auth/Signup'

export default function Home() {
  const [openSideBar, setOpenSideBar] = useState(false)

  return (
    <div>
      <BrowserRouter>
        {!window.location.pathname.includes('/login') &&
          !window.location.pathname.includes('/signup') && (
            <Header openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />
          )}
        <div className="home">
          {!window.location.pathname.includes('/login') &&
            !window.location.pathname.includes('/signup') && (
              <div
                className={`sidebar ${
                  openSideBar ? 'sidebar-expanded' : 'closed-bar'
                }`}
              >
                <Sidebar
                  openSideBar={openSideBar}
                  setOpenSideBar={setOpenSideBar}
                />
              </div>
            )}
          <div className="home-sec">
            <Routes>
              <Route index element={<FeedPage />} />
              <Route path="/home" element={<FeedPage />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </div>
          <div></div>
          {!window.location.pathname.includes('/login') &&
            !window.location.pathname.includes('/signup') && (
              <div style={{ position: 'fixed', top: '70px', right: '0' }}>
                <Message />
              </div>
            )}
        </div>
        {!window.location.pathname.includes('/login') &&
          !window.location.pathname.includes('/signup') && <BottomBar />}
      </BrowserRouter>
    </div>
  )
}
