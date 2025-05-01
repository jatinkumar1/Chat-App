import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { Route,Routes,BrowserRouter, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import Navbar from './components/Navbar'
import ProfilePage from './pages/ProfilePage'
function App() {
  const{authUser} = useAuthContext();
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={authUser ? <Home/> : <Navigate to={'/login'}/>}/>
      <Route path='/login' element={authUser ? <Navigate to={'/'}/> : <Login/>}/>
      <Route path='/signup' element={authUser ? <Navigate to={'/'}/> : <SignUp/>}/>
      <Route path='/profile' element ={authUser? <Navigate to={'/'}/> : <ProfilePage/>}/>
    </Routes>
    </>


  )
}

export default App
