import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TimelineWrapper = styled(motion.section)`
  padding: 5rem 10%;
  background: ${props => props.theme.colors.darkGreen};
  
  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 3rem 5%;
  }
`;

const TimelineTitle = styled.h2`
  font-family: ${props => props.theme.fonts.families.mono};
  color: ${props => props.theme.colors.white};
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 3rem;
`;

const TimelineItemWrapper = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;
  padding-left: 2rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 2px;
    background: ${props => props.theme.colors.lightGreen};
  }

  &::after {
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme.colors.lightGreen};
  }
`;

const TimelineContent = styled.div`
  flex: 1;
`;

const TimelineDate = styled.div`
  min-width: 120px;
  font-weight: bold;
  color: ${props => props.theme.colors.lightGreen};
`;

const TimelineHeader = styled.div`
  margin-bottom: 1rem;
`;

const TimelineRole = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.p`
  color: ${props => props.theme.colors.lightBlue};
  font-size: 1.1rem;
`;

const TimelineDescription = styled.p`
  color: ${props => props.theme.colors.white};
  line-height: 1.6;
`;

const timelineData = [
  {
    id: 1,
    date: "2024 - Present",
    role: "Master's in Computer Science",
    company: "New York University",
    description: "Pursuing MS in Computer Science with focus on AI and Machine Learning."
  },
  {
    id: 2,
    date: "2020 - 2024",
    role: "B.E. in Computer Science",
    company: "Thapar Institute of Engineering and Technology",
    description: "Graduated with 8.52 GPA, focused on core CS fundamentals and software development."
  },
  {
    id: 3,
    date: "02/2024 - 07/2024",
    role: "Student Software Engineer Intern",
    company: "Verizon",
    description: "Worked with consumer facing team to develop and deploy testing frameworks and improve API performance."
  },
  {
    id: 4,
    date: "05/2023 - 07/2023",
    role: "Research Intern",
    company: "IIT Ropar",
    description: "Researched on facial emotion generation in dyadic interaction settings."
  },
  {
    id: 5,
    date: "12/2022 - 05/2023",
    role: "Research Intern",
    company: "Samsung Prism",
    description: "Worked on Multi-modal Emotion Detection in Human Conversations."
  },
  {
    id: 6,
    date: "06/2022 - 11/2022",
    role: "Software Developer Associate",
    company: "Ikarus 3D",
    description: "Designed and developed UI/UX for a new ecommerce platform for 3D enthusiasts."
  }
];

const TimelineSection = () => {
  return (
    <TimelineWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <TimelineTitle>Journey So Far</TimelineTitle>
      {timelineData.map((item, index) => (
        <TimelineItemWrapper
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <TimelineDate>{item.date}</TimelineDate>
          <TimelineContent>
            <TimelineHeader>
              <TimelineRole>{item.role}</TimelineRole>
              <TimelineCompany>{item.company}</TimelineCompany>
            </TimelineHeader>
            <TimelineDescription>{item.description}</TimelineDescription>
          </TimelineContent>
        </TimelineItemWrapper>
      ))}
    </TimelineWrapper>
  );
};

export default TimelineSection;