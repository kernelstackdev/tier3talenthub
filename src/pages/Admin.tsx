import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import BlogForm from "../components/BlogForm";
import { useBlogs } from "../hooks/useBlogs";
import type { Blog } from "../hooks/useBlogs";

const Admin = () => {
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogs();
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const handleCreate = () => {
    setEditingBlog(null);
    setShowForm(true);
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      deleteBlog(id);
    }
  };

  const handleSubmit = (blogData: Omit<Blog, "id" | "date">) => {
    if (editingBlog) {
      updateBlog(editingBlog.id, blogData);
    } else {
      addBlog(blogData);
    }
    setShowForm(false);
    setEditingBlog(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingBlog(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Admin Panel</h1>
          <p className="text-xl text-gray-600">Create and manage your blog posts</p>
        </div>
        {!showForm ? (
          <div>
            <button
              onClick={handleCreate}
              className="mb-6 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 flex items-center"
            >
              <FaPlus className="mr-2" />
              Create Blog
            </button>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {blogs.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="px-6 py-4 text-center text-gray-500">
                        No blogs found.
                      </td>
                    </tr>
                  ) : (
                    blogs.map((blog) => (
                      <tr key={blog.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {blog.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {blog.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(blog.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-indigo-600 hover:text-indigo-900 mr-4"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDelete(blog.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <BlogForm
            editingBlog={editingBlog || undefined}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
