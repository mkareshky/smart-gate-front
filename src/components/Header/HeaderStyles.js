import styled from 'styled-components';

export const NavBar = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 20px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: black;
  cursor: pointer;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &.active {
    background-color: black;
    color: white;
  }

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
`;
