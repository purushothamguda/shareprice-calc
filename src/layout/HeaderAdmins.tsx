import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material'
import React from 'react'
import falconLogoDark from '../images/falconLogoDark.svg'

const HeaderAdmins = () => {
    return (
        <>
            <Box component='section' className='header headerAdmins'>
                <AppBar position='fixed'>
                    <Toolbar disableGutters>
                        <Box component='div' className='header_lft'
                            sx={{ flexGrow: 1 }}
                        >
                            <Box component="div" className='header_lft_content'>
                                <img src={falconLogoDark} alt="Falcon Logo" className='falconLogo' />
                            </Box>
                        </Box>

                        <Box component="div" className='header_ryt'
                            sx={{ flexGrow: 0 }}>
                            <Box component='div' className='userSettings'>
                                <Tooltip title='Open User Settings' arrow>
                                    <IconButton></IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default HeaderAdmins