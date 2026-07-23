import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/shop/ProductCard';
import type { Product } from '../components/shop/ProductCard';
import { Skeleton } from '../components/ui/Skeleton';
import { EmptyState } from '../components/ui/EmptyState';
import { ShoppingCart, PackageX, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

import productsData from '../data/products.json';

export const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState('');
  const [related, setRelated] = useState<Product[]>([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    // Reset state when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Required to reset state on route change
    setLoading(true);
    setQuantity(1);
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      const found = (productsData as Product[]).find(p => p.slug === slug && !p.hidden);
      if (found) {
        setProduct(found);
        setMainImage(found.images[0]);
        // Find related products (same category, different id, max 4)
        const rel = (productsData as Product[])
          .filter(p => p.category === found.category && p.id !== found.id && !p.hidden)
          .slice(0, 4);
        setRelated(rel);
      } else {
        setProduct(null);
      }
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Skeleton className="aspect-square w-full rounded-2xl" />
          <div className="flex flex-col gap-6">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-8 w-1/4" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24">
        <EmptyState 
          title="المنتج غير موجود" 
          description="عذراً، المنتج الذي تبحث عنه غير متوفر أو تم حذفه."
          icon={<PackageX className="w-16 h-16" />}
          action={<Link to="/"><Button>العودة للرئيسية</Button></Link>}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-mid-gray mb-8 flex gap-2 font-cairo">
        <Link to="/" className="hover:text-brand-red">الرئيسية</Link>
        <span>/</span>
        <Link to={`/category/${product.category.toLowerCase()}`} className="hover:text-brand-red">{product.category}</Link>
        <span>/</span>
        <span className="text-near-black font-semibold truncate">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Images */}
        <div className="flex flex-col gap-4">
          <div className="aspect-square w-full rounded-2xl overflow-hidden bg-light-gray">
            <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.images.map((img, i) => (
                <button 
                  key={i} 
                  onClick={() => setMainImage(img)}
                  className={`w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 border-2 transition-colors ${mainImage === img ? 'border-brand-red' : 'border-transparent opacity-70 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="font-cairo text-2xl md:text-3xl font-bold text-near-black mb-2">{product.name}</h1>
          
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-light-gray">
            <div className="flex items-center gap-2">
              <span className="font-abel text-2xl font-bold text-brand-red" dir="ltr">{product.price} dh</span>
              {product.oldPrice && (
                <span className="font-abel text-lg text-mid-gray line-through" dir="ltr">{product.oldPrice} dh</span>
              )}
            </div>
            {product.oldPrice && (
              <span className="bg-brand-red/10 text-brand-red text-xs font-bold px-2 py-1 rounded-sm">
                توفير {product.oldPrice - product.price} dh
              </span>
            )}
          </div>

          <p className="font-cairo text-near-black leading-relaxed mb-8 whitespace-pre-line">
            {product.description}
          </p>

          {/* Add to cart */}
          <div className="flex flex-col gap-4 mt-auto">
            <div className="flex items-center gap-4">
              <span className="font-cairo font-semibold text-near-black">الكمية:</span>
              <div className="flex items-center border border-light-gray rounded-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-near-black hover:bg-light-gray transition"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center font-abel font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-10 h-10 flex items-center justify-center text-near-black hover:bg-light-gray transition"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-sm text-mid-gray font-cairo">
                {product.stock > 0 ? `متوفر ${product.stock} حبة` : 'نفذت الكمية'}
              </span>
            </div>

            <div className="flex gap-4 mt-4 flex-col sm:flex-row">
              <Button 
                size="lg" 
                fullWidth 
                className="gap-2 text-lg"
                disabled={product.stock === 0}
                onClick={() => {
                  addToCart(product, quantity);
                  setShowToast(true);
                  setTimeout(() => setShowToast(false), 3000);
                }}
              >
                <ShoppingCart className="w-5 h-5" />
                أضف إلى السلة
              </Button>
              <Button 
                size="lg" 
                fullWidth 
                variant="secondary"
                className="gap-2 text-lg"
                disabled={product.stock === 0}
                onClick={() => {
                  addToCart(product, quantity);
                  navigate('/checkout');
                }}
              >
                اشتر الآن
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="mt-24">
          <h2 className="font-cairo text-2xl font-bold text-near-black mb-8 text-center md:text-right border-b border-light-gray pb-4">
            منتجات مشابهة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Toast Notification */}
      <div 
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-near-black text-white px-6 py-3 rounded-full shadow-2xl z-50 flex items-center gap-3 font-cairo transition-all duration-300 pointer-events-none ${showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <ShoppingCart className="w-5 h-5 text-brand-red" />
        <span className="font-semibold tracking-wide text-sm md:text-base">تمت إضافة المنتج إلى السلة بنجاح!</span>
      </div>
    </div>
  );
};
