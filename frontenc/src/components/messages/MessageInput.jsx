import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import useSentMessage from '../../hooks/useSentMessage';

function MessageInput() {
  const[message,setMessage] = useState("");
  const {loading,sendMessage} = useSentMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
    // console.log("here")
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-2 w-full max-w-full sm:max-w-5xl px-2 py-1 sm:p-2  rounded-md flex-nowrap mb-1">
        <input
          type="text"
          value={message}
          placeholder="Type your message..."
          className="flex-1 p-2 text-sm rounded-md border border-gray-300 focus:outline-none"
          onChange={(e)=>setMessage(e.target.value)}
        />
        <button type='submit' disabled={loading} className="min-w-[36px] h-[36px] bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600">
          <IoMdSend size={20} />
        </button>
      </div>
    </form>
  )
}

export default MessageInput