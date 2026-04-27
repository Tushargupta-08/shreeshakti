import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logo = () => (
    <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-rose-500 flex items-center justify-center rounded-sm">
            <span className="text-white text-xs font-bold leading-none">SS</span>
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-800 uppercase">Shri Shakti <span className="text-cyan-400">Decor</span></span>
    </div>
);

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full flex-col flex overflow-x-hidden">
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

            {/* Hero Section */}
            <section className="relative w-full h-[600px] flex items-center justify-center">
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="/herobanner.png"
                        alt="Wedding Setup"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="relative z-10 max-w-4xl w-full mx-4 backdrop-blur-md bg-white/30 border border-white/40 p-12 rounded-3xl text-center shadow-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-md">Make Your Dream Wedding<br />Come True</h1>
                    <p className="text-white/90 text-lg md:text-xl mb-10 font-medium">Shri Shakti Decor - Expert Wedding & Event Planners</p>
                    <div className="flex items-center justify-center gap-4 flex-wrap">
                        <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">Book Now</button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-semibold transition-colors shadow-lg">View Portfolio</button>
                    </div>
                </div>
            </section>

            {/* Crafting Moments Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1">
                    <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6 text-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Crafting Unforgettable<br />Moments</h2>
                    <p className="text-gray-600 leading-relaxed mb-8">
                        At Shri Shakti Decor, we pour our heart and soul into creating mesmerizing settings for your special day. We believe every detail matters and strive to orchestrate environments that leave a lasting impression.
                    </p>
                    <ul className="space-y-4 mb-10">
                        {['1000+ Weddings Planned', 'Customized Premium Designs', 'Experienced Creative Parterns'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 font-medium text-gray-800">
                                <div className="text-emerald-500 bg-emerald-100 p-1 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                    <button className="text-rose-500 font-semibold hover:text-rose-600 transition-colors flex items-center gap-2">
                        View More About Us
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </button>
                </div>
                <div className="flex-1 relative">
                    <div className="absolute -inset-2 bg-cyan-100 rounded-2xl transform rotate-3"></div>
                    <img
                        src="/img1.png"
                        alt="Crafting Decor"
                        className="w-full h-[500px] object-cover rounded-2xl relative z-10 shadow-xl"
                    />
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 px-8 bg-[#f1f3f6]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Services</h2>
                        <p className="text-gray-500">Comprehensive wedding planning and decoration solutions across India</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: 'Wedding Decoration', iconColor: 'text-rose-500', bgColor: 'bg-rose-100', desc: 'From vibrant mehendis to majestic receptions, we create a theme suited perfectly for your special moments.' },
                            { title: 'Stage Design', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-100', desc: 'Custom stage setups encompassing flowers, lighting, and beautiful backdrops creating stunning backgrounds.' },
                            { title: 'Floral & Element Design', iconColor: 'text-purple-500', bgColor: 'bg-purple-100', desc: 'We source highest quality fresh flowers and use spectacular decorative pieces for a mesmerizing setup.' },
                            { title: 'Audiovisual & Lighting', iconColor: 'text-blue-500', bgColor: 'bg-blue-100', desc: 'Professional sound and lighting systems to highlight the decor and create a wonderful ambience.' },
                            { title: 'Furniture & Tableware', iconColor: 'text-pink-500', bgColor: 'bg-pink-100', desc: 'Luxurious tables, chairs, centerpieces, and tableware to perfectly complement the overall wedding theme.' }
                        ].map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}>
                                    <div className={`w-6 h-6 ${service.iconColor} rounded-full border-4 border-current opacity-70`}></div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                            </div>
                        ))}

                        {/* Custom Theme Card */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Have a Custom Theme?</h3>
                            <p className="text-gray-500 text-sm mb-6">Let's discuss and bring your dream theme idea into reality.</p>
                            <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-full text-sm font-medium transition-colors">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Masterpieces Section */}
            <section className="py-24 px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Masterpieces</h2>
                    <p className="text-gray-500">Explore some of our magnificent work from previous celebrations.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden group relative">
                        <img src="/ms1.png" alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                    </div>
                    <div className="rounded-2xl overflow-hidden group relative">
                        <img src="/ms2.png" alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden group relative">
                        <img src="/ms3.png" alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="rounded-2xl overflow-hidden group relative">
                        <img src="/ms4.png" alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="md:col-span-2 rounded-2xl overflow-hidden group relative">
                        <img src="/ms5.png" alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-8 max-w-6xl mx-auto w-full">
                <div className="bg-white shadow-xl shadow-gray-100 rounded-3xl p-12 text-center border border-gray-50">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Shri Shakti Decor?</h2>
                    <p className="text-gray-500 mb-16">Find out what makes us one of the finest decorators in India.</p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: 'Trusted Experts', iconColor: 'text-rose-500', bgColor: 'bg-rose-500', desc: 'Highest standard of safety and quality since 1997.' },
                            { title: 'Affordable Packages', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-500', desc: 'Premium options that fit well in your budget.' },
                            { title: 'Experienced Team', iconColor: 'text-rose-500', bgColor: 'bg-rose-500', desc: 'Hardworking team working hard over the last 15 years.' },
                            { title: 'Custom Themes', iconColor: 'text-cyan-500', bgColor: 'bg-cyan-500', desc: 'Exquisitely customized setups uniquely curated for each event.' }
                        ].map((feature, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`w-16 h-16 ${feature.bgColor} text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-${feature.iconColor}/20`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-8 max-w-7xl mx-auto w-full">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Words of Love</h2>
                    <p className="text-gray-500">Hear from our clients who trusted us with their special days.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-6 text-rose-400">
                                    {[1, 2, 3, 4, 5].map(star => <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>)}
                                </div>
                                <p className="text-gray-600 mb-8 leading-relaxed italic">"The decorations were absolutely stunning! It felt like I was walking into a dream. Everything was arranged with so much care and attention to detail. Highly recommend!"</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <img src={`/Users/tushargupta/.gemini/antigravity/brain/8e71bd56-20d4-4b5b-8f8b-925ce747d80a/testimonial_avatar_1776403536825.png`} alt="Avatar" className="w-12 h-12 rounded-full object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-sm">Priya Sharma</h4>
                                    <p className="text-gray-500 text-xs text-rose-500">Bride</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Form Section */}
            <section className="py-24 px-8 max-w-6xl mx-auto w-full relative">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-cyan-50 rounded-[3rem] -z-10 transform -rotate-1 scale-105"></div>
                <div className="flex flex-col md:flex-row gap-16 p-12 bg-white rounded-[2rem] shadow-xl border border-gray-50">
                    <div className="flex-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Plan Your Big Day</h2>
                        <p className="text-gray-500 mb-12">Reach out to us and let us discuss how we can turn your wedding vision into an unforgettable reality.</p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Call Us Any Time</p>
                                    <p className="font-bold text-gray-900">+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center text-cyan-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Send an Email</p>
                                    <p className="font-bold text-gray-900">contact@shreeshaktidecor.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Visit Us</p>
                                    <p className="font-bold text-gray-900">Delhi, India (Headquarters)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Send an Inquiry</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Your Name</label>
                                <input type="text" placeholder="John Doe" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all" />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-gray-600 mb-1 block">Project Details</label>
                                <textarea rows={4} placeholder="Describe your dream wedding setup..." className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all resize-none"></textarea>
                            </div>
                            <button type="button" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 rounded-lg transition-colors mt-2">Submit Inquiry</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-100 py-12 px-8 mt-10 text-center">
                <div className="max-w-7xl mx-auto flex flex-col items-center">
                    <div className="mb-6"><Logo /></div>
                    <p className="text-gray-500 text-sm max-w-md mx-auto mb-8">Creating timeless spaces and unforgettable atmospheres for life's most beautiful celebrations.</p>
                    <div className="flex gap-4 mb-10 text-gray-400">
                        <a href="#" className="hover:text-rose-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                        <a href="#" className="hover:text-rose-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        <a href="#" className="hover:text-rose-500 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between w-full pt-8 border-t border-gray-100 text-xs text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Shri Shakti Decor. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-gray-600 transition-colors">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;