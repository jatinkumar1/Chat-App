import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput';
import userConversations from '../../zustand/userConversations';
import { AuthContext, useAuthContext } from '../../context/AuthContext';

function MessageContainer() {
  const noChatSelected = true;
  const {selectedConversation,setSelectedConversation} = userConversations();
  // console.log(selectedConversation?.fullName)
  useEffect(()=>{
    return()=>setSelectedConversation(null);
  },[setSelectedConversation])

  return (
    <div className='flex-grow flex flex-col h-screen'>
      
      {!selectedConversation ? (
        <NoChatSelected/>
      ) : (
        <>
          {/* header */}
          <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>{selectedConversation.fullName}</span>
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
  const {authUser} = useAuthContext()
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