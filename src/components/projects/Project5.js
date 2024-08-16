import React from 'react';
import { Link } from 'react-router-dom';
import projectData from '../../content/data/project5.json'; // Load JSON data
import coverPic from '../../content/projects/project-5/cover.png';
import Image_2_1 from '../../content/projects/project-5/2.1.png';
import Image_2_2 from '../../content/projects/project-5/2.2.png';
import Image_2_3 from '../../content/projects/project-5/2.3.png';
import Image_2_4 from '../../content/projects/project-5/2.4.png';
import Image_3_1a from '../../content/projects/project-5/3.1a.png';
import Image_3_1b from '../../content/projects/project-5/3.1b.png';
import Image_3_1c from '../../content/projects/project-5/3.1c.png';
import Image_4_1a from '../../content/projects/project-5/4.1a.png';
import Image_4_1b from '../../content/projects/project-5/4.1b.png';
import Image_4_1c from '../../content/projects/project-5/4.1c.png';

function Project5() {
  const { name, abstract, introduction, objectives, literatureWork, proposedMethodology, simulationResults, discussion, conclusion } = projectData;

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
        <h2 className="text-2xl font-bold mb-2">Literature Work</h2>
        {literatureWork.map((work, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
            <p>{work.description}</p>
            {index === 0 && <img src={Image_2_1} alt="NARX Block Diagram" className="mx-auto w-full max-w-md h-auto mb-4" />}
            {index === 1 && <img src={Image_2_2} alt="NAR Block Diagram" className="mx-auto w-full max-w-md h-auto mb-4" />}
            {index === 2 && <img src={Image_2_3} alt="Non-Linear Input/Output Block Diagram" className="mx-auto w-full max-w-md h-auto mb-4" />}
            {index === 3 && <img src={Image_2_4} alt="Training Algorithms" className="mx-auto w-full max-w-md h-auto mb-4" />}
          </div>
        ))}
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Proposed Methodology</h2>
        <ul className="list-disc list-inside">
          {proposedMethodology.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
        <div className="mt-4">
          <img src={Image_3_1a} alt="NARX View" className="mx-auto w-full max-w-md h-auto mb-4" />
          <img src={Image_3_1b} alt="NARX – Predict one step ahead View" className="mx-auto w-full max-w-md h-auto mb-4" />
          <img src={Image_3_1c} alt="NARX – Closed loop View" className="mx-auto w-full max-w-md h-auto mb-4" />
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Simulation Results</h2>
        {simulationResults.tables.map((table, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{table.title}</h3>
            <p>{table.description}</p>
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse border border-gray-700">
                <thead>
                  <tr>
                    {table.columns.map((col, idx) => (
                      <th key={idx} className="px-4 py-2 border border-gray-700">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, idx) => (
                    <tr key={idx}>
                      {row.map((cell, idy) => (
                        <td key={idy} className="border px-4 py-2 border-gray-700">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
        <div className="mt-4">
          <img src={Image_4_1a} alt="Performance Plot for Neuron 10 and Delay 5" className="mx-auto w-full max-w-md h-auto mb-4" />
          <img src={Image_4_1b} alt="Regression Plots for Neuron 10 Delay 5" className="mx-auto w-full max-w-md h-auto mb-4" />
          <img src={Image_4_1c} alt="Input/Output Relation Graph for Neuron 10 and Delay 5" className="mx-auto w-full max-w-md h-auto mb-4" />
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
    </div>
  );
}

export default Project5;
