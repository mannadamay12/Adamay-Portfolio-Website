import Link from 'next/link';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFoundContainer = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.blue};
  color: white;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.families.mono};
  font-size: clamp(4rem, 15vw, 12rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.lightBlue};
`;

const Message = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  margin-bottom: 2rem;
  max-width: 600px;
`;

const HomeLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.lightBlue};
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    background: ${props => props.theme.colors.blue};
  }
`;

export default function NotFound() {
  return (
    <NotFoundContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Title>404</Title>
      <Message>
        Oops! Looks like you've ventured into uncharted territory.
        This page doesn't exist.
      </Message>
      <Link href="/" passHref>
        <HomeLink
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Home size={20} />
          Back to Home
        </HomeLink>
      </Link>
    </NotFoundContainer>
  );
}