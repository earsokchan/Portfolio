import React from 'react';
import styled, { keyframes } from 'styled-components';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaPhp, 
  FaJsSquare, 
  FaPython, 
  FaWordpress, 
  FaLaravel, 
  FaDatabase, 
  FaReact, 
  FaNodeJs,
  FaLeaf 
} from 'react-icons/fa';
import Button from './Button';

const skillColors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Light Blue
  '#A5D8FF', // Sky Blue
  '#7C90DB', // Periwinkle
  '#B2A4FF', // Lavender
  '#FF9A76', // Peach
  '#FFB677', // Light Orange
  '#FFD166', // Yellow
  '#A3EBB1', // Mint
  '#18A558'  // Green
];

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

export default function Expertise() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MongoDB', icon: <FaLeaf /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'WordPress', icon: <FaWordpress /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'React', icon: <FaReact /> },
  ];

  return (
    <ExpertiseSection id="expertise">
      <SectionHeader>
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </SectionHeader>
      
      <SkillsContainer>
        {skills.map((skill, idx) => (
          <SkillCard 
            key={skill.name}
            color={skillColors[idx]}
            delay={idx * 0.1}
          >
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsContainer>

      <ButtonWrapper>
        <Button />
      </ButtonWrapper>
    </ExpertiseSection>
  );
}

// Styled Components
const ExpertiseSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
  text-align: center;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    color: #25324b;
    margin-bottom: 0.5rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: #4ECDC4;
      border-radius: 2px;
    }
  }

  p {
    color: #64748b;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
  }
`;

const SkillCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  cursor: default;
  animation: ${floatAnimation} 4s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.color};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    animation: ${pulseAnimation} 1.5s ease infinite;

    &::after {
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.color};
  transition: transform 0.3s ease;

  ${SkillCard}:hover & {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SkillName = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #25324b;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
`;