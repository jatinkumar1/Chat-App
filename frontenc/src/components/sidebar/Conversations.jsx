
import React, { useEffect, useRef } from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { useAuthContext } from '../../context/AuthContext';
import userConversations from '../../zustand/userConversations';

function Conversations() {
  const { loading, conversations } = useGetConversations();
  const { setShowChat } = useAuthContext();
  const { selectedConversation } = userConversations();

  const convoRefs = useRef({});

  const handleShowChat = () => {
    setShowChat(true);
  };

  useEffect(() => {
    if (selectedConversation && convoRefs.current[selectedConversation._id]) {
      convoRefs.current[selectedConversation._id].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }, [selectedConversation]);
  
  return (
    <div onClick={handleShowChat} className='overflow-y-auto h-full'>
      {loading ? (
        <span className='loading loading-dots'></span>
      ) : (
        conversations.map((conversation) => (
          <div
            key={conversation._id}
            ref={(el) => (convoRefs.current[conversation._id] = el)}
          >
            <Conversation conversation={conversation} />
          </div>
        ))
      )}
    </div>
  );
}

export default Conversations;



















// import React from 'react'
// import Conversation from './Conversation'
// import useGetConversations from '../../hooks/useGetConversations'
// import { useAuthContext } from '../../context/AuthContext';

// function Conversations() {
//   const {loading,conversations} = useGetConversations();
//   const {setShowChat} = useAuthContext();
//   // console.log("conversations",conversations);
//   const handleShowChat = () => {
//     setShowChat(true);
//   }
//   return (
//     <div onClick={handleShowChat} className=''>
//       {loading ? (<span className='loading loading-dots'></span>) : (
//         conversations.map((conversation) => (
//           <Conversation
//             key={conversation._id}
//             conversation = {conversation}
//            />
//           //  console.log()
          
//         ))
//       )}
//       {/* {} */}
//     </div>
//   )
// }

// export default Conversations