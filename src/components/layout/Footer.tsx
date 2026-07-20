

export const Footer = () => {
  return (
    <footer className="bg-off-white border-t border-light-gray mt-16 py-12">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <img src="/nahada.svg" alt="نهضة شوب" className="h-14" />
          </div>
          <p className="text-mid-gray text-sm leading-relaxed">
            الوجهة الأولى للتسوق الإلكتروني بأسعار منافسة وجودة عالية. نحن نهتم بتجربة تسوقك.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-near-black mb-4">عن المتجر</h4>
          <ul className="flex flex-col gap-2 text-sm text-mid-gray">
            <li><a href="#" className="hover:text-brand-red transition">من نحن</a></li>
            <li><a href="/contact" className="hover:text-brand-red transition">اتصل بنا</a></li>
            <li><a href="#" className="hover:text-brand-red transition">الوظائف</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-near-black mb-4">السياسات</h4>
          <ul className="flex flex-col gap-2 text-sm text-mid-gray">
            <li><a href="#" className="hover:text-brand-red transition">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-brand-red transition">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-brand-red transition">سياسة الاسترجاع</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-near-black mb-4">تواصل معنا</h4>
          <ul className="flex flex-col gap-2 text-sm text-mid-gray">
            <li>support@nahadashop.com</li>
            <li className="font-abel" dir="ltr">+966 50 123 4567</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-mid-gray text-sm mt-12 pt-4 border-t border-light-gray">
        &copy; {new Date().getFullYear()} نهضة شوب. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};
