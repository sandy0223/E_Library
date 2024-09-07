import React from "react";

const Contact = () => {
  return (
    <div>
      {/* <div className="center flex justify-center  flex-col items-center m-8">
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
      </div> */}

      <div className="main w-full flex flex-col items-center justify-center h-screen ">
        <img className="object-fill w-full h-full" src="https://images.indianexpress.com/2022/01/E-library.jpg" alt="" />
        <form className="form w-[25%] p-16 bg-blue-400 rounded-md absolute bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
">
          <div className="logo text-3xl font-mono text-center mb-8 border-2 rounded-xl p-2 bg-gray-100 text-blue-500"><h2>CONTACT US</h2></div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea className="form-control" id="message" rows="3" required />
          </div>
          <button type="submit" className="btn mt-2 bg-green-300 hover:bg-purple-300  w-full">Submit</button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
