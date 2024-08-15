import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

// Import all your honor images
import pecIcon from '../content/Achievemnets/pec-acknowledge.png';
import googleIcon from '../content/Achievemnets/gdsc-ack.png';
import govIcon from '../content/Achievemnets/Guest Speaker at Govt College Abbottabad.jfif';
import gdscLeadIcon from '../content/Achievemnets/GDSC OnBoarding Swags.jfif';
import geminiIcon from '../content/Achievemnets/BwAI- Google for Developers.jfif';
import solutionChallengeIcon from '../content/Achievemnets/Solution Challenge 2024 Top 100 Finalist.jfif';
import cloudSeekhoIcon from '../content/Achievemnets/Google Cloud seekho.jpeg';
import gdgIcon from '../content/Achievemnets/Lead Recognition by GDG Cloud Islamabad.jpeg';
import fypIcon from '../content/Achievemnets/PEC Fully Funded Project.jfif';
import techFestIcon from '../content/Achievemnets/2nd-prize-tech-fest.png';
import nasaIcon from '../content/Achievemnets/NASA Space App Challenge 2019 Peshawar Winner.jpeg';
import startupIcon from '../content/Achievemnets/Startup Weekend Peshawar 2017.jpg';

function Honors() {
  const [activeIndex, setActiveIndex] = useState(null);

  const honors = [
    { 
      image: pecIcon, 
      title: 'Acknowledged by Pakistan Engineering Council', 
      description: 'Acknowledged by Pakistan Engineering Council and Secured 2nd Prize for providing a sustainable Engineering Solution under UN SDGs and Sustainable Business Model ( AgriTech ) at KP Engineering Capstone Expo 2024 by PEC',
      detailsLink: 'https://pec-ppdc.org/engineering-capstone-expo/'
    },
    { 
      image: googleIcon, 
      title: 'Acknowledged by Google for Developers', 
      description: 'Acknowledged by Google for developers by inviting me as a Guest Speaker in the Global Google developers student Clubs Graduation Ceremony 2024',
      detailsLink: 'https://gdsc.community.dev/events/details/developer-student-clubs-gdsc-global-presents-graduation-of-2023-2024-gdsc-leads/'
    },
    { 
      image: govIcon, 
      title: 'Acknowledgment by Government College of Technology Abbottabad', 
      description: 'Acknowledgment by Government College of Technology Abbottabad by inviting me as a Guest Speaker and Resource person to train their students on the advancement in Arduino and their key concepts',
      detailsLink: 'https://web.facebook.com/permalink.php?story_fbid=pfbid0ApAWiqR83Aj8mebZWD4ynE9JLhesNniRbuzMP9fe7WcgeRMb1wK7GPdzrDwXDhdBl&id=100075626425028&_rdc=1&_rdr'
    },
    { 
      image: gdscLeadIcon, 
      title: 'Selected as a GDSC Lead', 
      description: 'Selected as a Google developers student club lead by the Google Team of SAF Region for 2023-2024 tenure and acknowledged by receiving onboarding swags',
      detailsLink: 'https://gdsc.community.dev/comsats-university-islamabad-abbottabad-pakistan/'
    },
    { 
      image: geminiIcon, 
      title: 'Gemini-Build with AI', 
      description: 'Acknowledgment by Google for Developers for successfully conducting the only Build with AI Hackathon in Pakistan and received an appreciation Token in the shape of Gemini Cool Swags',
      detailsLink: 'https://gdsc.community.dev/events/details/developer-student-clubs-comsats-university-islamabad-abbottabad-pakistan-presents-build-with-ai-hackathon-abbottabad/'
    },
    { 
      image: solutionChallengeIcon, 
      title: 'Google Solution Challenge 2024', 
      description: 'Acknowledged and Appreciated by Google for Developers for being in Top 100 Finalists from all over the world to represent AgriTech where almost 5000 projects were submitted. Received Top 100 Finalist T-Shirt as a Token of appreciation',
      detailsLink: 'https://developers.google.com/community/gdsc-solution-challenge/winners'
    },
    { 
      image: cloudSeekhoIcon, 
      title: 'Google CloudSeekho season 05 Challenge', 
      description: 'Acknowledged by Google Cloud for completing all the three tiers of Google CloudSeekho season 05 Challenge by securing Top spot with 11450 points and earned 15+ digital badges of Generative AI Learning Paths. Received Cool Swags from Google Cloud as a Token of appreciation.',
      detailsLink: 'https://developers.google.com/profile/u/115769942136393563919'
    },
    { 
      image: gdgIcon, 
      title: 'Lead Recognition by GDG Cloud Islamabad', 
      description: 'Acknowledged as a best Lead in AI-Devfest’23 Conference by GDG Cloud Islamabad Manager Miss Irum Zahra by giving Sovinior',
    },
    { 
      image: fypIcon, 
      title: 'FYP Fully Funded by PEC', 
      description: 'My Final Year Project “AgriTech” is being fully funded by Pakistan Engineering council of worth almost 0.2 Million PKR',
    },
    { 
      image: techFestIcon, 
      title: '2nd Prize Winner of TechFest 2021', 
      description: 'Awarded with 2nd Prize among inter University Project Exhibition Competition “TechFest” by displaying modified RLC Trainer called as “TetraX”',
    },
    { 
      image: nasaIcon, 
      title: 'NASA Space App Challenge 2019 Peshawar Winner', 
      description: 'Winner from Peshawar region for NASA SpaceApp Challenge 2019 by Team RaheQamar and became the global Nominee award winner',
    },
    { 
      image: startupIcon, 
      title: 'Startup Weekend Peshawar 2017', 
      description: '3rd Prize winner at Startup Weekend Peshawar at BaseCamp Peshawar 2.0 by giving business model on “Meat Inspector”',
      detailsLink: 'https://technologytimes.pk/2017/09/29/headline-startup-weekend-comes-to-an-end/'
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id='honors' className="mt-32 flex flex-col items-center bg-gray-900 text-white p-8 min-h-screen">
      <h2 className="text-3xl font-bold mb-8">Honors</h2>
      <p className="mb-4 text-center">List of my accomplishments. Tap or mouse hover on the thumbnail to know more</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {honors.map((honor, index) => (
          <HonorItem 
            key={index} 
            honor={honor} 
            index={index} 
            activeIndex={activeIndex} 
            setActiveIndex={setActiveIndex} 
            handleToggle={handleToggle} 
          />
        ))}
      </div>
    </div>
  );
}

const HonorItem = ({ honor, index, activeIndex, setActiveIndex, handleToggle }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(100%)',
    config: { duration: 1000 }
  });

  const hoverEffect = useSpring({
    transform: hovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  return (
    <animated.div 
      ref={ref} 
      style={{ ...slideIn, ...hoverEffect }} 
      className="relative group cursor-pointer" 
      onClick={() => handleToggle(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={honor.image} alt={honor.title} className="w-full h-auto rounded-md" />
      <div className={`absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center text-center ${activeIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 p-4`}>
        <h3 className="text-xl font-bold mb-2">{honor.title}</h3>
        <p className="mb-4">{honor.description}</p>
        {honor.detailsLink && (
          <a href={honor.detailsLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded">
            Read More
          </a>
        )}
      </div>
    </animated.div>
  );
};

export default Honors;
