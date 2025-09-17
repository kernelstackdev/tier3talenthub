import { useState, useEffect } from "react";
import type { Blog } from "../hooks/useBlogs";
import { useBlogs } from "../hooks/useBlogs";

interface BlogFormProps {
  editingBlog?: Blog;
  onSubmit: (blog: Omit<Blog, "id" | "date">) => void;
  onCancel?: () => void;
}

const BlogForm = ({ editingBlog, onSubmit, onCancel }: BlogFormProps) => {
  const { getCategories } = useBlogs();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(getCategories());
  }, [getCategories]);

  useEffect(() => {
    if (editingBlog) {
      setTitle(editingBlog.title);
      setContent(editingBlog.content);
      setDescription(editingBlog.description);
      setCategory(editingBlog.category);
    } else {
      setTitle("");
      setContent("");
      setDescription("");
      setCategory("");
    }
  }, [editingBlog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content && description && category) {
      onSubmit({ title, content, description, category });
      if (!editingBlog) {
        setTitle("");
        setContent("");
        setDescription("");
        setCategory("");
        alert("Blog added successfully!");
      } else {
        alert("Blog updated successfully!");
      }
    } else {
      alert("Please fill all fields.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        {editingBlog ? "Edit Blog" : "Create New Blog"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="" disabled>
              Select category
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={3}
            placeholder="Enter a short description..."
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={8}
            placeholder="Write your blog content here..."
            required
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
          >
            {editingBlog ? "Update Blog" : "Submit Blog"}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-300"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default BlogForm;
