import React from 'react';
import styled from 'styled-components';
import { AlertCircle } from 'lucide-react';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
  background: ${props => props.theme.colors.blue};
  color: white;
`;

const ErrorIcon = styled(AlertCircle)`
  color: ${props => props.theme.colors.red};
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.h2`
  margin-bottom: 1rem;
`;

const RetryButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.colors.lightBlue};
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.theme.colors.blue};
  }
`;

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error:', error);
    console.error('Error Info:', errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon size={48} />
          <ErrorMessage>Oops! Something went wrong.</ErrorMessage>
          <RetryButton onClick={() => window.location.reload()}>
            Try Again
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}