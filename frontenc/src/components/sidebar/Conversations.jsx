import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

function Conversations() {
  const {loading,conversations} = useGetConversations();
  // console.log("conversations",conversations);
  return (
    <div className=''>
      {loading ? (<span className='loading loading-dots'></span>) : (
        conversations.map((conversation) => (
          <Conversation
            key={conversation._id}
            conversation = {conversation}
           />
          //  console.log()
          
        ))
      )}
      {/* {} */}
    </div>
  )
}

export default Conversations