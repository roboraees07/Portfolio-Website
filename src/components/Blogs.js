import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import blogs from '../content/data/blogs.json'; // Your blog data

const Blogs = () => {
  return (
    <div id='blogs' className="mt-32 p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-8">Blogs</h1>
      <p className="text-lg mb-8">
        I believe that an effective way to learn something is by teaching others. I share everything I know about security and development through my articles and a weekly newsletter.
      </p>
      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

const BlogCard = ({ blog, index }) => {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false });

  // Slide-in effect when in view
  const slideIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0)' : 'translateX(100%)',
    config: { duration: 1000 },
    delay: index * 100, // Staggered effect for each blog
  });

  // Hover effect for title
  const hoverEffect = useSpring({
    transform: hovered ? 'scale(1.05)' : 'scale(1)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div 
      ref={ref} 
      style={slideIn} 
      className="border-b border-gray-700 pb-4"
    >
      <Link to={`/blogs/${blog.id}`} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}
      >
        <animated.h2 
          style={hoverEffect} 
          className="text-xl font-semibold text-white hover:text-gray-400 transition-colors duration-200"
        >
          {blog.title}
        </animated.h2>
      </Link>
      <p className="text-sm text-gray-500">{blog.date} - {blog.readTime}</p>
    </animated.div>
  );
};

export default Blogs;
