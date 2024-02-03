import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmins from './HeaderAdmins'

const LayoutAdmins = () => {
    return (
        <>
        <HeaderAdmins/>
        <Box component="div"
        style={{width:'100%'}}
        className='headerOutletWrapper'
        >
            <Outlet/>
        </Box>
        </>
    )
}

export default LayoutAdmins