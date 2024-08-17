import React, { useState } from 'react';

// Import all your skill icons
import AdobeIllustratorIcon from '../content/Skills/Adobe Illustrator.png';
import AdobePhotoshopIcon from '../content/Skills/Adobe Photoshop.png';
import ArduinoIcon from '../content/Skills/Arduino.png';
import ArtificialIntelligenceIcon from '../content/Skills/Artificial Intellegence.jpg';
import CoralDrawIcon from '../content/Skills/Coral Draw.png';
import CSSIcon from '../content/Skills/CSS.png';
import GoogleCloudIcon from '../content/Skills/Google Cloud.png';
import GoogleCOLABIcon from '../content/Skills/Google COLAB.png';
import HTMLIcon from '../content/Skills/HTML.png';
import ImageProcessingIcon from '../content/Skills/Image Processing.png';
import JavaIcon from '../content/Skills/Java.png';
import JavaScriptIcon from '../content/Skills/JavaScript.webp';
import KerasIcon from '../content/Skills/Keras.png';
import LEGOEV3RobotsIcon from '../content/Skills/LEGO EV3 Robots.png';
import MATLABIcon from '../content/Skills/MATLAB.gif';
import mBlockIcon from '../content/Skills/mblock.png'; 
import MissionPlannerIcon from '../content/Skills/Mission Planner.png';
import NAORobotsIcon from '../content/Skills/NAO Robots.jfif';
import ProteusIcon from '../content/Skills/Proteus.png';
import PythonIcon from '../content/Skills/python.jfif';
import RaspberryPiIcon from '../content/Skills/Raspberrypi.svg';
import TensorflowIcon from '../content/Skills/Tensorflow.png';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Skills() {
  const skills = [
    { icon: AdobeIllustratorIcon, name: 'Adobe Illustrator' },
    { icon: AdobePhotoshopIcon, name: 'Adobe Photoshop' },
    { icon: ArduinoIcon, name: 'Arduino' },
    { icon: ArtificialIntelligenceIcon, name: 'Artificial Intelligence' },
    { icon: CoralDrawIcon, name: 'Coral Draw' },
    { icon: CSSIcon, name: 'CSS' },
    { icon: GoogleCloudIcon, name: 'Google Cloud' },
    { icon: GoogleCOLABIcon, name: 'Google COLAB' },
    { icon: HTMLIcon, name: 'HTML' },
    { icon: ImageProcessingIcon, name: 'Image Processing' },
    { icon: JavaIcon, name: 'Java' },
    { icon: JavaScriptIcon, name: 'JavaScript' },
    { icon: KerasIcon, name: 'Keras' },
    { icon: LEGOEV3RobotsIcon, name: 'LEGO EV3 Robots' },
    { icon: MATLABIcon, name: 'MATLAB' },
    { icon: mBlockIcon, name: 'mBlock' },
    { icon: MissionPlannerIcon, name: 'Mission Planner' },
    { icon: NAORobotsIcon, name: 'NAO Robots' },
    { icon: ProteusIcon, name: 'Proteus' },
    { icon: PythonIcon, name: 'Python' },
    { icon: RaspberryPiIcon, name: 'Raspberry Pi' },
    { icon: TensorflowIcon, name: 'TensorFlow' },
  ];

  return (
    <div id='skills' className="mt-32 flex flex-col items-center bg-gray-900 text-white p-16 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 uppercase">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
        {skills.map((skill, index) => (
          <Skill key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

const Skill = ({ icon, name }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  const fadeInScaleUp = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 1000 }
  });

  const hoverEffect = useSpring({
    transform: hovered ? 'scale(1.2)' : 'scale(1)',
    config: { tension: 300, friction: 10 }
  });

  return (
    <animated.div 
      ref={ref} 
      style={{ ...fadeInScaleUp, ...hoverEffect }} 
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={icon} alt={name} className="w-16 h-16 cursor-pointer mb-2 md:mb-8" />
      <p className="absolute top-16 mb-2 text-center opacity-0 group-hover:opacity-100 bg-opacity-75 px-2 py-1 rounded text-xs md:text-base">
        {name}
      </p>
    </animated.div>
  );
};

export default Skills;
