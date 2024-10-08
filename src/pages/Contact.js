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

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimate(true)} animating={animate}>
        <TextLink>Home</TextLink>
      </HomeLink>
      <Container>
        <Button><a href ="mailto:meadamann2002@gmail.com" style={{color:"#654321"}}>Send Mail</a></Button>
        {/* <Button><a href ="tel:+918872331055" style={{color:"#654321"}}>Call Me</a></Button> */}
        <Button><a href ="https://drive.google.com/file/d/17gGdEPzDrdGtErRilzrfKQMQ9zfk-PTn/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{color:"#654321"}}>My Resume</a></Button>
        <Button><a href ="https://medium.com/@adamaymann" target="_blank" rel="noopener noreferrer" style={{color:"#654321"}}>My Blogs</a></Button>
      </Container>
    </Wrapper>
  );
};

export default withRouter(Contact);
