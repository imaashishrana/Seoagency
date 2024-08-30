import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faPhone, faEnvelopeOpen, faHome, faAddressBook, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#121036] text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/2 lg:w-1/4 p-8">
          <h3 className="text-lg font-semibold">Ruby SEO Agency</h3>
          <ul className="mt-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              <a href="tel:+918155873084" className="hover:underline transition duration-300">
                Phone: +9181558-73084
              </a>
            </li>
            <li className="flex items-center">
              <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
              <a href="mailto:farah@rubyseo.agency" className="hover:underline transition duration-300">
                Email: farah@rubyseo.agency
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-8">
          <h4 className="text-lg font-semibold">Services</h4>
          <nav className="mt-4">
            <ul>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                <Link to="/" className="hover:underline transition duration-300">
                  Home
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                <Link to="/about-us" className="hover:underline transition duration-300">
                  About Us
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                <Link to="/services" className="hover:underline transition duration-300">
                  Services
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-8">
          <h5 className="text-lg font-semibold">About Us</h5>
          <nav className="mt-4">
            <ul>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                <Link to="/portfolio" className="hover:underline transition duration-300">
                  Portfolio
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
                <Link to="/contact-us" className="hover:underline transition duration-300">
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faBlog} className="mr-2" />
                <Link to="/blog" className="hover:underline transition duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center items-center bg-transparent text-white px-4">
        <div className="text-sm mb-4 sm:mb-0">
          <p>&copy; {new Date().getFullYear()} Ruby SEO Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
