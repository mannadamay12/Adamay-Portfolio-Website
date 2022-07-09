import React, { useState, useEffect } from "react";
import { Wrapper, Container, Button } from "../styles/Contact.styles";
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
    const callto: int =
      "tel:+918872331055?subject=Test subject&body=Body content";
    window.location.href = callto;
  };
  const resume = () => {
    window.location.href = "https://drive.google.com/file/d/1GGhfiLQfYocuZkv_cdP1U7tVJ0fCr2p5/view?usp=sharing";
  };

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Button onClick={sendMail}>Send Mail</Button>
        <Button onClick={callMe}>Call Me</Button>
        <Button onClick={resume}>My Resume</Button>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
