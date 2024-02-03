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

const RouteMain = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setIsLoggedIn(true);
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className='appContainer'>
       {isLoggedIn && <Header />}
      <div className='mainContent'>
        <Routes>
          <Route path='/'  
           element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />}
          >
            <Route index element={<LoginPage />} />
            <Route  path='/register' element={isLoggedIn ? <Navigate to="/dashboard" /> : <RegistrationPage />}  />
            <Route  element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}  />
          </Route>
        </Routes>
      </div>
      {isLoggedIn && <Footer />}
    </div>

  )
}

export default RouteMain