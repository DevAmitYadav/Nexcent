import React from 'react';
import '../components/Bodyinner.css';

const BodyInner = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Helping a local <span className="text-green-600">business reinvent itself</span>
            </h2>
            <p className="mt-2 text-base text-gray-500">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <i className="fas fa-users text-3xl text-green-600"></i>
              <p className="mt-2 text-2xl font-semibold text-gray-900">2,245,341</p>
              <p className="mt-1 text-base text-gray-500">Members</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-bicycle text-3xl text-green-600"></i>
              <p className="mt-2 text-2xl font-semibold text-gray-900">46,328</p>
              <p className="mt-1 text-base text-gray-500">Clubs</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-calendar-check text-3xl text-green-600"></i>
              <p className="mt-2 text-2xl font-semibold text-gray-900">828,867</p>
              <p className="mt-1 text-base text-gray-500">Event Bookings</p>
            </div>
            <div className="flex flex-col items-center">
              <i className="fas fa-credit-card text-3xl text-green-600"></i>
              <p className="mt-2 text-2xl font-semibold text-gray-900">1,926,436</p>
              <p className="mt-1 text-base text-gray-500">Payments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyInner;