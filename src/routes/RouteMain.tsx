import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutCommon from '../layout/LayoutCommon'
import PageNotFound from '../views/PageNotFound'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import LoginPage from '../views/LoginPage'
import RegistrationPage from '../views/RegistrationPage'
import Dashboard from '../views/Dashboard'
import '../styles/RouteMain.scss'

const RouteMain = () => {
  return (
    <div className='appContainer'>
      <Header />
      <div className='mainContent'>
      <Routes>
        {/* <Route path="/" element={<LayoutCommon />}>
          <Route path='*' element={<PageNotFound />} />
        </Route> */}
        {/* <Route path="/"></Route> */}
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegistrationPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default RouteMain