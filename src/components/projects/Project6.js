import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project6.json'; // Load JSON data
import coverPic from '../../content/projects/project-6/cover.png';
import demoVideo from '../../content/projects/project-6/Home Automation.mp4'; 

const Project6 = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white min-h-screen mx-auto max-w-7xl">
      <Link to="/#projects" className="text-blue-500 hover:underline">
        &larr; Back to Works
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{projectData.name}</h1>
      <div className="relative group mb-8">
        <img src={coverPic} alt={projectData.name} className="mx-auto w-full max-w-md h-auto" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg">Cover Image: {projectData.name}</span>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-2">Abstract</h2>
        <p>{projectData.abstract}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p>{projectData.introduction}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Objectives / Outcomes</h2>
        <ul className="list-disc list-inside">
          {projectData.objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Problem Statement</h2>
        <p>{projectData.problemStatement}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Proposed Solution</h2>
        <p>{projectData.proposedSolution}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Circuit Diagram</h2>
        <p>{projectData.circuitDiagram}</p>
        <div className="relative group mb-8">
          <img src={coverPic} alt={projectData.name} className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Circuit Diagram: {projectData.name}</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Results</h2>
        <p>{projectData.results}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Demo Video</h2>
        <video controls className="w-full max-w-2xl mx-auto h-auto mb-8">
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">GitHub Repository</h2>
        <a href={projectData.githubRepo} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {projectData.githubRepo}
        </a>
      </section>
    </div>
  );
};

export default Project6;
