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
import { Menu, MenuItem } from '@mui/material';

export default function ButtonAppBar() {
  const navigate = useNavigate();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [currentUser, setCurrentUser] = useState<User|null>(null);

  useEffect(() => {
    // This assumes you have set up firebase authentication
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const logoutUser = async (e:any) => {
    e.preventDefault();
    await signOut(auth);
    console.log(auth,'logout')
    navigate("/");
    handleClose();
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
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button> */}
           {/* Place your company logo here */}
        {currentUser && (
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="h6">
                  {currentUser.email} {/* Display user email or any other info */}
                </Typography>
              </MenuItem>
              <MenuItem onClick={logoutUser}>Logout</MenuItem>
            </Menu>
          </div>
        )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
