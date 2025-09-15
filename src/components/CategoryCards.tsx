import { FaRobot, FaCloud, FaShieldAlt, FaInfinity, FaCode, FaChartLine, FaCogs, FaLinux, FaGlobe, FaRobot as FaTerraform } from "react-icons/fa";
import type { IconType } from "react-icons";

interface CategoryCardsProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const categoryIcons: Record<string, IconType> = {
  "AI/ML": FaRobot,
  "Cloud": FaCloud,
  "Cyber Security": FaShieldAlt,
  "DevOps": FaInfinity,
  "Golang": FaCode,
  "Grow in IT": FaChartLine,
  "Kubernetes": FaCogs,
  "Linux": FaLinux,
  "Roadmaps": FaGlobe,
  "Terraform": FaTerraform,
};

const CategoryCards = ({ categories, onCategorySelect }: CategoryCardsProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {categories.map((category) => {
        const Icon = categoryIcons[category] || FaCode;
        return (
          <div
            key={category}
            onClick={() => onCategorySelect(category)}
            className="cursor-pointer bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center hover:shadow-lg transition"
          >
            <Icon className="text-4xl mb-3 text-blue-600" />
            <span className="text-lg font-semibold text-gray-900">{category}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryCards;
