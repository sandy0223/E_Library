import React from "react";

const Contact = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-300 to-blue-500 h-screen w-full flex flex-col items-center justify-center">
      {/* <img
        className="object-cover w-full h-full absolute inset-0 -z-10"
        src="https://images.indianexpress.com/2022/01/E-library.jpg"
        alt="Library background"
      /> */}

      <form className="w-[90%] md:w-[60%] lg:w-[30%] p-8 bg-blue-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="text-3xl font-mono text-center mb-8 border-2 rounded-xl p-2 bg-gray-100 text-blue-500">
          <h2>CONTACT US</h2>
        </div>

        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            id="name"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            id="email"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message:
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            id="message"
            rows="3"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-green-300 hover:bg-purple-300 rounded-md text-white font-semibold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
