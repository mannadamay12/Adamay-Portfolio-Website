import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navigation from '../Navigation/Navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  useEffect(() => {
    let lastScrollTime = 0;
    let touchStartY = 0;
    const scrollThreshold = 1000; // 1 second cooldown
    const touchThreshold = 50; // minimum pixels to trigger touch scroll

    const handleWheel = (e) => {
      const currentTime = new Date().getTime();
      
      if (router.pathname === '/' && currentTime - lastScrollTime > scrollThreshold) {
        if (e.deltaY > 0) {
          lastScrollTime = currentTime;
          router.push('/blog');
        }
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      const currentTime = new Date().getTime();
      if (router.pathname === '/' && currentTime - lastScrollTime > scrollThreshold) {
        const touchEndY = e.changedTouches[0].clientY;
        const touchDiff = touchStartY - touchEndY;

        if (touchDiff > touchThreshold) { // Scrolling down
          lastScrollTime = currentTime;
          router.push('/blog');
        }
      }
    };

    window.addEventListener('wheel', handleWheel);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [router]);

  return (
    <LayoutWrapper>
      <Navigation 
        isOpen={isNavigating} 
        setIsOpen={setIsNavigating} 
      />
      <Main>
        {children}
      </Main>
    </LayoutWrapper>
  );
}
