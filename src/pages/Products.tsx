import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/shop/ProductCard';
import type { Product } from '../components/shop/ProductCard';
import { Loader } from '../components/ui/Loader';
import { EmptyState } from '../components/ui/EmptyState';
import { PackageOpen, Filter } from 'lucide-react';
import productsData from '../data/products.json';
import categoriesData from '../data/categories.json';

export const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('q') || '';
  const categoryId = searchParams.get('category') || '';
  
  const selectedCategory = categoriesData.find(c => c.id === categoryId);

  useEffect(() => {
    // Simulate network request
    const timer = setTimeout(() => {
      // Show all visible products
      const filtered = (productsData as Product[]).filter(p => !p.hidden);
      setProducts(filtered);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesPrice = p.price <= maxPrice;
      const matchesSearch = searchQuery 
        ? p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        : true;
      const matchesCategory = selectedCategory
        ? p.category.includes(selectedCategory.nameAr) || selectedCategory.nameAr.includes(p.category)
        : true;
        
      return matchesPrice && matchesSearch && matchesCategory;
    });
  }, [products, maxPrice, searchQuery, selectedCategory]);

  return (
    <main className="flex-1 bg-off-white/50 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <h1 className="font-cairo text-3xl md:text-4xl font-bold text-near-black">
            {searchQuery 
              ? `نتائج البحث عن "${searchQuery}"` 
              : selectedCategory 
                ? selectedCategory.nameAr
                : "جميع المنتجات"}
          </h1>
          
          {/* Filter Section */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-light-gray flex items-center gap-4 min-w-[280px]">
            <Filter className="w-5 h-5 text-brand-red" />
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex justify-between items-center text-sm font-semibold text-near-black">
                <span>السعر الأقصى:</span>
                <span dir="ltr">{maxPrice} dh</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max="1000" 
                step="50"
                value={maxPrice} 
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-brand-red cursor-pointer"
              />
            </div>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-24 w-full">
            <Loader />
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title={searchQuery ? "لم يتم العثور على نتائج" : "لا توجد منتجات بهذا السعر"}
            description={searchQuery ? "جرب البحث بكلمات أخرى أو تعديل فلتر السعر." : "جرب زيادة السعر الأقصى لرؤية المزيد من المنتجات."}
            icon={<PackageOpen className="w-12 h-12" />}
          />
        )}
      </div>
    </main>
  );
};
