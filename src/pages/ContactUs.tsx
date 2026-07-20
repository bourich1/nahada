export const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12 flex-grow">
      <h1 className="text-3xl font-bold text-near-black mb-8 text-center">اتصل بنا</h1>
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border border-light-gray">
        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-semibold text-near-black mb-2">الاسم الكامل</label>
            <input type="text" className="w-full border border-light-gray rounded-md p-3 focus:outline-none focus:border-brand-red" placeholder="الاسم" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-near-black mb-2">البريد الإلكتروني</label>
            <input type="email" className="w-full border border-light-gray rounded-md p-3 focus:outline-none focus:border-brand-red" placeholder="البريد الإلكتروني" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-near-black mb-2">الرسالة</label>
            <textarea className="w-full border border-light-gray rounded-md p-3 h-32 focus:outline-none focus:border-brand-red" placeholder="اكتب رسالتك هنا..."></textarea>
          </div>
          <button type="submit" className="bg-brand-red text-white font-bold py-3 px-6 rounded-md hover:bg-red-700 transition">إرسال</button>
        </form>
      </div>
    </div>
  );
};
