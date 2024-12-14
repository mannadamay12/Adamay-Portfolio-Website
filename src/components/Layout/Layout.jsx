import React, { useState } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const LayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

const Main = styled(motion.main)`
  min-height: 100vh;
`;

const pageVariants = {
  initial: {
    opacity: 0,
    x: -20
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.5,
      ease: [0.43, 0.13, 0.23, 0.96]
    }
  }
};

export default function Layout({ children }) {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <LayoutWrapper>
      <Navigation 
        isOpen={isNavigating} 
        setIsOpen={setIsNavigating} 
      />
      <AnimatePresence mode="wait">
        <Main
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </Main>
      </AnimatePresence>
    </LayoutWrapper>
  );
}