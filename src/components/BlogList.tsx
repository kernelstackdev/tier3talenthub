import { Link } from "react-router-dom";
import { useBlogs } from "../hooks/useBlogs";

interface BlogListProps {
  category?: string;
  search?: string;
}

const BlogList = ({ category, search }: BlogListProps) => {
  const { getBlogsByCategory } = useBlogs();
  const blogs = getBlogsByCategory(category || "");
  const filteredBlogs = blogs.filter((blog) =>
    !search ||
    blog.title.toLowerCase().includes(search.toLowerCase()) ||
    blog.content.toLowerCase().includes(search.toLowerCase()) ||
    blog.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredBlogs.length === 0 ? (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500 text-lg">No blogs found.</p>
        </div>
      ) : (
        filteredBlogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <Link to={`/blog/${blog.id}`} className="text-xl font-bold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer mb-2 block">
                {blog.title}
              </Link>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700">{blog.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
