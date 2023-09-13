import styled from "styled-components";
import { MediumHead } from "./fonts";
import theme from "./theme";

export const Wrapper = styled.main`
  position: relative;
  display: block;
  height: 100vh;
  width: 100vw;
  background-color: ${theme.colors.peach};
`;

export const Container = styled.div`
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled(MediumHead)`
  background: ${props => props.primary ? "#654321" : "white"};
  color: ${props => props.primary ? "white" : "#654321"};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #654321;
  border-radius: 3px;
  cursor: pointer;
  height: 4em;
  width: 8em;
`;

