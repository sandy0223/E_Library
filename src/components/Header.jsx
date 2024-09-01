import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-t from-purple-400 to-blue-300 shadow-lg font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl text-white font-bold Bungee_Inline">E-Library</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300">Home</Link>
            <Link to="/categories" className="hover:text-gray-300">Categories</Link>
            <Link to="/my-library" className="hover:text-gray-300">My Library</Link>
            <Link to="/e-journals" className="hover:text-gray-300">E-Journals</Link>
            <Link to="/magazines" className="hover:text-gray-300">Magazines</Link>
            <Link to="/about" className="hover:text-gray-300">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
          </div>
          <div className="Redirects bg-white rounded-xl">
            <button className='p-2 border-2 shadow-lg   rounded-xl border-black hover:bg-blue-600 hover:text-white'><Link to="/login">Login</Link></button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Home</Link>
            <Link to="/categories" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Categories</Link>
            <Link to="/my-library" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">My Library</Link>
            <Link to="/e-journals" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">E-Journals</Link>
            <Link to="/magazines" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Magazines</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
