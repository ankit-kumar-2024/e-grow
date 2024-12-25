import React from 'react';

function WelcomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 ml-22 text-center">
        <h1 className="text-xl">Welcome to the Responsive Page</h1>
      </header>

      {/* Navigation for Small Screens (below Header) */}
      <nav className="lg:hidden bg-gray-800 text-white">
        <div className="flex justify-around py-2">
          <button className="hover:bg-gray-700 px-4 py-2">Home</button>
          <button className="hover:bg-gray-700 px-4 py-2">About</button>
          <button className="hover:bg-gray-700 px-4 py-2">Services</button>
          <button className="hover:bg-gray-700 px-4 py-2">Contact</button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex">
        <nav className="hidden lg:flex lg:flex-col lg:w-20 bg-gray-800 text-white sticky side-nav">
          <div className="flex flex-col justify-between h-full">
            
            <div>
              <button className="p-4 hover:bg-gray-700 w-full">Home</button>
              <button className="p-4 hover:bg-gray-700 w-full">About</button>
              <button className="p-4 hover:bg-gray-700 w-full">Services</button>
              <button className="p-4 hover:bg-gray-700 w-full">Contact</button>
            </div>

            {/* Footer Buttons */}
            <div className="p-4 flex justify-between items-center">
              <button className="text-sm text-gray-400">Prev</button>
              <button className="text-sm text-gray-400">Next</button>
            </div>
          </div>
        </nav>

        {/* Main Content (Body) */}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded shadow-lg">
                <img
                  src="https://via.placeholder.com/300"
                  alt={`Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h3 className="text-lg">Card Title</h3>
                <p>This is a description of the card.</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      <footer className="lg:hidden bg-gray-800 text-white p-4 fixed bottom-0 left-0 w-full flex justify-between items-center">
        <button className="text-sm text-gray-400">Prev</button>
        <button className="text-sm text-gray-400">Next</button>
      </footer>
    </div>

  );
}

export default WelcomePage;
