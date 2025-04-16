import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import useLogout from '../../hooks/useLogout';

function LogoutButton() {
    const { loading, logout } = useLogout();

    return (
        <div className='flex justify-end'>
            {!loading ? (<button className='m-3  flex gap-2 items-center ' onClick={logout}>

                <TbLogout2 size={28} />
                <span>Logout</span>
            </button>) : (
                <span className='loading loading-spinner'></span>
            )}

        </div>
    )
}

export default LogoutButton