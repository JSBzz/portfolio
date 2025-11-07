import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  padding: 2rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #34495e;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const FeaturesList = styled.ul`
  padding-left: 20px;
  margin-bottom: 1.5rem;
`;

const FeatureItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: #555;
  margin-bottom: 0.5rem;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
`;

const TechBadge = styled.span`
  background-color: #f3f3f3;
  color: #555;
  padding: 0.3rem 0.8rem;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectDescription>{project.description}</ProjectDescription>
      <FeaturesList>
        {project.features.map((feature, index) => (
          <FeatureItem key={index}>{feature}</FeatureItem>
        ))}
      </FeaturesList>
      <TechStackWrapper>
        {project.techStack.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </TechStackWrapper>
    </Card>
  );
};

export default ProjectCard;
