import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className=" p-8 w-auto bg-slate-800  ">
      <div className="main flex flex-col items-center h-[60%]">
        <div className="flex flex-row justify-start h-[40vh]">
          <p className='text-white  text-6xl poppins-bold-italic w-[30%]  p-4 '>Choose Your Learning Path Wisely...</p>
            <img className='w-[40%] ' src="/images/image 24.svg" alt="boy" />
          <div className="images">
          </div>
          <div className="flex flex-col mr-8 rounded-2xl w-[15%] items-center justify-center">
          <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%] border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/">Home</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%]  border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/Login">Login</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%]  border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/Contact">Contact Us</Link>
            <Link className='text-black font-bold hover:text-white hover:bg-slate-300 w-[60%] border-2 border-slate-400 bg-slate-50 text-center p-2 mb-2 rounded-full' to="/About">About Us</Link></div>

          <div className="text-white ">
            <ul className='flex flex-row w-8 gap-8 text-2xl'>
              <li><a href="#"><i class="ri-facebook-circle-line"></i></a></li>
              <li><a href="#"><i class="ri-whatsapp-line"></i></a></li>
              <li><a href="#"><i class="ri-instagram-line"></i></a></li>
              <li><a href="#"><i class="ri-linkedin-line"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="text-9xl text-white mb-4 mt-4 Orbitron shadow-inner shadow-white  p-4"><span className='text-yellow-300'>LEARN</span>TEL</div>
      </div>

    </footer>
  );
};

export default Footer;
