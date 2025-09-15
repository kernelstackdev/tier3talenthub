import { useState } from "react";
import { useBlogs } from "../hooks/useBlogs";

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const { getCategories } = useBlogs();
  const categories = getCategories();
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-900 mb-2 mr-0">
        Filter by Category:
      </label>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleCategoryClick("")}
          className={`px-4 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 ${
            activeCategory === ""
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 ${
              activeCategory === category
                ? "bg-blue-600 text-white"
                : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
