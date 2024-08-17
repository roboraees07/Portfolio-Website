import React from 'react';
import { FaFileDownload } from 'react-icons/fa'; // Importing the download icon
import CV_M_Raees_Azam_Academics from '../content/MyCvs/CV_M.Raees Azam Academics.pdf';
import CV_M_Raees_Azam_Professional from '../content/MyCvs/CV_M.Raees Azam_Professional.pdf';

const MyCvs = () => {
  return (
    <div id='cvs' className="mt-32 p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">My CVs</h1>
      <p className="mb-4">You can download my academic and professional CVs below:</p>

      <div className="space-y-6">
        {/* Academic CV */}
        <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg">
          <FaFileDownload className="text-3xl mr-4 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold">Academic CV</h2>
            <a
              href={CV_M_Raees_Azam_Academics}
              download="CV_M.Raees_Azam_Academics.pdf"
              className="text-blue-500 hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* Professional CV */}
        <div className="flex items-center bg-white text-black p-4 rounded-lg shadow-lg">
          <FaFileDownload className="text-3xl mr-4 text-green-600" />
          <div>
            <h2 className="text-2xl font-bold">Professional CV</h2>
            <a
              href={CV_M_Raees_Azam_Professional}
              download="CV_M.Raees_Azam_Professional.pdf"
              className="text-blue-500 hover:underline"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCvs;
