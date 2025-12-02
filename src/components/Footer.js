import React from 'react';
import styled from 'styled-components';
import githubIcon from '../assets/icons/github.png'; // Assuming github.png is in src/assets/icons

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #f8f8f8;
  border-top: 1px solid #eee;
  margin-top: 3rem;
`;

const GitLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
`;

const GitImage = styled.img`
  width: 40px;
  height: 40px;
`;

function Footer() {
  return (
    <FooterContainer>
      <GitLink href="https://github.com/JSBzz" target="_blank" rel="noopener noreferrer">
        <GitImage src={githubIcon} alt="GitHub Profile" />
      </GitLink>
    </FooterContainer>
  );
}

export default Footer;
