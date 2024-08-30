import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../data/blogData';

const Blog = () => {
  return (
    <div className="bg-gray-100 py-10 px-10 min-h-screen">
      <h1 className="text-4xl font-bold text-[#293985] mb-12 text-center">
        Our Latest Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <Link to={`/blog/${blog.title}`} className="block">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-[#293985]">
                  {blog.formattedTitle}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{blog.date}</p>
                <p className="text-gray-700 mb-4">
                  {blog.description
                    ? blog.description.slice(0, 100)
                    : 'No description available'}
                  ...
                </p>
                <span className="text-[#293985] hover:text-blue-800 font-semibold">
                  Read More
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
