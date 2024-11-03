import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar, Logo, NavLinks, NavLink, ContactButton } from './HeaderStyles';

function Header() {
  const location = useLocation();

  return (
    <NavBar>
      <Logo>SMARTGATE</Logo>
      <NavLinks>
        <NavLink
          href="/"
          className={location.pathname === '/' ? 'active' : ''}
        >
          Home
        </NavLink>
        <NavLink
          href="/about"
          className={location.pathname === '/about' ? 'active' : ''}
        >
          About
        </NavLink>
        <NavLink
          href="/services"
          className={location.pathname === '/services' ? 'active' : ''}
        >
          Services
        </NavLink>
        <ContactButton>Contact</ContactButton>
      </NavLinks>
    </NavBar>
  );
}

export default Header;
