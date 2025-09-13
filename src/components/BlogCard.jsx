import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
    </div>
  );
};

export default BlogCard;
