import React from 'react';
import '../components/BodyFooter.css';

const BodyFooter = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
        <img 
          alt="Illustration of a person interacting with a mobile phone interface" 
          className="w-3/4 md:w-full"
          height="300"
          src="https://storage.googleapis.com/a1aa/image/8AS5DdsuwsDPxOJ4D0T7pxJUQvHguh8d9y8Epy2QQsg.jpg"
          width="300"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How to design your site footer like we did
        </h2>
        <p className="text-gray-600 mb-6">
          Learn how to create an effective footer with proper styling and a user-friendly interface. This is essential for an intuitive web design.
        </p>
        <button className="final-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default BodyFooter;
