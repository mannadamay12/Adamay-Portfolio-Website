import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const HomeContainer = styled(motion.main)`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: ${props => props.theme.colors.blue};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    grid-template-columns: 1fr;
  }
`;

const ContentSection = styled(motion.section)`
  padding: 0 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ImageSection = styled(motion.section)`
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    display: none;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${props => props.theme.fonts.sizes.large};
  color: ${props => props.theme.colors.white};
  line-height: 1;
  margin-bottom: 2rem;
`;

const Subtitle = styled(motion.div)`
  font-size: ${props => props.theme.fonts.sizes.tiny};
  color: ${props => props.theme.colors.white};
  margin-bottom: 1rem;

  span.highlight {
    color: ${props => props.theme.colors.lightBlue};
  }
`;

const BackgroundImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const NavigationHint = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: 1rem;
  opacity: 0.7;
`;

export default function Home() {
  const [isImageLoaded, setImageLoaded] = useState(false);

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContentSection>
        <Title
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          HELLO THERE
        </Title>
        <Subtitle
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          I am <span className="highlight">Adamay Mann</span>.{" "}
          <TypeAnimation
            sequence={[
              'I build seamless web experiences!',
              2000,
              'MERN developer by day',
              2000,
              'AI enthusiast by night 🧑🏻‍💻',
              2000,
              'Check out my blogs below!',
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </Subtitle>
      </ContentSection>

      <ImageSection>
        <BackgroundImage
          src="/images/hero.webp"
          alt="Background"
          onLoad={() => setImageLoaded(true)}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: isImageLoaded ? 1 : 0 
          }}
          transition={{ duration: 0.5 }}
        />
      </ImageSection>

      <NavigationHint
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Scroll or navigate to explore
      </NavigationHint>
    </HomeContainer>
  );
}