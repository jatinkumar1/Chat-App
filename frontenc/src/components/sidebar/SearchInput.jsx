

import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import LogoutButton from './LogoutButton';
import userConversations from '../../zustand/userConversations';
import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';
function SearchInput() {
    const [search, setSearch] = useState('');
    const{setSelectedConversation} = userConversations();
    const{conversations} = useGetConversations();
    // console.log(conversations.map())
    // {conversations.map((convo) => {
    //     console.log(convo.fullName); // no need for curly braces inside log
    //     return null; // or return JSX if needed
    //   })}

    // const filteredUsers = conversations.filter((user)=>user.fullName.toLowerCase().includes(search.toLowerCase()));
    const [noUserFound,setNoUserFound] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Search:', search);
        if(!search)return;
        if(search.length<3){
            return alert("enter more character")
        }
        const convo = conversations.find(((user)=>user.fullName.toLowerCase().includes(search.toLowerCase())));
        if(convo){
            setSelectedConversation(convo);
            setSearch('');
        }else {
            setNoUserFound(true);
            setTimeout(() => {
                setNoUserFound(false);
            }, 2000);
        }
    };
    

    return (
        <>
        <form onSubmit={handleSubmit} className="flex max-w-sm mx-auto items-center pt-12">
            <div className="relative w-full">
                {/* <LogoutButton/> */}
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search User Name.."
                    className="w-full pl-4 p-2.5 text-sm rounded-lg border border-gray-300 
                         bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 
                         dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
                />
            </div>
            <button
                type="submit"
                className="ml-1 p-2.5 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-800"
            >
                {/* Search */}
                <CiSearch size={18} color='black'/>
            </button>
        </form>
            <div>
            {noUserFound && (
                <p className='text-red-500 text-center text-sm'>no user found</p>
            )}
            </div>
        </>

    );
}

export default SearchInput

