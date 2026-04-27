import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 bg-rose-500 flex items-center justify-center rounded-lg shadow-sm">
      <span className="text-white text-sm font-bold leading-none italic">SS</span>
    </div>
    <span className="text-xl font-bold tracking-tight text-gray-800 uppercase">
      Shri Shakti <span className="text-rose-500">Decor</span>
    </span>
  </div>
);

const ContactUs = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] font-sans text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="w-full py-4 px-8 sticky top-0 bg-white shadow-sm z-50 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-rose-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-rose-500 transition-colors">About</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Services</a>
          <a href="#" className="hover:text-rose-500 transition-colors">Masterpieces</a>
          <button onClick={() => {
            navigate("/contact-us")
          }} className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-colors cursor-pointer">Contact Us</button>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="relative w-full h-[500px] flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <img
            src="contact-Us-bg.png"
            alt="Wedding Decor"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-[#fcfcfc]"></div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 font-medium leading-relaxed">
            Let's Plan Your Dream Wedding Together. Reach out to us for bespoke event planning and decorations.
          </p>
          <button className="bg-gradient-to-r from-rose-500 to-cyan-500 hover:shadow-lg transition-all text-white px-8 py-3 rounded-full font-bold shadow-md">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-16 relative z-20">

        {/* Left: Message Form */}
        <div className="lg:col-span-8 bg-white p-10 md:p-14 rounded-[2rem] shadow-2xl border border-gray-100 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-4 right-4 opacity-[0.03] rotate-12">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor" className="text-rose-500">
              <path d="M50 0C60 20 80 20 100 30C80 40 80 60 70 80C60 100 40 100 20 90C0 80 0 60 10 40C20 20 40 20 50 0Z" />
            </svg>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-2">Send a Message</h2>
          <p className="text-gray-500 mb-10 font-medium">Fill out the form below and our team will get back to you promptly.</p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name</label>
                <input type="text" placeholder="Priya Sharma" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium text-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Phone Number</label>
                <input type="text" placeholder="+91 98765 43210" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium text-gray-700" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address</label>
              <input type="email" placeholder="hello@example.com" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium text-gray-700" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Event Type</label>
              <div className="relative">
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 appearance-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium text-gray-700">
                  <option>Wedding Package</option>
                  <option>Haldi & Mehendi</option>
                  <option>Engagement Ceremony</option>
                  <option>Corporate Gala</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Message</label>
              <textarea rows={5} placeholder="Tell us about your event dates, venue, and vision..." className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all font-medium text-gray-700 resize-none"></textarea>
            </div>

            <button className="w-full bg-gradient-to-r from-rose-500 via-rose-600 to-cyan-500 hover:shadow-xl hover:shadow-rose-500/20 transition-all text-white font-bold py-5 rounded-2xl text-lg shadow-lg">
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info & Map */}
        <div className="lg:col-span-4 space-y-8">
          {/* Contact Cards */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-8">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                <p className="font-bold text-gray-900">8439090932</p>
                <p className="font-bold text-gray-900">7618441370</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Instagram</p>
                <p className="font-bold text-gray-900">@shri_shakti.decor</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Location</p>
                <p className="font-bold text-gray-900">Kanker Khera, Meerut</p>
              </div>
            </div>
          </div>

          {/* Map & Actions */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-64 bg-gray-100 relative">
              {/* Stylized Map Placeholder */}
              <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/77.7064,28.9845,13,0/600x400?access_token=pk.eyJ1IjoiYm9vdHN0cmFwZXIiLCJhIjoiY2p3bnd2YjVqMDFqdzQ0cGJueW9wMHB4ciJ9')] bg-cover bg-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <div className="relative">
                    <div className="w-8 h-8 bg-rose-500 rounded-full border-4 border-white shadow-xl animate-bounce"></div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm flex items-center gap-3">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span className="text-xs text-gray-500 font-medium">Search here</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 py-3.5 border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                Call Now
              </button>
              <button className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-white rounded-2xl font-bold hover:bg-[#128C7E] transition-colors shadow-lg shadow-green-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-2.32 0-4.591.547-6.611 1.58L3.999 6.273l.422 1.402.136.452L2.73 11.831c1.238 3.375 4.545 5.86 8.356 5.86 4.962 0 9-4.038 9-9 0-4.962-4.038-9-9-9zM12.031 16.691c-1.637 0-3.238-.43-4.636-1.242l-.333-.194-2.455.644.655-2.392-.214-.34c-.89-1.419-1.36-3.064-1.36-4.757 0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" /></svg>
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Why Choose Us</h2>
          <p className="text-gray-500 mb-16 font-medium">Making your special day perfect with our dedicated services</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Fast Response', desc: 'We get back to you within 24 hours to discuss your big day.', color: 'bg-rose-50', iconColor: 'text-rose-500', icon: 'M12 8v4l3 3' },
              { title: 'Custom Planning', desc: 'Tailored decoration themes that perfectly match your vision.', color: 'bg-pink-50', iconColor: 'text-pink-500', icon: 'M5 3v4M3 5h4M6 17v4M4 19h4M13 3l3 3 7-3-3 7 3 3-7-3-3 7-3-3-7 3 3-7-3-3 7 3 3-7z' },
              { title: 'Affordable Packages', desc: 'Premium decor services that fit beautifully within your budget.', color: 'bg-rose-50', iconColor: 'text-rose-500', icon: 'M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' },
              { title: 'Experienced Team', desc: 'Professional event planners dedicated to flawless execution.', color: 'bg-pink-50', iconColor: 'text-pink-500', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' }
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className={`w-14 h-14 ${feature.color} ${feature.iconColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d={feature.icon}></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Footer */}
      <footer className="bg-[#fdfdfd] pt-24 pb-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <Logo />
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">
                Premium Event Planner & Decorator in Meerut. Making your dream wedding a beautiful reality.
              </p>
              <div className="flex gap-4">
                {['instagram', 'facebook', 'twitter'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 hover:shadow-md transition-all">
                    <div className="w-5 h-5 border-2 border-current rounded-sm opacity-60"></div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><Link to="/" className="hover:text-rose-500 transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Our Services</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Pricing & Packages</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Services</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li><a href="#" className="hover:text-rose-500 transition-colors">Wedding Decor</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Haldi & Mehendi</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Birthday Parties</a></li>
                <li><a href="#" className="hover:text-rose-500 transition-colors">Corporate Events</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-8 uppercase tracking-widest text-xs">Contact</h4>
              <ul className="space-y-4 text-sm font-semibold text-gray-500">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 italic">●</span>
                  <span>Kanker Khera, Meerut</span>
                </li>
                <li>+91 8439090932</li>
                <li>+91 7618441370</li>
                <li>hello@shrishaktidecor.com</li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 flex flex-col md:row items-center justify-between gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
            <p>© 2025 Shri Shakti Decor. All rights reserved.</p>
            <p>Designed with Love</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;