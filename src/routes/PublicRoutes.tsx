import React from 'react'
import useAuth from '../customHooks/useAuth'
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { Box, CircularProgress } from '@mui/material';

const PublicRoutes = () => {
    const {isLoggedIn, loading} = useAppSelector((state)=>state.auth);
    console.log(isLoggedIn,'PublicRoutes isLoggedIn');
    if (loading) {
        return <div><Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box></div>
    }
    return isLoggedIn ? < Navigate to='/' /> : <Outlet />
}

export default PublicRoutes