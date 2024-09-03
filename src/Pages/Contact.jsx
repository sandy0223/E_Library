import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="center flex justify-center  flex-col items-center m-8">
        <div className="text-5xl font-normal flex justify-center  text-blue-700 ml-6 font-mono">
          Contact us
        </div>
        <div className="text-gray-800 border-2  border-black rounded-full  w-60 ml-6 pl-3 mt-6 ">
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="text-gray-800 border-2 border-black rounded-full w-60 ml-6 pl-3 mt-3">
          <input type="email" id="email" placeholder="Email" />
        </div>
        <div className="text-gray-800 border-2 border-black rounded-lg w-60 ml-6 pl-3 mt-3 p-8">
          <input type="text" id="text" placeholder="Message" />
        </div>
        <div className="text-white border-blue-800  bg-blue-600 rounded-full text-center w-60 ml-6 pl-3 p-1 mt-3">
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
