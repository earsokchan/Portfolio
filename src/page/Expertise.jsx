import React from 'react';
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
import './Expertise.css'; // Import the CSS file

export default function Expertise() {
  const skills = [
    { name: 'HTML', percentage: 95, color: 'bg-primary', icon: <FaHtml5 /> },
    { name: 'CSS', percentage: 85, color: 'bg-warning', icon: <FaCss3Alt /> },
    { name: 'PHP', percentage: 60, color: 'bg-danger', icon: <FaPhp /> },
    { name: 'MongoDB', percentage: 75, color: 'bg-success', icon: <FaLeaf /> },
    { name: 'Node.js', percentage: 80, color: 'bg-info', icon: <FaNodeJs /> },
    { name: 'Javascript', percentage: 90, color: 'bg-danger', icon: <FaJsSquare /> },
    { name: 'Python', percentage: 50, color: 'bg-dark', icon: <FaPython /> },
    { name: 'Wordpress', percentage: 85, color: 'bg-info', icon: <FaWordpress /> },
    { name: 'Laravel', percentage: 70, color: 'bg-warning', icon: <FaLaravel /> },
    { name: 'MySQL', percentage: 50, color: 'bg-primary', icon: <FaDatabase /> },
    { name: 'React', percentage: 85, color: 'bg-success', icon: <FaReact /> },
  ];

  const renderSkill = (skill, index) => (
    <div className="skill" key={index}>
      <div className="skill-header">
        <div className="skill-title">
          <span className="skill-icon">{skill.icon}</span>
          <h6>{skill.name}</h6>
        </div>
        <h6>{skill.percentage}%</h6>
      </div>
      <div className="progress">
        <div 
          className={`progress-bar ${skill.color}`} 
          role="progressbar" 
          aria-valuenow={skill.percentage} 
          aria-valuemin={0} 
          aria-valuemax={100} 
          style={{ width: `${skill.percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="expertise-fullscreen">
      <div className="skills-container">
        {/* <h1 className="skills-heading">Skills</h1> */}
        <h3 className="skills-subheading">My Skills</h3>
        <div className="skills-grid">
          <div className="skills-column">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => renderSkill(skill, index))}
          </div>
          <div className="skills-column">
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => renderSkill(skill, index + Math.ceil(skills.length / 2)))}
          </div>
        </div>
      </div>
    </div>
  );
}