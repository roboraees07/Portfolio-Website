import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project1.json'; // Assuming the JSON data is saved here
import coverPic from '../../content/projects/project-1/cover.png';
import dataset from '../../content/projects/project-1/dataset-view.png';
import diagram from '../../content/projects/project-1/diagram.png';
import results1 from '../../content/projects/project-1/results-1.png';
import results2 from '../../content/projects/project-1/results-2.png';

function Project1() {
  const {
    name,
    introduction,
    motivationAndApplication,
    problemStatement,
    proposedSolution,
    objectives,
    methodology,
    dataAndSetup,
    results,
    discussion,
    conclusion,
    references
  } = projectData;

  return (
    <div className="p-4 md:p-8 bg-gray-900 text-white min-h-screen mx-auto max-w-7xl">
      <Link to="/#projects" className="text-blue-500 hover:underline">
        &larr; Back to Works
      </Link>
      <h1 className="text-3xl md:text-4xl font-bold mb-4">{name}</h1>
      <div className="relative group mb-8">
        <img src={coverPic} alt={name} className="mx-auto w-1/2 h-auto" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
        <h2 className="text-2xl font-bold mb-2">Problem Statement</h2>
        <p>{problemStatement}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Proposed Solution</h2>
        <p>{proposedSolution}</p>
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
        <h2 className="text-2xl font-bold mb-2">Methodology</h2>
        <ul className="list-disc list-inside">
          {methodology.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Block Diagram</h2>
        <div className="relative group mb-8">
          <img src={diagram} alt="Block Diagram" className="mx-auto w-1/2 h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Block Diagram: FCN8 Model Architecture</span>
          </div>
        </div>
        <p>The block diagram of our system illustrates the architecture of the FCN8 model, which consists of eight convolutional layers followed by a final upsampling layer...</p>
        <ul className="list-disc list-inside mt-4">
          <li>Convolutional Layers: These layers extract features from the input image, progressively reducing its spatial dimensions while increasing the depth of the feature maps.</li>
          <li>Upsampling Layer: This layer restores the spatial dimensions of the feature maps, producing the final segmented output.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Data and Experimental Setup</h2>
        <div className="relative group mb-8">
          <img src={dataset} alt={name} className="mx-auto w-1/2 h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Dataset View: Lungs Semantic Segmentation</span>
          </div>
        </div>
        <ul className="list-disc list-inside">
          {dataAndSetup.datasets.map((dataset, index) => (
            <li key={index}>{dataset}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mt-4">Training and Testing Data</h3>
        <ul className="list-disc list-inside">
          {dataAndSetup.trainingSetup.trainingData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-4">Training Configuration</h3>
        <ul className="list-disc list-inside">
          {dataAndSetup.trainingSetup.trainingConfig.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Results</h2>
        <p>{results.description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative group">
            <img src={results1} alt={`${name} Result 1`} className="w-1/2 h-auto mb-8" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Results Image 1</span>
            </div>
          </div>
          <div className="relative group">
            <img src={results2} alt={`${name} Result 2`} className="w-1/2 h-auto mb-8" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Results Image 2</span>
            </div>
          </div>
        </div>
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
        <ul className="list-disc list-inside">
          {references.map((item, index) => (
            <li key={index}><a href={item} className="text-blue-500 hover:underline">{item}</a></li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Project1;
