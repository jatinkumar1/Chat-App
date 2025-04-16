import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import userConversations from '../zustand/userConversations';

const useListenMessages = () => {
 const {socket} = useSocketContext();
 const {messages,setMessages} = userConversations();

 useEffect(() => {
    socket?.on("newMessage",(newMessage) => {
        setMessages([...messages,newMessage])
    })
    return () => socket?.off("newMessage")
 },[socket,setMessages,messages])
}

export default useListenMessages;
