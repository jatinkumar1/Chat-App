import React, { useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import { useAuthContext } from '../../context/AuthContext'

const Home = () => {
  const {showChat} = useAuthContext();
  return (
    <div className='bg-slate-300 overflow-hidden h-screen flex '>

      <div className={`w-full md:block  md:w-1/3 ${showChat ? "hidden sm:block" : "block"}`}>
          <Sidebar/>
      </div>
      <div className={`w-full md:block md:w-2/3 ${showChat ? "block" : "hidden sm:block"}`}>
        <MessageContainer/>
      </div>
    </div>


  )
}

export default Home