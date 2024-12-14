const TimelineSection = styled(motion.section)`
  padding: 5rem 10%;
  background: ${props => props.theme.colors.darkGreen};
  
  @media (max-width: ${props => props.theme.mediaQueries.width.m}) {
    padding: 3rem 5%;
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -1rem;
    height: 100%;
    width: 2px;
    background: ${props => props.theme.colors.lightGreen};
  }
`;

const TimelineDate = styled.div`
  min-width: 120px;
  font-weight: bold;
  color: ${props => props.theme.colors.lightGreen};
`;

const TimelineContent = styled.div`
  flex: 1;
`;
