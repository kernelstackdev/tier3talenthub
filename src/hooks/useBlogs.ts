import { useState, useEffect } from "react";

export interface Blog {
  id: string;
  title: string;
  content: string;
  category: string;
  date: string;
}

const STORAGE_KEY = "blogs";

const defaultCategories = [
  "AWS",
  "Devops",
  "Kubernetes",
  "Linux",
  "RoadMaps",
  "Terraform",
  "Jenkins",
  "Github Actions",
  "Projects",
  "trending",
];

export const useBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const storedBlogs = localStorage.getItem(STORAGE_KEY);
    if (storedBlogs) {
      setBlogs(JSON.parse(storedBlogs));
    }
  }, []);

  const addBlog = (blog: Omit<Blog, "id" | "date">) => {
    const newBlog: Blog = {
      ...blog,
      id: Date.now().toString(),
      date: new Date().toISOString(),
    };
    const updatedBlogs = [...blogs, newBlog];
    setBlogs(updatedBlogs);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedBlogs));
  };

  const getBlogsByCategory = (category: string) => {
    if (!category) return blogs;
    return blogs.filter((blog) => blog.category === category);
  };

  const getCategories = () => {
    const categories = new Set(blogs.map((blog) => blog.category));
    // Add default categories even if no blogs yet
    defaultCategories.forEach((cat) => categories.add(cat));
    return Array.from(categories);
  };

  return { blogs, addBlog, getBlogsByCategory, getCategories };
};
