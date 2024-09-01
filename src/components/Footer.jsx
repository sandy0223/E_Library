import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">E-Library</h2>
            <p className="mt-2">Your gateway to a world of knowledge.</p>
          </div>

          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link to="/categories" className="hover:text-gray-300">
              Categories
            </Link>
            <Link to="/my-library" className="hover:text-gray-300">
              My Library
            </Link>
            <Link to="/e-journals" className="hover:text-gray-300">
              E-Journals
            </Link>
            <Link to="/magazines" className="hover:text-gray-300">
              Magazines
            </Link>
            <Link to="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 border-t border-blue-500 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} E-Library. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
