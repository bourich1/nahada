export const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/212634323138"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(34,197,94,0.4)] transition-all hover:scale-110 hover:-translate-y-1"
        title="تواصل عبر واتساب"
        aria-label="تواصل عبر واتساب"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>
    </div>
  );
};
