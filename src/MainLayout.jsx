import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Footer from '../src/pages/Footer';
import { FaArrowUp, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'; 
import { faHome, faInfoCircle, faAddressBook, faBriefcase, faCog, faBlog } from '@fortawesome/free-solid-svg-icons';
// Correct import of icons

export default function MainLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Special Container Above Navbar */}
      <div className="bg-white text-black p-4 hidden md:flex justify-between">
        {/* Left Side (Social Media Icons) */}
        <div className="flex space-x-6">
          <a href="https://wa.me/918155873084" className="text-green-600  transition duration-300">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.linkedin.com/in/farah-depariya-922b30262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-blue-600 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/seofreelancer7100?igsh=dmZjeTY5eWdkemc4" className="text-pink-500  transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Right Side (Contact Information) */}
        <div className="flex space-x-6 items-center">
          <a href="tel:+918155873084" className="hover:text-blue-400 text-blue-800 transition duration-300">
            <FaPhoneAlt size={20} className="inline-block mr-2" /> +9181558-73084
          </a>
          <a href="mailto:farah@rubyseo.agency" className="hover:text-pink-400 text-pink-800 transition duration-300">
            <FaEnvelope size={20} className="inline-block mr-2" /> farah@rubyseo.agency
          </a>
        </div>
      </div>
    

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 via-blue-500 to-blue-400 text-white p-8 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center">
              <img
                src="https://rubyseo.agency/wp-content/uploads/2024/07/R-1.png"
                alt="Ruby SEO Agency Logo"
                className="w-8 h-8 rounded-full md:w-10 md:h-10"
              />
              <span className="ml-2 text-2xl font-bold">
                Ruby SEO Agency
              </span>
            </Link>
          </div>

          {/* Menu Button for Mobile */}
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="text-white hover:text-black focus:outline-none">
              {isMenuOpen ? (
                // Cross Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>

            {/* Small Dropdown Box */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2  z-20 w-40 bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 via-blue-500 to-blue-400 text-white rounded-lg shadow-lg">
                <ul className="flex flex-col space-y-2 p-4">
                  <li>
                    <Link 
                      to="/" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about-us" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact-us" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/portfolio" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/services" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blog" 
                      className="hover:text-black hover:underline transition duration-300"
                      onClick={toggleMenu}  // Close menu on link click
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex text-xl space-x-6">
            <li>
              <Link to="/" className=" hover:underline transition  duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className=" hover:underline transition duration-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className=" hover:underline transition duration-300">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className=" hover:underline transition duration-300">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/services" className=" hover:underline transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className=" hover:underline transition duration-300">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="fixed bottom-8 right-4 z-50 flex flex-col space-y-2">
        <a
          href="tel:+918155873084"
          title="Call Us"
          aria-label="Call Us"
          className="flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white rounded-full w-16 h-16 shadow-lg transition-colors text-3xl"
        >
          <FaPhoneAlt size={24} />
        </a>
        <a
          href="https://wa.me/918155873084"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp Chat"
          aria-label="WhatsApp Chat"
          className="flex items-center justify-center bg-green-800 hover:bg-green-700 text-white rounded-full w-16 h-16 shadow-lg transition-colors text-3xl"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>

      {/* Fixed Scroll to Top Icon */}
      {isVisible && (
        <div
          className="flex items-center justify-center cursor-pointer fixed bg-fuchsia-600 hover:bg-fuchsia-400 bottom-8 left-4 z-50 rounded-full w-16 h-16"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} color="white" />
        </div>
      )}

      <main className="p-6">
        <Outlet />
      </main>

      <Footer /> {/* Add the Footer component */}
    </div>
  );
}
