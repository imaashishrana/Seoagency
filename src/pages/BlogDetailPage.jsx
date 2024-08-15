import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogDetailPage = () => {
  const { title } = useParams();
  const blog = blogData.find((post) => post.title === title);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div
      className="p-8 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
    >
      <nav className="text-sm text-gray-500 mb-4">
        <a href="/">Blog</a> » <span className="text-blue-900">{blog.formattedTitle}</span>
      </nav>
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">{blog.formattedTitle}</h1>
      <p className="text-gray-700 mb-6">by {blog.author} | {blog.category}</p>
      <div className="text-gray-700 mb-4">{blog.content}</div>
      
    </div>
  );
};

export default BlogDetailPage;
