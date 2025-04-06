import React from "react";

import Ai from "../../public/Ai.png";
import Google from "../../public/google.png";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: Ai,
      name: "Ai",
      link: "https://ai-chatbot-q4f0.onrender.com",
    },
    {
      id: 2,
      logo: Google,
      name: "Google",
      link: "https://sambit-google.netlify.app/",  
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-600">
          Portfolio
        </h1>
        <p className="text-lg text-center text-gray-600">
          A showcase of my skills, tools, and featured projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {cardItem.map(({ id, logo, name, link }) => (
            <div
              className="border-[2px] rounded-lg shadow-lg bg-gradient-to-b from-indigo-100 to-white p-4 transform hover:scale-110 hover:shadow-2xl transition duration-300 cursor-pointer"
              key={id}
            >
              <div className="flex justify-center">
                <img
                  src={logo}
                  className="w-[100px] h-[100px] p-2 rounded-full border-4 border-indigo-300"
                  alt={`${name} logo`}
                />
              </div>
              <h2 className="text-xl font-bold text-center mt-4 text-indigo-700">
                {name}
              </h2>
              <p className="text-sm text-gray-600 text-center mt-2">
                Dive into the world of {name}, one of my specialties in
                development.
              </p>
              <div className="flex justify-around mt-6">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
