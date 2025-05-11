import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput';
import userConversations from '../../zustand/userConversations';
import { AuthContext, useAuthContext } from '../../context/AuthContext';
import { ArrowLeft } from 'lucide-react';

function MessageContainer() {
  const noChatSelected = true;
  const {showChat,setShowChat} = useAuthContext();
  const { selectedConversation, setSelectedConversation } = userConversations();
  // console.log(selectedConversation?.fullName)
  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation])

  return (
    <div className={`flex-1 flex flex-col h-screen md:pt-14 lg:pt-14 ${showChat? "pt-0" : "pt-14"}`}>

      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className='bg-slate-500 px-1 py-2 mb-2 flex items-center gap-1'>
            <div className="block lg:hidden md:hidden">
              <button onClick={() => setShowChat(false)}>
              <ArrowLeft className='w-4 h-4' />
              </button>
            </div>
            <div className='flex items-center gap-1 justify-center'>
              <img
                src={selectedConversation.profilePic}
                className='w-8 h-8'
              />
              <span className='label-text text-xl'>{selectedConversation.fullName}</span>
            </div>
          </div>


          {/* messages */}
          <div className='flex-1 overflow-auto px-4 py-2'>
            <Messages />
          </div>


          {/* message input */}
          <MessageInput />
        </>

      )}
    </div>
  )
}

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2'>
        <p>Welcome! {authUser.fullName}</p>
        <p>Select a chat to start messaging.</p>
      </div>
    </div>
  )
}

export default MessageContainer