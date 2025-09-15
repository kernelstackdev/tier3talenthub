import { useState } from "react";
import BlogList from "../components/BlogList";
import CategoryCards from "../components/CategoryCards";
import CategoryFilter from "../components/CategoryFilter";
import { useBlogs } from "../hooks/useBlogs";

const Categories = () => {
  const { getCategories } = useBlogs();
  const categories = getCategories();
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
          <p className="text-xl text-gray-600">Explore blogs by category</p>
        </div>
        {!selectedCategory ? (
          <div className="flex gap-8">
            <div className="flex-1">
              <CategoryCards
                categories={categories}
                onCategorySelect={setSelectedCategory}
              />
            </div>
            <div className="w-64">
              <CategoryFilter onCategoryChange={setSelectedCategory} />
            </div>
          </div>
        ) : (
          <>
            <button
              onClick={() => setSelectedCategory("")}
              className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Back to Categories
            </button>
            <BlogList category={selectedCategory} />
          </>
        )}
      </div>
    </div>
  );
};

export default Categories;
