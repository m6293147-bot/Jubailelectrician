import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle, Smartphone, AlertCircle } from 'lucide-react';
import { ContactMessage } from '../types';

interface ContactFormProps {
  initialServiceSelection?: string;
  onNewMessageSubmitted?: () => void;
}

export default function ContactForm({ initialServiceSelection = '', onNewMessageSubmitted }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState('أخرى');
  const [description, setDescription] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (initialServiceSelection) {
      setServiceType(initialServiceSelection);
    }
  }, [initialServiceSelection]);

  const serviceOptions = [
    'كشف وإصلاح التماسات الكهرباء',
    'كشف تسربات المياه إلكترونياً',
    'صيانة وتركيب مضخات وسخانات المياه',
    'تسليك مجاري بالوعات وصرف صحي',
    'تركيب أفياش ومفاتيح وإنارة وبراويز',
    'صيانة وتجديد حمامات ومطابخ بالكامل',
    'تمديد وتأسيس شبكات كهرباء وسباكة',
    'أخرى'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    // Basic Validation
    if (!name.trim()) {
      setErrorMsg('الرجاء إدخال الاسم الكريم.');
      setIsSubmitting(false);
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('الرجاء إدخال رقم الجوال.');
      setIsSubmitting(false);
      return;
    }
    
    // Check Saudi phone format (e.g. starting with 05 or 966)
    const phoneRegex = /^(05|5|\+966|966)[0-9]{8}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      setErrorMsg('الرجاء إدخال رقم جوال سعودي صحيح (مثال: 0576859898).');
      setIsSubmitting(false);
      return;
    }

    try {
      // Create new lead message
      const newMessage: ContactMessage = {
        id: 'msg_' + Date.now(),
        name: name.trim(),
        phone: phone.trim(),
        serviceType,
        description: description.trim() || 'لا يوجد وصف إضافي',
        date: new Date().toLocaleString('ar-EG', { hour12: true })
      };

      // Retrieve existing leads from localStorage
      const existingLeadsStr = localStorage.getItem('jubail_leads');
      const existingLeads: ContactMessage[] = existingLeadsStr ? JSON.parse(existingLeadsStr) : [];
      
      // Save new lead
      existingLeads.unshift(newMessage);
      localStorage.setItem('jubail_leads', JSON.stringify(existingLeads));

      // Trigger callback to notify parent components (like our hidden admin view)
      if (onNewMessageSubmitted) {
        onNewMessageSubmitted();
      }

      // Show success screen
      setSubmitSuccess(true);
      
      // Reset form
      setName('');
      setPhone('');
      setDescription('');
    } catch (err) {
      setErrorMsg('حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة لاحقاً.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold uppercase tracking-widest text-brand-orange bg-orange-100 px-4 py-1.5 rounded-full">تواصل معنا</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 mt-4 mb-5">
            اتصل الآن أو احجز موعدك
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-medium font-tajawal">
            نوفر استشارة هاتفية مجانية على مدار الساعة لتحديد طبيعة المشكلة وتقدير تكاليف الإصلاح والتأسيس مجاناً.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Info & Quick Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex-grow">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-6 font-sans">معلومات فني الطوارئ</h3>
              
              <div className="space-y-6">
                
                {/* Phone Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-electric-blue to-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-500/10">
                    <Phone className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold">اتصال طوارئ مباشر (24 ساعة)</h4>
                    <a href="tel:0576859898" className="text-xl sm:text-2xl font-black text-electric-blue hover:underline">
                      0576859898
                    </a>
                    <p className="text-xs text-slate-500 font-medium font-tajawal mt-1">اضغط على الرقم للاتصال بالفني مباشرة</p>
                  </div>
                </div>

                {/* WhatsApp Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold">راسلنا واتساب (رد فوري)</h4>
                    <a 
                      href="https://wa.me/966576859898" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-lg sm:text-xl font-bold text-emerald-600 hover:underline"
                    >
                      +966 57 685 9898
                    </a>
                    <p className="text-xs text-slate-500 font-medium font-tajawal mt-1">أرسل صورة العطل أو موقعك الجغرافي مباشرة</p>
                  </div>
                </div>

                {/* Snapchat Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold">سناب شات</h4>
                    <a 
                      href="https://www.snapchat.com/@khrbyywsbkljbyl?share_id=12cO5BAbFY8&locale" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-amber-600 hover:underline"
                    >
                      @khrbyywsbkljbyl
                    </a>
                    <p className="text-xs text-slate-500 font-medium font-tajawal mt-1">تابع يوميات العمل والتقييمات بالجبيل</p>
                  </div>
                </div>

                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-400 font-bold">المنطقة الجغرافية للتغطية</h4>
                    <p className="text-sm sm:text-base font-bold text-slate-800">
                      الجبيل البلد، الجبيل الصناعية وضواحيها
                    </p>
                    <p className="text-xs text-slate-500 font-medium font-tajawal mt-1">المنطقة الشرقية، المملكة العربية السعودية</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick conversion CTA cards */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-electric-blue to-blue-800 text-white shadow-lg border border-blue-900/10 text-center">
              <h4 className="font-extrabold text-base mb-2">طلب فني عاجل للالتماس أو تسريب المياه؟</h4>
              <p className="text-xs text-blue-100 font-medium leading-relaxed mb-4">
                لا تنتظر، اتصالات الطوارئ دائماً لها الأولوية القصوى ونصلك فوراً لموقعك مع الأجهزة اللازمة.
              </p>
              <a
                href="tel:0576859898"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-orange to-amber-500 hover:from-amber-500 hover:to-brand-orange text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>طلب اتصال طوارئ</span>
              </a>
            </div>

          </div>

          {/* Column 2: Interactive Contact Form & Embedded GMap */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            
            {/* Form Panel */}
            <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm flex-grow">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 mb-6 font-sans">حجز موعد إلكتروني سريع</h3>
              
              {submitSuccess ? (
                <div className="py-12 text-center animate-[fadeIn_0.3s_ease-out]">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mx-auto mb-6">
                    <CheckCircle className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900 mb-2">تم استلام طلبك بنجاح!</h4>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed max-w-sm mx-auto mb-8 font-tajawal">
                    شكراً لتواصلك مع فني سباكة وكهرباء الجبيل. سنقوم بالتواصل معك هاتفياً في أقرب وقت لتأكيد الموعد وتنسيق الزيارة.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs sm:text-sm border border-slate-200 transition-colors cursor-pointer"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs sm:text-sm font-extrabold text-slate-700">
                        الاسم الكريم <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="أدخل اسمك الكريم"
                        className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 focus:bg-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none text-slate-800 text-sm font-semibold"
                        required
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-extrabold text-slate-700">
                        رقم الجوال النشط <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="05xxxxxxxx"
                        className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 focus:bg-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none text-slate-800 text-sm font-semibold text-right"
                        required
                      />
                    </div>

                  </div>

                  {/* Service Type Selection */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="serviceType" className="text-xs sm:text-sm font-extrabold text-slate-700">
                      نوع الخدمة المطلوبة <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="serviceType"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 focus:bg-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none text-slate-800 text-sm font-bold cursor-pointer"
                    >
                      {serviceOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message/Description Description */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="description" className="text-xs sm:text-sm font-extrabold text-slate-700">
                      وصف المشكلة أو تفاصيل إضافية (اختياري)
                    </label>
                    <textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="صف لنا العطل أو اكتب التوقيت المفضل لزيارتكم الكريمة..."
                      rows={4}
                      className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50 focus:bg-white focus:border-electric-blue focus:ring-1 focus:ring-electric-blue outline-none text-slate-800 text-sm font-semibold resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-electric-blue text-white font-extrabold py-4 rounded-2xl text-base shadow-lg shadow-blue-500/10 cursor-pointer transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>جاري إرسال الموعد...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 rtl-flip" />
                        <span>إرسال وتأكيد الموعد إلكترونياً</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 font-medium text-center font-tajawal mt-3">
                    بإرسال الطلب، أنت توافق على معالجة فني الجبيل لبيانات الاتصال للتنسيق الفوري.
                  </p>
                </form>
              )}

            </div>

            {/* Embedded Google Map (pointing to Jubail Location listed in prompt) */}
            <div className="rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-100 h-64 relative shadow-sm">
              <iframe
                title="موقع فني كهرباء الجبيل على خرائط جوجل"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d113763.9778893471!2d49.6735653!3d26.9946172!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d2713e2256630fd%3A0x1eb8dcb19bf23573!2z2YHZhtmKINmD2YfYsdio2KfYoSDYp9mE2KzYqNmK2YQ!5e0!3m2!1sar!2seg!4v1783562211184!5m2!1sar!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md">
                <MapPin className="w-3.5 h-3.5 text-brand-orange" />
                <span>موقعنا على الخريطة بالجبيل</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
