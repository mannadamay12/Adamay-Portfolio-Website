import styled from 'styled-components';

export const Text = {
    H1: styled.h1`
      font-family: ${props => props.theme.fonts.families.mono};
      font-size: clamp(2.5rem, 5vw, ${props => props.theme.fonts.sizes.large});
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 1.5rem;
    `,
    H2: styled.h2`
      font-family: ${props => props.theme.fonts.families.mono};
      font-size: clamp(2rem, 4vw, ${props => props.theme.fonts.sizes.medium});
      font-weight: 700;
      letter-spacing: -0.01em;
      margin-bottom: 1.2rem;
    `,
    H3: styled.h3`
      font-family: ${props => props.theme.fonts.families.sans};
      font-size: clamp(1.5rem, 3vw, ${props => props.theme.fonts.sizes.small});
      font-weight: 600;
      margin-bottom: 1rem;
    `,
    Body: styled.p`
      font-family: ${props => props.theme.fonts.families.sans};
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    `,
    Caption: styled.span`
      font-family: ${props => props.theme.fonts.families.sans};
      font-size: 0.9rem;
      color: ${props => props.theme.colors.lightBlue};
    `
  };