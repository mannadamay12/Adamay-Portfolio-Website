import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  Heading,
  Subtitle,
  X,
  Article,
  ExperienceContainer,
  ExperienceTitle,
  DetailBlock,
  DetailPoint,
  Image,
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

  const canada = require("../assets/images/tiet.JPG");

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
              I am a sophomore at Thapar University, pursuing a B.Tech in Computer Science Engineering.

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
                Accumulative GradePoint: 9.0
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Software Development Associate</Role>
                <Time>June 2022</Time>
              </RoleTime>
              <Client>Ikarus 3D</Client>
              <DetailPoint>
                Developed a Web Platform
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Content Head Intern</Role>
                <Time>September 2021</Time>
              </RoleTime>
              <Client>NITI TANTRA</Client>
              <DetailPoint>
                Drafted Public Policy Papers in this youth run think tank.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Content Writing &amp; Manager Intern</Role>
                <Time>December 2020</Time>
              </RoleTime>
              <Client>Bizz Venture</Client>
              <DetailPoint>
                Curated content resources and material for social media page.
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>Co-Curricular</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>General Secretary Member - Microsoft Learn Student Chapter</Role>
                <Time>October 2020</Time>
              </RoleTime>
              <DetailPoint>
                Orgainsed national level flagship hackathons- Makeathon 3077 and Make4thon.
              </DetailPoint>
              <DetailPoint>
                Worked in technical and marketing teams, led a team of 60+, oversaw and coordinated various tasks involving event
                websites and sponsor-ships.
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Core Member - Entrepreneurship Development Cell</Role>
                <Time>October 2020</Time>
              </RoleTime>
              <DetailPoint>
               Conducted India’s biggest Internship Fair with 100+ companies offering internships.              
              </DetailPoint>
              <DetailPoint>
                Worked in marketing, technical and content teams. Curated BizFanatics-EDC’s magazine. 
                Contributed in building a website for E-Summit’21.
              </DetailPoint>
              <DetailPoint>
                Led team of 50+ members to work towards goals that improve and promote entrepreneurial culture at Thapar University
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
