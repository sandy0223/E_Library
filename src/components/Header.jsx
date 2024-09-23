import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="bg-gradient-to-t from-purple-700 to-slate-900 shadow-lg font-mono fixed top-0 left-0 w-screen z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <img className='w-[85px] absolute top-2 left-10' src="/images/ELogo.png" alt="logo" /><span className='absolute top-8 text-2xl font-bold font-sans   left-[8%] text-white '>LEARNTEL</span>
            {/* <h1 className="text-2xl text-white font-bold Bungee_Inline">LEARNTEL <i class="ri-book-open-fill"></i></h1> */}
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-white hover:text-gray-300">Home</Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="hover:text-gray-300 text-white focus:outline-none"
              >
                Categories
              </button>
              {dropdownOpen && (
                <div className="absolute top-4 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <Link
                    to="/e-journals"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Journals
                  </Link>
                  <Link
                    to="/magazines"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Magazines
                  </Link>
                  <Link
                    to="/novels"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
                  >
                    Novels
                  </Link>
                </div>
              )}
            </div>
            <Link to="/my-library" className="hover:text-gray-300 text-white">My Library</Link>
            <Link to="/about" className="hover:text-gray-300 text-white">About Us</Link>
            <Link to="/contact" className="hover:text-gray-300 text-white">Contact Us</Link>
          </div>
          <div className="Redirects bg-white rounded-xl">
            <button className='p-2 border-2 shadow-lg rounded-xl border-black hover:bg-blue-600 hover:text-white'>
              <Link to="/login">Login</Link>
            </button>
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
            <div className="relative">
              <button 
                onClick={handleMouseEnter} 
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500 focus:outline-none"
              >
                Categories
              </button>
              {dropdownOpen && (
                <div 
                  onMouseLeave={handleMouseLeave} 
                  className="pl-6 mt-2 space-y-1"
                >
                  <Link 
                    to="/e-journals" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
                  >
                    Journals
                  </Link>
                  <Link 
                    to="/magazines" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
                  >
                    Magazines
                  </Link>
                  <Link 
                    to="/novels" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500"
                  >
                    Novels
                  </Link>
                </div>
              )}
            </div>
            <Link to="/my-library" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">My Library</Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">About Us</Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-blue-500">Contact Us</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
