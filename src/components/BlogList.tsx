import { useBlogs } from "../hooks/useBlogs";

interface BlogListProps {
  category?: string;
}

const BlogList = ({ category }: BlogListProps) => {
  const { getBlogsByCategory } = useBlogs();
  const blogs = getBlogsByCategory(category || "");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.length === 0 ? (
        <div className="col-span-full text-center py-8">
          <p className="text-gray-500 text-lg">No blogs found.</p>
        </div>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h2>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {blog.category}
                </span>
                <span className="text-sm text-gray-500">
                  {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-700 line-clamp-3">{blog.content}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BlogList;
