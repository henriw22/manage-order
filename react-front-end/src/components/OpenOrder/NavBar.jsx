import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle'

const NavBar = () => {
  const [user, setUser] = useState(null);
  return (
    <AppBar position="static" sx={{ height: '3em' }}>
      <Toolbar variant="dense">
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" component="div" flexGrow={1}>
          OpenOrder
        </Typography>
        {user ?
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          :
          <Typography variant="h6" color="inherit">Login</Typography>
        }
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;