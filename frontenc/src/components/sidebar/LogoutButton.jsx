import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import { LogOut } from 'lucide-react';
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
    const { loading, logout } = useLogout();

    return (
        <div className='flex '>
            {!loading ? (<button className='items-center ' onClick={logout}>
                <LogOut className="size-5" />                
                <span></span>
            </button>) : (
                <span className='loading loading-spinner'></span>
            )}

        </div>
    )
}

export default LogoutButton