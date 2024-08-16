import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project9.json';
import coverPic from '../../content/projects/project-9/cover.png';
import blockDiagram1 from '../../content/projects/project-9/Block Diagram-1.png';
import circuitDiagram from '../../content/projects/project-9/Circuit Diagram.png';
import hardwareModel from '../../content/projects/project-9/Hardware Model.png';
import simulationResults1 from '../../content/projects/project-9/Simulation Results-1.png';
import simulationResults from '../../content/projects/project-9/Simulation Results.png';
import simulationModel from '../../content/projects/project-9/semulation-model.png';
import roboticArmVideo from '../../content/projects/project-9/Robotic Arm.mp4';

function Project9() {
  const {
    name,
    abstract,
    introduction,
    objectives,
    methodology,
    discussion,
    conclusion
  } = projectData;

  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white min-h-screen mx-auto max-w-7xl">
      <Link to="/#projects" className="text-blue-500 hover:underline block mb-4">
        &larr; Back to Works
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
      <div className="relative group mb-8">
        <img src={coverPic} alt={name} className="mx-auto w-full max-w-md h-auto" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg">Cover Image: {name}</span>
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-2">Abstract</h2>
        <p>{abstract}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p>{introduction}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Objectives</h2>
        <ul className="list-disc list-inside">
          {objectives.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Proposed Methodology</h2>
        <ul className="list-disc list-inside">
          {methodology.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={blockDiagram1} alt="Block Diagram" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Block Diagram</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={simulationModel} alt="Simulation Model" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Simulation Model</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={hardwareModel} alt="Hardware Model" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Hardware Model</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={circuitDiagram} alt="Circuit Diagram" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Circuit Diagram</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Simulation Results</h2>
        <div className="relative group mb-8">
          <img src={simulationResults1} alt="Simulation Results 1" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Simulation Results 1</span>
          </div>
        </div>
        <div className="relative group mb-8">
          <img src={simulationResults} alt="Simulation Results" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Simulation Results</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Discussion</h2>
        <p>{discussion}</p>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Demo Video</h2>
        <video controls className="w-full max-w-2xl mx-auto h-auto mb-8">
          <source src={roboticArmVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p>{conclusion}</p>
      </section>
    </div>
  );
}

export default Project9;
