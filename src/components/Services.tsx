import React, { useState } from 'react';
import { SERVICES } from '../data';
import { Service } from '../types';
import * as LucideIcons from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [filter, setFilter] = useState<'all' | 'electricity' | 'plumbing'>('all');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const filteredServices = SERVICES.filter(service => {
    if (filter === 'all') return true;
    return service.category === filter || service.category === 'both';
  });

  const renderIcon = (name: string, className: string = "w-6 h-6 text-white") => {
    // Dynamically retrieve the icon from Lucide
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <LucideIcons.Wrench className={className} />;
  };

  return (
    <section id="services" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-brand-orange bg-orange-100 px-3.5 py-1.5 rounded-full">الاحترافية والسرعة</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 mb-5">
            خدمات السباكة والكهرباء المتكاملة
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            نقدم باقة واسعة من خدمات الصيانة الفورية والتمديد للقطاعات السكنية والتجارية في مدينة الجبيل بأيدي أمهر الفنيين وأحدث وسائل الفحص.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center items-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 cursor-pointer shadow-sm ${
              filter === 'all'
                ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            كل الخدمات ({SERVICES.length})
          </button>
          
          <button
            onClick={() => setFilter('electricity')}
            className={`px-6 py-3 rounded-2xl text-sm sm:text-base font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${
              filter === 'electricity'
                ? 'bg-gradient-to-r from-electric-blue to-blue-700 text-white shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <LucideIcons.Zap className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span>صيانة الكهرباء ({SERVICES.filter(s => s.category === 'electricity').length})</span>
          </button>
          
          <button
            onClick={() => setFilter('plumbing')}
            className={`px-6 py-3 rounded-2xl text-sm sm:text-base font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer shadow-sm ${
              filter === 'plumbing'
                ? 'bg-gradient-to-r from-orange-500 to-brand-orange text-white shadow-md scale-102'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <LucideIcons.Droplet className="w-4 h-4 text-sky-500 fill-sky-200" />
            <span>صيانة السباكة ({SERVICES.filter(s => s.category === 'plumbing').length})</span>
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1.5"
            >
              {/* Image with overlay icon */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80";
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                {/* Category tag */}
                <span className={`absolute top-4 right-4 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-md text-white ${
                  service.category === 'electricity' 
                    ? 'bg-blue-600' 
                    : service.category === 'plumbing'
                    ? 'bg-orange-500'
                    : 'bg-indigo-600'
                }`}>
                  {service.category === 'electricity' ? 'كهرباء' : service.category === 'plumbing' ? 'سباكة' : 'خدمة شاملة'}
                </span>

                {/* Floating Icon */}
                <div className={`absolute -bottom-5 left-6 w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg ${
                  service.category === 'electricity' 
                    ? 'bg-gradient-to-tr from-electric-blue to-blue-500 shadow-blue-500/30' 
                    : service.category === 'plumbing'
                    ? 'bg-gradient-to-tr from-brand-orange to-amber-500 shadow-brand-orange/30'
                    : 'bg-gradient-to-tr from-indigo-600 to-indigo-400 shadow-indigo-500/30'
                }`}>
                  {renderIcon(service.iconName, "w-5 h-5 text-white")}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-electric-blue transition-colors mb-2 font-sans">
                    {service.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 line-clamp-3 mb-4 leading-relaxed font-tajawal">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all duration-200 border border-slate-200/50 cursor-pointer"
                  >
                    تفاصيل ومميزات الخدمة
                  </button>
                  
                  <div className="flex gap-2">
                    <a
                      href={`tel:0576859898`}
                      className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-electric-blue text-white text-xs sm:text-sm font-bold py-2.5 px-3 rounded-xl shadow-sm transition-all"
                    >
                      <LucideIcons.Phone className="w-3.5 h-3.5" />
                      <span>اتصال فوري</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/966576859898?text=${encodeURIComponent(`مرحباً، أريد الاستفسار عن خدمة: ${service.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition-all"
                      title="استفسار واتساب"
                    >
                      <LucideIcons.MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Dialog */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setSelectedService(null)}></div>
            
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden z-10 animate-[zoomIn_0.2s_ease-out]">
              <div className="relative h-44 bg-slate-900 text-white">
                <img
                  src={selectedService.image}
                  alt={selectedService.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 left-4 p-2 bg-slate-900/60 hover:bg-slate-800 text-white rounded-full transition-colors cursor-pointer"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-5 right-6 left-6">
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md text-white mb-1.5 inline-block ${
                    selectedService.category === 'electricity' ? 'bg-blue-600' : 'bg-orange-500'
                  }`}>
                    {selectedService.category === 'electricity' ? 'كهرباء' : 'سباكة'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">{selectedService.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6">
                  {selectedService.description}
                </p>

                <h4 className="font-extrabold text-sm sm:text-base text-slate-900 border-b pb-2 mb-4 flex items-center gap-2">
                  <LucideIcons.CheckCircle className="w-5 h-5 text-emerald-500" />
                  <span>خطط العمل ومميزات الخدمة لدينا:</span>
                </h4>

                <ul className="space-y-3 mb-8">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                      <LucideIcons.Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                    <LucideIcons.Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                    <span>توفير قطع الغيار الأصلية بأسعار معتمدة مع الضمان</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 text-xs sm:text-sm font-medium">
                    <LucideIcons.Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5 bg-emerald-100 rounded-full p-0.5" />
                    <span>معاينة مجانية بالكامل في حال البدء بالعمل الفوري</span>
                  </li>
                </ul>

                <div className="flex gap-3">
                  <a
                    href="tel:0576859898"
                    className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-electric-blue to-blue-700 text-white text-sm sm:text-base font-extrabold py-3.5 rounded-2xl shadow-md cursor-pointer"
                  >
                    <LucideIcons.Phone className="w-4 h-4 animate-bounce" />
                    <span>طلب فني فوري</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      onSelectService(selectedService.name);
                      setSelectedService(null);
                    }}
                    className="px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-2xl border border-slate-200 transition-colors cursor-pointer"
                  >
                    حجز موعد إلكتروني
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
