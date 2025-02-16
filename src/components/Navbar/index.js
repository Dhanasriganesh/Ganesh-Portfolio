import React, { useState } from 'react';
import { Link as LinkR } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars, FaTimes } from 'react-icons/fa';

// Styled Components
const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  background: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.secondary};
  }
`;

// Mobile Menu
const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 80%;
  height: 100%;
  background: ${({ theme }) => theme.card_light};
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 80px 20px;
  transition: 0.4s ease-in-out;
  z-index: 999;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const CloseIcon = styled(FaTimes)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
`;

const MobileMenuLinks = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <DiCssdeck size="3rem" />
          <span style={{ paddingLeft: '8px' }}>Dhanasri Ganesh</span>
        </NavLogo>

        {/* Mobile Menu Icon */}
        <MobileIcon onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        {/* Desktop Navigation */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          {/* <NavLink href="#contact">Contact</NavLink> */}
        </NavItems>

        {/* GitHub Button */}
        <ButtonContainer>
          <GitHubButton href="https://github.com/dhanasriganesh" target="_blank">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>
      </NavContainer>

      {/* Mobile Menu */}
      <MobileMenu isOpen={open}>
        <CloseIcon onClick={() => setOpen(false)} />
        <MobileMenuLinks href="#about" onClick={() => setOpen(false)}>About</MobileMenuLinks>
        <MobileMenuLinks href="#skills" onClick={() => setOpen(false)}>Skills</MobileMenuLinks>
        <MobileMenuLinks href="#experience" onClick={() => setOpen(false)}>Experience</MobileMenuLinks>
        <MobileMenuLinks href="#projects" onClick={() => setOpen(false)}>Projects</MobileMenuLinks>
        <MobileMenuLinks href="#education" onClick={() => setOpen(false)}>Education</MobileMenuLinks>
        {/* <MobileMenuLinks href="#contact" onClick={() => setOpen(false)}>Contact</MobileMenuLinks> */}

        {/* GitHub Button in Mobile Menu */}
        <GitHubButton href="https://github.com/dhanasriganesh" target="_blank" style={{ marginTop: '20px', textAlign: 'center' }}>
          GitHub Profile
        </GitHubButton>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
