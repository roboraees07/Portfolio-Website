import React from 'react';
import { Link } from 'react-router-dom';
import project1 from '../content/projects/project-1/cover.png'
import project2 from '../content/projects/project-2/cover.png'
import project3 from '../content/projects/project-3/cover.png'
import project4 from '../content/projects/project-4/cover.png'
import project5 from '../content/projects/project-5/cover.png'
import project6 from '../content/projects/project-6/cover.png'
import project7 from '../content/projects/project-7/cover.png'
import project8 from '../content/projects/project-8/cover.png'
import project9 from '../content/projects/project-9/cover.png'

const projects = [
  {
    id: 'project1',
    name: 'Lungs Semantic Segmentation',
    coverPic: project1, // Update with actual image path
  },
  {
    id: 'project2',
    name: 'TetraX- A Modified RLC Trainer',
    coverPic: project2, // Update with actual image path
  },
  
  {
    id: 'project3',
    name: 'Smart Car Robot with Line Following, Obstacle Avoidance, and Light Following Functions',
    coverPic: project3, // Update with actual image path
  }, 
  {
    id: 'project4',
    name: 'Mobile Apps Malware Classification',
    coverPic: project4, // Update with actual image path
  },
  {
    id: 'project5',
    name: 'Global Radiation Prediction using Neural Network Time Series Tool ',
    coverPic: project5, // Update with actual image path
  },
  {
    id: 'project6',
    name: 'Smart Home ',
    coverPic: project6, // Update with actual image path
  },
  {
    id: 'project7',
    name: 'AgriTech A Robust Artificial Intelligence Based Crop Monitoring System for Pakistani Agricultural Land',
    coverPic: project7, // Update with actual image path
  },
 
  {
    id: 'project8',
    name: 'Self-Driving Car Road Image Segmentation',
    coverPic: project8, // Update with actual image path
  },
  {
    id: 'project9',
    name: 'Arduino Based Robotic Arm',
    coverPic: project9, // Update with actual image path
  },
  // Add more projects as needed
];

function Works() {
  return (
    <div id='projects' className="mt-32 p-8 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">WORKS</h1>
      <p>Here is the list of Projects I have developed...</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
        {projects.map((project) => (
          <Link to={`works/${project.id}`} key={project.id} className="relative group">
            <img src={project.coverPic} alt={project.name} className="w-full h-auto" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xl font-bold text-white">{project.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Works;
