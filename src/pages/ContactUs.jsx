import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import fromright from "../assets/fromright.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_krqz1yr', 'template_18glz18', formData, 'ZWsdp2raZfHne9HWZ')
      .then((response) => {
        console.log('Success:', response);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      }, (error) => {
        console.log('Error:', error);
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <section className="bg-gray-100 py-10 px-10">
      <div className="container mx-auto px-4">
        <div className="container mx-auto mb-12">
          <h1 className="text-4xl bg-gray-400 text-center font-bold">Contact Us</h1>
        </div>

        {/* Contact Information Section */}
        <div className="w-full mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6 p-6">
            {/* Call Us Section */}
            <div className="flex items-center gap-4 w-full md:w-1/3 p-4 border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-md transition-shadow duration-300">
              <img
                loading="lazy"
                decoding="async"
                width="60"
                height="60"
                src="https://seoyodha.com/wp-content/uploads/2023/04/im-image-section-40-v2.png"
                alt="Call Us"
                className="rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">Give Us A Call</h2>
                <p className="text-gray-600">+91 81558-73084</p>
              </div>
            </div>

            {/* Office Location Section */}
            <div className="flex bg-white items-center gap-4 w-full md:w-1/3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-md transition-shadow duration-300">
              <img
                loading="lazy"
                decoding="async"
                width="60"
                height="60"
                src="https://seoyodha.com/wp-content/uploads/2023/04/im-image-section-41-v2.png"
                alt="Office Location"
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Office Location</h3>
                <p className="text-gray-600">Udhana, Surat 394210</p>
              </div>
            </div>

            {/* Send Us A Message Section */}
            <div className="flex bg-white items-center gap-4 w-full md:w-1/3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-md transition-shadow duration-300">
              <img
                loading="lazy"
                decoding="async"
                width="60"
                height="60"
                src="https://seoyodha.com/wp-content/uploads/2023/04/im-image-section-39-v2.png"
                alt="Send Us A Message"
                className="rounded-full"
              />
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Send Us A Message</h4>
                <p className="text-gray-600">farah@rubyseo.agency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Image Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-80 md:h-auto">
            <img src={fromright} alt="Contact Form" />
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-8">
            <h5 className="text-2xl font-semibold mb-6 text-center text-gray-800">Get In Touch</h5>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2 text-gray-700">Select Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                >
                  <option value="" disabled>Select a Service</option>
                  <option value="Social Media Management">Social Media Management</option>
                  <option value="Ad Campaign Management">Ad Campaign Management</option>
                  <option value="Google My Business & Ads">Google My Business & Ads</option>
                  <option value="Search Engine Optimization">Search Engine Optimization</option>
                  <option value="Websites">Websites</option>
                  <option value="Graphic Design & Video Editing">Graphic Design & Video Editing</option>
                  <option value="PR & ORM">PR & ORM</option>
                  <option value="App Promotion & Bulk Marketing">App Promotion & Bulk Marketing</option>
                  <option value="Influencer Marketing">Influencer Marketing</option>
                  <option value="Technical SEO Audit">Technical SEO Audit</option>
                  <option value="On-Page SEO Optimization">On-Page SEO Optimization</option>
                  <option value="Off-Page SEO & Link Building">Off-Page SEO & Link Building</option>
                  <option value="Local SEO">Local SEO</option>
                  <option value="E-Commerce SEO">E-Commerce SEO</option>
                  <option value="SEO Content Creation & Marketing">SEO Content Creation & Marketing</option>
                  <option value="Mobile SEO">Mobile SEO</option>
                  <option value="SEO Analytics & Reporting">SEO Analytics & Reporting</option>
                  <option value="Competitor Analysis">Competitor Analysis</option>
                  <option value="Voice Search Optimization">Voice Search Optimization</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center bg-white p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Let’s Work Together</h3>
          <p className="text-gray-700 font-semibold mb-6">
            Looking for a professional SEO freelancer with 5+ years of experience? Let’s connect and work on your next marketing project.
          </p>
          <a href="/contact-us" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
