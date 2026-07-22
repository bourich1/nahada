import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { Loader } from './components/ui/Loader';
import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';
import { ContactUs } from './pages/ContactUs';
import { Checkout } from './pages/Checkout';
import { Cart } from './pages/Cart';
import { Products } from './pages/Products';
import { FloatingContactButtons } from './components/layout/FloatingContactButtons';

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      offset: 100,
    });

    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
        <Loader />
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-cairo text-near-black" dir="rtl">
        <AnnouncementBar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <FloatingContactButtons />
      </div>
    </Router>
  );
}

export default App;
