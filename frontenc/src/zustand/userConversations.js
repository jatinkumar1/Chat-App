import {create} from 'zustand'


const userConversations = create((set) => ({
    filteredConversations:[],
    selectedConversation:null,
    setSelectedConversation:(selectedConversation) => set({selectedConversation,filteredConversations:selectedConversation}),
    filterConversations:(search) => set((state)=>
        ({filteredConversations:state.conversations.filter((user) => user.fullName.toLowerCase().includes(search.toLowerCase()))})),
    messages:[],
    setMessages:(messages) =>set({messages})
}))

export default userConversations;