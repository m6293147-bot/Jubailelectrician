import React from 'react';
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onNavigateToContact: () => void;
}

export default function Hero({ onNavigateToContact }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-slate-950 text-white">
      {/* Dynamic Background with elegant glows */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950"></div>
        {/* Animated glowing light circles */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[130px] animate-[pulse_8s_infinite]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-orange-500/10 blur-[130px] animate-[pulse_10s_infinite_delay-2s]"></div>
        {/* Subtle grid mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:16px_16px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Right Column: Hero content (Arabic RTL order) */}
          <div className="lg:col-span-7 text-right flex flex-col justify-center order-1 lg:order-2">
            
            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6 backdrop-blur-md w-fit">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-400">فنيون مناوبون الآن • جاهزون لخدمتك بالجبيل</span>
            </div>

            {/* Main Catchy Header */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-5 font-sans">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200">
                أفضل خدمات الصيانة
              </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-amber-300 drop-shadow-sm">
                كهربائي وسباك الجبيل 24 ساعة
              </span>
            </h1>

            {/* Powerful short description */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-8 max-w-2xl font-tajawal">
              حلول صيانة فورية متكاملة بأحدث الأجهزة الإلكترونية لكشف الالتماسات وتسريبات المياه في الجبيل البلد والصناعية. جودة احترافية، أمان تام، وبأيدي أمهر الفنيين مع ضمان معتمد.
            </p>

            {/* Conversion CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-xl">
              <a
                href="tel:0576859898"
                className="flex items-center justify-center gap-3 flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-electric-blue text-white text-base sm:text-lg font-extrabold shadow-xl shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Phone className="w-5 h-5 animate-[bounce_2s_infinite]" />
                <span>📞 اتصل الآن: 0576859898</span>
              </a>
              
              <a
                href="https://wa.me/966576859898"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 flex-1 px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-base sm:text-lg font-extrabold shadow-xl shadow-emerald-700/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5 fill-none" />
                <span>💬 راسلنا واتساب مباشر</span>
              </a>
            </div>

            {/* Trust Bar (شريط الثقة المطلوب) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
              <div className="flex items-center gap-2.5 justify-center sm:justify-start border-l border-white/10 last:border-0 pl-1">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                <div className="text-right">
                  <span className="block text-sm font-black text-white">⭐ 4.9/5</span>
                  <span className="text-[10px] text-slate-400 font-bold">التقييم العام للخدمة</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center sm:justify-start border-l border-white/10 last:border-0 pl-1">
                <Users className="w-5 h-5 text-electric-light shrink-0" />
                <div className="text-right">
                  <span className="block text-sm font-black text-white">+500 عميل</span>
                  <span className="text-[10px] text-slate-400 font-bold">بأحياء الجبيل المختلفة</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center sm:justify-start border-l border-white/10 last:border-0 pl-1">
                <ShieldCheck className="w-5 h-5 text-brand-orange shrink-0" />
                <div className="text-right">
                  <span className="block text-xs font-black text-white">ضمان معتمد</span>
                  <span className="text-[10px] text-slate-400 font-bold">على جميع الأعمال</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center sm:justify-start">
                <Clock className="w-5 h-5 text-amber-300 shrink-0" />
                <div className="text-right">
                  <span className="block text-sm font-black text-white">خدمة 24 ساعة</span>
                  <span className="text-[10px] text-slate-400 font-bold">طوال أيام الأسبوع</span>
                </div>
              </div>
            </div>

          </div>

          {/* Left Column: High-Quality Framed Hero Image */}
          <div className="lg:col-span-5 relative order-2 lg:order-1 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Background decorative glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange/20 to-electric-blue/20 rounded-[2.5rem] blur-2xl opacity-70"></div>
              
              {/* Main Image Frame with sleek glassmorphism outline */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-slate-900 aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                  alt="فني كهربائي وسباك الجبيل أثناء العمل باحترافية"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center scale-102 hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
                
                {/* Elegant overlay shadow */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                {/* Overlap Badges (Glassmorphism UI components) */}
                <div className="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center gap-3.5 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-orange to-amber-500 flex items-center justify-center shadow-md shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <h4 className="text-xs text-slate-400 font-bold">صيانة احترافية معتمدة</h4>
                    <p className="text-sm font-extrabold text-white">فريق مجهز بأحدث أجهزة الفحص والإصلاح</p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center gap-2 shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">صيانة فورية ومضمونة</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modern Wave bottom curve divider */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-50 relative z-10" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }}></div>
    </section>
  );
}
