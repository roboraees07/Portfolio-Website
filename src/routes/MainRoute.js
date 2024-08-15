import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Honors from '../components/Honors';
import Works from '../components/Works';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Project1 from '../components/projects/Project1';
import Project2 from '../components/projects/Project2';
import Project3 from '../components/projects/Project3';
import Project4 from '../components/projects/Project4';
import Project5 from '../components/projects/Project5';
import Project6 from '../components/projects/Project6';
import Project7 from '../components/projects/Project7';
import Project8 from '../components/projects/Project8';
import Project9 from '../components/projects/Project9';
// Import other project components...

function MainRoute() {
  const location = useLocation();
  const isProjectRoute = location.pathname.startsWith('/works/project');

  return (
    <div>
      {!isProjectRoute && (
        <Layout>
          <Routes>
            <Route path="/" element={
              <div>
                <Profile />
                <Skills />
                <Honors />
                <Works />
                <Blogs />
                <Contact />
              </div>
            } />
          </Routes>
        </Layout>
      )}
      {isProjectRoute && (
        <Routes>
          <Route path="works/project1" element={<Project1 />} />
          <Route path="works/project2" element={<Project2 />} />
          <Route path="works/project3" element={<Project3 />} />
          <Route path="works/project4" element={<Project4 />} />
          <Route path="works/project5" element={<Project5 />} />
          <Route path="works/project6" element={<Project6 />} />
          <Route path="works/project7" element={<Project7 />} />
          <Route path="works/project8" element={<Project8 />} />
          <Route path="works/project9" element={<Project9 />} />
          {/* Add other project routes here */}
        </Routes>
      )}
    </div>
  );
}

export default MainRoute;
