import React, { useState } from 'react';
import { FAQS } from '../data';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1'); // Open the first FAQ item by default

  const toggleFAQ = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-100 text-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-electric-blue bg-blue-50 px-4 py-1.5 rounded-full flex items-center gap-2 w-fit mx-auto">
            <HelpCircle className="w-4 h-4 text-electric-blue" />
            <span>إجابات فورية لأسئلتكم</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 mb-5 font-sans">
            الأسئلة الشائعة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium font-tajawal">
            هل لديك استفسار؟ تصفح الإجابات على الأسئلة الأكثر تداولاً بين عملائنا في الجبيل بشأن أسعار وضمان وسرعة وصول خدمات السباكة والكهرباء لدينا.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-right p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-sans leading-snug">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-orange' : ''}`} />
                </button>

                {/* Content Box */}
                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-64 border-t border-slate-100' : 'max-h-0'}`}>
                  <div className="p-5 sm:p-6 bg-slate-50 text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed font-tajawal">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic FAQ Schema Generator */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": FAQS.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>

        {/* Still Have Questions? Card */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-tr from-brand-orange/5 to-amber-500/5 border border-brand-orange/20 text-center">
          <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-2 font-sans">هل لديك استفسار آخر لم نجيب عليه؟</h3>
          <p className="text-slate-500 text-xs sm:text-sm font-medium mb-6 font-tajawal">
            فريق الدعم الفني لدينا متاح على مدار الساعة للإجابة على جميع تساؤلاتكم وتوفير المشورة والأسعار مجاناً.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:0576859898"
              className="flex items-center gap-2 bg-gradient-to-r from-electric-blue to-blue-700 text-white font-extrabold px-6 py-3 rounded-xl text-sm shadow-md"
            >
              <span>اتصل بالفني: 0576859898</span>
            </a>
            
            <a
              href="https://wa.me/966576859898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-xl text-sm"
            >
              <span>استفسار واتساب مباشر</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
