import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { User, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from "../firebase/firebase";
import { AccountCircle } from '@mui/icons-material';
import { Avatar, Menu, MenuItem, Tooltip } from '@mui/material';
import LogOut from '../views/LogOut';
import { useAppSelector } from '../redux/hooks';
import AdbIcon from '@mui/icons-material/Adb';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ButtonAppBar() {
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn, 'header component isloggedIn:')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = async () => {
    // e.preventDefault();
    await signOut(auth);
    console.log(auth, 'logout')
    navigate("/login");
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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
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
    );
  }
