import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Badge } from '../ui/Badge';

export interface Product {
  id: number | string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  category: string;
  featured: boolean;
  hidden: boolean;
  images: string[];
  description: string;
  stock: number;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isSaved, setIsSaved] = useState(false);

  // Skip rendering if hidden
  if (product.hidden) return null;

  return (
    <Link to={`/product/${product.slug}`} className="group flex flex-col gap-3 cursor-pointer">
      {/* Image Plate */}
      <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-light-gray transition-shadow duration-300 group-hover:shadow-[0_5px_20px_-10px_rgba(0,0,0,0.1)]">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        
        {/* Floating Badge (Top Right in RTL) */}
        {product.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="favorite">الأكثر مبيعاً</Badge>
          </div>
        )}
        
        {/* Save Button (Top Left in RTL) */}
        <button 
          onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
          className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 border border-light-gray flex items-center justify-center transition-colors hover:bg-white"
          aria-label="حفظ المنتج"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isSaved ? 'fill-brand-red text-brand-red' : 'text-near-black'}`} 
          />
        </button>

        {/* Carousel Dots placeholder */}
        {product.images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {product.images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`} />
            ))}
          </div>
        )}
      </div>

      {/* Meta block */}
      <div className="flex flex-col gap-1">
        <h3 className="font-cairo text-base font-semibold text-near-black truncate" title={product.name}>
          {product.name}
        </h3>
        <span className="font-cairo text-[13px] text-mid-gray">{product.category}</span>
        
        {/* Price block */}
        <div className="flex items-center gap-2 mt-1">
          <span className="font-abel text-base font-bold text-near-black" dir="ltr">
            {product.price} dh
          </span>
          {product.oldPrice && (
            <span className="font-abel text-[13px] text-mid-gray line-through" dir="ltr">
              {product.oldPrice} dh
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
