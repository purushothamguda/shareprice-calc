import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LayoutCommon from '../layout/LayoutCommon'
import PageNotFound from '../views/PageNotFound'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LoginPage from '../views/LoginPage'
import RegistrationPage from '../views/RegistrationPage'
import Dashboard from '../views/Dashboard'
import '../styles/RouteMain.scss'
import { User, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import useAuth from '../customHooks/useAuth'
import Admin from '../views/Admin'
import PrivateRoutes from './PrivateRoutes'
import Home from '../views/Home'
import ErrorComp from '../views/ErrorComp'
import PublicRoutes from './PublicRoutes'
import Profile from '../views/Profile'

const RouteMain = () => {
  
  return (
    <div className='appContainer'>
      <Header />
      <div className='mainContent'>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/profile' element={<Profile/>}/>
          </Route>

          <Route element={<PublicRoutes />}>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegistrationPage />} />
          </Route>

          <Route path='*' element={<PageNotFound />} />
          {/* <Route index element={<LoginPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegistrationPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/admin' element={<Admin />} /> */}

        </Routes>
      </div>
     <Footer />
    </div>

  )
}

export default RouteMain