import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../content/data/blogs.json'; // Your blog data

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div className="p-8 text-white">Blog post not found.</div>;
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <Link to="/blogs" className="text-blue-500 hover:underline">
        &larr; Back to Blogs
      </Link>
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{blog.date} - {blog.readTime}</p>
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPost;
