import React from 'react'
import useAuth from '../customHooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const PrivateRoutes = () => {
    const isLoggedIn = useAppSelector((state)=>state.auth.isLoggedIn);
    console.log(isLoggedIn,'PrivateRouts isLoggedIn');
  return isLoggedIn ? <Outlet/> : <Navigate to='login'/>
}

export default PrivateRoutes