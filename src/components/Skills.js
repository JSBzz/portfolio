import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 2rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;
  color: #2c3e50;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillBadge = styled.span`
  background-color: #eaf2f8;
  color: #3498db;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

const Skills = ({ skills }) => {
  return (
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <SkillsWrapper>
        {skills.map((skill, index) => (
          <SkillBadge key={index}>{skill}</SkillBadge>
        ))}
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
