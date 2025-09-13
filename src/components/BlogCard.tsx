import React, { FC } from 'react';

interface Blog {
  title: string;
  summary: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="blog-card">
      <h2>{blog.title}</h2>
      <p>{blog.summary}</p>
    </div>
  );
};

export default BlogCard;
