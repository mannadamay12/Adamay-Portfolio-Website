import React, { useState, useEffect } from "react";
import { Wrapper, Container, Header } from "../styles/Contact.styles";
import { HomeLink, TextLink } from "../styles/Work.styles";
import { withRouter } from "react-router";

const Contact = ({ history }) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    animate &&
      setTimeout(() => {
        history.push("/");
        setAnimate(false);
      }, 400);
  }, [animate, history]);

  const sendMail = () => {
    const mailto: string =
      "mailto:meadamann2002@gmail.com?subject=Test subject&body=Body content";
    window.location.href = mailto;
  };

  const callMe = () => {
    const mailto: int =
      "tel:+918872331055?subject=Test subject&body=Body content";
    window.location.href = mailto;
  };

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Header onClick={sendMail}>Send Mail</Header>
        <Header onClick={callMe}>Call Me</Header>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
