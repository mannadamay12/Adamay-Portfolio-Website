import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { projects } from '../../utils/projects';

const ProjectContainer = styled(motion.article)`
  min-height: 100vh;
  background: ${props => props.theme.colors.blue};
`;

const ProjectHero = styled.section`
  height: 70vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  filter: brightness(0.3);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
`;

const ProjectTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;
`;

const Tag = styled.span`
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  font-size: 0.9rem;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  color: white;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${props => props.theme.colors.lightBlue};
  color: white;
  border-radius: 0.5rem;
  text-decoration: none;
  
  &:hover {
    background: ${props => props.theme.colors.blue};
  }
`;

export async function getStaticPaths() {
  // ... your paths logic
}

export async function getStaticProps({ params }) {
  // ... your props logic
}

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const project = projects.find(p => p.id === slug);

  useEffect(() => {
    if (!project && slug) {
      router.push('/404');
    }
  }, [project, slug, router]);

  if (!project) return null;

  return (
    <ProjectContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link href="/work" passHref>
        <motion.a
          whileHover={{ x: -5 }}
          style={{
            position: 'fixed',
            top: '2rem',
            left: '2rem',
            zIndex: 10,
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none'
          }}
        >
          <ArrowLeft size={20} />
          Back to Projects
        </motion.a>
      </Link>

      <ProjectHero>
        <HeroBackground image={project.image} />
        <HeroContent>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectTags>
            {project.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ProjectTags>
        </HeroContent>
      </ProjectHero>

      <ContentSection>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
            {project.longDescription}
          </p>

          <ProjectLinks>
            {project.github && (
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
              >
                <Github size={20} />
                View Source
              </ProjectLink>
            )}
            {project.link && (
              <ProjectLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
              >
                <LinkIcon size={20} />
                Live Demo
              </ProjectLink>
            )}
          </ProjectLinks>
        </div>
      </ContentSection>
    </ProjectContainer>
  );
}