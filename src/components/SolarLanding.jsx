import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  FaPhoneAlt,
  FaTools,
  FaProjectDiagram,
  FaCog,
  FaRecycle,
  FaStethoscope,
  FaHandshake,
  FaGasPump,
  FaBriefcase,
  FaUserTie,
} from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";
import { MdSolarPower, MdMemory } from "react-icons/md";
import { GiLightningTrio, GiGroundSprout, GiWaterDrop } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import solarlogo from "../Images/logo2.webp";

// Navigation Links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      {
        name: "Installation & Commissioning (INC)",
        path: "/Installation_&_Commissioning_(INC)",
        icon: <FaTools />,
      },
      {
        name: "Engineering, Procurement, and Construction (EPC)",
        path: "/Engineering_Procurement_and_Construction_(EPC)",
        icon: <FaProjectDiagram />,
      },
      {
        name: "Operations & Maintenance (O&M)",
        path: "/Operations_&_Maintenance_(O&M)",
        icon: <FaCog />,
      },
      {
        name: "Annual Maintenance Contracts (AMC)",
        path: "/Annual_Maintenance_Contracts(AMC)",
        icon: <FaRecycle />,
      },
      {
        name: "Health Check ups",
        path: "/Health_Check_ups",
        icon: <FaStethoscope />,
      },
    ],
  },
  { name: "Projects", path: "/projects" },
  {
    name: "Products",
    path: "/products",
    dropdown: [
      { name: "Solar Panel", path: "/Solar-pannel", icon: <MdSolarPower /> },
      { name: "Solar Pump", path: "/solar-pump", icon: <GiWaterDrop /> },
      { name: "Micro Inverter", path: "/micro-inverter", icon: <MdMemory /> },
      { name: "Earthing", path: "/earthing", icon: <GiGroundSprout /> },
      {
        name: "Lightning Arrestor (LA)",
        path: "/LA",
        icon: <GiLightningTrio />,
      },
      {
        name: "Diesel/Petrol Genset",
        path: "/Diesel/Petrol%20Genset",
        icon: <FaGasPump />,
      },
    ],
  },
  {
    name: "Work With Us",
    path: "/workwithus",
    dropdown: [
      { name: "Become our Dealer", path: "/workwithus", icon: <FaHandshake /> },
      {
        name: "Become Our Individual Partner",
        path: "/become-partner",
        icon: <FaUserTie />,
      },
      {
        name: "Add Our Services to Your Existing Business",
        path: "/add-our-services",
        icon: <FaBriefcase />,
      },
    ],
  },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

export default function SolarLanding() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > -10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setDesktopDropdown(null);
    setMobileMenuOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Close desktop dropdown only if mouse leaves BOTH the nav area and the dropdown panel
  const closeDropdownOnOutsideHover = (e) => {
    const next = e.relatedTarget;
    const overDropdown =
      dropdownRef.current && next && dropdownRef.current.contains(next);
    const overNav = navRef.current && next && navRef.current.contains(next);
    if (!overDropdown && !overNav) {
      setDesktopDropdown(null);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
      onMouseLeave={closeDropdownOnOutsideHover}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 md:px-8 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={solarlogo}
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center gap-8 text-base font-medium"
        >
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDesktopDropdown(link.name)}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 cursor-pointer ${
                      isActive
                        ? "text-orange-500 font-semibold"
                        : "hover:text-orange-400"
                    }`
                  }
                >
                  {link.name}
                  <IoIosArrowDown className="text-sm" />
                </NavLink>
              </div>
            ) : (
              <NavLink
                key={link.name}
                to={link.path}
                onMouseEnter={() => setDesktopDropdown(null)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 font-semibold"
                    : "hover:text-orange-400"
                }
              >
                {link.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Call Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="tel:+919310259325"
            className="hidden md:flex items-center gap-2"
          >
            <div className="bg-white p-2 rounded-full shadow">
              <FaPhoneAlt className="text-green-800" />
            </div>
            <div className="text-sm text-black">
              <p className="font-medium">Requesting A Call:</p>
              <p className="font-bold">+91 9310259325</p>
            </div>
          </a>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(true)}
          >
            <HiOutlineMenu />
          </button>
        </div>
      </div>

      {/* Desktop Dropdown */}
      <AnimatePresence>
        {desktopDropdown && (
          <motion.div
            ref={dropdownRef}
            key={desktopDropdown}
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="absolute top-full left-0 w-full bg-white shadow-lg z-40 origin-top"
          >
            <div className="max-w-7xl mx-auto px-5 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {navLinks
                .find((l) => l.name === desktopDropdown)
                ?.dropdown?.map((sub, i) => (
                  <motion.div
                    key={sub.name}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 30, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  >
                    <Link
                      to={sub.path}
                      className="flex items-start gap-4 p-5 hover:bg-gray-100 rounded-xl transition"
                    >
                      <span className="text-3xl text-green-700">
                        {sub.icon}
                      </span>
                      <p className="font-semibold text-gray-900">{sub.name}</p>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center p-5 border-b">
              <Link to={"/"}>
                <img
                  src={solarlogo}
                  alt="Logo"
                  className="w-12 h-12 object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl"
              >
                <HiOutlineX />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.name}>
                    <div className="flex justify-between items-center w-full">
                      {/* Parent Link */}
                      <Link
                        to={link.path}
                        className="text-lg font-semibold py-2 flex-1"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {/* Dropdown Toggle */}
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.name ? null : link.name
                          )
                        }
                        className="p-2"
                      >
                        <IoIosArrowDown
                          className={`transition-transform ${
                            mobileDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    <AnimatePresence>
                      {mobileDropdown === link.name && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 space-y-2"
                        >
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              className="block py-1 text-gray-600 text-base"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block text-lg font-semibold py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
