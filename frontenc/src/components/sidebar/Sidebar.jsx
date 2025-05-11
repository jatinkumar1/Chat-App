import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

function Sidebar() {
  
  return (
    <aside className='h-full md:w-auto lg:w-auto border-r border-base-300 flex flex-col transition-all duration-200'>
    <div className='h-full flex flex-col px-4 pt-16 border border-b-0 '>
      <div className='pb-2'>
        {/* <LogoutButton/> */}
        <SearchInput />
        {/* <div className='divider px-3'></div> */}
      </div>

      <div className='flex-1 overflow-y-auto'>
        <Conversations />
      </div>

      {/* <LogoutButton/> */}
    </div>
    </aside>
  )
}

export default Sidebar