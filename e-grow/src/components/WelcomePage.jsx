import React from 'react';

function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 text-white">
      <header className="text-center">
        <img className="inline-block h-1em align-middle" style={{ height: '6em', verticalAlign: 'middle' }} src="./logo1.png" alt="e-grow" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website!</h1>
        <p className="text-lg md:text-xl font-light">
          Your journey into excellence starts here.
        </p>
      </header>
      <div className="mt-8 flex space-x-4">
        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
          Get Started
        </button>
        <button className="px-6 py-3 bg-transparent border border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-indigo-600 transition duration-300">
          Learn More
        </button>
      </div>
      <footer className="absolute bottom-4 text-sm text-gray-200">
        &copy; {new Date().getFullYear()} e-grow. All rights reserved.
      </footer>
    </div>
  );
}

export default WelcomePage;
