import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import logo from '../../assets/logo2.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "Home" },
    { id: "experience", label: "About Me" },
    { id: "work", label: "Projects" },
    { id: "skills", label: "Skills" },

  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-4 md:px-8 lg:px-16 ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        <div className="text-lg font-semibold cursor-pointer flex items-center space-x-2">
          <img 
            src={logo}
            alt="Logo" 
            className="h-24 w-24 object-contain"
          />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://github.com/sluggysadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithubAlt size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sadiafathima"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
          <button
            onClick={() => handleMenuItemClick("contact")}
            className="ml-2 rounded-full px-4 py-2 text-sm font-semibold text-white
                       bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)]
                       hover:opacity-90 transition"
          >
            Contact Me
          </button>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-4/5 md:hidden
                        bg-[#050414]/50 backdrop-blur-lg rounded-lg shadow-lg z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            {/* Contact button prominent on mobile too */}
            <li className="w-full px-6">
              <button
                onClick={() => handleMenuItemClick("contact")}
                className="w-full rounded-full px-4 py-2 font-semibold text-white
                           bg-[linear-gradient(90deg,#ff9966,#ff5e62,#6a11cb)]
                           hover:opacity-90 transition"
              >
                Contact Me
              </button>
            </li>
            <div className="flex space-x-4 pt-1">
              <a
                href="https://github.com/sluggysadi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaGithubAlt size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sadiafathima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
