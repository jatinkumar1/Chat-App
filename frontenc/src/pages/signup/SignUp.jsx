import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import useSignup from '../../hooks/useSignup';
import { useAuthContext } from '../../context/AuthContext';

const SignUp = () => {
	const[fullName,setFullname] = useState('');
	const[username,setUsername] = useState('');
	const[password,setPassword] = useState('');
	const[confirmPassword,setConfirmpassword] = useState('');
	const[gender,setGender] = useState('');
	const {ErrorMessage} = useAuthContext();

	const {loading,signup} = useSignup();
	const handleSubmit =async (e) =>{
		e.preventDefault();
		console.log("handle click")
		await signup({fullName,username,password,confirmPassword,gender});
	}

	console.log(ErrorMessage)

	return (
		<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
			<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-lg w-full">
				<div>
					<h1 className="text-2xl font-bold text-center mb-2 dark:text-gray-200">Hey! Buddy</h1>
					{ErrorMessage && (
						<p className="text-red-500 text-center mb-2">{ErrorMessage}</p>
					)}
				</div>
				<form onSubmit={handleSubmit}>
					{/*  */}
					<InputField for="Full Name" type="text" placeholder="John Dep" value={fullName} onChange={(e)=>setFullname(e.target.value)} />
					<InputField for="Username" type="text" placeholder="JD" value={username} onChange={(e)=>setUsername(e.target.value)}/>
					<InputField for="Password" type="text" placeholder="Enter your password (Lenght must be greater than 7)" value={password} onChange={(e)=>setPassword(e.target.value)}/>
					<InputField for="Confirm Password" type="text" placeholder="Re-Enter password" value={confirmPassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
					<InputField for="Gender" type="text" placeholder="male/female" value={gender} onChange={(e)=>setGender(e.target.value.toLowerCase())}/>

					<div className="flex items-center justify-end mb-4 space-x-1">
						<div className="flex items-center">

							<label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">Already have an account?</label>
						</div>
						<Link
							to="/login"
							className="text-sm text-indigo-500 hover:text-indigo-700 focus:outline-none"
						>
							Login
						</Link>
					</div>
					<button
						// onClick={() => alert("hello")}
						disabled={loading}
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						{loading ? <span className='loading loading-spinner'></span> : "Signup"}
						
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
