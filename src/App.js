
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './pages/Home';
import Casefile from './pages/Casefile';
import Add from './pages/Add';
import All from './pages/All';
import Header from './components/Header';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  //Login + Signup + Auth
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [resp, setResp] = useState(null)
  const navigate = useNavigate()

  const handleSignUp = async(user) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/user`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    const data = await response.json()
    console.log(data)
    navigate('/login')
  }


  const handleLogin = async(user) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    setResp(response.status)
    const data = await response.json()
    
    if(response.status !== 200){
      return data
    } else {
      console.log(data)
    }
    
    localStorage.setItem("authToken", data.access_token)
    localStorage.setItem("username", user.username)
    
    setIsLoggedIn(true)
    navigate("/")  
}

  const handleLogout = () => {
    localStorage.removeItem("authToken")
    localStorage.removeItem("username")
    setIsLoggedIn(false)
    navigate("/login")
  }
  
  useEffect(()=>{
    let token = localStorage.getItem("authToken")
    if(!token) {
      setIsLoggedIn(false) 
    } else {
      setIsLoggedIn(true) 
    }
  }, [])

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Routes>
        {/* Login / Sign up */}
        {/*<Route path='/auth' element={<Auth />}/>*/}
        <Route path='/login' element={<Login handleLogin={handleLogin} resp={resp}/>} />
        <Route path='signup' element={<Signup handleSignUp={handleSignUp} />} />
        <Route path='/' element={<Home isLoggedIn={isLoggedIn}/>}/>

        {/* Casefile  */}
        <Route path='/casefiles/:id' element={<Casefile isLoggedIn={isLoggedIn}/>}/>
        <Route path='/casefiles/:id/evidence/:evidenceId' element={<Casefile />}/>
        <Route path='/casefiles/:id/investigators/:investigatorId' element={<Casefile />}/>
        <Route path='/casefiles/new' element={<Add isLoggedIn={isLoggedIn}/>}/>
        <Route path='/casefiles' element={<All isLoggedIn={isLoggedIn}/>}/>

        {/* Investigator + Evidence */}
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
