import React from 'react';
import profileImage from '../content/Images/Raees Azam.png';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function Profile() {
  const { ref: refLeft, inView: inViewLeft } = useInView({ triggerOnce: false });
  const { ref: refRight, inView: inViewRight } = useInView({ triggerOnce: false });
  const { ref: refImage, inView: inViewImage } = useInView({ triggerOnce: false });

  const fadeInImage = useSpring({
    opacity: inViewImage ? 1 : 0,
    transform: inViewImage ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 1000 }
  });

  const slideInLeft = useSpring({
    transform: inViewLeft ? 'translateX(0)' : 'translateX(-100%)',
    opacity: inViewLeft ? 1 : 0,
    config: { duration: 1000 }
  });

  const slideInRight = useSpring({
    transform: inViewRight ? 'translateX(0)' : 'translateX(100%)',
    opacity: inViewRight ? 1 : 0,
    config: { duration: 1000 }
  });

  return (
    <div id='profile' className="profile flex flex-col items-center bg-gray-900 text-white min-h-screen">
      <div className="w-full flex justify-center items-center bg-gray-900 mt-8 md:mt-0">
        <animated.img 
          ref={refImage}
          style={fadeInImage}
          src={profileImage}
          alt="Profile" 
          className="object-cover h-40 w-40 rounded-full md:rounded-md md:h-screen md:w-full"
        />
      </div>
      <div className="w-full flex flex-col justify-between p-8 bg-gray-900">
        <animated.div 
          ref={refLeft}
          style={slideInLeft}
          className="text-center bg-gray-800 p-8 rounded-lg mb-4"
        >
          <h2 className="text-xl font-bold mb-2">WHO AM I?</h2>
          <p>
            I make it my goal to look not only to my own interests, but also to the interests of others. Browse my Portoflio and discover the creative side of my being. Enough said for now, start scrolling.
          </p>
        </animated.div>
        <animated.div 
          ref={refRight}
          style={slideInRight}
          className="text-center bg-gray-800 p-8 rounded-lg mt-4"
        >
          <h2 className="text-xl font-bold mb-2">ROAMING OUTSIDE THE BOX</h2>
          <p>
            I'm never satisfied with the current trends and fads flying around the web. Creativity, I believe will never progress unless we climb outside the confining box of simplemindedness.
          </p>
        </animated.div>
      </div>
    </div>
  );
}

export default Profile;
