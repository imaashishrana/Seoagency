import React, { useRef } from "react";
import seo from "../assets/seo.jpg";
import form from "../assets/form.jpg";
import emailjs from "emailjs-com";
import main from "../assets/main.jpg";

export default function Home() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Sending email using sendForm
    emailjs
      .sendForm(
        "service_krqz1yr", // Replace with your actual EmailJS service ID
        "template_18glz18", // Replace with your actual EmailJS template ID
        formRef.current, // Use form reference to send the form data
        "ZWsdp2raZfHne9HWZ" // Replace with your actual EmailJS user ID
      )
      .then(
        (result) => {
          alert("Message Sent Successfully!");
        },
        (error) => {
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <main id="content" className="neve-main font-sans">
      <div className="container mx-auto px-4">
        <section
          className="relative mt-5 bg-cover bg-center min-h-screen flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${main})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-blue-500 to-blue-200 opacity-80"></div>

          <div className="relative z-10 text-center text-white p-6">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              #1 Enterprise SEO Company In Surat
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Ruby SEO Agency is India’s leading SEO company that works with a vision to help businesses build an effective online presence and generate valuable leads. With hundreds of satisfied clients, we tailor SEO campaigns to optimize your online presence and drive organic traffic.
            </p>
            <a
              href="/contact-us"
              className="bg-fuchsia-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-fuchsia-400 "
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-between py-12 md:py-24 text-gray-800">
          <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left md:space-x-8 px-4 md:px-0 flex-1 rounded-lg shadow-lg">
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div>
                <h6 className="text-3xl md:text-4xl font-extrabold text-fuchsia-600 mb-4">
                  Welcome to Ruby SEO Agency
                </h6>
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                  #1 Enterprise SEO Agency In Surat
                </h1>
                <p className="text-base md:text-lg mb-6">
                  Ruby SEO Agency stands at the forefront of India’s SEO industry, dedicated to transforming businesses into digital powerhouses. We tailor our SEO campaigns to align with your specific goals, delivering measurable improvements in your digital performance.
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
                <a
                  href="/contact-us"
                  className="bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-400 transition"
                >
                  Get Started
                </a>
                <a
                  href="/contact-us"
                  className="bg-fuchsia-500 text-white px-6 py-3 rounded-lg hover:bg-fuchsia-400 transition"
                >
                  Hire Us
                </a>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={seo}
                alt="SEO Services"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-white w-full p-8 mx-auto my-12 rounded-lg shadow-lg flex flex-col md:flex-row">
          <div className="flex flex-wrap md:flex-nowrap justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-fuchsia-600 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
                DO YOU WANT TO SECURE #1 POSITION IN GOOGLE SEARCH RESULTS, BUT DON’T KNOW WHERE TO GET STARTED?
              </h2>
              <p className="text-gray-700 mb-8">
                Share your business requirements with our team and let them perform a detailed website analysis to build a custom SEO India campaign accordingly.
              </p>
              <form ref={formRef} onSubmit={sendEmail}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <select
                    name="service"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a Service</option>
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
                <div className="mb-4">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-fuchsia-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <img src={form} alt="SEO Team at Work" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
