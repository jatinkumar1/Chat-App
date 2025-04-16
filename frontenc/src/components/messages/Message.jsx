import React from 'react'
import { useAuthContext } from '../../context/AuthContext'
import userConversations from '../../zustand/userConversations';

function Message({ message }) {
    // console.log(message);
    const date = new Date(message.createdAt);
    const hours = date.getHours(); // 0-23
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const formattedTime = `${hours}:${minutes}`;
    const { authUser } = useAuthContext();
    const { selectedConversation } = userConversations();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe?"bg-slate-500":""
    return (
        <div>

            <div className={`chat ${chatClassName}`}>
                <div className='chat-image avatar'>
                    <div className="w-10 rounded-full">
                        <img
                            alt="Tailwind CSS chat bubble component"
                            src={profilePic} />
                    </div>
                </div>
                <div className={`chat-bubble  text-white ${bubbleBgColor} bg-slate-400`}>{message.message}</div>
                <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
            </div>
        </div>
    )
}

export default Message