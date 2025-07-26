import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = ({ navigateTo, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "home" },
    { name: "Features", path: "features" },
    { name: "How It Works", path: "how-it-works" },
    { name: "Live Demo", path: "live-demo" },
    { name: "Tech Stack", path: "tech-stack" },
    { name: "Team / About", path: "team" },
    { name: "Contact", path: "contact" },
  ];

  const handleNavClick = (path) => {
    navigateTo(path);
    setIsOpen(false);
  };

  // Close menu on window resize (e.g., mobile -> desktop)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="bg-[#0d1117]/80 backdrop-blur-md shadow-lg py-4 px-6 fixed w-full z-50 top-0 animate-fadeIn rounded-b-xl border-b border-indigo-800">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Brand */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => handleNavClick("home")}
        >
          <img
            src={logo}
            alt="TapShield Logo"
            className="h-14 w-14 object-contain transform transition-transform duration-300 hover:scale-105"
          />
          <span className="text-2xl font-bold text-indigo-400 tracking-wide">
            TapShield
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden xl:flex flex-wrap justify-end space-x-5 lg:space-x-8 max-w-full overflow-x-auto">
          {navItems.map((item) => (
            <li key={item.path} className="relative whitespace-nowrap">
              <a
                href={`#${item.path}`}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm xl:text-base text-gray-300 hover:text-indigo-400 transition-colors duration-300 font-medium ${
                  currentPage === item.path
                    ? "text-indigo-400 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="xl:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-indigo-400 hover:text-white focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible below xl) */}
      {isOpen && (
        <div className="xl:hidden mt-4 px-4 pb-4 animate-fadeIn">
          <ul className="space-y-3 bg-[#0f172a] p-4 rounded-xl shadow-xl border border-indigo-700">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={`#${item.path}`}
                  onClick={() => handleNavClick(item.path)}
                  className={`block text-gray-300 hover:text-indigo-400 transition-colors duration-200 font-medium ${
                    currentPage === item.path
                      ? "text-indigo-400 font-semibold"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
