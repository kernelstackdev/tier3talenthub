import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold flex items-center space-x-2">
              <Link
                to="/"
                className="hover:text-yellow-200 transition duration-300"
              >
                Tier3 Talent Hub
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:text-yellow-200 transition duration-300"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center space-x-2 hover:text-yellow-200 transition duration-300"
            >
              <span>About Us</span>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-200 focus:outline-none transition duration-300"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden bg-blue-700 rounded-b-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <FaHome />
                <span>Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-800 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <span>About Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
