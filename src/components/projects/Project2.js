import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project2.json'; // Assuming the JSON data is saved here
import coverPic from '../../content/projects/project-2/cover.png';
import circuitDesign from '../../content/projects/project-2/Circuit Design.png';
import circuitSimulation from '../../content/projects/project-2/Circuit Simulation.png';
import pcbLayout from '../../content/projects/project-2/PCB Layout Design.png';
import pcbFabrication from '../../content/projects/project-2/PCB Fabrication.png';
import final1 from '../../content/projects/project-2/Final-1.png';
import final2 from '../../content/projects/project-2/Final-2.png';

function Project2() {
  const {
    name,
    abstract,
    introduction,
    objectives,
    methodology,
    discussion,
    conclusion,
  } = projectData;

  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white min-h-screen mx-auto max-w-7xl">
      <Link to="/#projects" className="text-blue-500 hover:underline">
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
        <h2 className="text-2xl font-bold mb-4">Methodology</h2>
        {methodology.map((step, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.description}</p>
            <ul className="list-disc list-inside mt-2">
              {step.steps.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Circuit Design</h3>
          <div className="relative group mb-8">
            <img src={circuitDesign} alt="Circuit Design" className="mx-auto w-full max-w-md h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Circuit Design</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Circuit Simulation</h3>
          <div className="relative group mb-8">
            <img src={circuitSimulation} alt="Circuit Simulation" className="mx-auto w-full max-w-md h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Circuit Simulation</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">PCB Layout Design</h3>
          <div className="relative group mb-8">
            <img src={pcbLayout} alt="PCB Layout Design" className="mx-auto w-full max-w-md h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">PCB Layout Design</span>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">PCB Fabrication</h3>
          <div className="relative group mb-8">
            <img src={pcbFabrication} alt="PCB Fabrication" className="mx-auto w-full max-w-md h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">PCB Fabrication</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Discussion</h2>
        <ul className="list-disc list-inside">
          {discussion.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p>{conclusion}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Final Product Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative group">
            <img src={final1} alt="Final Product 1" className="w-full max-w-md h-auto mb-8 mx-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Final Product Image 1</span>
            </div>
          </div>
          <div className="relative group">
            <img src={final2} alt="Final Product 2" className="w-full max-w-md h-auto mb-8 mx-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Final Product Image 2</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project2;
