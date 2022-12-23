
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

import {useState} from 'react'
import Link from 'next/link';
import React from 'react'
import { useSnipcart } from 'use-snipcart';



export default function Navbar() {
 // const {cart} = useSnipcart();
  return (
    <>
    
    <nav id="navPrin"> 
      <Link href="/profile"><img src="logo.png" id="logo"/></Link>
       <Link href="/Login"><h3 id="logOut">log out</h3></Link>
       
      <h3 ><img src="cart2.png" id="cart" className="snipcart-checkout" /></h3>  
      <nav id="nav2">
        <ul>
          <Link href="/Home"><li>Home</li></Link>
          <Link href="/Products"><li>Products</li></Link>
          <Link href="/Aboutus"><li>About us</li></Link>
          
        </ul>
      </nav>
    </nav>
    </>
  )
}

/*
import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useSnipcart } from 'use-snipcart';

import * as React from 'react';

const pages = ['Home', 'Products', 'About us', 'cart', 'login'];
// const pages = [{name:"Home", path:"http://localhost:3000/home"}]

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { cart = {} } = useSnipcart();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <a href="/"><img src="logo.png" id="logo"></img></a>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button>
              <Link style={{ color: 'white' }} href="/Home">
                Home
              </Link>
            </Button>
            <Button>
              <Link style={{ color: 'white' }} href="/Products">
                Products
              </Link>
            </Button>

            <Button>
              <Link style={{ color: 'white' }} href="/Aboutus">
                About us
              </Link>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              className="snipcart-checkout"
              endIcon={<AddShoppingCartIcon />}
              >
              cart
              <span>${cart.subtotal?.toFixed(2)}</span>
              
            </Button>


            <Tooltip title="Logout">
              <Button
                variant="contained"
                color="error"
                endIcon={<LogoutIcon />}
              >
                <Link href="/Login"> Logout</Link>
              </Button>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;




