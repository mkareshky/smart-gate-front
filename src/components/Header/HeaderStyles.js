import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const NavLink = styled.a` /* Changed to 'a' for styling purposes */
  font-size: 1rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px; /* Added padding for better click area */
  border-radius: 4px; /* Added border-radius for rounded corners */
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: black; /* Black background for active link */
    color: white; /* White text for active link */
  }

  &:hover {
    text-decoration: none; /* Remove underline on hover */
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
  text-decoration: none;

  &:hover {
    background-color: black;
    color: white;
  }
`;
