import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        <NavLink to="/">
            <img src="https://png.pngtree.com/png-vector/20191121/ourmid/pngtree-blue-bird-vector-or-color-illustration-png-image_2013004.jpg" alt="logo" />
        </NavLink>
        <Navbar />
    </header>
  )
}

export default Header