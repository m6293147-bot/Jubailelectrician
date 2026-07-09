import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp, Share2, Copy, Check, X, MapPin } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href || 'https://wa.me/966576859898');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* 1. Desktop Floating Action Icons (Hidden on Mobile bottom dock) */}
      <div className="hidden md:flex fixed bottom-8 left-8 z-40 flex-col gap-4 items-center">
        
        {/* Scroll To Top */}
        <button
          onClick={handleScrollToTop}
          className={`w-12 h-12 rounded-full bg-slate-900/90 text-white shadow-xl flex items-center justify-center hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-slate-800 backdrop-blur-md ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'
          }`}
          title="العودة للأعلى"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* Share Button */}
        <button
          onClick={() => setShowShare(true)}
          className="w-12 h-12 rounded-full bg-slate-900/90 text-white shadow-xl flex items-center justify-center hover:bg-slate-800 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-slate-800 backdrop-blur-md"
          title="مشاركة الصفحة"
        >
          <Share2 className="w-5 h-5 text-slate-100" />
        </button>

        {/* Call Button */}
        <a
          href="tel:0576859898"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-electric-blue to-blue-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200 relative animate-pulse border border-blue-400/20"
          title="اتصل بالكهربائي والسباك"
        >
          <Phone className="w-6 h-6 text-white" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966576859898"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-emerald-600 text-white shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-200 border border-emerald-400/20"
          title="مراسلة واتساب فورية"
        >
          <MessageCircle className="w-7 h-7 text-white fill-none" />
        </a>

      </div>

      {/* 2. Mobile Bottom Sticky Conversion Bar (Persistent on screens smaller than md) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-8px_30px_rgb(0,0,0,0.12)] px-4 py-2.5 flex items-center justify-around gap-2 pb-safe">
        
        {/* WhatsApp Mobile Action */}
        <a
          href="https://wa.me/966576859898"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white text-sm font-extrabold rounded-xl shadow-md transition-all duration-200"
        >
          <MessageCircle className="w-4 h-4 shrink-0" />
          <span>واتساب</span>
        </a>

        {/* Phone Call Mobile Action */}
        <a
          href="tel:0576859898"
          className="flex-[1.2] flex items-center justify-center gap-2 py-3 px-3 bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-electric-blue active:scale-[0.98] text-white text-sm font-extrabold rounded-xl shadow-md transition-all duration-200 relative"
        >
          <Phone className="w-4 h-4 shrink-0 animate-bounce" />
          <span>اتصل الآن</span>
          <span className="absolute -top-1 -left-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
          </span>
        </a>

        {/* Location Mobile Action */}
        <a
          href="#contact"
          onClick={handleScrollToContact}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-extrabold rounded-xl transition-all duration-200"
        >
          <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
          <span>الموقع</span>
        </a>

      </div>

      {/* Share Overlay Popover */}
      {showShare && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setShowShare(false)}></div>
          
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 overflow-hidden z-10 animate-[zoomIn_0.15s_ease-out] text-slate-900 text-center">
            <button
              onClick={() => setShowShare(false)}
              className="absolute top-4 left-4 p-1 bg-slate-100 hover:bg-slate-200 text-slate-500 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg sm:text-xl font-extrabold text-slate-950 mb-3 font-sans">أنقذ جارك أو صديقك بالجبيل</h3>
            <p className="text-slate-500 text-xs font-semibold leading-relaxed mb-6 font-tajawal">
              شارك بيانات الاتصال لأفضل كهربائي وسباك بالجبيل لمساعدتهم في حل مشاكل السباكة وأعطال الطوارئ ٢٤ ساعة.
            </p>

            <div className="space-y-3.5 mb-6">
              
              {/* WhatsApp Share Link */}
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent('أفضل فني كهربائي وسباك بالجبيل - صيانة طوارئ ٢٤ ساعة متواجدين في خدمتكم: 0576859898 \nرابط الموقع: ' + window.location.href)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold py-3 rounded-xl text-sm border border-emerald-100 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال عبر الواتساب</span>
              </a>

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-2 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold py-3 rounded-xl text-sm border border-slate-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-5 h-5 text-emerald-600" /> : <Copy className="w-5 h-5 text-slate-500" />}
                <span>{copied ? 'تم نسخ الرابط بنجاح!' : 'نسخ رابط الموقع ومشاركته'}</span>
              </button>

            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/50 flex flex-col items-center justify-center gap-1.5">
              <span className="text-[10px] text-slate-400 font-bold font-mono">رقم التواصل المباشر الموحد</span>
              <span className="text-lg font-black text-slate-900 font-sans tracking-wide">0576859898</span>
              <a href="tel:0576859898" className="text-xs text-electric-blue font-bold hover:underline">اضغط للاتصال الآن</a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
