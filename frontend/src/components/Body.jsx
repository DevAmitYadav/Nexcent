import React from 'react';
import '../components/Body.css';

const Body = () =>  {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/T-hmKV-HdFcKD3FeKaAK2NvDqstO4SCIPE6nN7rfYx8.jpg"
          alt="Two people interacting with a large mobile device"
          className="w-full max-w-md"
          width="400"
          height="300"
        />
      </div>
      <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          The unseen of spending three years at Pixelgrade
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
        </p>
        <button className="final-button">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Body