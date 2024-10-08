import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import fromright from "../assets/fromright.png";
import { Link } from "react-router-dom";

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
    <section className="bg-gray-100 py-6 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-4xl  text-[#293985] font-bold py-2 px-4 rounded-md inline-block">Contact Us</h1>
        </div>

        {/* Contact Information Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            {/* Call Us Section */}
            <div className="flex items-center gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3">
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
                <h2 className="text-lg font-semibold text-[#293985]">Give Us A Call</h2>
                <p className="text-grey-600">+91 81558-73084</p>
              </div>
            </div>

            {/* Office Location Section */}
            <div className="flex items-center gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3">
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
                <h3 className="text-lg font-semibold text-[#293985]">Office Location</h3>
                <p className="text-grey-600">Udhana, Surat 394210</p>
              </div>
            </div>

            {/* Send Us A Message Section */}
            <div className="flex items-center gap-4 p-4 border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full md:w-1/3">
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
                <h4 className="text-lg font-semibold text-[#293985]">Send Us A Message</h4>
                <p className="text-gray-600">farah@rubyseo.agency</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Image Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 lg:w-1/2">
            <img src={fromright} alt="Contact Form" className="w-full h-auto" />
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 lg:w-1/2 p-6 md:p-8">
            <h5 className="text-xl md:text-2xl font-semibold mb-6 text-center text-[#293985]">Get In Touch</h5>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2 text-[#293985]">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293985]"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2 text-[#293985]">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293985]"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-[#293985]">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293985]"
                  required
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-semibold mb-2 text-[#293985]">Select Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full p-4 text-[#293985] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293985]"
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
                <label htmlFor="message" className="block text-sm font-semibold mb-2 text-[#293985]">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#293985]"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#293985] text-white p-4 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white p-6 md:p-8 rounded-lg shadow-lg mt-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Let’s Work Together</h3>
          <p className="[#293985] font-semibold mb-6">
            Looking for a professional SEO freelancer with 5+ years of experience? Let’s connect and work on your next marketing project.
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
