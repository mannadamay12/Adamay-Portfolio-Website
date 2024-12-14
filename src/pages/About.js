import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TimelineSection from '../components/About/TimelineSection';
import SkillsSection from '../components/About/SkillsSection';
import { Github, Linkedin, Mail } from 'lucide-react';

const AboutContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.green};
  padding: 2rem;

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 1rem;
  }
`;

const Hero = styled.section`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 10%;

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 0 5%;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(3rem, 8vw, 6rem);
  color: ${props => props.theme.colors.white};
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: ${props => props.theme.colors.white};
  max-width: 800px;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.lightGreen};
  }
`;

export default function About() {
  return (
    <AboutContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <Title
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </Title>
        <Description
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I am a MERN stack developer currently pursuing my Master's at NYU. 
          With a strong foundation in web development and a growing expertise in AI, 
          I strive to create seamless digital experiences that make a difference.
        </Description>
        <SocialLinks
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SocialIcon href="https://github.com/mannadamay12" target="_blank">
            <Github size={32} />
          </SocialIcon>
          <SocialIcon href="https://www.linkedin.com/in/adamaymann7/" target="_blank">
            <Linkedin size={32} />
          </SocialIcon>
          <SocialIcon href="mailto:meadamann2002@gmail.com">
            <Mail size={32} />
          </SocialIcon>
        </SocialLinks>
      </Hero>

      <TimelineSection />
      <SkillsSection />
    </AboutContainer>
  );
}