import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

function useLogin() {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

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

function handleInputErrors({ username, password }) {
  if (!username || !password) {
    
    return false;
  }
  if (password < 6) {
    return false;
  }
  return true;
}