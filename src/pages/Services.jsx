import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faChartLine,
  faLink,
  faMapMarkerAlt,
  faShoppingCart,
  faPenNib,
  faMobileAlt,
  faChartBar,
  faUserSecret,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const services = [
    {
      icon: faSearch,
      title: "Technical SEO Audit",
      description:
        "A thorough analysis of your website’s technical infrastructure to identify and fix issues affecting your search engine rankings. We assess site speed, mobile-friendliness, indexing, and crawlability to ensure your website is fully optimized for search engines.",
    },
    {
      icon: faChartLine,
      title: "On-Page SEO Optimization",
      description:
        "We optimize individual pages on your website to rank higher and earn more relevant traffic. This includes keyword research, meta tag optimization, content optimization, image optimization, and improving internal linking.",
    },
    {
      icon: faLink,
      title: "Off-Page SEO & Link Building",
      description:
        "Enhance your website’s authority and credibility through strategic link-building efforts. We create high-quality backlinks from reputable sites to improve your site's ranking and online reputation.",
    },
    {
      icon: faMapMarkerAlt,
      title: "Local SEO",
      description:
        "Target local customers by optimizing your online presence for local search results. Our local SEO services include Google My Business setup, local citations, and optimizing your site for “near me” searches to attract nearby customers.",
    },
    {
      icon: faShoppingCart,
      title: "E-Commerce SEO",
      description:
        "Specialized SEO services tailored for online stores. We optimize product pages, category pages, and overall site architecture to drive more organic traffic, increase conversions, and enhance user experience.",
    },
    {
      icon: faPenNib,
      title: "SEO Content Creation & Marketing",
      description:
        "Create high-quality, SEO-friendly content that resonates with your audience and ranks well on search engines. Our services include blog writing, website content creation, and content marketing strategies to boost your online presence.",
    },
    {
      icon: faMobileAlt,
      title: "Mobile SEO",
      description:
        "Optimize your website for mobile devices to ensure it performs well on smartphones and tablets. With mobile-first indexing becoming the norm, we ensure your site is responsive and delivers a seamless user experience across all devices.",
    },
    {
      icon: faChartBar,
      title: "SEO Analytics & Reporting",
      description:
        "We provide detailed analytics and reporting to track your SEO performance. Our regular reports help you understand your website’s progress, identify areas of improvement, and measure ROI.",
    },
    {
      icon: faUserSecret,
      title: "Competitor Analysis",
      description:
        "Stay ahead of the competition by understanding their strengths and weaknesses. We analyze competitor strategies to find opportunities for your website to outrank them and capture more market share.",
    },
    {
      icon: faMicrophone,
      title: "Voice Search Optimization",
      description:
        "Prepare your website for the future with voice search optimization. We focus on optimizing content for voice queries, ensuring your site is visible in voice search results on devices like Amazon Alexa and Google Assistant.",
    },
  ];

  return (
    <div className="container mx-auto bg-gray-100 px-10 py-10">
      <h2 className="text-4xl text-[#293985] font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-4 text-gray-800">
              <FontAwesomeIcon icon={service.icon} className="text-[#293985] mr-3" />
              <h3 className="text-xl text-[#293985] font-semibold">{service.title}</h3>
            </div>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center bg-white p-8 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl text-[#293985] font-bold mb-4">Let’s Work Together</h3>
        <p className="text-gray-700 mb-6">
          Looking for a professional SEO freelancer with 5+ years of experience? Let’s connect and work on your next marketing project.
        </p>
        <Link to="/contact-us" className="bg-[#293985] text-white px-6 py-3 rounded-full text-lg hover:bg-blue-800 transition-colors">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Services;
