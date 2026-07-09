import React, { useState, useEffect, useRef } from 'react';
import { REVIEWS } from '../data';
import { Star, ChevronRight, ChevronLeft, Quote, Heart, ShieldCheck } from 'lucide-react';

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
    }, 6000); // changes review every 6 seconds
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const handleNext = () => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
    startAutoPlay();
  };

  const handlePrev = () => {
    stopAutoPlay();
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    startAutoPlay();
  };

  const handleDotClick = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    startAutoPlay();
  };

  const toggleLike = (id: string) => {
    setLikes(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeReview = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-blue-100/40 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-orange-50/40 blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-brand-orange bg-orange-100 px-4 py-1.5 rounded-full flex items-center gap-2 w-fit mx-auto">
            <Quote className="w-4 h-4 text-brand-orange" />
            <span>آراء وتقييمات حقيقية</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 mb-5 font-sans">
            ماذا يقول عملاؤنا في الجبيل؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium font-tajawal">
            تقييمات خمس نجوم من عملائنا الكرام الذين وثقوا في خدماتنا للسباكة والكهرباء بالمنطقة الشرقية. رضاكم هو رأس مالنا!
          </p>
        </div>

        {/* Testimonials Slider Wrapper */}
        <div className="relative p-1 sm:p-4">
          
          {/* Active Review Card */}
          <div 
            className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-200/60 shadow-xl relative transition-all duration-500 transform hover:scale-[1.01] flex flex-col justify-between min-h-[350px] sm:min-h-[300px]"
            onMouseEnter={stopAutoPlay}
            onMouseLeave={startAutoPlay}
          >
            {/* Quote watermark */}
            <div className="absolute -top-4 right-8 text-orange-200/50 text-8xl font-serif select-none pointer-events-none">
              ”
            </div>

            <div className="relative z-10">
              {/* Stars & Verification Row */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < activeReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} 
                    />
                  ))}
                  <span className="text-xs font-mono font-bold text-slate-400 mr-2">({activeReview.rating}.0)</span>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-800 text-[10px] font-black rounded-lg">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>عميل موثق بالجبيل</span>
                </div>
              </div>

              {/* Review Testimonial Text */}
              <p className="text-base sm:text-lg md:text-xl text-slate-700 font-bold leading-relaxed mb-8 font-tajawal text-right">
                {activeReview.comment}
              </p>
            </div>

            {/* Reviewer Meta (Footer of Card) */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-slate-200/60 pt-6 gap-4">
              <div className="flex items-center gap-4.5 w-full sm:w-auto">
                {/* Glowing Avatar Initial Letter */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-lg border-2 shadow-sm shrink-0 ${
                  activeIndex % 4 === 0 ? 'bg-gradient-to-tr from-orange-100 to-amber-100 text-brand-orange border-orange-200' :
                  activeIndex % 4 === 1 ? 'bg-gradient-to-tr from-blue-100 to-sky-100 text-blue-600 border-blue-200' :
                  activeIndex % 4 === 2 ? 'bg-gradient-to-tr from-emerald-100 to-teal-100 text-emerald-600 border-emerald-200' :
                  'bg-gradient-to-tr from-purple-100 to-pink-100 text-purple-600 border-purple-200'
                }`}>
                  {activeReview.name.trim().charAt(0) || 'ع'}
                </div>
                
                <div className="text-right">
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-sans">{activeReview.name}</h4>
                  <p className="text-xs text-slate-400 font-bold flex items-center gap-1">
                    <span>{activeReview.location}</span>
                  </p>
                </div>
              </div>

              {/* Interactive Helpfulness Actions */}
              <div className="flex items-center justify-between sm:justify-end gap-3.5 w-full sm:w-auto">
                <span className="text-xs text-slate-400 font-mono font-medium">{activeReview.date}</span>
                
                <button
                  onClick={() => toggleLike(activeReview.id)}
                  className={`flex items-center gap-1.5 text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    likes[activeReview.id] 
                      ? 'text-rose-600 bg-rose-50 border border-rose-100' 
                      : 'text-slate-500 hover:text-slate-800 bg-white border border-slate-200/60'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${likes[activeReview.id] ? 'fill-rose-600' : ''}`} />
                  <span>مفيد ({likes[activeReview.id] ? 15 : 14})</span>
                </button>
              </div>
            </div>
          </div>

          {/* Slider Controllers: Chevrons */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 sm:-right-6 z-20">
            <button
              onClick={handlePrev}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="التقييم السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 sm:-left-6 z-20">
            <button
              onClick={handleNext}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-700 shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="التقييم التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* Slide Indicators / Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {REVIEWS.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index 
                  ? 'w-7 bg-brand-orange shadow-md' 
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
              title={`الانتقال للتقييم ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Global Stars Summary Box */}
        <div className="mt-16 text-center max-w-lg mx-auto bg-slate-50 border border-slate-200/60 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-center gap-6 shadow-sm">
          <div className="text-right">
            <h4 className="text-slate-900 font-extrabold text-base mb-1 font-sans">تجاوزنا تقييم 4.9 من 5.0 نجوم</h4>
            <p className="text-slate-500 text-xs font-semibold font-tajawal">بناءً على أكثر من 380 تقييم معتمد من أهالي مدينة الجبيل البلد والصناعية.</p>
          </div>
          <div className="flex items-center text-amber-400 shrink-0 gap-1 bg-amber-50 px-4 py-2 rounded-2xl border border-amber-100">
            <Star className="w-5 h-5 fill-amber-400" />
            <span className="font-extrabold text-slate-900 text-base font-sans">4.9 / 5.0</span>
          </div>
        </div>

      </div>
    </section>
  );
}
