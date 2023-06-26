import React from 'react'
import Login from './pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Otp from './pages/Otp'
import ResumeBuilder from './pages/ResumeBuilder'
import { useSelector } from 'react-redux'

const App = () => {
  const selector = useSelector(state=>state.auth.isLoggedIn)
  

  const private_routes = [
    {
      path:'/otp',
      component:<Otp/>
    },
    {
      path:'/home',
      component:<Home/>
    },
    {
      path:'/resumebuilder',
      component:<ResumeBuilder/>
    }
  ]



  // console.log(process.env.REACT_APP_WEBSITE_NAME)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login/>}/>
          
          {selector && private_routes.map((data, ind)=>{
            return <Route path={data.path} key={ind} element={data.component}/>
          })}
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <h1>{process.env.REACT_APP_WEBSITE_NAME}</h1> */}
      {/* <Login/> */}
    </div>
  )
}

export default App