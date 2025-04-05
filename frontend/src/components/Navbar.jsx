import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-transparent text-white py-4 px-6 md:px-8 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="text-lg font-semibold flex items-center space-x-2">
        {/* <img src="/logo.png" alt="Reflect Logo" className="w-6 h-6" /> */}
        <span>Finally Placed</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-8 text-gray-300">
        {["Product", "Pricing", "Company", "Blog", "Changelog"].map((item) => (
          <li
            key={item}
            className="hover:text-white transition duration-300 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Login & CTA (Desktop) */}
      <div className="hidden md:flex items-center space-x-6">
        <button onClick={() => {
          navigate("/login");
        }} className="text-gray-300 hover:text-white transition duration-300">
          Login
        </button>
        <button onClick={() => {
          navigate("/register");
        }} className="text-gray-300 hover:text-white transition duration-300">
          SignUp
        </button>
        <button className="bg-[#3a1c63] hover:bg-[#50228a] text-white py-2 px-4 rounded-lg shadow-lg transition duration-300">
          Start free trial
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0a0a0a] bg-opacity-90 p-6 shadow-lg flex flex-col items-center space-y-6 md:hidden">
          {["Product", "Pricing", "Company", "Blog", "Changelog"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                {item}
              </a>
            )
          )}
          <button onClick={() => {
          navigate("/login");
        }}className="text-gray-300 hover:text-white transition duration-300">
            Login
          </button>
          <button onClick={() => {
          navigate("/register");
        }}className="bg-[#3a1c63] hover:bg-[#50228a] text-white py-2 px-4 rounded-lg shadow-lg transition duration-300">
            Start free trial
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
