import React, { useState } from 'react'
import userConversations from '../zustand/userConversations';

const useSentMessage = () => {
  const[loading,setLoading] = useState(false);
  const {messages,setMessages,selectedConversation} = userConversations();
  const sendMessage = async (message) => {
    try {
        const res = await fetch(`/api/messages/send/${selectedConversation._id}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            // credentials: 'include',
            body:JSON.stringify({message})
        })

        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }
        // console.log(data);
        setMessages([...messages,data]);
    } catch (error) {
        alert("error in usesentmessage",error.message)
    }finally{
        setLoading(false);
    }
  }
  return {loading,sendMessage}
}

export default useSentMessage