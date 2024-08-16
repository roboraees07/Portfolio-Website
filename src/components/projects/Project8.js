import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project8.json'; // Assume the JSON file is saved here
import coverPic from '../../content/projects/project-8/cover.png';
import classes12 from '../../content/projects/project-8/12 classes.png';
import roadDataset from '../../content/projects/project-8/Road Dataset.png';
import FCN8 from '../../content/projects/project-8/FCN8.png';
import results1 from '../../content/projects/project-8/RESULTS-1.png';
import results2 from '../../content/projects/project-8/RESULTS-2.png';

function Project8() {
  const {
    name,
    introduction,
    motivationAndApplication,
    problemStatementAndSolution,
    objectives,
    methodology,
    results,
    discussion,
    conclusion,
    references
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
        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p>{introduction}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Motivation and Application</h2>
        <ul className="list-disc list-inside">
          {motivationAndApplication.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Problem Statement and Proposed Solution</h2>
        <p>{problemStatementAndSolution.problemStatement}</p>
        <p>{problemStatementAndSolution.proposedSolution}</p>
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
        <p>{methodology.mathematicalModel.description}</p>
        <ul className="list-disc list-inside">
          {methodology.dataAndSetup.datasets.map((dataset, index) => (
            <li key={index}>{dataset}</li>
          ))}
        </ul>
        <div className="relative group mb-8">
          <img src={classes12} alt="12 Classes" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">12 Classes</span>
          </div>
        </div>
        <div className="relative group mb-8">
          <img src={roadDataset} alt="Road Dataset" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Road Dataset</span>
          </div>
        </div>
        <div className="relative group mb-8">
          <img src={FCN8} alt="FCN8" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">FCN8</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Results</h2>
        <p>{results.description}</p>
        <div className="relative group mb-8">
          <img src={results1} alt="Results 1" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Results 1</span>
          </div>
        </div>
        <div className="relative group mb-8">
          <img src={results2} alt="Results 2" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Results 2</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-4">Simulation Parameters</h3>
        <ul className="list-disc list-inside">
          {methodology.dataAndSetup.datasets.map((param, index) => (
            <li key={index}>{param}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Discussion</h2>
        <p>{discussion}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p>{conclusion}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">References</h2>
        <ul className="list-disc list-inside break-words">
          {references.map((item, index) => (
            <li key={index}>
              <a href={item} className="text-blue-500 hover:underline break-words" target="_blank" rel="noopener noreferrer">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Project8;
