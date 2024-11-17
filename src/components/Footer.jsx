import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr className="border-gray-300" />
      <footer className="py-10 bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Social Media Icons */}
            <div className="flex space-x-6 text-indigo-600">
              <FaFacebook
                size={28}
                className="hover:scale-110 duration-200 cursor-pointer"
              />
              <FaTwitter
                size={28}
                className="hover:scale-110 duration-200 cursor-pointer"
              />
              <FaInstagram
                size={28}
                className="hover:scale-110 duration-200 cursor-pointer"
              />
              <FaLinkedinIn
                size={28}
                className="hover:scale-110 duration-200 cursor-pointer"
              />
            </div>

            {/* Footer Text */}
            <div className="mt-8 border-t border-gray-300 pt-6">
              <p className="text-gray-600 text-sm">
                &copy; 2024 <span className="font-bold text-indigo-600">Sambit</span>. All rights reserved.
              </p>
              
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
