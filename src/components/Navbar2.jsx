import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import solarlogo from "../Images/logo3.webp";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Products", path: "/products" },
  { name: "Work With Us", path: "/workwithus" },
  { name: "Contact", path: "/contact" },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full sticky top-0 z-50  py-2">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-[#03132B] text-white rounded-full px-5 md:px-8 py-3 shadow-md transition-all duration-300">
        {/* Logo Section */}
        <div className="flex items-center h-12">
          <Link to="/" className="flex items-center">
            <img
              src={solarlogo}
              alt="Logo"
              className="w-12 h-12 object-contain pt-[1px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500 font-semibold underline underline-offset-4"
                  : "hover:text-orange-400 transition duration-200"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Call + Toggle Section */}
        <div className="flex items-center gap-4">
          {/* Call Info (Desktop) */}
          <a href="tel:+919310259325" className="flex items-center gap-2 ">
            <div className="bg-white p-2 rounded-full">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-white">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 mt-2 rounded-xl px-6 py-4 shadow-lg transition-all duration-300 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="block text-base font-medium text-white hover:text-orange-400"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}

          {/* Divider */}
          <div className="border-t border-gray-700 my-3"></div>

          {/* Mobile Call Info */}
          <div className="flex items-center gap-2">
            <div className="bg-white p-2 rounded-full">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-white">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar2;
