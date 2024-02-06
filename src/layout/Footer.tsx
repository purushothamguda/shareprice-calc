import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Box component="div" sx={{
        p: 3,
        backgroundColor: '#f5f5f5',
        background: '#f5f5f5',
        position: 'fixed',
        bottom: 0,
        width: '100%',

      }}>
        {/* Footer content here */}
        <div style={{margin:'0px 58.3333px'}}>
          <p>@copyright 2024</p>
        </div>
      </Box>
    </footer>
  )
}

export default Footer