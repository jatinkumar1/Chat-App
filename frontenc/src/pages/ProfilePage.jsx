import React, { useState } from 'react'
import { FaCamera } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useAuthContext } from '../context/AuthContext';
import useUpdateProfile from '../hooks/useUpdateProfile';

const ProfilePage = () => {
  const {authUser} = useAuthContext();
  // const [newImg ,setNewImg] = useState(null);
  const[isUpdating,setIsUpdating] = useState(false);
  const {updateProfile} = useUpdateProfile();
  const handleChangeUpload = async (e) => {
    const file = e.target.files[0];
    if(!file){
      return
    }
    const formData = new FormData();
    formData.append("profilePic", file);
    setIsUpdating(true);
    try {
      await updateProfile(formData);
    } catch (err) {
      console.error("Error uploading image", err);
    }finally{
      setIsUpdating(false)
    }
  }
  return (
    <div className='h-screen pt-20 '>
      <div className='max-w-2xl mx-auto p-4 py-8'>
        <div className='bg-base-300 rounded-xl p-6 space-y-8'>
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>Profile</h1>
            <p className='mt-2'>Your Proofile Information</p>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <div className='relative'>
              <img
                src={authUser.profilePic}
                alt='Profile-Img'
                className='size-32 rounded-full object-cover border-4'
              />
              <label
                htmlFor='avatar-upload'
                className='absolute bottom-0 right-0 bg-base-content hover:scale-105 p-2 rounded-full cursor-pointer transition-all duration-200'
                >
                <FaCamera className='w-5 h-5 text-base-200'/>
                <input
                type='file'
                id='avatar-upload'
                className='hidden'
                accept='image/*'
                onChange={handleChangeUpload}
                />
              </label>
            </div>
            {isUpdating? (
              <p className='text-center text-slate-400'>Updating...</p>
            ):(
              <p className='text-center text-slate-400'>Click on camera to Update profilePic</p>
            )}
             {/* <p className='text-center'>Click on camera to Update profilePic</p> */}
          </div>
          <div className='space-y-6'>
            <div className='space-y-1.5'>
              <div className='text-sm text-zinc-400 flex items-center gap-2'>
                  <FaRegUser className='w-4 h-4'/>
                  Full Name
              </div>
              <p className='px-4 py-2.5 bg-base-200 rounded-lg border '>{authUser.fullName}</p>
              {/* <input type="text" placeholder={authUser.fullName} className=" w-full px-4 py-2.5 bg-base-200 rounded-lg border " /> */}

            </div>
            <div className='space-y-1.5'>
              <div className='text-sm text-zinc-400 flex items-center gap-2'>
                  <FaRegUser className='w-4 h-4'/>
                  Username
              </div>
              <p className='px-4 py-2.5 bg-base-200 rounded-lg border '>{authUser.username}</p>
            </div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage