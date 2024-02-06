import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PageNotFound from '../views/PageNotFound'
import LoginPage from '../views/LoginPage'
import RegistrationPage from '../views/RegistrationPage'
import Dashboard from '../views/Dashboard'
import '../styles/RouteMain.scss'
import Admin from '../views/Admin'
import PrivateRoutes from './PrivateRoutes'
import Home from '../views/Home'
import PublicRoutes from './PublicRoutes'
import Profile from '../views/Profile'
import Welcome from '../views/Welcome'
import { useAppSelector } from '../redux/hooks'

const RouteMain = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return (
    <div className='appContainer'>
      <div className='mainContent'>
        <Routes>
        <Route path='/' element={isLoggedIn ? <Home /> : <Welcome />} />
          <Route element={<PrivateRoutes />}>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/welcome' element={<Navigate to="/" />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
          </Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>

    </div>

  )
}

export default RouteMain