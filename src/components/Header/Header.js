import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavBar, Logo, NavLinks, NavLink } from './HeaderStyles';

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
        <NavLink
          href="/contact"
          className={location.pathname === '/contact' ? 'active' : ''}
        >
          Contact
        </NavLink>
      </NavLinks>
    </NavBar>
  );
}

export default Header;
