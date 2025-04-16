import React from 'react'
import userConversations from '../../zustand/userConversations'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation}) => {
    const {selectedConversation,setSelectedConversation} = userConversations();
    const isSelected = selectedConversation?._id === conversation._id;

    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);
    // console.log("try 2",selectedConversation);
    return (
        <>
            <div className={`flex gap-2 cursor-pointer items-center hover:bg-gray-400 p-2 py-1 ${isSelected ? "bg-gray-400" : ""}`}
            onClick = {()=>setSelectedConversation(conversation)}
        >
                <div className={`avatar avatar-${isOnline? "online":""}`}>
                    <div className="w-12 rounded-full">
                        <img src={conversation.profilePic} />
                    </div>
                </div>
                <div>
                    <p className='font-bold text-gray-500'>{conversation.fullName} </p>
                </div>
                {/* <div className='divider px-1'/> */}
            </div>
            <div className='divider my-0 py-0 h-0.5'></div>
        </>

    )
}

export default Conversation