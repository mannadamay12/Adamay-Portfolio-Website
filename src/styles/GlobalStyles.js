import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${props => props.theme.fonts.families.sans};
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;