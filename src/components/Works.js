import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import project1 from '../content/projects/project-1/cover.png';
import project2 from '../content/projects/project-2/cover.png';
import project3 from '../content/projects/project-3/cover.png';
import project4 from '../content/projects/project-4/cover.png';
import project5 from '../content/projects/project-5/cover.png';
import project6 from '../content/projects/project-6/cover.png';
import project7 from '../content/projects/project-7/cover.png';
import project8 from '../content/projects/project-8/cover.png';
import project9 from '../content/projects/project-9/cover.png';

const projects = [
  {
    id: 'project1',
    name: 'Lungs Semantic Segmentation',
    coverPic: project1,
  },
  {
    id: 'project2',
    name: 'TetraX- A Modified RLC Trainer',
    coverPic: project2,
  },
  {
    id: 'project3',
    name: 'Smart Car Robot with Line Following, Obstacle Avoidance, and Light Following Functions',
    coverPic: project3,
  },
  {
    id: 'project4',
    name: 'Mobile Apps Malware Classification',
    coverPic: project4,
  },
  {
    id: 'project5',
    name: 'Global Radiation Prediction using Neural Network Time Series Tool ',
    coverPic: project5,
  },
  {
    id: 'project6',
    name: 'Smart Home ',
    coverPic: project6,
  },
  {
    id: 'project7',
    name: 'AgriTech A Robust Artificial Intelligence Based Crop Monitoring System for Pakistani Agricultural Land',
    coverPic: project7,
  },
  {
    id: 'project8',
    name: 'Self-Driving Car Road Image Segmentation',
    coverPic: project8,
  },
  {
    id: 'project9',
    name: 'Arduino Based Robotic Arm',
    coverPic: project9,
  },
];

function Works() {
  return (
    <div id='projects' className="mt-32 p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold uppercase mb-4">Projects</h1>
      <p className='mb-4'>Here is the list of Projects I have developed...</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project, index }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100%)',
    config: { duration: 1000 },
    delay: index * 100, // Staggered animation
  });

  const hoverEffect = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <Link
      to={`works/${project.id}`}
      ref={ref}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <animated.div style={{ ...slideIn, ...hoverEffect }}>
        <img src={project.coverPic} alt={project.name} className="w-full h-auto rounded-md" />
      </animated.div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-xl font-bold text-white">{project.name}</span>
      </div>
    </Link>
  );
};

export default Works;
