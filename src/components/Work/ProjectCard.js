import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';

const Card = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.8);
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProjectTitle = styled.h3`
  color: white;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.lightBlue};
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <ImageWrapper>
        <ProjectImage src={project.image} alt={project.title} />
      </ImageWrapper>
      <Overlay>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectLinks>
          <ProjectLink 
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Project</span>
            <ArrowUpRight size={16} />
          </ProjectLink>
          {project.github && (
            <ProjectLink 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={16} />
              <span>Source Code</span>
            </ProjectLink>
          )}
        </ProjectLinks>
      </Overlay>
    </Card>
  );
};

export default ProjectCard;