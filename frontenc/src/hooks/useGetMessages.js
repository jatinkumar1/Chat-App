import React, { useEffect, useState } from 'react'
import userConversations from '../zustand/userConversations';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = userConversations();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            setMessages([]);
            try {
                const res = await fetch(`/api/messages/get/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error)
                }
                setMessages(data);
            } catch (error){
                // alert("error in getting messgers",error.message)
                // setMessages(null);
            }finally{
                setLoading(false);   
            }
        };
        if(selectedConversation?._id){
            getMessages();
        }
    }, [selectedConversation?._id,setMessages]);
    return{messages,loading};

}

export default useGetMessages