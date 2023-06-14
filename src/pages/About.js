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
            <Subtitle>
              I am final year UnderGrad at Thapar University, pursuing a B.Tech in Computer Science Engineering.

            </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EDUCATION</ExperienceTitle>
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
                Developed a Web Platform
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Research Intern</Role>
                <Time>November 2022-May 2023</Time>
              </RoleTime>
              <Client>Samsung Prism</Client>
              <DetailPoint>
                {/* Developed a Web Platform */}
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Software Developer Associate</Role>
                <Time>June 2022-November 2022</Time>
              </RoleTime>
              <Client>Ikarus 3D</Client>
              <DetailPoint>
                Developed a Web Platform
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>Co-Curricular</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>General Secretary Member - Microsoft Learn Student Chapter</Role>
                <Time>October 2020-May 2023</Time>
              </RoleTime>
              <DetailPoint>
                Orgainsed national level flagship hackathons- Makeathon 3077 and Make4thon.
              </DetailPoint>
              <DetailPoint>
                Worked in technical and marketing teams, led a team of 60+, oversaw and coordinated various tasks involving event
                websites and sponsor-ships.
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
