import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Skills from './components/Skills';
import ProjectCard from './components/ProjectCard';
import { portfolioData } from './data';

const MainContainer = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectsSection = styled.section`
  padding: 3rem 2rem;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

function App() {
  return (
    <>
      <Header summary={portfolioData.summary} />
      <MainContainer>
        <Skills skills={portfolioData.skills} />
        <ProjectsSection>
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </ProjectsGrid>
        </ProjectsSection>
      </MainContainer>
    </>
  );
}

export default App;
