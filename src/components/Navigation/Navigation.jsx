import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  right: 0;
  width: ${props => props.isOpen ? '100%' : '80px'};
  height: ${props => props.isOpen ? '100%' : '80px'};
  background: ${props => props.theme.colors.black};
  z-index: 1000;
  transition: ${props => props.theme.transitions.standard};
`;

const NavButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  color: ${props => props.theme.colors.white};
  z-index: 1001;
`;

const NavContent = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const NavLink = styled(motion.a)`
  display: block;
  font-size: 4em;
  color: ${props => props.theme.colors.white};
  margin: 20px 0;
  cursor: pointer;

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
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

export default function Navigation({ isOpen, setIsOpen }) {
  return (
    <Nav isOpen={isOpen}>
      <NavButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </NavButton>
      
      {isOpen && (
        <NavContent
          variants={navVariants}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <Link href="/" passHref>
            <NavLink variants={linkVariants} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink variants={linkVariants} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </Link>
          <Link href="/work" passHref>
            <NavLink variants={linkVariants} onClick={() => setIsOpen(false)}>
              Work
            </NavLink>
          </Link>
          <Link href="/contact" passHref>
            <NavLink variants={linkVariants} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </Link>
        </NavContent>
      )}
    </Nav>
  );
}