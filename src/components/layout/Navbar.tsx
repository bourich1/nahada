import { useState } from 'react';
import { Search, ShoppingCart, X, Menu } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const { cartCount } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-light-gray shadow-sm">
      <div className="container mx-auto px-4 md:px-8 py-1 md:py-3 flex items-center justify-between relative">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/nahada.svg" alt="Nahada" className="h-12 md:h-16" />
        </Link>
        
        {/* Desktop Navigation Categories */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <Link to="/" className={`transition-colors ${isActive('/') ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-near-black hover:text-brand-red'}`}>الرئيسية</Link>
          <Link to="/products" className={`transition-colors ${isActive('/products') ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-near-black hover:text-brand-red'}`}>المنتجات</Link>
          <Link to="/contact" className={`transition-colors ${isActive('/contact') ? 'text-brand-red border-b-2 border-brand-red pb-1' : 'text-near-black hover:text-brand-red'}`}>اتصل بنا</Link>
        </nav>
        
        {/* Icons, Search & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Search Toggle / Form (Hidden on mobile since it's in the menu) */}
          <div className="relative hidden md:flex items-center">
            {isSearchOpen ? (
              <form onSubmit={handleSearch} className="flex items-center absolute left-0 md:static bg-white border border-light-gray rounded-full px-3 py-1 w-[200px] md:w-[250px] shadow-sm ml-2 z-50">
                <input
                  type="text"
                  placeholder="ابحث عن منتج..."
                  autoFocus
                  className="w-full bg-transparent outline-none text-sm px-2 text-near-black"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="button" onClick={() => setIsSearchOpen(false)} className="text-mid-gray hover:text-brand-red">
                  <X className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="البحث" 
                className="text-near-black hover:text-brand-red transition"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>
          
          <Link to="/cart" aria-label="السلة" className="text-near-black hover:text-brand-red transition relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-brand-red text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold font-abel">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Mobile Menu Button - Last item in RTL = Far Left */}
          <button 
            className="md:hidden text-near-black hover:text-brand-red mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-light-gray shadow-lg p-4 flex flex-col gap-4 font-semibold z-40">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="flex items-center bg-gray-50 border border-light-gray rounded-lg px-3 py-2 mb-2">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full bg-transparent outline-none text-sm px-2 text-near-black"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="text-brand-red hover:text-brand-red/80 transition">
              <Search className="w-5 h-5" />
            </button>
          </form>

          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors py-2 ${isActive('/') ? 'text-brand-red border-r-2 border-brand-red pr-2' : 'text-near-black hover:text-brand-red'}`}>الرئيسية</Link>
          <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors py-2 ${isActive('/products') ? 'text-brand-red border-r-2 border-brand-red pr-2' : 'text-near-black hover:text-brand-red'}`}>المنتجات</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors py-2 ${isActive('/contact') ? 'text-brand-red border-r-2 border-brand-red pr-2' : 'text-near-black hover:text-brand-red'}`}>اتصل بنا</Link>
        </div>
      )}
    </header>
  );
};
