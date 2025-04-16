import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import InputField from '../../components/InputField';
import useLogin from '../../hooks/useLogin';

const Login = () => {
	const[username,setUsername] = useState('');
	const[password,setPassword] = useState('');
	const{loading,login} = useLogin();
	const handleSubmit = async(e) =>{
		e.preventDefault();
		console.log(username);
		console.log(password);
		await login({username,password})
	}
	return (
		<div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
			<div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
				<h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome Back!</h1>
				<form onSubmit={handleSubmit}>
					<InputField for="Username" type="text" placeholder="JD" value={username} onChange={(e)=>setUsername(e.target.value)}/>
					<InputField for="Password" type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

					{/* <div className="mb-1">
				<label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
				<input
					type="password"
					id="password"
					className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
					placeholder="Enter your password"
					required
				/>
				<a
					href="#"
					className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
				>
					Forgot Password?
				</a>
			</div> */}
					<div className="flex items-center justify-end space-x-1 mb-4">

						<Link
							to="/signup"
							className="text-sm text-indigo-500 hover:text-indigo-700 focus:outline-none"
						>
							Create Account
						</Link>
					</div>
					<button
						// onClick={() => alert(Username)}
						disabled={loading}
						type="submit"
						className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
					{loading ? <span className='loading loading-spinner'></span> : "Login"}

					</button>
				</form>
			</div>
		</div>

	)
}

export default Login