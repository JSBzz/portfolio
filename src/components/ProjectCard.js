import React from 'react';
import styled from 'styled-components';
import linkIcon from '../assets/icons/link.png';

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.07);
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: #2c3e50;
  margin: 0 0 0.55rem 0;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  height: 16px;
`;

const LinkPlaceholder = styled.div`
  height: 16px;
  margin-bottom: 0.25rem;
`;

const ProjectLink = styled.a`
  color: #3498db;
  text-decoration: none;
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: #555;
  font-style: italic;
  margin: 0 0 0.5rem 0;
`;

const ProjectDuration = styled.p`
  font-size: 0.85rem;
  color: #7f8c8d;
  margin: 0 0 1.5rem 0;
`;

const FeaturesTitle = styled.h4`
  font-size: 1rem;
  color: #34495e;
  margin: 0 0 0.75rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #f0f0f0;
`;

const FeaturesList = styled.ul`
  padding-left: 20px;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 0.4rem;
`;

const TechStackWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  border-top: 1px solid #f0f0f0;
  padding-top: 1.5rem;
  margin-top: auto;
`;

const TechBadge = styled.span`
  background-color: #f4f6f8;
  color: #5a6a7b;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <div>
        {project.url ? (
          <LinkWrapper>
            <LinkIcon src={linkIcon} alt="link icon" />
            <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url}
            </ProjectLink>
          </LinkWrapper>
        ) : (
          <LinkPlaceholder />
        )}
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <ProjectDuration>{project.duration}</ProjectDuration>
      </div>

      <div style={{ flexGrow: 1 }}>
        <FeaturesTitle>주요 기능</FeaturesTitle>
        <FeaturesList>
          {project.features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeaturesList>
      </div>

      <TechStackWrapper>
        {project.techStack.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </TechStackWrapper>
    </Card>
  );
};

export default ProjectCard;
