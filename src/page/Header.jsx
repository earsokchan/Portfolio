import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer id="home">
      <ContentWrapper>
        <ProfileSection>
          <ProfileImage 
            src="img/about-2.png" 
            alt="Ear Sokchan"
          />
          <TextContent>
            <Name>Ear Sokchan</Name>
            <Title>I'm a Web Developer</Title>
            <Divider />
            <Description>
              {/* Crafting digital experiences with modern technologies and clean code */}
            </Description>
          </TextContent>
        </ProfileSection>
        
        <ActionButtons>
          <PrimaryButton 
            href="/cv/EarSokchan_Cv.pdf" 
            download="EarSokchan_Cv.pdf"
          >
            📥 Download CV
          </PrimaryButton>
          <SecondaryButton 
            href="/cv/EarSokchan_Cv.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            👁️ View CV
          </SecondaryButton>
          <GitHubButton 
            href="https://github.com/earsokchan" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GitHubIcon>⚡</GitHubIcon>
            GitHub
          </GitHubButton>
        </ActionButtons>
      </ContentWrapper>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  min-height: 70vh;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  width: 100%;
  z-index: 1;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem;
  }
`;

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Name = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #4a5568;
  margin: 0;
`;

const Divider = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
  margin: 1rem 0;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #718096;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonBase = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  color: white;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    color: white;
    text-decoration: none;
  }
`;

const PrimaryButton = styled(ButtonBase)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: 2px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  }
`;

const SecondaryButton = styled(ButtonBase)`
  background: transparent;
  border: 2px solid Black;
  color: black;

  &:hover {
    background: white;
    color: #667eea;
    border-color: white;
  }
`;

const GitHubButton = styled(ButtonBase)`
  background: #2d3748;
  border: 2px solid #4a5568;
  color: white;

  &:hover {
    background: #4a5568;
    border-color: #718096;
  }
`;

const GitHubIcon = styled.span`
  font-size: 1.2rem;
`;