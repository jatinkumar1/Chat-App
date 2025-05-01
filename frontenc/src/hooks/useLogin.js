import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser,setErrorMessage } = useAuthContext();


  function handleInputErrors({ username, password }) {
    if (!username || !password) {
      setErrorMessage("Enter Credentials")     
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("password length is less than 6")
      return false;
    }
    return true;
  }

  const login = async ({ username, password }) => {
    setLoading(true);
    const success = handleInputErrors({ username, password });

    if (!success) {
      console.log("error in login hook 1, no correct input");
      return
    }


    try {
      const res = await fetch("api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      })

      const data = await res.json();
      if (data.error) {
        setErrorMessage(data.error)
        throw new Error(data.error)
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      alert(error.message);
      console.log("Error in login hook api call", error.message)
    } finally {
      setLoading(false);
    }


  }
  return { loading, login };
}

export default useLogin

