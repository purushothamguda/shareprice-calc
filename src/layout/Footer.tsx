import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <Box component="footer"   sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
            position: 'fixed',
            bottom: 0,
        width: '100%',
      }}>
    {/* Footer content here */}
    <p>@copyright 2024</p>
  </Box>
  )
}

export default Footer