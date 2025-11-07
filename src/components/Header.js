import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ffffff;
  padding: 4rem 2rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
  color: #5a7388;
`;

const Header = ({ summary }) => {
  return (
    <HeaderContainer>
      <Title>Developer Portfolio</Title>
      <Summary>{summary}</Summary>
    </HeaderContainer>
  );
};

export default Header;
