import React, { FC } from 'react';
import '../styles/Home.css';

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: 'AWS', icon: '☁️' },
  { name: 'DevOps', icon: '∞' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Linux', icon: '🐧' },
  { name: 'Roadmaps', icon: '🗺️' },
  { name: 'Terraform', icon: '🛠️' },
  { name: 'Jenkins', icon: '⚙️' },
  { name: 'GitHub Actions', icon: '🔄' },
  { name: 'Projects', icon: '📁' },
  { name: 'Trending', icon: '🔥' },
];

const Home: FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Find More Here</h1>
      <div className="categories-grid">
        {categories.map((category) => (
          <div key={category.name} className="category-card small-card">
            <div className="category-icon">{category.icon}</div>
            <div className="category-name">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
