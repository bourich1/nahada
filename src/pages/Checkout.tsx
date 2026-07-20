import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: ''
  });

  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/cart');
    }
  }, [cartItems, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) return;

    // Build WhatsApp message
    let message = `مرحباً، أريد تأكيد هذا الطلب:\n\n*المنتجات:*\n`;
    
    cartItems.forEach(item => {
      message += `- ${item.product.name} (x${item.quantity}) - ${item.product.price * item.quantity} dh\n`;
    });

    message += `\n*المجموع الإجمالي: ${cartTotal} dh*\n\n`;
    message += `*معلومات الشحن:*\n`;
    message += `الاسم: ${formData.fullName}\n`;
    message += `الهاتف: ${formData.phone}\n`;
    message += `العنوان: ${formData.address}`;

    // Target WhatsApp Number (Morocco format e.g. 212600000000)
    const whatsappNumber = '212600000000'; 
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Clear cart and redirect
    clearCart();
    window.open(whatsappUrl, '_blank');
    navigate('/');
  };

  if (cartItems.length === 0) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Link to="/cart" className="inline-flex items-center gap-2 text-mid-gray hover:text-brand-red transition font-cairo mb-6">
        <ArrowRight className="w-4 h-4" />
        الرجوع للسلة
      </Link>
      
      <h1 className="font-cairo text-3xl font-bold text-near-black mb-8">إتمام الطلب</h1>
      
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_5px_30px_-15px_rgba(0,0,0,0.1)] border border-light-gray">
        
        {/* Order Brief Summary */}
        <div className="mb-8 pb-6 border-b border-light-gray">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-cairo text-xl font-bold text-near-black">مراجعة الطلب</h2>
            <div className="font-abel font-bold text-2xl text-brand-red" dir="ltr">
              {cartTotal} dh
            </div>
          </div>
          
          <div className="flex flex-col gap-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-center bg-gray-50 p-2 rounded-lg">
                <div className="w-16 h-16 rounded-md overflow-hidden shrink-0 bg-light-gray border border-light-gray">
                  <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-cairo font-semibold text-near-black text-sm line-clamp-1">
                    {item.product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-cairo text-sm text-mid-gray">الكمية: {item.quantity}</span>
                    <span className="font-abel font-bold text-brand-red text-sm" dir="ltr">{item.product.price * item.quantity} dh</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="font-cairo text-xl font-bold text-near-black mb-6">معلومات التوصيل</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="font-cairo text-sm font-semibold text-near-black">الاسم الكامل *</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-cairo bg-white text-near-black"
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="font-cairo text-sm font-semibold text-near-black">رقم الهاتف *</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              required
              dir="ltr"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-abel bg-white text-near-black text-right"
              placeholder="06XXXXXXXX"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="address" className="font-cairo text-sm font-semibold text-near-black">العنوان الكامل *</label>
            <textarea 
              id="address"
              name="address"
              required
              rows={3}
              value={formData.address}
              onChange={handleChange}
              className="px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all font-cairo bg-white text-near-black resize-none"
              placeholder="المدينة، الحي، الشارع، ورقم المنزل"
            />
          </div>
          
          <div className="mt-2 bg-brand-red/5 p-4 rounded-lg flex items-start gap-3 border border-brand-red/10">
            <div className="mt-1 flex-shrink-0 text-brand-red">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <p className="font-cairo text-sm text-near-black leading-relaxed">
              الدفع عند الاستلام. سيتم تحويلك إلى واتساب لتأكيد طلبك مباشرة مع فريقنا.
            </p>
          </div>

          <Button type="submit" size="lg" fullWidth className="mt-4 text-lg h-14 shadow-lg shadow-brand-red/20">
            تأكيد الطلب عبر واتساب
          </Button>
        </form>
      </div>
    </div>
  );
};

