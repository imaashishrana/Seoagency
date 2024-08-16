import React from 'react';
import farah from "../assets/farah.jpg"
const Portfolio = () => {
  const portfolioItems = [
    {
      imgSrc: 'https://www.rankontechnologies.com/wp-content/uploads/2022/05/one-page-seo-1024x799.jpg', // replace with actual image path
      title: 'On-Page SEO Services',
      description: `Our On-Page SEO Services focus on optimizing your website’s content and structure to improve search engine rankings and user experience. We ensure that every aspect of your site, from keyword usage to meta tags and site speed, is fine-tuned for maximum visibility. We've helped clients achieve significant improvements in organic traffic and conversion rates through precise on-page optimization.`,
      link: '#'
    },
    {
      imgSrc: 'https://5.imimg.com/data5/SELLER/Default/2021/6/SO/IP/YR/41027239/off-page-seo-services.jpg', // replace with actual image path
      title: 'Off-Page SEO Services',
      description: `Our Off-Page SEO services focus on improving your website's rankings through activities outside your website. These include building high-quality backlinks, social media marketing, guest blogging, influencer outreach, and online reputation management. The goal is to increase your website's authority, trustworthiness, and visibility on search engines by leveraging external factors.`,
      link: '#'
    },    
    {
      imgSrc: 'https://www.matrixmantra.lk/static/media/img-1.76122e0ad719e7e2d361.jpg', // replace with actual image path
      title: 'SEO Mastery Solutions',
      description: `SEO Mastery Solutions is a leading SEO agency that specializes in driving organic growth for businesses across various industries. By implementing tailored SEO strategies, we've consistently achieved top rankings, increased traffic, and improved ROI for our clients.`,
      link: '#'
    },    
    {
      imgSrc: 'https://www.rgbwebtech.com/blogs/images/uploads/what-is-seo-search-engin-optimization.png', // replace with actual image path
      title: 'Search Engine Optimization',
      description: `Thrive is an award-winning SEO company that delivers comprehensive search engine marketing results.`,
      link: '#'
    },
    {
      imgSrc: 'https://www.dignited.com/wp-content/uploads/2018/06/SEO-article-header.jpg', // Replace with actual path
      title: 'Search Engine Optimization',
      description: `Our SEO services enhance your website's visibility in search engines like Google and Bing, driving more traffic to your business.`,
      link: '#'
    },
    {
      imgSrc: 'https://damianqualter.com/wp-content/uploads/2020/08/infusionsoft-seo-content-writing-template.png', // Replace with actual path
      title: 'Content Writing',
      description: `Our SEO content writing services utilize advanced strategies and keyword research to help your content rank higher on search engines.`,
      link: '#'
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105">
              <img src={item.imgSrc} alt={item.title} className="w-full h-60  object-contain mb-4 rounded" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700  mb-4">{item.description}</p>
              
            </div>
          ))}
        </div>

        {/* Why Choose Me Section */}
        <div className="mt-12 bg-white py-10 px-6 rounded-lg text-center shadow-lg">
          <img src={farah} alt="Profile" className="w-24 h-24 rounded-full object-cover mx-auto mb-4" /> {/* Replace with actual image path */}
          <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
          <p className="text-gray-700 font-semibold mb-4">
            My expertise and data-driven approach optimize your website for maximum impact. With over 5 years of experience, 
          </p>
          <p className="text-gray-700 font-semibold mb-4">I offer tried-and-tested strategies to help your business grow and thrive.</p>
          <p className="text-gray-900 font-bold">FARAH KAMIL</p>
        </div>
        
      </div>
    </div>
  );
};

export default Portfolio;
