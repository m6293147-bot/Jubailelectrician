import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Zap, Droplet } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'services', label: 'الخدمات' },
    { id: 'gallery', label: 'أعمالنا' },
    { id: 'reviews', label: 'التقييمات' },
    { id: 'contact', label: 'اتصل بنا' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-slate-800' 
        : 'bg-slate-900/40 backdrop-blur-xs py-5 text-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="relative">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-brand-orange to-electric-blue flex items-center justify-center shadow-md shadow-electric-blue/20">
                <div className="relative flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white absolute -translate-x-1 -translate-y-1" />
                  <Droplet className="w-4 h-4 text-white absolute translate-x-1.5 translate-y-1.5" />
                </div>
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-orange-200">
                كهربائي وسباك الجبيل
              </h1>
              <p className="text-[9px] sm:text-[10px] text-slate-300 font-mono -mt-1 font-medium tracking-widest">
                صيانة طوارئ 24 ساعة
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeSection === item.id 
                    ? 'text-brand-orange bg-white/5' 
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Direct CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0576859898"
              className="flex items-center gap-2 bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-electric-blue text-white px-4 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-900/30 hover:scale-[1.03] transition-all duration-200"
            >
              <Phone className="w-4 h-4 animate-bounce" />
              <span>اتصل الآن: 0576859898</span>
            </a>
            
            <a
              href="https://wa.me/966576859898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl shadow-md hover:scale-[1.03] transition-all duration-200"
              title="واتساب مباشر"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0576859898"
              className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-electric-blue to-blue-700 text-white rounded-xl shadow-md sm:hidden"
              title="اتصل بالكهربائي والسباك"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs" onClick={() => setIsOpen(false)}></div>
        
        {/* Drawer Content */}
        <div className="absolute top-0 right-0 bottom-0 w-4/5 max-w-xs bg-slate-900 text-white shadow-2xl p-6 flex flex-col justify-between border-l border-slate-800">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-orange to-electric-blue flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold font-sans text-sm text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">
                  كهربائي وسباك الجبيل
                </span>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg text-slate-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 mt-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right w-full px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    activeSection === item.id 
                      ? 'text-brand-orange bg-white/5 font-bold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="tel:0576859898"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-electric-blue to-blue-700 text-white py-3.5 rounded-xl text-base font-bold shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>اتصال مباشر: 0576859898</span>
            </a>
            
            <a
              href="https://wa.me/966576859898"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-base font-bold"
            >
              <MessageCircle className="w-5 h-5" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
