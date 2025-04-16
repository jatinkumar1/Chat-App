import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  return (
    <div className='h-full flex flex-col p-4 border border-b-0 '>
      <div className=''>
        {/* <LogoutButton/> */}
        <SearchInput />
        <div className='divider px-3'></div>
      </div>

      <div className='flex-1 overflow-y-auto'>
        <Conversations />
      </div>

      <LogoutButton/>
    </div>
  )
}

export default Sidebar