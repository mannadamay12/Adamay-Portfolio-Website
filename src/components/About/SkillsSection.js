const SkillsSection = styled(motion.section)`
  padding: 5rem 10%;
  background: ${props => props.theme.colors.green};

  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 3rem 5%;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.lightGreen};
  }

  p {
    color: ${props => props.theme.colors.white};
    line-height: 1.6;
  }
`;