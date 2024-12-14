export const Text = {
    H1: styled.h1`
      font-size: clamp(2.5rem, 5vw, ${props => props.theme.fonts.sizes.large});
      font-weight: 800;
      margin-bottom: 1.5rem;
    `,
    H2: styled.h2`
      font-size: clamp(2rem, 4vw, ${props => props.theme.fonts.sizes.medium});
      font-weight: 700;
      margin-bottom: 1.2rem;
    `,
    H3: styled.h3`
      font-size: clamp(1.5rem, 3vw, ${props => props.theme.fonts.sizes.small});
      font-weight: 600;
      margin-bottom: 1rem;
    `,
    Body: styled.p`
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 1rem;
    `,
    Caption: styled.span`
      font-size: 0.9rem;
      color: ${props => props.theme.colors.lightBlue};
    `
  };