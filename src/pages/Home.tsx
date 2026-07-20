import { useState, useEffect } from 'react';
import { HeroBanner } from '../components/shop/HeroBanner';
import { CategoryCard } from '../components/shop/CategoryCard';
import { ProductCard } from '../components/shop/ProductCard';
import type { Product } from '../components/shop/ProductCard';
import { ProductSkeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/ui/EmptyState';
import { PackageOpen } from 'lucide-react';

import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';
import bannersData from '../data/banners.json';

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      const filtered = (productsData as Product[]).filter(p => !p.hidden);
      setFeaturedProducts(filtered);
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-1">
      <HeroBanner banners={bannersData} />
      
      {/* Categories Section */}
      <section className="container mx-auto px-4 md:px-8 py-12">
        <h2 className="font-cairo text-2xl md:text-section-heading font-bold text-near-black mb-8 text-center md:text-right">
          تسوق حسب الأقسام
        </h2>
        <div className="flex overflow-x-auto pb-4 gap-6 md:grid md:grid-cols-4 lg:grid-cols-6 snap-x hide-scrollbar">
          {categoriesData.map(category => (
            <div key={category.id} className="snap-start shrink-0">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="container mx-auto px-4 md:px-8 py-12 bg-off-white/50">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-cairo text-2xl md:text-section-heading font-bold text-near-black">
            منتجاتنا
          </h2>
          <a href="#" className="text-brand-red font-semibold text-sm hover:underline">
            عرض الكل
          </a>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(4)].map((_, i) => <ProductSkeleton key={i} />)}
          </div>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="لا توجد منتجات مميزة"
            description="لم نتمكن من العثور على أي منتجات في هذا القسم حالياً."
            icon={<PackageOpen className="w-12 h-12" />}
          />
        )}
      </section>
    </main>
  );
};
