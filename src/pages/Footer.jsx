import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelopeOpen, faHome, faAddressBook, faBriefcase, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-fuchsia-400 text-white p-8">
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
                <a href="/" className="text-white hover:underline">Home</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                <a href="/about-us" className="text-white hover:underline">About Us</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                <a href="/services" className="text-white hover:underline">Services</a>
              </li>
              
            </ul>
          </nav>
        </div>

        <div className="w-full sm:w-1/2 lg:w-1/4 p-8">
          <h5 className="text-lg font-semibold">About Us</h5>
          <nav className="mt-4">
            <ul>
            <li className="flex items-center">
                <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                <a href="/portfolio" className="text-white hover:underline">Portfolio</a>
              </li>
              <li className="flex items-center">
                <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
                <a href="/contact-us" className="text-white hover:underline">Contact Us</a>
              </li>
              <li className="flex items-center mb-2">
                <FontAwesomeIcon icon={faBlog} className="mr-2" />
                <a href="/blog" className="text-white hover:underline">Our Blogs</a>
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
