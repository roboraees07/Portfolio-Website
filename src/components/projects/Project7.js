import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project7.json'; // Load JSON data
import coverPic from '../../content/projects/project-7/cover.png';
import CNNForClassification from '../../content/projects/project-7/CNN For Classification.png';
import CNNforRice from '../../content/projects/project-7/CNN for Rice Plant Classification.png';
import Deployment1 from '../../content/projects/project-7/Deployment-1.png';
import Deployment2 from '../../content/projects/project-7/Deployment-2.png';
import Deployment3 from '../../content/projects/project-7/Deployment-3.png';
import FCNForSegmentation from '../../content/projects/project-7/FCN For Segmentation.png';
import ProposedMethodology from '../../content/projects/project-7/Proposed Methodology.png';
import app1 from '../../content/projects/project-7/app-1.png';
import app2 from '../../content/projects/project-7/app-2.png';
import recognition1 from '../../content/projects/project-7/recognition-1.png';
import recognition2 from '../../content/projects/project-7/recognition-2.png';
import recognition3 from '../../content/projects/project-7/recognition-3.png';
import recognition4 from '../../content/projects/project-7/recognition-4.png';
import AppVideo from '../../content/projects/project-7/App.mp4';
import PlantVideo from '../../content/projects/project-7/Plant Video.mp4';
import UAVVideo from '../../content/projects/project-7/UAV.mp4';

function Project7() {
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
        <h2 className="text-2xl font-bold mb-2">Motivation and Applications</h2>
        <ul className="list-disc list-inside">
          {projectData.motivation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={CNNForClassification} alt="CNN For Classification" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">CNN For Classification</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={CNNforRice} alt="CNN for Rice Plant Classification" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">CNN for Rice Plant Classification</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Problem Statement and Proposed Solution</h2>
        <p>{projectData.problemStatement}</p>
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
        <h2 className="text-2xl font-bold mb-2">Proposed Methodology</h2>
        <p>{projectData.proposedMethodology.description}</p>
        <ul className="list-disc list-inside">
          {projectData.proposedMethodology.steps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={ProposedMethodology} alt="Proposed Methodology" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Proposed Methodology Diagram</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={FCNForSegmentation} alt="FCN For Segmentation" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">FCN For Segmentation</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Deployment</h2>
        <p>{projectData.deployment.description}</p>
        <ul className="list-disc list-inside">
          {projectData.deployment.steps.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="relative group mb-8 mt-4">
          <img src={Deployment1} alt="Deployment Step 1" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Deployment Step 1</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={Deployment2} alt="Deployment Step 2" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Deployment Step 2</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={Deployment3} alt="Deployment Step 3" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Deployment Step 3</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Mobile Application Development</h2>
        <div className="relative group mb-8 mt-4">
          <img src={app1} alt="Mobile Application Development 1" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Mobile Application Development - Interface 1</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <img src={app2} alt="Mobile Application Development 2" className="mx-auto w-full max-w-md h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Mobile Application Development - Interface 2</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Results</h2>
        <div className="relative group mb-8 mt-4">
          <video className="w-full max-w-md mx-auto" controls>
            <source src={PlantVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Plant Disease Detection Video</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <video className="w-full max-w-md mx-auto" controls>
            <source src={UAVVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">UAV Deployment Video</span>
          </div>
        </div>
        <div className="relative group mb-8 mt-4">
          <video className="w-full max-w-md mx-auto" controls>
            <source src={AppVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-lg">Mobile Application Video</span>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Recognitions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="relative group">
            <img src={recognition1} alt="Recognition 1" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Recognition 1</span>
            </div>
          </div>
          <div className="relative group">
            <img src={recognition2} alt="Recognition 2" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Recognition 2</span>
            </div>
          </div>
          <div className="relative group">
            <img src={recognition3} alt="Recognition 3" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Recognition 3</span>
            </div>
          </div>
          <div className="relative group">
            <img src={recognition4} alt="Recognition 4" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg">Recognition 4</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Project7;
