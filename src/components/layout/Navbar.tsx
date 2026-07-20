import { Search, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-light-gray shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-2 md:py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/nahada.svg" alt="نهضة شوب" className="h-12 md:h-14" />
        </Link>
        
        {/* Navigation Categories */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className="hover:text-brand-red transition-colors text-near-black">الرئيسية</Link>
          <Link to="/contact" className="hover:text-brand-red transition-colors text-near-black">اتصل بنا</Link>
        </nav>
        
        {/* Icons */}
        <div className="flex items-center gap-4">
          <button aria-label="البحث" className="text-near-black hover:text-brand-red transition">
            <Search className="w-5 h-5" />
          </button>
          <Link to="/cart" aria-label="السلة" className="text-near-black hover:text-brand-red transition relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-abel">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        
      </div>
    </header>
  );
};
