import { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from "./assets/logo2.png";
import Footer from '../src/pages/Footer';
import { FaArrowUp, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

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
    <div className="flex flex-col min-h-screen">
      {/* Special Container Above Navbar */}
      <div className="bg-[#121036] text-white p-4 flex justify-between items-center">
        {/* Left Side (Social Media Icons) */}
        <div className="flex space-x-4">
          <a href="https://wa.me/918155873084" className="text-green-500 hover:text-sky-700 transition duration-300">
            <FaWhatsapp size={24} />
          </a>
          <a href="https://www.linkedin.com/in/farah-depariya-922b30262" className="text-[#273987] hover:text-sky-700 transition duration-300">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/seofreelancer7100" className="text-pink-500 hover:text-sky-700 transition duration-300">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Right Side (Contact Information) */}
        <div className="flex space-x-4 items-center">
          <a href="tel:+918155873084" className="text-white hover:text-sky-700 transition duration-300 font-proxima-nova font-bold flex items-center">
            <FaPhoneAlt size={20} className="mr-2" />
            <span className="hidden md:inline">+918155873084</span>
          </a>
          <a href="mailto:farah@rubyseo.agency" className="text-white hover:text-sky-700 transition duration-300 font-proxima-nova font-bold flex items-center">
            <FaEnvelope size={20} className="mr-2" />
            <span className="hidden md:inline">farah@rubyseo.agency</span>
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-[#273987] p-4 sticky top-0 z-40 shadow-md">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo and Name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Ruby SEO Agency Logo" className="w-60 h-17" />
              
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            {[
              { to: '/', label: 'Home' },
              { to: '/about-us', label: 'About Us' },
              { to: '/contact-us', label: 'Contact Us' },
              { to: '/portfolio', label: 'Portfolio' },
              { to: '/services', label: 'Services' },
              { to: '/blog', label: 'Blog' },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-lg uppercase font-proxima-nova font-bold hover:text-sky-700 transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-full right-0 left-0 z-30">
            <ul className="flex flex-col space-y-2 px-4 py-6">
              {[
                { to: '/', label: 'Home' },
                { to: '/about-us', label: 'About Us' },
                { to: '/contact-us', label: 'Contact Us' },
                { to: '/portfolio', label: 'Portfolio' },
                { to: '/services', label: 'Services' },
                { to: '/blog', label: 'Blog' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-lg uppercase font-proxima-nova font-bold hover:text-sky-700 transition duration-300 block py-2"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="flex-1 relative">
        {/* Fixed Action Buttons */}
        <div className="fixed bottom-4 right-5 flex flex-col space-y-4 md:space-x-4 md:space-y-0 md:flex-row  z-20">
          {/* Call, Email, WhatsApp Buttons */}
          <div className="flex flex-col space-y-4 md:space-y-4">
            <a href="tel:+918155873084" className="bg-[#293985] hover:bg-blue-800 text-white p-4 rounded-full shadow-lg">
              <FaPhoneAlt size={24} />
            </a>
            <a href="mailto:farah@rubyseo.agency" className="bg-red-600 hover:bg-red-500 text-white p-4 rounded-full shadow-lg">
              <FaEnvelope size={24} />
            </a>
            <a href="https://wa.me/918155873084" className="bg-green-600 hover:bg-green-500 text-white p-4 rounded-full shadow-lg">
              <FaWhatsapp size={24} />
            </a>
          </div>

          {/* Scroll to Top Button */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-4 left-4 bg-[#293985] hover:bg-blue-800 text-white p-4 rounded-full shadow-lg"
            >
              <FaArrowUp size={24} />
            </button>
          )}
        </div>

        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
