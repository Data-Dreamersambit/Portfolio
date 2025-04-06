import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import reactjs from '../../public/reactjs.png'
import node from '../../public/node.png'
import mongodb from '../../public/mongodb.jpg'
 

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: java,
      name: "Java",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 6,
      logo: node,
      name: "Node.js",
    },
    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    },
    
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-4xl font-extrabold mb-6 text-center text-indigo-600">
          Experience
        </h1>
        <p className="text-lg text-center text-gray-600 mb-10">
         Currently I am learning 
          the following technologies:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-7">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center bg-gradient-to-b from-indigo-100 to-white border-[2px] rounded-lg shadow-lg p-4 transform hover:scale-110 hover:shadow-2xl transition duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[100px] h-[100px] rounded-full border-4 border-indigo-300"
                alt={`${name} logo`}
              />
              <h2 className="mt-4 text-lg font-semibold text-indigo-700">
                {name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
