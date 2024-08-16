import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import MainLayout from './MainLayout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Footer from './pages/Footer';
import BlogDetailPage from './pages/BlogDetailPage';  // Import BlogDetailPage component

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          <Route path="blog" element={<Blog />} />  {/* Update to BlogPage */}
          <Route path="blog/:title" element={<BlogDetailPage />} />  {/* Add dynamic blog route */}
          <Route path="blog" element={<Footer />} /> 
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
