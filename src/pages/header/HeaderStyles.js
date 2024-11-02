import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center; /* Align items vertically */
  padding: 15px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 20px;
  align-items: center; /* Align items vertically */
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

export const NavLink = styled.a` 
  font-size: 1rem;
  color: black;
  cursor: pointer;
  text-decoration: none; 
  transition: color 0.3s;

  &:hover {
    color: #28a745; /* Change color on hover */
  }
`;

export const ContactButton = styled.button`
  font-size: 1rem;
  color: black;
  border: 1px solid black;
  background: transparent;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }
`;
