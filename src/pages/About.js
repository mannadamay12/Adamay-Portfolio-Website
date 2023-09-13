import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  WorkLink,
  TextLink,
  HomeLink,
  HomeText,
  Hero,
  Body,
  ImageBackground,
  Overlay,
  Container,
  RoleTime,
  Role,
  Time,
  Client
} from "../styles/About.styles";
import { Button } from "../styles/Contact.styles";

const About = ({ history }) => {
  const [animateWork, setAnimateWork] = useState(false);
  const [animateHome, setAnimateHome] = useState(false);

  useEffect(() => {
    animateWork &&
      setTimeout(() => {
        setAnimateWork(false);
        history.push("/work");
      }, 400);
    animateHome &&
      setTimeout(() => {
        setAnimateHome(false);
        history.push("/");
      }, 400);
  }, [animateWork, animateHome, history]);

  const canada = require("../assets/images/tiet.webp");

  return (
    <Wrapper>
      <HomeLink onClick={() => setAnimateHome(true)} animating={animateHome}>
        <HomeText>Home</HomeText>
      </HomeLink>
      <Body>
        <ImageBackground backgroundImage={canada}>
          <Overlay />
        </ImageBackground>
        <Container>
          <Hero>
            <Heading>Who am i?</Heading>
            <Button><a href ="https://drive.google.com/file/d/1QgQiGZCagPUXMaa4jFnWoAC0B70cK9AO/view" target="_blank" rel="noopener noreferrer" style={{color:"#08814A", textDecoration:"none"}}>My Resume</a></Button>

            <Subtitle>
              I am final year Under-Graduate at Thapar University, pursuing a B.Tech in Computer Science and Engineering.
            </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EDUCATION</ExperienceTitle>
            
            <DetailBlock>
              <RoleTime>
                <Role>B.E. in C.S.E.</Role>
                <Time>2020 - 2024</Time>
              </RoleTime>
              <Client>Thapar Institue of Engineering and Technology</Client>
              <DetailPoint>
                Accumulative GradePoint: 8.52
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Senior Secondary</Role>
                <Time>2018 - 2020</Time>
              </RoleTime>
              <Client>B.C.M. ARYA MODEL SR. SEC. SCHOOL</Client>
              <DetailPoint>
                95.2% in PCM
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Research Intern</Role>
                <Time>May 2023</Time>
              </RoleTime>
              <Client>IIT Ropar</Client>
              <DetailPoint>
              • Researched on facial emotion generation in a dyadic interaction setting.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Research Intern</Role>
                <Time>November 2022-May 2023</Time>
              </RoleTime>
              <Client>Samsung Prism</Client>
              <DetailPoint>
              • Researched on Multi-modal Emotion Detection in Human Conversations with Industry Experts from Samsung.
              </DetailPoint>
              <DetailPoint>
              • Learnt about different NLP techniques and Sentiment Analysis.
              </DetailPoint>
              <DetailPoint>
              • Developed Self-supervised learning models and prepared corpora for testing and training upon existing datasets.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Software Developer Associate</Role>
                <Time>June 2022-November 2022</Time>
              </RoleTime>
              <Client>Ikarus 3D</Client>
              <DetailPoint>
              • Designed UI wireframes and developed an eCommerce Platform.
              </DetailPoint>
              <DetailPoint>
              • Researched and drafted review papers about 3D Photogrammetry.
              </DetailPoint>
              <DetailPoint>
              • Built an app for 3D enthusiasts using React Native.
              </DetailPoint>
              <DetailPoint>
              • Worked with Docker to develop a user interaction tool to track analytics data from Google’s Model Viewer API.
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>Leadership, Extracurriculars and Volunteering</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>General Secretary - Microsoft Learn Student Chapter, TIET</Role>
                <Time>October 2020-May 2023</Time>
              </RoleTime>
              <DetailPoint>
              • Helped and guided more than 150 students to kickstart their journey in the world of technology.
              </DetailPoint>
              <DetailPoint>
              • Organizing member of two iterations of North India’s grandest hackathon- MAKEATHON.
              </DetailPoint>
              <DetailPoint>
              • Developed projects within the University to help students learn new technology frameworks through hands-on training.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Core Member - Entrepreneurship Development Cell, TIET</Role>
                <Time>October 2020-May 2022</Time>
              </RoleTime>
              <DetailPoint>
              • Organizing member of E-summit - a week long series of events, one of North India’s largest, that had a lineup of various
              renowned personalities sessions followed by a startup expo with over 50+ startups and their industry experts.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>GirlUp, Ludhiana</Role>
                <Time>October 2020-May 2022</Time>
              </RoleTime>
              <DetailPoint>
              • As part of this non-profit United Nations Foundation, I contributed in providing a platform and supporting young girls
              and women along their journey from leaders to changemakers.
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
        </Container>
      </Body>
      <WorkLink onClick={() => setAnimateWork(true)} animating={animateWork}>
        <TextLink>Take a look at some of my projects!</TextLink>
      </WorkLink>
    </Wrapper>
  );
};

export default withRouter(About);
