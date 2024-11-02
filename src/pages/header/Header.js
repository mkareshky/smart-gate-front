import React from 'react';
import { NavBar, Logo, NavLinks, NavLink, ContactButton } from './HeaderStyles';

function Header() {
  return (
    <NavBar>
      <Logo>SMARTGATE</Logo>
      <NavLinks>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="/services">Services</NavLink>
        <ContactButton>Contact</ContactButton>
      </NavLinks>
    </NavBar>
  );
}

export default Header;
