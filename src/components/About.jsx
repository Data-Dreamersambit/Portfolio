import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg shadow-lg py-12"
    >
      <div className="space-y-8">
        <h1 className="text-4xl font-extrabold text-yellow-300">About Me</h1>
        <p className="text-lg">
          Hello, I'm <span className="font-bold">Sambit</span>, a passionate Web
          Developer with a keen eye for building scalable and user-friendly
          applications using the MERN Stack. I am currently pursuing my{" "}
          <span className="font-bold">B.TECH</span> and actively sharpening my
          skills in full-stack development.
        </p>
        <div>
          <h1 className="text-green-300 font-bold text-2xl">
            Education & Training
          </h1>
          <ul className="list-disc list-inside text-gray-200 mt-3">
            <li>B.TECH in [Computer Science and Engineering], [Trident Academy of Technology], [2023-2027]</li>
            <li>[12th in Science Stream], [Udayanath Autonomous College Of Science & Technology], [2020-2022]</li>
            <li>[10th], [ Banamalipur Government High School], [2020]</li>
          </ul>
        </div>
        <div>
          <h1 className="text-green-300 font-bold text-2xl">Skills & Expertise</h1>
          <ul className="list-disc list-inside text-gray-200 mt-3">
            <li>Proficient in JavaScript, React, Node.js, Express, MongoDB</li>
            <li>Experienced with tools like  Tailwind CSS</li>
            {/* <li>Strong grasp of responsive design and performance optimization</li> */}
            <li>Effective problem-solving and communication skills</li>
          </ul>
        </div>
        
        
        <div>
          <h1 className="text-green-300 font-bold text-2xl">Mission Statement</h1>
          <p className="text-lg text-gray-200 mt-3">
            My mission is to leverage my skills and creativity to deliver
            innovative web solutions that exceed client expectations and
            contribute positively to the digital landscape. I am committed to
            continuous learning, growth, and seeking new challenges to expand my
            horizons.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
