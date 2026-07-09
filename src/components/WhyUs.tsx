import React from 'react';
import { Award, DollarSign, ShieldCheck, Navigation, Clock, Users, Wrench, MapPin } from 'lucide-react';

export default function WhyUs() {
  const advantages = [
    {
      title: 'خبرة طويلة وموثقة',
      description: 'نعمل في مجال السباكة والكهرباء بالمملكة العربية السعودية لأكثر من 10 سنوات، ولدينا خبرة واسعة في طبيعة الفلل والمباني بمدينة الجبيل.',
      icon: Award,
      color: 'text-brand-orange bg-orange-50 border-orange-100',
    },
    {
      title: 'أسعار مناسبة ومنافسة',
      description: 'نقدم عروض أسعار دقيقة ومدروسة للغاية تناسب جميع الميزانيات، مع الالتزام التام بالتسعيرة المتفق عليها دون أي زيادات أو رسوم مفاجئة.',
      icon: DollarSign,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'ضمان حقيقي على العمل',
      description: 'نمنح عملائنا الكرام شهادة ضمان معتمدة على كافة أعمال التمديد، التأسيس، العزل، والإصلاح تصل لغاية عام كامل لإعطائك راحة البال.',
      icon: ShieldCheck,
      color: 'text-electric-blue bg-blue-50 border-blue-100',
    },
    {
      title: 'سرعة قياسية في الوصول',
      description: 'ندرك أن أعطال السباكة والكهرباء لا تنتظر، لذلك نوفر سيارات مجهزة بالكامل تتحرك فوراً لتصل إليك في أي مكان بالجبيل خلال 20-30 دقيقة.',
      icon: Navigation,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'خدمة طوارئ 24 ساعة',
      description: 'فريقنا مستعد لتلقي اتصالاتكم ورسائلكم في أي ساعة من الليل أو النهار لإنقاذ حالات الالتماس الكهربائي وتسريبات المياه القوية.',
      icon: Clock,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      title: 'فنيون محترفون ومرخصون',
      description: 'جميع الفنيين لدينا تم اختيارهم بعناية فائقة، وهم من جنسيات ماهرة (هند، باكستان، فلبين) ولديهم كفاءة مهنية معتمدة وسلوك راقٍ.',
      icon: Users,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'معدات وأجهزة حديثة',
      description: 'نستعين بأحدث الأجهزة الإلكترونية كالكاميرات الحرارية، وأجهزة كشف الالتماس، وضغط النيتروجين لحل الأعطال بسرعة ودقة وبدون تكسير.',
      icon: Wrench,
      color: 'text-violet-600 bg-violet-50 border-violet-100',
    },
    {
      title: 'تغطية كامل أحياء الجبيل',
      description: 'نصلك أينما كنت في الجبيل الصناعية (جلمودة، الحجاز، جلف، الفناتير) والجبيل البلد (طيبة، الحمراء، المرقاب، الخالدية) وضواحيها.',
      icon: MapPin,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white text-slate-950 relative overflow-hidden">
      {/* Decorative vector shape background */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-electric-light/30 blur-[80px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-orange-50 blur-[80px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-electric-blue bg-blue-50 px-4 py-1.5 rounded-full">مميزاتنا التنافسية</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-4 mb-5">
            لماذا يختارنا أهالي الجبيل؟
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium font-tajawal">
            نحن لسنا مجرد فنيين عاديين، بل مؤسسة صيانة متكاملة تضع الجودة والأمان والأمانة كمعايير أساسية لا نتنازل عنها أبداً لخدمتكم بأفضل صورة.
          </p>
        </div>

        {/* Dynamic Bento Grid of features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-slate-50 border border-slate-100/80 shadow-xs hover:shadow-lg hover:bg-white hover:border-slate-200 transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 group-hover:scale-110 transition-transform ${item.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-electric-blue transition-colors mb-2.5 font-sans">
                  {item.title}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-tajawal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Quick Conversion */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-800 shadow-xl">
          <div className="text-right md:max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
              هل تواجه مشكلة طارئة أو عطل مفاجئ في منزلك؟
            </h3>
            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              لا تتردد في الاتصال بنا فوراً، نحن متاحون على مدار الساعة وطوال اليوم لحل مشكلتك وحماية منزلك وأفراد عائلتك بأسرع وقت وبأسعار ممتازة.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:0576859898"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-amber-500 hover:to-brand-orange text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base shadow-lg transition-transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Clock className="w-5 h-5 animate-pulse" />
              <span>اتصال طوارئ عاجل</span>
            </a>
            
            <a
              href="https://wa.me/966576859898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-bold px-6 py-4 rounded-xl text-sm sm:text-base border border-white/20 transition-transform hover:-translate-y-0.5"
            >
              <span>استشارة واتساب مجانية</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
