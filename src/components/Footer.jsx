import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="mt-auto p-4">
    <p className="text-sm">Follow Us</p>
    <div className="flex space-x-4 justify-center">
      <Link to="#" className="hover:text-zinc-200">
        Facebook
      </Link>
      <Link to="#" className="hover:text-zinc-200">
        LinkedIn
      </Link>
      <Link to="#" className="hover:text-zinc-200">
        Twitter
      </Link>
    </div>
  </footer>
  );
};

export default Footer;
