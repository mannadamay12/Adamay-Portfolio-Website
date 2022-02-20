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
              
            </Subtitle>
          </Hero>
          <ExperienceContainer>
            <ExperienceTitle>EXPERIENCE</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Junior UX Designer</Role>
                <Time>Summer 2015</Time>
              </RoleTime>
              <Client>J. Walter Thompson Amsterdam</Client>
              <DetailPoint>
                Worked on designing an unlaunched app for a car company
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Concept Researcher &amp; Producer Intern</Role>
                <Time>Summer 2016</Time>
              </RoleTime>
              <Client>J. Walter Thompson Amsterdam</Client>
              <DetailPoint>
                See case studies for information of my tenure
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>PHP Intern &amp; Web Team Manager</Role>
                <Time>2018</Time>
              </RoleTime>
              <Client>D-TT</Client>
              <DetailPoint>
                Inspired my desire to pursue web design fulltime
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Junior Frontend Developer &amp; Squad Master</Role>
                <Time>2019</Time>
              </RoleTime>
              <Client>Oberon</Client>
              <DetailPoint>
                See case studies for information of my tenure
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
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
                Accumulative Grade: 9.2
              </DetailPoint>
            </DetailBlock>
          </ExperienceContainer>
          <ExperienceContainer>
            <ExperienceTitle>Co-Curricular</ExperienceTitle>
            <DetailBlock>
              <RoleTime>
                <Role>Volunteer Fundi* - Engikaret</Role>
                <Time>2013</Time>
              </RoleTime>
              <Client>Projects Abroad - Tanzania</Client>
              <DetailPoint>
                *Swahili for Builder
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Level 1 Snowboard Instructor</Role>
                <Time>2013</Time>
              </RoleTime>
              <Client>Nonstop Snowboarding - Canada</Client>
              <DetailPoint>
                Qualified to teach beginners in Canada. Might need to renew my license :3
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Level 1 Dance Instructor</Role>
                <Time>2014</Time>
              </RoleTime>
              <Client>Amanda Nicole School of Dance - England</Client>
              <DetailPoint>
                Qualified to teach beginners
              </DetailPoint>
            </DetailBlock>
            <DetailBlock>
              <RoleTime>
                <Role>Society Marketer &amp; Promotions</Role>
                <Time>2014-2015</Time>
              </RoleTime>
              <Client>Northumbria Dance Society - England</Client>
              <DetailPoint>
              Awarded Highly Commended Society of the Year
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
