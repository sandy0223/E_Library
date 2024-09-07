// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-md p-8 rounded-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Welcome to <span className="font-semibold">E-Library</span>, your gateway to a world of knowledge. We provide
          access to a wide range of digital resources, including e-books, academic papers, journals, and multimedia
          content. Whether you're a student, researcher, or faculty member, our mission is to offer a seamless and
          comprehensive platform for all your learning and research needs.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our vision is to create a world where education is accessible to everyone, regardless of location or
          background. We believe that digital resources play a critical role in shaping the future of learning. At
          E-Library, we are dedicated to providing an inclusive and user-friendly platform that empowers learners to
          explore, discover, and succeed.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
          <li>Extensive collection of digital resources in various formats (PDF, EPUB, MP3, MP4).</li>
          <li>Easy-to-use platform with intuitive navigation.</li>
          <li>Secure user authentication to protect your account and personal data.</li>
          <li>Cross-device compatibility, allowing access on your desktop, tablet, or smartphone.</li>
          <li>Constant updates to ensure our collection remains relevant and up-to-date.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Have questions or feedback? We’d love to hear from you. Feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a> and we’ll get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default About;
