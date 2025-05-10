// import { set } from "mongoose"
import { useAuthContext } from "../context/AuthContext"

function useUpdateProfile() {
    const { setAuthUser } = useAuthContext();
    const updateProfile = async (formdata) => {
        try {
            const res = await fetch("api/auth/update-profile", {
                method: "PUT",
                body: formdata
            })
            if (!res.ok) {
                throw new Error(`Failed to update profile: ${res.status}`);
            }

            const data = await res.json();
            setAuthUser(data);
            localStorage.setItem("chat-user", JSON.stringify(data));
        } catch (error) {
            console.log("error in update profile", error);
        }
    }
    return { updateProfile }
}
export default useUpdateProfile