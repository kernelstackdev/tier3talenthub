import { useParams } from "react-router-dom";
import { useBlogs } from "../hooks/useBlogs";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getBlogById } = useBlogs();
  const blog = id ? getBlogById(id) : null;

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Blog not found</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>
          <div className="flex items-center justify-between mb-6">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
              {blog.category}
            </span>
            <span className="text-sm text-gray-500">
              {new Date(blog.date).toLocaleDateString()}
            </span>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">{blog.description}</p>
            <div className="text-gray-800 whitespace-pre-line">{blog.content}</div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
