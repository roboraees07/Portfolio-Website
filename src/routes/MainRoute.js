import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import Profile from '../components/Profile';
import Skills from '../components/Skills';
import Honors from '../components/Honors';
import Works from '../components/Works';
import Blogs from '../components/Blogs';
import BlogPost from '../components/BlogPost';  
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Project1 from '../components/projects/Project1';
import Project2 from '../components/projects/Project2';
import Project3 from '../components/projects/Project3';
import Project4 from '../components/projects/Project4';
import Project5 from '../components/projects/Project5';
import Project6 from '../components/projects/Project6';
import Project7 from '../components/projects/Project7';
import Project8 from '../components/projects/Project8';
import Project9 from '../components/projects/Project9';
import TopButton from '../components/TopButton';
import MyCvs from '../components/MyCvs';

function MainRoute() {
  const location = useLocation();
  const isProjectRoute = location.pathname.startsWith('/works/project');
  const isBlogRoute = location.pathname.startsWith('/blogs');

  return (
    <div>
      {/* Layout for all non-project and non-blog routes */}
      {!isProjectRoute && !isBlogRoute && (
        <Layout>
          <Routes>
            <Route path="/" element={
              <div>
                <Profile />
                <Skills />
                <Honors />
                <Works />
                <Experience />
                <Blogs />
                <MyCvs/>
                <Contact />
              </div>
            } />
          </Routes>
        </Layout>
      )}

      {/* Project routes */}
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
        </Routes>
      )}

      {/* Blog routes */}
      {isBlogRoute && (
        <Routes>
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogPost />} />
        </Routes>
      )}

      {/* TopButton */}
      <TopButton />
    </div>
  );
}

export default MainRoute;
