import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessages from '../../hooks/useListenMessages';

function Messages() {
  const {messages,loading} = useGetMessages();
  useListenMessages();
  // console.log(messages);
  // if(!messages){

  // }
  const lastMessageRef = useRef();
  useEffect(()=>{
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour:"smooth"});
    }, 1);
  },[messages])
  if(loading){
    return <p className='loader loading-dots'></p>
  }
  if( !messages || messages.length === 0 ){
    return <p className='text-center'>Send a message to start a conversation</p>
  }
  return (
    <div className=''>
      {messages.map((message)=>(
        <div key={message._id} ref={lastMessageRef}>
          <Message
          message={message}
          />
        </div>
      ))}


    </div>
  )
}

export default Messages