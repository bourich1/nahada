import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { EmptyState } from '../components/ui/EmptyState';

export const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-24">
        <EmptyState 
          title="السلة فارغة" 
          description="لم تقم بإضافة أي منتجات إلى السلة بعد."
          icon={<ShoppingBag className="w-16 h-16" />}
          action={<Link to="/"><Button>تسوق الآن</Button></Link>}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="font-cairo text-3xl font-bold text-near-black mb-8">سلة المشتريات</h1>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-light-gray mb-8">
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex gap-4 items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 bg-light-gray border border-light-gray">
                <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-grow flex flex-col justify-center">
                <Link to={`/product/${item.product.slug}`} className="font-cairo font-semibold text-near-black line-clamp-2 md:text-lg hover:text-brand-red transition-colors">
                  {item.product.name}
                </Link>
                <div className="font-abel font-bold text-brand-red mt-1" dir="ltr">
                  {item.product.price} dh
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 shrink-0">
                <div className="flex items-center border border-light-gray rounded-sm">
                  <button 
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="w-8 h-8 flex items-center justify-center text-near-black hover:bg-light-gray transition"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-8 text-center font-abel font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.product.id, Math.min(item.product.stock, item.quantity + 1))}
                    className="w-8 h-8 flex items-center justify-center text-near-black hover:bg-light-gray transition"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-mid-gray hover:text-brand-red transition flex items-center gap-1 text-sm font-cairo"
                >
                  <Trash2 className="w-4 h-4" />
                  <span className="hidden sm:inline">حذف</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-light-gray flex items-center justify-between">
          <span className="font-cairo font-bold text-xl text-near-black">المجموع الإجمالي:</span>
          <span className="font-abel font-bold text-3xl text-brand-red" dir="ltr">{cartTotal} dh</span>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button size="lg" className="w-full sm:w-auto px-12 text-lg h-14" onClick={() => navigate('/checkout')}>
          متابعة الطلب
        </Button>
      </div>
    </div>
  );
};
