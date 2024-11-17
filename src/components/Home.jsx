import React from "react";

import pic from "../../public/photo.jpeg";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg shadow-lg py-12"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-4 order-2 md:order-1">
            <span className="text-xl font-semibold">Welcome to My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-4xl">
              <h1 className="font-bold">Hello, I'm a</h1>
              <ReactTyped
                className="text-yellow-300 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <p className="text-sm md:text-md text-justify text-gray-200">
            A skilled and passionate MERN (MongoDB, Express.js, React.js, Node.js) Stack Web Developer with  of hands-on experience building robust, scalable, and user-centric web applications.
            </p>
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-3">
                <h1 className="font-bold text-center text-yellow-300">
                  Available on
                </h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaSquareFacebook className="text-3xl cursor-pointer hover:text-blue-400" />
                  </li>
                  <li>
                    <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700" />
                  </li>
                  <li>
                    <IoLogoYoutube className="text-3xl cursor-pointer hover:text-red-600" />
                  </li>
                  <li>
                    <FaTelegram className="text-3xl cursor-pointer hover:text-blue-300" />
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h1 className="font-bold text-center text-green-400">
                  Currently Working On
                </h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-3xl hover:text-green-400 cursor-pointer transition-transform transform hover:scale-110" />
                  <SiExpress className="text-3xl hover:text-gray-300 cursor-pointer transition-transform transform hover:scale-110" />
                  <FaReact className="text-3xl hover:text-blue-400 cursor-pointer transition-transform transform hover:scale-110" />
                  <FaNodeJs className="text-3xl hover:text-green-600 cursor-pointer transition-transform transform hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px] border-4 border-yellow-300 shadow-lg"
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <hr className="border-yellow-300 mt-10" />
    </>
  );
}

export default Home;
