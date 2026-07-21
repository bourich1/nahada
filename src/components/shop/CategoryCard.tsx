import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  nameAr: string;
  image: string;
}

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/products?category=${category.id}`} className="group cursor-pointer flex flex-col gap-3 items-center">
      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden bg-light-gray relative shadow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-md">
        <img 
          src={category.image} 
          alt={category.nameAr} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="font-cairo font-semibold text-sm md:text-base text-near-black group-hover:text-brand-red transition-colors">
        {category.nameAr}
      </span>
    </Link>
  );
};
