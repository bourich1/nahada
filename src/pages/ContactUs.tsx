import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Phone, MessageCircle, Mail, MapPin,
  Send, CheckCircle, ChevronDown
} from 'lucide-react';



/* ─── animation variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};



/* ─── Section wrapper with inView animation ─── */
const AnimatedSection = ({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
};

/* ─── Ripple Button ─── */
const RippleButton = ({ children, className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode }) => {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
    props.onClick?.(e);
  };

  return (
    <button {...props} onClick={handleClick} className={`relative overflow-hidden ${className}`}>
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
          style={{ left: r.x - 20, top: r.y - 20, width: 40, height: 40 }}
        />
      ))}
      {children}
    </button>
  );
};

/* ─── Contact Info Cards data ─── */
const contactCards = [
  { icon: Phone, title: 'الهاتف', info: '0634323138', href: 'tel:+212634323138', color: 'from-brand-red to-deep-crimson' },
  { icon: MessageCircle, title: 'واتساب', info: '0634323138', href: 'https://wa.me/212634323138', color: 'from-green-500 to-green-600' },
  { icon: Mail, title: 'البريد الإلكتروني', info: 'khalidsadqi0@gmail.com', href: 'mailto:khalidsadqi0@gmail.com', color: 'from-blue-500 to-blue-600' },
  { icon: MapPin, title: 'العنوان', info: 'المغرب', href: 'https://maps.app.goo.gl/npk5KPehSepcVyZm7', color: 'from-purple-500 to-purple-600' },
];

/* ─── FAQ data ─── */
const faqData = [
  { q: 'كيف يمكنني تتبع طلبي؟', a: 'بمجرد شحن طلبك، ستتلقى رسالة واتساب تحتوي على رقم التتبع ورابط مباشر لتتبع طلبك في أي وقت.' },
  { q: 'ما هي مدة التوصيل؟', a: 'يتم التوصيل في غضون 24 إلى 72 ساعة حسب المدينة. المدن الكبرى عادةً خلال 24 ساعة.' },
  { q: 'هل يمكنني إرجاع المنتج؟', a: 'نعم، يمكنك إرجاع المنتج خلال 7 أيام من الاستلام بشرط أن يكون في حالته الأصلية وبتغليفه الكامل.' },
  { q: 'ما هي طرق الدفع المتاحة؟', a: 'نوفر خدمة الدفع عند الاستلام (COD) في جميع أنحاء المغرب.' },
  { q: 'كيف أتواصل مع خدمة العملاء؟', a: 'يمكنك التواصل معنا عبر واتساب، الهاتف، أو البريد الإلكتروني. فريقنا متاح يومياً من 9 صباحاً إلى 9 مساءً.' },
];



/* ================================================================
   MAIN COMPONENT
   ================================================================ */
export const ContactUs = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => { setFormState('idle'); setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' }); }, 2500);
    }, 1800);
  };

  const isFieldActive = (name: string) => focusedField === name || formData[name as keyof typeof formData] !== '';

  return (
    <main className="flex-1 overflow-hidden">

      {/* ═══════════════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-[520px] md:min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-red-50">

        {/* Floating gradient blobs */}
        <motion.div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-brand-red/10 blur-3xl -top-20 -right-20" animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-60 h-60 md:w-80 md:h-80 rounded-full bg-blue-400/10 blur-3xl bottom-10 -left-10" animate={{ x: [0, -20, 0], y: [0, 25, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute w-40 h-40 rounded-full bg-purple-400/10 blur-2xl top-1/3 left-1/4" animate={{ x: [0, 15, 0], y: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} />

        {/* Soft particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brand-red/20"
            style={{ top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}

        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 py-16">

          {/* Text content */}
          <div className="flex-1 text-center md:text-right">
            <motion.h1
              className="font-cairo text-4xl md:text-6xl font-bold text-near-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              نحن هنا
              <span className="block bg-gradient-to-l from-brand-red to-deep-crimson bg-clip-text text-transparent">
                لمساعدتك
              </span>
            </motion.h1>

            <motion.p
              className="font-cairo text-lg md:text-xl text-mid-gray max-w-xl leading-relaxed mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              إذا كانت لديك أي استفسارات أو تحتاج إلى المساعدة، يسعد فريق Nahada بخدمتك.
            </motion.p>

            <motion.div
              className="flex gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="tel:+212634323138" className="inline-flex items-center gap-2 bg-gradient-to-l from-brand-red to-deep-crimson text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5 transition-all duration-300">
                <Phone className="w-5 h-5" />
                اتصل الآن
              </a>
              <a href="https://wa.me/212634323138" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white border-2 border-green-500 text-green-600 px-6 py-3 rounded-xl font-bold hover:bg-green-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300">
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
            </motion.div>
          </div>

          {/* Contact Form in Hero */}
          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-light-gray/50 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)]">
              <div className="flex flex-col gap-5">

                {/* Full Name */}
                <div className="relative">
                  <motion.label
                    className={`absolute right-4 transition-all duration-300 pointer-events-none font-cairo ${isFieldActive('fullName') ? 'top-1 text-xs text-brand-red font-semibold' : 'top-4 text-sm text-mid-gray'}`}
                    layout
                  >
                    الاسم الكامل
                  </motion.label>
                  <input
                    type="text" name="fullName" value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('fullName')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pt-6 pb-2 px-4 border-2 border-light-gray rounded-xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-cairo bg-white"
                    required
                  />
                </div>

                {/* Email & Phone row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <motion.label className={`absolute right-4 transition-all duration-300 pointer-events-none font-cairo ${isFieldActive('email') ? 'top-1 text-xs text-brand-red font-semibold' : 'top-4 text-sm text-mid-gray'}`} layout>
                      البريد الإلكتروني
                    </motion.label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full pt-6 pb-2 px-4 border-2 border-light-gray rounded-xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-cairo bg-white"
                    />
                  </div>
                  <div className="relative">
                    <motion.label className={`absolute right-4 transition-all duration-300 pointer-events-none font-cairo ${isFieldActive('phone') ? 'top-1 text-xs text-brand-red font-semibold' : 'top-4 text-sm text-mid-gray'}`} layout>
                      رقم الهاتف
                    </motion.label>
                    <input
                      type="tel" name="phone" value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      dir="ltr"
                      className="w-full pt-6 pb-2 px-4 border-2 border-light-gray rounded-xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-abel bg-white text-right"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="relative">
                  <motion.label className={`absolute right-4 transition-all duration-300 pointer-events-none font-cairo ${isFieldActive('subject') ? 'top-1 text-xs text-brand-red font-semibold' : 'top-4 text-sm text-mid-gray'}`} layout>
                    الموضوع
                  </motion.label>
                  <input
                    type="text" name="subject" value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pt-6 pb-2 px-4 border-2 border-light-gray rounded-xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-cairo bg-white"
                    required
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <motion.label className={`absolute right-4 transition-all duration-300 pointer-events-none font-cairo ${isFieldActive('message') ? 'top-1 text-xs text-brand-red font-semibold' : 'top-4 text-sm text-mid-gray'}`} layout>
                    الرسالة
                  </motion.label>
                  <textarea
                    name="message" rows={3} value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pt-6 pb-2 px-4 border-2 border-light-gray rounded-xl focus:border-brand-red focus:ring-4 focus:ring-brand-red/10 outline-none transition-all duration-300 font-cairo bg-white resize-none"
                    required
                  />
                </div>

                {/* Submit */}
                <RippleButton
                  type="submit"
                  disabled={formState === 'loading' || formState === 'success'}
                  className={`w-full py-4 rounded-xl font-cairo font-bold text-lg text-white transition-all duration-500 flex items-center justify-center gap-3 ${
                    formState === 'success'
                      ? 'bg-green-500 shadow-lg shadow-green-500/25'
                      : 'bg-gradient-to-l from-brand-red to-deep-crimson shadow-lg shadow-brand-red/25 hover:shadow-xl hover:shadow-brand-red/30 hover:-translate-y-0.5'
                  } disabled:opacity-80`}
                >
                  {formState === 'loading' ? (
                    <motion.div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }} />
                  ) : formState === 'success' ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring' }} className="flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      <span>تم الإرسال بنجاح!</span>
                    </motion.div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال الرسالة</span>
                    </>
                  )}
                </RippleButton>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT CARDS
          ═══════════════════════════════════════════════════ */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 -mt-10 relative z-20 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {contactCards.map((card, i) => (
            <motion.a
              key={card.title}
              href={card.href}
              target={card.href.startsWith('http') ? '_blank' : undefined}
              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-6 text-center border border-white/50 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_-15px_rgba(222,38,39,0.15)] transition-all duration-500 cursor-pointer overflow-hidden"
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                <div className="w-full h-full rounded-2xl bg-white" />
              </div>

              <motion.div
                className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}
                whileHover={{ rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <card.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="font-cairo font-bold text-near-black text-lg mb-2">{card.title}</h3>
              <p className="font-cairo text-sm text-mid-gray break-all" dir="ltr">{card.info}</p>
            </motion.a>
          ))}
        </div>
      </AnimatedSection>



      {/* ═══════════════════════════════════════════════════
          INTERACTIVE MAP
          ═══════════════════════════════════════════════════ */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-16" id="map">
        <motion.h2 className="font-cairo text-3xl md:text-4xl font-bold text-center text-near-black mb-4" variants={fadeUp}>
          زوروا متجرنا
        </motion.h2>
        <motion.p className="font-cairo text-mid-gray text-center mb-10 max-w-md mx-auto" variants={fadeUp} custom={1}>
          يسعدنا استقبالكم في أي وقت
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-light-gray/50 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.1)] bg-white"
          variants={fadeUp}
          custom={2}
          whileHover={{ scale: 1.01, boxShadow: '0 30px 80px -20px rgba(0,0,0,0.15)' }}
          transition={{ duration: 0.4 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d212.39594508147914!2d-8.042915838909991!3d31.597275834157212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDM1JzQ5LjMiTiA4wrAwMiczMy43Ilc!5e0!3m2!1sen!2sma!4v1784735342047!5m2!1sen!2sma"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Nahada Shop Location"
          />
        </motion.div>
      </AnimatedSection>



      {/* ═══════════════════════════════════════════════════
          FAQ ACCORDION
          ═══════════════════════════════════════════════════ */}
      <AnimatedSection className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <motion.h2 className="font-cairo text-3xl md:text-4xl font-bold text-center text-near-black mb-4" variants={fadeUp}>
          الأسئلة الشائعة
        </motion.h2>
        <motion.p className="font-cairo text-mid-gray text-center mb-12 max-w-md mx-auto" variants={fadeUp} custom={1}>
          إجابات سريعة على الأسئلة الأكثر شيوعاً
        </motion.p>

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl border border-light-gray/60 shadow-sm overflow-hidden"
              variants={fadeUp}
              custom={i}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-right font-cairo font-bold text-near-black hover:text-brand-red transition-colors"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="text-base md:text-lg">{item.q}</span>
                <motion.div animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-5 h-5 text-mid-gray flex-shrink-0 mr-4" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 font-cairo text-mid-gray leading-relaxed border-t border-light-gray/40 pt-4">
                      {item.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>



    </main>
  );
};
