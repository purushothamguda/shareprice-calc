import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebase";
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setLoggedIn } from '../redux/authSlice';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn, 'header component isloggedIn:')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);
  
  const logoutUser = async () => {
    // e.preventDefault();
    try {
      await signOut(auth);
      dispatch(setLoggedIn(false));
      console.log("Logged out successfully");
      navigate("/login");

    } catch (error) {
      console.error("Logout failed: ", error);
    }
  }

  const handleMenuClick = (setting: string) => {
    handleCloseUserMenu(); // Close the menu

    // Navigate based on the setting
    if (setting === 'Logout') {
      logoutUser();
    } else if (setting === 'Profile') {
      navigate('/profile');
    } else if (setting === 'Dashboard') {
      navigate('/dashboard');
    } else if (setting === 'Account') {
      // Assuming you have a route for 'Account'
      navigate('/account');
    }
  }
  return (
    <header>
      <Box sx={{ flexGrow: 1, }}>
        <AppBar position="static" >
          <Toolbar sx={{ margin: '0px 58.3333px' }}>
            {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              BANK OF AMERICA
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            {isLoggedIn && <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={() => handleMenuClick(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>}
            {/* {isLoggedIn &&  <Button color='inherit' onClick={logoutUser}>Logout</Button>} */}
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
