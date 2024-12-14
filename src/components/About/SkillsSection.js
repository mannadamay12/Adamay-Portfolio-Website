import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsWrapper = styled(motion.section)`
  padding: 5rem 10%;
  background: ${props => props.theme.colors.green};

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 3rem 5%;
  }
`;

const SkillsTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: 2.5rem;
  margin-bottom: 3rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  backdrop-filter: blur(10px);

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.lightGreen};
    font-size: 1.5rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.colors.white};
`;

const SkillItem = styled(motion.li)`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.05);
`;

const skillsData = [
  {
    category: "Frontend Development",
    skills: ["React.js", "Next.js", "TypeScript", "Styled Components", "Tailwind CSS"]
  },
  {
    category: "Backend Development",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"]
  }
];

const SkillsSection = () => {
  return (
    <SkillsWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SkillsTitle>Skills & Expertise</SkillsTitle>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCard
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{category.category}</h3>
            <SkillsList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {skill}
                </SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsWrapper>
  );
};

export default SkillsSection;