import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div id='contact' className="mt-32 bg-gray-900 min-h-screen flex justify-center items-center p-8">
      <div className=" text-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-4xl font-bold mb-4 text-white">Contact</h1>
        <p className="text-lg mb-4">
          Please don’t hesitate to contact me for more information about my work. I will reply when I’m available.
        </p>
        <p className="text-lg mb-8">Email: <a href="mailto:raees.info07@gmail.com" className="text-blue-500 hover:underline">raees.info07@gmail.com</a></p>
        
        <div className="flex space-x-4 mb-8">
          <a href="https://www.facebook.com/raees.azambhatti?mibextid=ZbWKwL" className="hover:text-gray-400"><FaFacebook size={30} /></a>
          <a href="https://www.twitter.com" className="hover:text-gray-400"><FaTwitter size={30} /></a>
          <a href="https://pk.linkedin.com/in/raeesazam07" className="hover:text-gray-400"><FaLinkedin size={30} /></a>
          <a href="https://github.com/roboraees07" className="hover:text-gray-400"><FaGithub size={30} /></a>
        </div>

        <form className="space-y-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="5" 
            className="w-full p-3 bg-gray-800 rounded text-white border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
