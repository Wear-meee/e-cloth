
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
