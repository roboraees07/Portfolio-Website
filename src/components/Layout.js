import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaAward, FaBriefcase, FaBlog, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-2/5 bg-black md:bg-gray-900 text-white md:h-full p-8 flex flex-col items-center fixed md:relative md:fixed top-0 z-10 md:z-auto">
        <div className="mb-16 text-center">
          <Link to="/" className="hover:text-gray-400">
            <div className="text-white">
              <p className="text-lg">Muhammad</p>
              <div className="flex items-baseline justify-center">
                <h1 className="text-6xl font-bold">Raees</h1>
                <p className="text-2xl ml-2">Azam</p>
              </div>
            </div>
          </Link>
          <div className="mt-4 text-lg">
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2000,
                'Robotics',
                2000,
                'Data Engineer',
                2000,
                'Web Developer',
                2000,
                'Cyber Security Enthusiast',
                2000,
                'Graphic Designer',
                2000,
                () => {},
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ whiteSpace: 'pre-line' }}
            />
          </div>
        </div>
        <nav className="flex flex-row md:flex-grow">
          <ul className="flex md:flex-col justify-around md:space-y-6 space-x-4 md:space-x-0">
            <li className="flex flex-col items-center md:flex-row">
              <FaUser className="mb-1 md:mr-2" />
              <a href="#profile" className="hover:text-gray-400 text-xs md:text-base">Profile</a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
              <FaCog className="mb-1 md:mr-2" />
              <a href="#skills" className="hover:text-gray-400 text-xs md:text-base">Skills</a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
              <FaAward className="mb-1 md:mr-2" />
              <a href="#honors" className="hover:text-gray-400 text-xs md:text-base">Honors</a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
              <FaBriefcase className="mb-1 md:mr-2" />
              <a href="#works" className="hover:text-gray-400 text-xs md:text-base">Works</a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
              <FaBlog className="mb-1 md:mr-2" />
              <a href="#blogs" className="hover:text-gray-400 text-xs md:text-base">Blog</a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
              <FaEnvelope className="mb-1 md:mr-2" />
              <a href="#contact" className="hover:text-gray-400 text-xs md:text-base">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="mt-80 md:mt-0 ml-0 w-full md:w-[60%] h-full overflow-y-scroll p-8">
        {children}
      </div>
    </div>
  );
}

export default Layout;
