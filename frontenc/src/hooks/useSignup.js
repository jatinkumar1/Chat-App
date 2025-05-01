import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContext';

function useSignup() {
    const [loading, setLoading] = useState(false);
    const { authUser, setAuthUser ,setErrorMessage} = useAuthContext();

    console.log("inside signup 1")

    function handleInputErrors({ fullName, username, password, confirmPassword, gender }) {
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            setErrorMessage("missind details")
            return false
        }
        if (password !== confirmPassword) {
            setErrorMessage("password doesn't match")
            return false
        }
        if (password.length < 6) {
            setErrorMessage("password length is less than 6")
            return false;
        }
        return true;
    }

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) {
            console.log("inside signup 2")
            return;
        }
        try {
            const res = await fetch("/api/auth/signup", {
                method: "Post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender })
            })
            console.log("inside signup 3")


            const data = await res.json();
            // console.log(data);
            if (data.error) {
                setErrorMessage(data.error);
                throw new Error(data.error);
            }

            // after successfully signup we 
            // store in localstorage
            localStorage.setItem("chat-user", JSON.stringify(data));
            // contextapi
            setAuthUser(data);
        } catch (error) {
    //   alert(error.message);/

            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { loading, signup };
}

export default useSignup
