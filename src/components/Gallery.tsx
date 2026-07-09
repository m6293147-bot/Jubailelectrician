import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data';
import { GalleryItem } from '../types';
import { X, ChevronRight, ChevronLeft, Maximize2, Sparkles, MapPin, User, ShieldCheck } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState<'all' | 'electricity' | 'plumbing' | 'install' | 'maintenance'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const filteredItems = GALLERY_ITEMS.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  const activeItems = filteredItems.slice(0, visibleCount);

  const handleOpenLightbox = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex(i => i.id === item.id);
    setLightboxIndex(idx);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      let nextIdx = lightboxIndex - 1;
      while (nextIdx >= 0) {
        if (filter === 'all' || GALLERY_ITEMS[nextIdx].category === filter) {
          setLightboxIndex(nextIdx);
          return;
        }
        nextIdx--;
      }
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      let nextIdx = lightboxIndex + 1;
      while (nextIdx < GALLERY_ITEMS.length) {
        if (filter === 'all' || GALLERY_ITEMS[nextIdx].category === filter) {
          setLightboxIndex(nextIdx);
          return;
        }
        nextIdx++;
      }
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case 'electricity': return 'كهرباء';
      case 'plumbing': return 'سباكة';
      case 'install': return 'تركيب';
      case 'maintenance': return 'صيانة';
      default: return 'صيانة';
    }
  };

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredItems.length));
  };

  return (
    <section id="gallery" className="py-24 bg-slate-100 text-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-brand-orange bg-orange-100 px-4 py-1.5 rounded-full flex items-center gap-2 w-fit mx-auto">
            <Sparkles className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>معرض أعمال احترافي ومثبت</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mt-4 mb-5 font-sans">
            أعمالنا تتحدث بالنيابة عنا
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium font-tajawal">
            ثقة أهالي الجبيل تأتي من جودة وسرعة تنفيذنا على أرض الواقع. تصفح أدناه المقارنات التفاعلية الحية وصور من سابقة تمديداتنا وصياناتنا الحية.
          </p>
        </div>

        {/* ==================== PORTFOLIO IMAGES (MASONRY GRID) ==================== */}
        <div className="pt-4 mb-12 text-center">
          <h3 className="text-xl sm:text-3xl font-black text-slate-900 font-sans mb-3">سابقة أعمالنا الميدانية بالجبيل</h3>
          <p className="text-slate-500 text-xs sm:text-base font-medium font-tajawal max-w-2xl mx-auto mb-10">
            تصفح معرض الصور الكامل لأحدث التمديدات والتشطيبات والصيانات الطارئة التي قمنا بها في الفلل والشقق بجميع مناطق الجبيل.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center items-center gap-2 flex-wrap mb-10">
            <button
              onClick={() => { setFilter('all'); setVisibleCount(12); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              الكل ({GALLERY_ITEMS.length})
            </button>
            
            <button
              onClick={() => { setFilter('electricity'); setVisibleCount(12); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'electricity'
                  ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              أعمال الكهرباء ({GALLERY_ITEMS.filter(i => i.category === 'electricity').length})
            </button>

            <button
              onClick={() => { setFilter('plumbing'); setVisibleCount(12); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'plumbing'
                  ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              أعمال السباكة ({GALLERY_ITEMS.filter(i => i.category === 'plumbing').length})
            </button>

            <button
              onClick={() => { setFilter('install'); setVisibleCount(12); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'install'
                  ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              أعمال التركيب ({GALLERY_ITEMS.filter(i => i.category === 'install').length})
            </button>

            <button
              onClick={() => { setFilter('maintenance'); setVisibleCount(12); }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                filter === 'maintenance'
                  ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              صيانة طوارئ ({GALLERY_ITEMS.filter(i => i.category === 'maintenance').length})
            </button>
          </div>
        </div>

        {/* Masonry-Style Gallery Grid with beautiful hover effects */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {activeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(item)}
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white border border-slate-200/60 shadow-xs hover:shadow-lg group cursor-pointer transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80";
                }}
                className="w-full h-auto object-cover group-hover:scale-103 transition-transform duration-300"
              />
              {/* Fade Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-brand-orange text-white w-fit mb-1.5">
                  {getCategoryLabel(item.category)}
                </span>
                <h4 className="text-white text-sm sm:text-base font-bold mb-1 font-sans">{item.title}</h4>
                <p className="text-slate-300 text-xs line-clamp-2 leading-relaxed font-tajawal mb-2">{item.description}</p>
                
                {/* Micro Metadata Rows inside Hover */}
                <div className="mt-1 pt-2 border-t border-white/10 flex flex-col gap-1 text-right">
                  {item.location && (
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-200">
                      <MapPin className="w-3 h-3 text-brand-orange shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  )}
                  {item.tech && (
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-200">
                      <User className="w-3 h-3 text-blue-400 shrink-0" />
                      <span className="truncate">{item.tech}</span>
                    </div>
                  )}
                  {item.guarantee && (
                    <div className="flex items-center gap-1.5 text-[10px] text-emerald-300">
                      <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span className="truncate">{item.guarantee}</span>
                    </div>
                  )}
                </div>

                <div className="absolute top-4 left-4 p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-sm sm:text-base font-extrabold rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              عرض المزيد من الأعمال ({filteredItems.length - visibleCount} صورة إضافية)
            </button>
          </div>
        )}

        {/* Lightbox Modal with Full-size Carousel */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4">
            
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 left-6 z-50 p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              title="إغلاق"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="absolute right-4 sm:right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer disabled:opacity-30"
              title="السابق"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <div className="max-w-4xl w-full flex flex-col items-center justify-center">
              <div className="relative max-h-[70vh] rounded-2xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl">
                <img
                  src={GALLERY_ITEMS[lightboxIndex].image}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                  }}
                  className="max-h-[70vh] max-w-full object-contain mx-auto"
                />
              </div>

              {/* Title & Description under Lightbox */}
              <div className="text-center mt-6 max-w-2xl px-4">
                <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-brand-orange text-white inline-block mb-2 shadow-sm">
                  {getCategoryLabel(GALLERY_ITEMS[lightboxIndex].category)}
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-black mb-2 font-sans">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed font-tajawal mb-4">
                  {GALLERY_ITEMS[lightboxIndex].description}
                </p>

                {/* Real-work Metadata Badges */}
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {GALLERY_ITEMS[lightboxIndex].location && (
                    <span className="flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{GALLERY_ITEMS[lightboxIndex].location}</span>
                    </span>
                  )}
                  {GALLERY_ITEMS[lightboxIndex].tech && (
                    <span className="flex items-center gap-1.5 text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-200">
                      <User className="w-3.5 h-3.5 text-blue-400" />
                      <span>{GALLERY_ITEMS[lightboxIndex].tech}</span>
                    </span>
                  )}
                  {GALLERY_ITEMS[lightboxIndex].guarantee && (
                    <span className="flex items-center gap-1.5 text-xs bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg text-emerald-300">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{GALLERY_ITEMS[lightboxIndex].guarantee}</span>
                    </span>
                  )}
                </div>

                <p className="text-slate-500 text-[10px] font-mono mt-3">
                  صورة رقم {lightboxIndex + 1} من {GALLERY_ITEMS.length} | كهربائي وسباك الجبيل
                </p>
              </div>
            </div>

            {/* Right Button */}
            <button
              onClick={handleNext}
              className="absolute left-4 sm:left-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10 cursor-pointer disabled:opacity-30"
              title="التالي"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

          </div>
        )}

      </div>
    </section>
  );
}
