import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project3.json'; // Assuming the JSON data is saved here
import coverPic from '../../content/projects/project-3/cover.png';
import obstacleAvoidance from '../../content/projects/project-3/Obstacle Avoidance.png';
import lightFollowing from '../../content/projects/project-3/Light Following.png';
import blockDiagram from '../../content/projects/project-3/Block Diagram.png';
import demoVideo from '../../content/projects/project-3/Smart Car Robot.mp4'; 

function Project3() {
  const {
    name,
    abstract,
    introduction,
    objectives,
    literatureWork,
    methodology,
    implementation,
    conclusion
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
        <h2 className="text-2xl font-bold mb-4">Literature Work</h2>
        {literatureWork.map((work, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
            <p>{work.description}</p>
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Proposed Methodology</h2>
        <p>{methodology.description}</p>
        <div className="relative group mb-8 mt-4">
          <img src={blockDiagram} alt="Block Diagram" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Block Diagram</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Implementation and Results</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Hardware Setup</h3>
          <ul className="list-disc list-inside">
            {implementation.hardwareSetup.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Software and Algorithms</h3>
          <ul className="list-disc list-inside">
            {implementation.softwareAndAlgorithms.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Testing and Validation</h3>
          <ul className="list-disc list-inside">
            {implementation.testingAndValidation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Conclusion</h2>
        <p>{conclusion}</p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative group">
            <img src={obstacleAvoidance} alt="Obstacle Avoidance" className="w-full max-w-md h-auto mb-8 mx-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Obstacle Avoidance</span>
            </div>
          </div>
          <div className="relative group">
            <img src={lightFollowing} alt="Light Following" className="w-full max-w-md h-auto mb-8 mx-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Light Following</span>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Demo Video</h2>
        <video controls className="w-full max-w-2xl mx-auto h-auto mb-8">
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

    </div>
  );
}

export default Project3;
