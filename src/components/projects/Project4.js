import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project4.json'; // Load JSON data
import coverPic from '../../content/projects/project-4/cover.png';
import datasetBalance from '../../content/projects/project-4/dataset Balance.png';
import heatmap from '../../content/projects/project-4/Heatmap.png';
import results from '../../content/projects/project-4/results.png';

const Project4 = () => {
  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white min-h-screen mx-auto max-w-7xl">
      <Link to="/#projects" className="text-blue-500 hover:underline">
        &larr; Back to Works
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{projectData.name}</h1>
      <div className="relative group mb-8">
        <img src={coverPic} alt={projectData.name} className="mx-auto w-full max-w-md h-auto" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <h2 className="text-2xl font-bold mb-2">Objectives</h2>
        <ul className="list-disc list-inside">
          {projectData.objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Proposed Methodology</h2>
        <ul className="list-disc list-inside">
          {projectData.methodology.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={datasetBalance} alt="Dataset Balance" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Dataset Balance</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={heatmap} alt="Heatmap" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Heatmap</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Simulation Results</h2>
        <p>{projectData.simulationResults.description}</p>
        <ul className="list-disc list-inside">
          {projectData.simulationResults.accuracyScores.map((score, index) => (
            <li key={index}>{score}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={results} alt="Results" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Results</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Simulation Parameters</h3>
        <ul className="list-disc list-inside">
          {projectData.simulationResults.parameters.map((param, index) => (
            <li key={index}>{param}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Discussion</h2>
        <p>{projectData.discussion}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p>{projectData.conclusion}</p>
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

export default Project4;
