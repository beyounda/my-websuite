import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function BeyondaTravel() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 text-gray-800 font-sans relative">
      {/* NAV */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src="/assets/logo-beyonda.jpeg" alt="لوجو بيوندا" className="w-16 h-16 object-contain rounded" />
            <div>
              <h1 className="text-xl font-extrabold">بيوندا للسياحة</h1>
              <p className="text-sm text-gray-500">خدمات دراسية وسياحية وحجوزات طيران وفنادق</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#home" className="hover:text-blue-600">الرئيسية</a>
            <a href="#services" className="hover:text-blue-600">خدماتنا</a>
            <a href="#study" className="hover:text-blue-600">الدراسة بالخارج</a>
            <a href="#travel" className="hover:text-blue-600">السياحة الخارجية</a>
            <a href="#book" className="hover:text-blue-600">حجوزات</a>
            <a href="#contact" className="hover:text-blue-600">اتصل بنا</a>
          </nav>

          <div className="md:hidden">
            <button aria-label="قائمة" className="p-2 rounded-md bg-gray-100">☰</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">رحلتك الدراسية والسياحية تبدأ مع <span className="text-blue-600">بيوندا</span></h2>
          <p className="mt-4 text-lg text-gray-600">نوفر لك الدراسة في أوزبكستان، روسيا، وبيلاروسيا، بالإضافة إلى خدمات السفر، حجز الطيران والفنادق بأفضل الأسعار.</p>

          <div className="mt-6 flex gap-3">
            <a href="#study" className="px-4 py-2 bg-blue-600 text-white rounded-lg">تعرف على الدراسة بالخارج</a>
            <a href="#book" className="px-4 py-2 border border-blue-600 rounded-lg">احجز الآن</a>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/assets/logo-beyonda.jpeg" alt="لوجو بيوندا" className="w-full max-w-sm object-cover rounded-lg shadow-lg" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">خدماتنا</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">الدراسة بالخارج</h4>
            <p className="mt-3 text-gray-600">نقدّم استشارات وقبول جامعي في أوزبكستان، روسيا، وبيلاروسيا مع تسهيلات التأشيرات والسكن.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">السياحة الخارجية</h4>
            <p className="mt-3 text-gray-600">رحلات مميزة إلى مختلف الدول وباقات مصممة خصيصًا لتجربتك.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">حجوزات طيران وفنادق</h4>
            <p className="mt-3 text-gray-600">نوفر لك أفضل الأسعار في حجوزات الطيران والفنادق حول العالم.</p>
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="book" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">احجز الآن</h3>
        <div className="bg-white p-6 rounded-xl shadow md:w-1/2">
          <form>
            <label className="block text-sm">الاسم الكامل</label>
            <input className="w-full mt-2 p-2 border rounded" placeholder="مثال: أحمد محمد" />

            <label className="block text-sm mt-4">نوع الخدمة</label>
            <select className="w-full mt-2 p-2 border rounded">
              <option>دراسة بالخارج</option>
              <option>سياحة خارجية</option>
              <option>حجز طيران</option>
              <option>حجز فندق</option>
            </select>

            <label className="block text-sm mt-4">ملاحظات</label>
            <textarea className="w-full mt-2 p-2 border rounded" rows={4} placeholder="أدخل تفاصيل إضافية"></textarea>

            <button type="button" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">أرسل</button>
          </form>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container mx-auto px-6 py-10">
        <h3 className="text-2xl font-bold mb-6">تواصل معنا</h3>
        <div className="bg-white p-6 rounded-xl shadow md:flex gap-6">
          <div className="flex-1">
            <p className="text-lg">📍 <strong>العنوان:</strong> طنطا تاون مول، الدور السادس، مكتب 15</p>
            <p className="mt-2 text-lg">📞 <strong>واتساب:</strong> <a href="https://wa.me/201092840568" className="text-blue-600">+20 109 284 0568</a></p>
            <p className="mt-2 text-gray-600">نحن في خدمتك طوال أيام الأسبوع من الساعة 9 صباحًا حتى 6 مساءً.</p>

            <div className="mt-6">
              <iframe
                title="خريطة بيوندا"
                src="https://www.google.com/maps?q=Tanta%20Town%20Mall&output=embed"
                width="100%"
                height="300"
                className="rounded-lg border"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            <h5 className="font-semibold">تابعنا</h5>
            <div className="mt-4 grid grid-cols-3 gap-3">
              <a className="p-3 bg-gray-100 text-center rounded">فيسبوك</a>
              <a className="p-3 bg-gray-100 text-center rounded">إنستجرام</a>
              <a className="p-3 bg-gray-100 text-center rounded">تيليجرام</a>
            </div>
          </div>
        </div>
      </section>

      {/* زر واتساب عائم */}
      <a
        href="https://wa.me/201092840568"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        title="تواصل عبر واتساب"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* FOOTER */}
      <footer className="bg-white mt-12 border-t">
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} بيوندا للسياحة — كل الحقوق محفوظة</p>
          <p className="text-sm text-gray-600">📞 واتساب: +20 109 284 0568</p>
        </div>
      </footer>
    </div>
  );
}