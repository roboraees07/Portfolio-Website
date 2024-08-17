import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaCog, FaAward, FaBriefcase, FaBlog, FaEnvelope, FaLaptopCode, FaFileAlt } from 'react-icons/fa'; // Import FaFileAlt for CVs
import { TypeAnimation } from 'react-type-animation';

function Layout({ children }) {
  return (
    <div className="flex flex-col md:flex-row h-screen overflow-hidden">
      <div className="w-full md:w-2/5 bg-black md:bg-gray-900 text-white md:h-full p-8 flex flex-col items-center fixed md:relative md:fixed top-0 z-10 md:z-auto">
        <div className="mb-4 md:mb-16 text-center">
          <Link to="/" className="hover:text-gray-400">
            <div className="text-white">
              <p className="text-lg font-poppins">M.</p> {/* Poppins for normal text */}
              <div className="flex items-baseline justify-center">
                <h1 className="text-3xl md:text-6xl  font-playfair">Raees</h1> {/* Playfair Display for logo-type */}
                <p className="text-2xl md:text-2xl ml-2 font-poppins">Azam</p> {/* Poppins for normal text */}
              </div>
            </div>
          </Link>
          <div className="mt-4 text-lg">
            <TypeAnimation
              sequence={[
                'AI Engineer',
                2000,
                'Robotics Engineer',
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
              style={{ whiteSpace: 'pre-line', fontFamily: 'Poppins' }} // Use Poppins for animations too
            />
          </div>
        </div>
        <nav className="flex flex-row md:flex-grow">
          <ul className="flex md:flex-col justify-around md:space-y-6 space-x-4 md:space-x-0">
            <li className="flex flex-col items-center md:flex-row">
              <a href="#profile" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaUser className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Profile</span>
              </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#skills" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaCog className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Skills</span>
              </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#honors" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaAward className="mb-1 md:mr-2" />
              <span className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Honors</span>
              </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#projects" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaBriefcase className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Projects</span>
            </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#experience" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaLaptopCode className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Experience</span>
              </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#blogs" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaBlog className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Blog</span>
            </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#cvs" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaFileAlt className="mb-1 md:mr-2" /> {/* Proper icon for CV */}
              <span className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">My CVs</span>
            </a>
            </li>
            <li className="flex flex-col items-center md:flex-row">
            <a href="#contact" className='hover:text-gray-400 text-2xl md:text-base flex flex-col md:flex-row items-center md:items-start'>
              <FaEnvelope className="mb-1 md:mr-2" />
              <span  className="hover:text-gray-400 text-xs md:text-base hidden md:inline-block">Contact</span>
            </a>
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
