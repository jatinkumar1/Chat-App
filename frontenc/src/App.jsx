import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Route,Routes,BrowserRouter, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
function App() {
  const{authUser} = useAuthContext();
  return (
    <>
    <Routes>
      <Route path='/login' element={authUser ? <Navigate to={'/'}/> : <Login/>}/>
      <Route path='/signup' element={authUser ? <Navigate to={'/'}/> : <SignUp/>}/>
      <Route path='/' element={authUser ? <Home/> : <Navigate to={'/login'}/>}/>
    </Routes>
    </>


  )
}

export default App
