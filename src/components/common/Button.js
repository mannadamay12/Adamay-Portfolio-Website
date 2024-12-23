import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  padding: ${props => props.large ? '1rem 2.5rem' : '0.8rem 1.5rem'};
  background: ${props => props.variant === 'outline' 
    ? 'transparent' 
    : props.theme.colors[props.color || 'lightBlue']};
  color: ${props => props.variant === 'outline' 
    ? props.theme.colors[props.color || 'lightBlue']
    : props.theme.colors.white};
  border: 2px solid ${props => props.theme.colors[props.color || 'lightBlue']};
  border-radius: 0.5rem;
  font-size: ${props => props.large ? '1.2rem' : '1rem'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
