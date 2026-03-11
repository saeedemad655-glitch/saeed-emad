/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Lock, 
  AlertTriangle, 
  Bug, 
  MailWarning, 
  Zap, 
  Key, 
  RefreshCw, 
  Globe, 
  MousePointerClick, 
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

const ThreatCard = ({ icon: Icon, title, description, color }: { icon: any, title: string, description: string, color: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-all hover:shadow-xl group"
  >
    <div className={`p-4 rounded-full mb-4 ${color} bg-opacity-10 group-hover:scale-110 transition-transform`}>
      <Icon className={`w-8 h-8 ${color.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-bold mb-2 text-slate-800">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const SafetyTip = ({ icon: Icon, title, content }: { icon: any, title: string, content: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-right hover:bg-slate-50 transition-colors px-4 rounded-lg"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-emerald-100 rounded-lg">
            <Icon className="w-5 h-5 text-emerald-600" />
          </div>
          <span className="font-semibold text-lg text-slate-700">{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 text-slate-600 leading-relaxed pr-14">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="rtl min-h-screen font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="w-8 h-8 text-emerald-600" />
            <span className="text-2xl font-extrabold tracking-tight text-slate-900">أمانك الرقمي</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#threats" className="hover:text-emerald-600 transition-colors">التهديدات</a>
            <a href="#safety" className="hover:text-emerald-600 transition-colors">طرق الحماية</a>
            <button className="bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg">
              ابدأ الآن
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -ml-48 -mb-48" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 leading-tight">
              احمِ نفسك في <span className="text-emerald-600">العالم الرقمي</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              دليلك الشامل لفهم التهديدات السيبرانية وكيفية تأمين بياناتك وخصوصيتك عبر الإنترنت بأبسط الطرق وأكثرها فعالية.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#safety" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl">
                تعلم كيف تحمي نفسك
              </a>
              <a href="#threats" className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all">
                اكتشف التهديدات
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Common Threats Section */}
      <section id="threats" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">أبرز التهديدات السيبرانية</h2>
            <div className="w-20 h-1.5 bg-emerald-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThreatCard 
              icon={Bug}
              title="البرمجيات الخبيثة (Malware)"
              description="برامج مصممة للتسلل إلى جهازك وسرقة البيانات أو إتلاف النظام دون علمك."
              color="bg-red-500"
            />
            <ThreatCard 
              icon={MailWarning}
              title="التصيد الاحتيالي (Phishing)"
              description="رسائل وهمية تحاول خداعك للكشف عن معلومات حساسة مثل كلمات المرور أو أرقام البطاقات."
              color="bg-orange-500"
            />
            <ThreatCard 
              icon={Lock}
              title="الاختراق (Hacking)"
              description="محاولات غير مصرح بها للوصول إلى حساباتك أو شبكاتك للسيطرة عليها أو التجسس."
              color="bg-blue-500"
            />
            <ThreatCard 
              icon={Zap}
              title="هجمات DDoS"
              description="إغراق المواقع بحركة مرور وهمية هائلة لتعطيلها ومنع المستخدمين الحقيقيين من الوصول إليها."
              color="bg-purple-500"
            />
            <ThreatCard 
              icon={Key}
              title="كلمات المرور الضعيفة"
              description="استخدام كلمات مرور سهلة التخمين يجعل حساباتك فريسة سهلة للمخترقين."
              color="bg-yellow-500"
            />
            <ThreatCard 
              icon={AlertTriangle}
              title="الهندسة الاجتماعية"
              description="التلاعب النفسي بالأشخاص لدفعهم إلى إفشاء معلومات سرية أو القيام بأفعال تضر بأمنهم."
              color="bg-pink-500"
            />
          </div>
        </div>
      </section>

      {/* Practical Safety Tips Section */}
      <section id="safety" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-emerald-600 rounded-2xl">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">كيف تبقى آمناً؟</h2>
              <p className="text-slate-500">خطوات عملية وبسيطة لتعزيز أمنك الرقمي</p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-4 md:p-8 shadow-inner border border-slate-100">
            <SafetyTip 
              icon={Lock}
              title="استخدام كلمات مرور قوية"
              content="اجعل كلمات مرورك طويلة (أكثر من 12 حرفاً) وتحتوي على مزيج من الحروف الكبيرة والصغيرة والأرقام والرموز. تجنب استخدام نفس كلمة المرور لأكثر من حساب."
            />
            <SafetyTip 
              icon={RefreshCw}
              title="تحديث البرامج باستمرار"
              content="التحديثات ليست مجرد ميزات جديدة، بل هي غالباً ما تحتوي على تصحيحات لثغرات أمنية خطيرة قد يستغلها المخترقون."
            />
            <SafetyTip 
              icon={Globe}
              title="التصفح الآمن"
              content="تأكد دائماً من وجود رمز القفل (HTTPS) في شريط العنوان قبل إدخال أي بيانات حساسة، وتجنب استخدام شبكات الواي فاي العامة للعمليات المالية."
            />
            <SafetyTip 
              icon={MousePointerClick}
              title="تجنب الروابط المشبوهة"
              content="لا تنقر على روابط في رسائل بريد إلكتروني أو رسائل نصية من مصادر غير معروفة، حتى لو بدت مغرية أو عاجلة."
            />
            <SafetyTip 
              icon={ShieldCheck}
              title="استخدام برامج مكافحة الفيروسات"
              content="قم بتثبيت برنامج حماية موثوق وحافظ على تحديثه، حيث يعمل كخط دفاع أول ضد التهديدات المعروفة والجديدة."
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 p-6 bg-emerald-50 border border-emerald-100 rounded-2xl flex gap-4 items-start"
          >
            <Info className="w-6 h-6 text-emerald-600 shrink-0" />
            <p className="text-emerald-800 text-sm">
              <strong>نصيحة إضافية:</strong> قم بتفعيل ميزة "المصادقة الثنائية" (2FA) في جميع حساباتك المهمة. هي أهم خطوة يمكنك اتخاذها اليوم لحماية خصوصيتك.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <Shield className="w-6 h-6 text-emerald-400" />
            <span className="text-xl font-bold">أمانك الرقمي</span>
          </div>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            نحن نؤمن بأن الوعي هو السلاح الأقوى في مواجهة التهديدات الرقمية. ابقَ واعياً، ابقَ آمناً.
          </p>
          <div className="w-full h-px bg-slate-800 mb-8" />
          <p className="text-slate-500 font-medium">
            عمل سعيد عماد حبو
          </p>
        </div>
      </footer>
    </div>
  );
}
