import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../data/blogData';

const BlogDetailPage = () => {
  const { title } = useParams();
  const blog = blogData.find((post) => post.title === title);

  if (!blog) {
    return <p className="text-red-500 text-center text-xl">Blog not found!</p>;
  }

  return (
    <div
      className="p-8 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/path/to/your/background-image.jpg')` }}
    >
      <nav className="text-sm text-gray-500 mb-4">
        <Link to="/blog" className="hover:underline">Blog</Link> » <span className="text-blue-900">{blog.formattedTitle}</span>
      </nav>
      <h1 className="text-3xl font-semibold text-blue-900 mb-6">{blog.formattedTitle}</h1>
      <p className="text-gray-700 mb-6">by {blog.author} | {blog.category}</p>
      <div className="text-[#293985] mb-4">{blog.content}</div>
    </div>
  );
};

export default BlogDetailPage;
