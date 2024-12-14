import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.$isOpen ? '100%' : '80px'};
  height: ${props => props.$isOpen ? '100vh' : '80px'};
  background: ${props => props.$isOpen ? 'rgba(0, 0, 0, 0.95)' : 'transparent'};
  z-index: 1000;
  transition: all 0.3s ease-in-out;
`;

const NavButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;

const NavLink = styled(motion.a)`
  display: block;
  font-size: 4em;
  color: white;
  margin: 20px 0;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${props => props.theme.colors.lightBlue};
  }
`;

const navVariants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const linkVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const NavigationLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/work", text: "Work" },
  { href: "/blog", text: "Blog" },
  { href: "/contact", text: "Contact" }
];

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <Nav $isOpen={isOpen}>
      <NavButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </NavButton>
      
      {isOpen && (
        <NavContent
          initial="closed"
          animate="open"
          exit="closed"
          variants={navVariants}
        >
          {NavigationLinks.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <NavLink
                onClick={() => setIsOpen(false)}
                variants={linkVariants}
              >
                {link.text}
              </NavLink>
            </Link>
          ))}
        </NavContent>
      )}
    </Nav>
  );
}