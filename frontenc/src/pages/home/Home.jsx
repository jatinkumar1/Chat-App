import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
    <div className='bg-slate-300 overflow-hidden h-screen flex'>

      <div className="w-1/3  h-full">
          <Sidebar/>
      </div>
      <div className='h-full w-2/3 p-2'>
        <MessageContainer/>
      </div>
    </div>


  )
}

export default Home

{/* <div className='pt-5'> */}

{/* home */}
{/* <div className='flex ml-20'>
  <div>

    {/* sidebar */}
    {/* chats
    <div>searchbar</div>
    <div> all chats username</div> */}
    {/* <Sidebar/>
  </div>
  <div>
  <MessageContainer/>
  {/* chatdisplay */}
  {/* </div>
</div> */}


// {/* </div> */} */} */}