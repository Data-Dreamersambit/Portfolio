import React, { useState } from "react";
import pic from "../../public/photo.jpeg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-md text-white">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <img src={pic} className="h-12 w-12 rounded-full shadow-md" alt="Profile" />
            <div>
              <h1 className="font-bold text-xl cursor-pointer">
                Sambit<span className="text-yellow-300 text-2xl">l</span>
              </h1>
              <p className="text-sm">Web Developer</p>
            </div>
          </div>
          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-110 duration-200 cursor-pointer hover:text-yellow-300"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-yellow-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Mobile Menu Icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? (
                <IoCloseSharp size={28} className="hover:text-yellow-300" />
              ) : (
                <AiOutlineMenu size={28} className="hover:text-yellow-300" />
              )}
            </div>
          </div>
        </div>
        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-6 text-lg">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-110 duration-200 font-semibold cursor-pointer hover:text-yellow-300"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-yellow-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
