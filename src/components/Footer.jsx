import { useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaDribbble,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import CallBackSection from "./CallBackSection";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Products", path: "/products" },
  { name: "Work With Us", path: "/workwithus" },
  { name: "Contact", path: "/contact" },
];

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#00122E] text-white GetfontHomeDash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Call Back Box */}
        <CallBackSection />

        {/* Main Footer */}
        <footer className="pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-6">
            {/* Contact Info */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold border-b border-green-800 pb-1 mb-3">
                Contact Info
              </h3>
              <ul className="space-y-1 text-xs sm:text-sm text-[#B0B9D1]">
                <li className="flex items-center gap-2 break-all">
                  <FaPhoneAlt /> +91 9310259325
                </li>
                <li className="flex items-center gap-2 break-all">
                  <FaEnvelope /> admin@divypower.com
                </li>
                <li className="flex items-center gap-2 break-all">
                  <FaEnvelope /> Info@divypower.com
                </li>
                <li className="flex items-center gap-2 break-all">
                  <FaEnvelope /> sales@divypower.com
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold border-b border-green-800 pb-1 mb-3">
                Useful Links
              </h3>
              <div className="grid grid-cols-2 gap-1 text-[#B0B9D1] text-xs sm:text-sm">
                {routes.map((route) => (
                  <NavLink
                    key={route.name}
                    to={route.path}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <FaAngleRight /> {route.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Our Solutions + Social */}
            <div>
              <h3 className="text-sm sm:text-base font-semibold border-b border-green-800 pb-1 mb-3">
                Our Solutions
              </h3>
              <ul className="text-[#B0B9D1] text-xs sm:text-sm space-y-1">
                {[
                  "Solar Rooftop",
                  "Battery Storage",
                  "Solar Street Lights",
                  "Hybrid Solar Systems",
                  "Solar Water Pump",
                  "EV Charging Stations",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-1 hover:text-white"
                  >
                    <FaAngleRight /> {item}
                  </li>
                ))}
              </ul>

              {/* Social */}
              <div className="flex gap-2 mt-3">
                {[FaFacebookF, FaInstagram, FaDribbble].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="bg-white text-[#00122E] w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-gray-200"
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Subscribe */}
          <div className="bg-green-800 rounded-full w-full sm:max-w-md flex flex-col sm:flex-row items-center px-4 py-2 gap-3 mb-5 mx-auto">
            <img
              src="https://storage.googleapis.com/a1aa/image/7b3a6d02-f780-4d75-352b-f382cb430dec.jpg"
              alt="Newsletter Icon"
              className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full w-full sm:flex-grow px-3 py-1.5 text-xs sm:text-sm text-white placeholder-white bg-green-800 focus:outline-none"
            />
            <button className="bg-green-800 border border-white rounded-full px-3 py-1 text-xs sm:text-sm text-white font-medium hover:bg-white hover:text-green-800 transition w-full sm:w-auto">
              Subscribe
            </button>
          </div>

          {/* Address */}
          <p className="text-[#B0B9D1] text-xs sm:text-sm flex items-start gap-2 mb-2 leading-snug">
            <FaMapMarkerAlt className="flex-shrink-0 mt-0.5" />
            53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, Nai Basti Dundaher,
            Ghaziabad, Uttar Pradesh 201001
          </p>

          {/* Copyright */}
          <p className="text-[#B0B9D1] text-[10px] sm:text-xs text-center flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <span>
              &copy; {new Date().getFullYear()} DIVY POWER. All rights reserved.
            </span>
            <span
              className="text-[#B0B9D1] cursor-pointer hover:text-white"
              onClick={() => navigate("/privacy")}
            >
              Privacy Policy
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
