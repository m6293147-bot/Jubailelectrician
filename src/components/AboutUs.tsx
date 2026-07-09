import React from 'react';
import { Target, Eye, ShieldCheck, HeartHandshake, Check, Map, Award } from 'lucide-react';

export default function AboutUs() {
  const points = [
    'الالتزام التام بالمواعيد والوصول السريع خلال ٣٠ دقيقة',
    'الاستعانة بأفضل الخامات الأصلية ورفض الخامات المقلدة',
    'تطبيق معايير السلامة المهنية لحماية المنازل والسكان',
    'توفير أسعار اقتصادية ومدروسة لتناسب جميع فئات المجتمع بالجبيل',
    'تقديم ضمان ممتد وخدمة ما بعد البيع ومتابعة رضا العميل'
  ];

  const coverageAreas = [
    { name: 'الجبيل البلد', districts: ['حي طيبة', 'حي الحمراء', 'حي الخالدية', 'حي المرقاب', 'حي العريفي', 'حي السيف', 'حي الجوهرة'] },
    { name: 'الجبيل الصناعية', districts: ['حي جلمودة', 'حي الحجاز', 'حي جلف', 'حي الفناتير', 'حي الفردوس', 'حي اللؤلؤ', 'حي المحلة', 'حي دارين'] },
    { name: 'المناطق المجاورة', districts: ['حي العروبة', 'صناعية المساندة', 'ميناء الملك فهد', 'المطاعم والأسواق التجارية'] }
  ];

  return (
    <section id="about" className="py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-electric-blue bg-blue-50 px-4 py-1.5 rounded-full">تعرف علينا</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 mb-5">
            مؤسسة السباكة والكهرباء بالجبيل
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium">
            تاريخ ممتد من العمل الدؤوب والأمانة والمهنية العالية لتقديم أفضل صيانة وتمديد لشبكات المياه والكهرباء بالمملكة.
          </p>
        </div>

        {/* First Row: Who we are with image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-5 relative">
            {/* Image stack */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100 h-96">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80"
                alt="معدات وأدوات الصيانة الاحترافية"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80";
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-tr from-brand-orange to-amber-500 text-white p-6 rounded-3xl shadow-xl max-w-xs flex items-center gap-4">
              <Award className="w-10 h-10 shrink-0 text-white animate-pulse" />
              <div>
                <h4 className="font-extrabold text-lg">10+ سنوات</h4>
                <p className="text-xs text-orange-50 font-medium">من الخبرة والاحترافية والخدمة المستمرة بالجبيل</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 text-right">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-5 text-slate-950 font-sans">
              شريكك الموثوق لصيانة منزلك بأمان واحترافية
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-6 font-tajawal">
              تأسست مؤسستنا في مدينة الجبيل بالمملكة العربية السعودية لتقديم حلول صيانة جذرية ومستدامة لأصعب مشاكل السباكة والكهرباء. نحن ندرك تماماً مدى خطورة الأعطال الكهربائية وتسريبات المياه، لذا نحرص على توفير كادر فني مجهز بأحدث وسائل التكنولوجيا لكشف الالتماسات ومعالجة التسريبات بدقة وبأسرع وقت.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed mb-8 font-tajawal">
              نحن نلتزم التزاماً مطلقاً بالجودة العالية ونقدم ضماناً حقيقياً على جميع خدماتنا، وهدفنا الأول هو كسب ثقة ورضا عملائنا الدائم لخدمتهم كشريك موثوق يلبّي نداء الطوارئ في أي ساعة من اليوم.
            </p>

            <ul className="space-y-3.5">
              {points.map((pt, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-800 text-xs sm:text-sm font-bold">
                  <Check className="w-5 h-5 text-emerald-500 bg-emerald-100 rounded-full p-1 shrink-0" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Second Row: Vision, Mission & Commitment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-orange/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-sans">رؤيتنا</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-tajawal">
              أن نكون المؤسسة الرائدة والأولى في تقديم خدمات صيانة السباكة والكهرباء على مستوى المنطقة الشرقية والمملكة، عبر تبني أحدث الأنظمة التقنية وتأهيل الكوادر الفنية على أعلى مستوى لضمان خدمات صيانة خالية من العيوب وبأمان كامل.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-electric-blue/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <Eye className="w-6 h-6 text-electric-blue" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-sans">رسالتنا</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-tajawal">
              تقديم خدمات صيانة كهربائية وسباكة سريعة، دقيقة وآمنة لجميع عملائنا بمدينة الجبيل، والاعتماد على الأجهزة الحديثة التي توفر التكاليف وتحمي الممتلكات من الهدر، وتوفير بيئة تواصل سريعة ومرنة تضمن راحة العميل وسلامة بيته.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center mb-5">
              <HeartHandshake className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 font-sans">التزامنا بالجودة</h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed font-tajawal">
              الجودة بالنسبة لنا ليست خياراً بل هي المبدأ الحاكم لكافة أعمالنا. نلتزم باستخدام المواسير الحرارية المعتمدة، الأسلاك الأصلية، العوازل عالية التحمل، وفحص دقيق ومثالي للتسريبات والالتماس لضمان إصلاح جذري يدوم لسنوات طويلة.
            </p>
          </div>

        </div>

        {/* Coverage Areas Map Representation */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-1/2 left-1/4 w-80 h-80 rounded-full bg-electric-blue/5 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:max-w-md text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 mb-4 text-xs font-bold text-brand-orange">
                <Map className="w-4 h-4 text-brand-orange" />
                <span>نصلك لباب بيتك بالجبيل</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 font-sans text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                مناطق وتغطية خدماتنا الشاملة
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed font-tajawal mb-6">
                نوفر سيارات مجهزة بالكامل وموزعة جغرافياً في جميع قطاعات وأحياء مدينة الجبيل لضمان الاستجابة السريعة لمكالمات الطوارئ والزيارات المجدولة في غضون ٢٠ إلى ٣٠ دقيقة فقط.
              </p>
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
                <p className="text-xs text-slate-300 font-bold leading-relaxed">فنيون مناوبون متواجدون الآن في قطاع الجبيل البلد والجبيل الصناعية لتلبية الطلبات العاجلة.</p>
              </div>
            </div>

            <div className="flex-grow w-full grid grid-cols-1 sm:grid-cols-3 gap-6">
              {coverageAreas.map((area, idx) => (
                <div key={idx} className="bg-white/5 p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="text-brand-orange text-base font-extrabold mb-3 border-b border-white/10 pb-2">{area.name}</h4>
                  <ul className="space-y-2">
                    {area.districts.map((dist, dIdx) => (
                      <li key={dIdx} className="text-slate-300 text-xs font-semibold flex items-center gap-2 font-tajawal">
                        <span className="w-1.5 h-1.5 bg-electric-blue rounded-full"></span>
                        <span>{dist}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
