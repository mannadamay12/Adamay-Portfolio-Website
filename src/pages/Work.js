import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WorkContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.red};
  padding: 2rem;
  position: relative;
`;

const ProjectSlider = styled(motion.div)`
  height: 80vh;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Project = styled(motion.div)`
  position: absolute;
  width: 80%;
  height: 80%;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  color: white;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  &.prev {
    left: 2rem;
  }

  &.next {
    right: 2rem;
  }
`;

const ProjectCounter = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.2rem;
`;

const projects = [
  {
    id: 1,
    title: 'Notefy',
    description: 'Frontend • A seamless note-taking experience',
    image: '/images/notefy-hero.webp',
    link: 'https://notefy.servatom.com'
  },
  {
    id: 2,
    title: 'Financify',
    description: 'Full Stack • Financial management made simple',
    image: '/images/financify-hero.webp',
    link: 'https://financify-zeta.netlify.app'
  },
  {
    id: 3,
    title: 'Terminal Chat',
    description: 'Node.js • CLI-based chat application',
    image: '/images/terminal-hero.webp',
    link: 'https://github.com/mannadamay12/TerminalChat'
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export default function Work() {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const currentProject = projects[page % projects.length];

  return (
    <WorkContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ProjectSlider>
        <AnimatePresence initial={false} custom={direction}>
          <Project
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <ProjectImage
              src={currentProject.image}
              alt={currentProject.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            <ProjectTitle>{currentProject.title}</ProjectTitle>
            <ProjectDescription>{currentProject.description}</ProjectDescription>
            <motion.a 
              href={currentProject.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2rem',
                background: '#3f88c5',
                borderRadius: '0.5rem',
                color: 'white',
                textAlign: 'center',
                textDecoration: 'none'
              }}
            >
              View Project
            </motion.a>
          </Project>
        </AnimatePresence>

        <NavigationButton 
          className="prev" 
          onClick={() => paginate(-1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft />
        </NavigationButton>

        <NavigationButton 
          className="next" 
          onClick={() => paginate(1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight />
        </NavigationButton>
      </ProjectSlider>

      <ProjectCounter>
        {page % projects.length + 1} / {projects.length}
      </ProjectCounter>
    </WorkContainer>
  );
}