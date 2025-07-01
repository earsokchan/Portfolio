import React from 'react';
import styled from 'styled-components';
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
  '142, 249, 252',
  '142, 252, 204',
  '142, 252, 157',
  '215, 252, 142',
  '252, 252, 142',
  '252, 208, 142',
  '252, 142, 142',
  '252, 142, 239',
  '204, 142, 252',
  '142, 202, 252',
  '142, 180, 252'
];

export default function Expertise() {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'MongoDB', icon: <FaLeaf /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Javascript', icon: <FaJsSquare /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Wordpress', icon: <FaWordpress /> },
    { name: 'Laravel', icon: <FaLaravel /> },
    { name: 'MySQL', icon: <FaDatabase /> },
    { name: 'React', icon: <FaReact /> },
  ];

  return (
    <StyledWrapper>
      <div className="wrapper">
        <div
          className="inner"
          style={{ '--quantity': skills.length }}
        >
          {skills.map((skill, idx) => (
            <div
              className="card"
              key={skill.name}
              style={{
                '--index': idx,
                '--color-card': skillColors[idx % skillColors.length]
              }}
            >
              <div className="img">
                <div className="icon">{skill.icon}</div>
                <div className="label">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
        <Button />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: 100vw;
    height: 100vh;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: linear-gradient(120deg, #f8fafc 0%, #e0e7ef 100%);
  }

  .inner {
    --w: 140px;
    --h: 200px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    top: 25%;
    left: calc(50% - (var(--w) / 2) - 2.5px);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 20s linear infinite;
  }
  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card));
    border-radius: 16px;
    overflow: hidden;
    inset: 0;
    background: #fff;
    box-shadow: 0 2px 12px rgba(var(--color-card), 0.15);
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #0000
      radial-gradient(
        circle,
        rgba(var(--color-card), 0.2) 0%,
        rgba(var(--color-card), 0.6) 80%,
        rgba(var(--color-card), 0.9) 100%
      );
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
  }

  .icon {
    font-size: 3.2rem;
    color: rgb(var(--color-card));
    filter: drop-shadow(0 2px 8px rgba(var(--color-card), 0.25));
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #25324b;
    letter-spacing: 0.5px;
    background: rgba(255,255,255,0.7);
    border-radius: 8px;
    padding: 0.2rem 0.8rem;
    box-shadow: 0 1px 3px rgba(var(--color-card), 0.08);
  }

  @media (max-width: 700px) {
    .inner {
      --w: 90px;
      --h: 120px;
    }
    .icon {
      font-size: 2rem;
    }
    .label {
      font-size: 0.92rem;
    }
  }
`;