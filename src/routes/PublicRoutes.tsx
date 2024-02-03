import React from 'react'
import useAuth from '../customHooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';

const PublicRoutes = () => {
    const isLoggedIn = useAppSelector((state)=>state.auth.isLoggedIn);
    console.log(isLoggedIn,'PublicRoutes isLoggedIn');
    return isLoggedIn ? < Navigate to='/' /> : <Outlet />
}

export default PublicRoutes