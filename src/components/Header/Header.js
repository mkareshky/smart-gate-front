import React from 'react';
import { NavBar, Logo, NavLinks, NavLink, ContactButton } from './HeaderStyles';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Header() {
  return (
    <NavBar>
      <Logo>SMARTGATE</Logo>
      <NavLinks>
        <NavLink as={Link} to="/">Home</NavLink> {/* Use Link for navigation */}
        <NavLink as={Link} to="/about">About</NavLink> {/* Add route for About if needed */}
        <NavLink as={Link} to="/services">Services</NavLink>
        <ContactButton as={Link} to="/contact">Contact</ContactButton> {/* Add route for Contact if needed */}
      </NavLinks>
    </NavBar>
  );
}

export default Header;
