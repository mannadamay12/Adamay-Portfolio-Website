import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/Work/ProjectCard';
import { Filter, Search } from 'lucide-react';
import { projects } from '../utils/projects';

const WorkContainer = styled(motion.main)`
  min-height: 100vh;
  background: ${props => props.theme.colors.red};
  padding: 4rem 2rem;
`;

const WorkHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto 4rem;
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1rem, 2vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const FilterSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.5rem 1.5rem;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.active ? props.theme.colors.red : 'white'};
  border-radius: 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0 auto 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2rem;
  padding: 0.5rem 1.5rem;
`;

const SearchInput = styled.input`
  background: none;
  border: none;
  color: white;
  width: 100%;
  padding: 0.5rem;
  margin-left: 0.5rem;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  &:focus {
    outline: none;
  }
`;

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <WorkContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WorkHeader>
        <Title>My Projects</Title>
        <Subtitle>
          A collection of projects that showcase my skills in web development,
          machine learning, and creative problem-solving.
        </Subtitle>
        
        <SearchBar>
          <Search size={20} color="white" />
          <SearchInput
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>

        <FilterSection>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterSection>
      </WorkHeader>

      <ProjectGrid>
        <AnimatePresence mode="wait">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </ProjectGrid>
    </WorkContainer>
  );
}