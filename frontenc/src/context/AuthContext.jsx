import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({children}) => {
    const [authUser , setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null);

    // just for simplicity i have not created another context for shoeing chat
    const[showChat,setShowChat] = useState(false);

    // login/signup error message error
    const[ErrorMessage,setErrorMessage] = useState('');

    return <AuthContext.Provider value={{authUser,setAuthUser,showChat,setShowChat,ErrorMessage,setErrorMessage}}>{children}</AuthContext.Provider>
}