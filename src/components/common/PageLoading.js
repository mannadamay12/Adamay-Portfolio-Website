import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LoadingSpinner } from './LoadingSpinner';

const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.blue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LoadingText = styled.p`
  color: ${props => props.theme.colors.white};
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export default function PageLoading() {
  return (
    <LoadingContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingSpinner />
      <LoadingText>Loading...</LoadingText>
    </LoadingContainer>
  );
} 