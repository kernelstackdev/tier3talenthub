import { useState } from "react";
import BlogList from "../components/BlogList";
import CategoryFilter from "../components/CategoryFilter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        <div className="flex-1">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Blog</h1>
            <p className="text-xl text-gray-600">Discover amazing stories and insights</p>
          </div>
          <BlogList category={selectedCategory} />
        </div>
        <div className="w-48 ml-auto">
          <CategoryFilter onCategoryChange={setSelectedCategory} />
        </div>
      </div>
    </div>
  );
};

export default Home;
