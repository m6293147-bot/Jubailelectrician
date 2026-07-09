import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Gallery from './components/Gallery';
import AboutUs from './components/AboutUs';
import ContactForm from './components/ContactForm';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FloatingActions from './components/FloatingActions';
import { Phone, MessageCircle, MapPin, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('');

  // Coordinate booking from service details: scroll to contact form and select option
  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between selection:bg-brand-orange selection:text-white antialiased">
      
      {/* Header component */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single-Page Sections */}
      <main className="flex-grow">
        <Hero onNavigateToContact={() => handleSelectService('')} />
        
        <Services onSelectService={handleSelectService} />
        
        <WhyUs />
        
        <Gallery />
        
        <AboutUs />
        
        <ContactForm 
          initialServiceSelection={selectedService} 
        />
        
        <Reviews />
        
        <FAQ />
      </main>

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Structured Footer */}
      <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-brand-orange/5 blur-[80px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            
            {/* Column 1: Brand & Bio */}
            <div className="md:col-span-5 text-right">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-orange to-electric-blue flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-extrabold font-sans">كهربائي وسباك الجبيل</h3>
              </div>
              
              <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed font-tajawal mb-6">
                نحن فخورون بتقديم أفضل خدمات الصيانة المنزلية السريعة والطارئة لتمديد وإصلاح كافة أعطال السباكة والكهرباء في مدينة الجبيل البلد والصناعية على مدار الساعة وبضمان معتمد.
              </p>

              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>الجبيل، المملكة العربية السعودية</span>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-3 text-right">
              <h4 className="text-brand-orange font-bold text-sm sm:text-base mb-4 pb-2 border-b border-slate-900">روابط سريعة</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a href="#hero" className="text-slate-300 hover:text-white transition-colors">الرئيسية</a>
                </li>
                <li>
                  <a href="#services" className="text-slate-300 hover:text-white transition-colors">خدمات السباكة والكهرباء</a>
                </li>
                <li>
                  <a href="#why-us" className="text-slate-300 hover:text-white transition-colors">لماذا نحن</a>
                </li>
                <li>
                  <a href="#gallery" className="text-slate-300 hover:text-white transition-colors">معرض الأعمال</a>
                </li>
                <li>
                  <a href="#about" className="text-slate-300 hover:text-white transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-300 hover:text-white transition-colors">اتصل بنا</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Contacts info */}
            <div className="md:col-span-4 text-right">
              <h4 className="text-brand-orange font-bold text-sm sm:text-base mb-4 pb-2 border-b border-slate-900">قنوات التواصل المباشرة</h4>
              <ul className="space-y-4">
                
                {/* Call Link */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-brand-orange shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-bold">جوال الاتصال الموحد</span>
                    <a href="tel:0576859898" className="text-base font-extrabold text-white hover:text-brand-orange transition-colors">
                      0576859898
                    </a>
                  </div>
                </li>

                {/* WhatsApp Link */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-emerald-500 shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-bold">مراسلة فورية عبر الواتساب</span>
                    <a 
                      href="https://wa.me/966576859898" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-base font-extrabold text-white hover:text-emerald-500 transition-colors"
                    >
                      +966 57 685 9898
                    </a>
                  </div>
                </li>

                {/* Snapchat Link */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-amber-500 shrink-0">
                    <MessageCircle className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block font-bold">حسابنا الرسمي على سناب شات</span>
                    <a 
                      href="https://www.snapchat.com/@khrbyywsbkljbyl?share_id=12cO5BAbFY8&locale" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs sm:text-sm font-semibold text-white hover:text-amber-500 transition-colors"
                    >
                      @khrbyywsbkljbyl
                    </a>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-right gap-4">
            <div>
              <p className="text-xs text-slate-500 font-medium">
                جميع الحقوق محفوظة © {new Date().getFullYear()} كهربائي وسباك الجبيل. تم تصميمه وتطويره بالكامل وفق أعلى معايير SEO وتحسين التحويل.
              </p>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
