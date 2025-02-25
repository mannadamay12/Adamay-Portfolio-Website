import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import ContactForm from '../components/Contact/ContactForm';

const ContactContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.peach};
  color: ${props => props.theme.colors.black};
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  width: 100%;

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  padding: 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: fit-content;
`;

const ContactTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background: white;
  color: ${props => props.theme.colors.black};
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(10px);
    background: ${props => props.theme.colors.lightBlue};
    color: white;
  }
`;

const ContactText = styled.span`
  font-size: 1.2rem;
`;

const FormCard = styled(ContactCard)`
  background: rgba(255, 255, 255, 0.95);
`;

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      yoyo: Infinity
    }
  }
};

export default function Contact() {
  return (
    <ContactContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactWrapper>
        <ContactCard
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactLinks>
            <ContactLink 
              href="mailto:meadamann2002@gmail.com"
              variants={buttonVariants}
              whileHover="hover"
            >
              <Mail size={24} />
              <ContactText>meadamann2002@gmail.com</ContactText>
            </ContactLink>

            <ContactLink 
              href="https://www.google.com/maps/place/New+York"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
            >
              <MapPin size={24} />
              <ContactText>New York, USA</ContactText>
            </ContactLink>

            <ContactLink 
              href="/resume.pdf"
              target="_blank"
              variants={buttonVariants}
              whileHover="hover"
            >
              <FileText size={24} />
              <ContactText>Download Resume</ContactText>
            </ContactLink>
          </ContactLinks>
        </ContactCard>

        <FormCard
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </FormCard>
      </ContactWrapper>
    </ContactContainer>
  );
}