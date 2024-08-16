import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Import images for each experience
import teachricaImg from '../content/Experience/EncoderBytes.png'; 
import cisnrImg from '../content/Experience/CISNR Lab.png';
import mccmImg from '../content/Experience/MCCM.png';
import gdscImg from '../content/Experience/GDSC.png';
import ietImg from '../content/Experience/IET.png';
import ieeeImg from '../content/Experience/IEEE.png';
import orbailixImg from '../content/Experience/Orbailix.png';
import stemImg from '../content/Experience/STEM Society.png';
import guidingSocietyImg from '../content/Experience/Guiding Society.png';
import pifImg from '../content/Experience/Pakistan Innovation Foundation.png';

function Experience() {
  const experiences = [
    {
      title: 'Chief Operating Officer',
      company: 'TeachRica Pvt Ltd Powered by EncoderBytes',
      date: 'Aug 2023-Till Now',
      link: 'https://www.linkedin.com/company/teachrica/?originalSubdomain=pk',
      img: teachricaImg,
    },
    {
      title: 'Data Engineer',
      company: 'National Center of Artificial Intelligence, CISNR Lab UET Peshawar',
      date: 'Aug 2023-Till Now',
      link: 'https://cisnr.com/',
      img: cisnrImg,
    },
    {
      title: 'Instructor',
      company: 'Microsoft College of Computer Management Abbottabad - MCCM',
      date: '2023-2024',
      link: 'https://www.facebook.com/p/Microsoft-College-of-Computer-Management-Abbottabad-MCCM-61555825181714/',
      img: mccmImg,
    },
    {
      title: 'Google Developer Student Clubs Lead',
      company: 'Google Inc.',
      date: '2023-2024',
      link: 'https://gdsc.community.dev/comsats-university-islamabad-abbottabad-pakistan/',
      img: gdscImg,
    },
    {
      title: 'General Secretary',
      company: 'IET OnCampus, COMSATS University Islamabad, Abbottabad Network',
      date: '2020-2023',
      link: 'https://www.cuiatd.edu.pk/iet-on-campus-cui-abbottabad-campus-network/',
      img: ietImg,
    },
    {
      title: 'Media Head',
      company: 'IEEE COMSATS Abbottabad Chapter',
      date: '2020-2022',
      link: 'https://www.cuiatd.edu.pk/students/clubs-societies/ieee-society/',
      img: ieeeImg,
    },
    {
      title: 'Co-Founder and Chief Technology Officer (CTO)',
      company: 'Orbailix',
      date: '2021-2022',
      link: 'https://www.linkedin.com/company/orbailix/?originalSubdomain=pk',
      img: orbailixImg,
    },
    {
      title: 'STEM and Robotics Intern',
      company: 'National Center of Robotics and Automation Peshawar',
      date: 'July 2022',
      link: 'https://www.uetpeshawar.edu.pk/aral/index.html',
      img: stemImg,
    },
    {
      title: 'Robotics Teacher’s Assistant',
      company: 'Pakistan Innovation Foundation',
      date: 'July 2019',
      link: 'https://pif.org.pk/',
      img: pifImg,
    },
    {
      title: 'Vice President',
      company: 'Edwardes STEM Society',
      date: '2018-2019',
      link: 'https://www.facebook.com/EdwardesSTEM/',
      img: stemImg,
    },
    {
      title: 'Media Coordinator',
      company: 'Student’s Welfare and Guiding Society',
      date: '2018-2019',
      link: 'https://www.facebook.com/ecswags/',
      img: guidingSocietyImg,
    },
  ];

  return (
    <div id='experience' className="mt-32 p-8 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-white">Professional Experience</h1>
      <div className="grid gap-6">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
}

const ExperienceCard = ({ experience, index }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  // Slide-in effect when in view
  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(-100%)',
    config: { duration: 1000 },
    delay: index * 100, // Staggered animation for each experience
  });

  // Hover effect
  const hoverEffect = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...slideIn, ...hoverEffect }}
      className="flex items-center bg-white p-4 shadow-lg rounded-lg transform transition-transform duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={experience.img}
        alt={experience.company}
        className="w-20 h-20 mr-4 object-cover rounded-full"
      />
      <div>
        <h2 className="text-green-600 font-bold text-lg">
          {experience.title},{' '}
          <span className="text-black">{experience.company}</span>
        </h2>
        <p className="text-gray-500">{experience.date}</p>
        <a
          href={experience.link}
          className="text-blue-600 hover:underline mt-1 inline-block"
        >
          Click Here
        </a>
      </div>
    </animated.div>
  );
};

export default Experience;
