import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const About = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = React.useState('All Works');

    const categories = ['All Works', 'Wedding', 'Haldi', 'Mehendi', 'Birthday', 'Fashion'];

    const galleryItems = [
        { title: 'Grand Wedding Decoration', category: 'Wedding', img: 'ms1.png', label: 'Classic Theme' },
        { title: 'Elegant Stage Design', category: 'Wedding', img: 'ms2.png', label: 'Royal Gold' },
        { title: 'Traditional Haldi Setup', category: 'Haldi', img: 'ms3.png', label: 'Yellow Bliss' },
        { title: 'Vibrant Mehendi Decor', category: 'Mehendi', img: 'ms4.png', label: 'Boho Style' },
        { title: 'Grand Birthday Setup', category: 'Birthday', img: 'ms5.png', label: 'Balloon Theme' },
        { title: 'Outdoor Event Setup', category: 'Wedding', img: 'img1.png', label: 'Lawn Garden' },
    ];

    const filteredItems = activeTab === 'All Works'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeTab);

    return (
        <div className="w-full min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden">
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
            <section className="relative w-full h-[550px] flex flex-col items-center justify-center text-center px-6">
                <div className="absolute inset-0 z-0">
                    <img
                        src="ms1.png"
                        alt="Previous Work"
                        className="w-full h-full object-cover brightness-[0.4]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-cyan-500/20"></div>
                </div>

                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">Our Previous Work</h1>
                    <p className="text-lg md:text-xl text-white/90 mb-10 font-medium leading-relaxed max-w-2xl mx-auto italic">
                        Crafting beautiful memories across India with bespoke event planning and decorations.
                    </p>
                    <button className="bg-cyan-500 hover:bg-cyan-600 transition-all text-white px-10 py-3 rounded-full font-bold shadow-xl active:scale-95 uppercase tracking-wider text-sm">
                        See Portfolio
                    </button>
                </div>
            </section>

            {/* Filter Tabs */}
            <section className="py-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${activeTab === cat
                                    ? 'bg-rose-500 border-rose-500 text-white shadow-lg shadow-rose-200'
                                    : 'bg-white border-gray-100 text-gray-500 hover:border-rose-200 hover:text-rose-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredItems.map((item, i) => (
                        <div key={i} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
                            <div className="aspect-[4/5] overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-6">
                                <p className="text-[10px] font-bold text-cyan-500 uppercase tracking-widest mb-1">{item.label}</p>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <button className="text-rose-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                                    View Details
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Feature Section: Royal Wedding Setup */}
            <section className="py-20 px-6 bg-pink-50/50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-white">
                    <div className="lg:w-1/2 h-[450px]">
                        <img src="ms2.png" alt="Royal Wedding" className="w-full h-full object-cover" />
                    </div>
                    <div className="lg:w-1/2 p-10 md:p-16">
                        <span className="bg-rose-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 inline-block">Newest Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">Royal Wedding Setup</h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-10 font-medium italic">
                            Experience the grandeur of our royal themed weddings. We meticulous craft each detail, from majestic mandaps to spectacular lighting, creating an atmosphere that resonates with luxury and timeless charm.
                        </p>
                        <button className="bg-rose-500 hover:bg-rose-600 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl active:scale-95">
                            View Gallery
                        </button>
                    </div>
                </div>
            </section>

            {/* Wedding Highlights */}
            <section className="py-24 px-6 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Wedding Highlights</h2>
                <p className="text-gray-500 mb-16 font-medium">Relive the magical cinematic moments of our recent weddings.</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="group relative aspect-video bg-gray-100 rounded-[2rem] overflow-hidden shadow-xl">
                            <img src={`ms${i}.png`} alt="Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
                                <button className="w-16 h-16 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white border-2 border-white/50 group-hover:scale-110 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Client Experience (Testimonials) */}
            <section className="py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Client Experience</h2>
                    <p className="text-gray-500 mb-16 font-medium">What our wonderful clients have to say about us.</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Priya Sharma', text: 'The wedding decor was beyond my imagination. Everything was so beautifully arranged that it felt like a dream.' },
                            { name: 'Rajesh Kumar', text: 'Professional, punctual, and highly creative. They transformed our simple venue into a royal palace setup.' },
                            { name: 'Ankita Singh', text: 'The attention to detail was incredible. Our guests were absolutely mesmerized by the floral arrangements.' }
                        ].map((test, i) => (
                            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                                <div className="text-cyan-400 mb-6 flex justify-center">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.987z" /></svg>
                                </div>
                                <p className="text-gray-600 mb-10 leading-relaxed font-medium italic">"{test.text}"</p>
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                                        <img src="icons.svg" alt="Avatar" className="w-full h-full object-cover" />
                                    </div>
                                    <h4 className="font-bold text-gray-900">{test.name}</h4>
                                    <p className="text-[10px] font-bold text-rose-500 uppercase tracking-widest">Happy Client</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto relative rounded-[3.5rem] overflow-hidden h-[450px] flex items-center justify-center text-center">
                    <div className="absolute inset-0 z-0 bg-gradient-to-r from-rose-500 via-purple-600 to-cyan-500"></div>
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                    <div className="relative z-10 max-w-2xl px-6">
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">Let's Create Your Dream Wedding</h2>
                        <p className="text-white/80 text-lg mb-12 font-medium">
                            We are ready to bring your vision to life. Connect with us to start planning your spectacular celebration.
                        </p>
                        <button
                            onClick={() => navigate('/contact-us')}
                            className="bg-white hover:bg-gray-50 transition-all text-gray-900 px-12 py-4 rounded-full font-bold shadow-2xl active:scale-95 uppercase tracking-widest text-sm"
                        >
                            Contact Us Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#111] pt-24 pb-12 px-6 text-white/90">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-rose-500 flex items-center justify-center rounded-lg">
                                    <span className="text-white text-sm font-bold italic">SS</span>
                                </div>
                                <span className="text-xl font-bold uppercase">Shri Shakti <span className="text-rose-500">Decor</span></span>
                            </div>
                            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
                                Premium Event Planner & Decorator in Meerut. Making your dream wedding a beautiful reality.
                            </p>
                            <div className="flex gap-4">
                                {['instagram', 'facebook', 'twitter'].map(social => (
                                    <a key={social} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 transition-all">
                                        <div className="w-4 h-4 border-2 border-current rounded-sm"></div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-400">
                                <li><Link to="/" className="hover:text-rose-500 transition-colors">Home</Link></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Our Services</a></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Portfolio</a></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">About Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Services</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-400">
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Wedding Decor</a></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Haldi & Mehendi</a></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Birthday Parties</a></li>
                                <li><a href="#" className="hover:text-rose-500 transition-colors">Corporate Events</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Contact</h4>
                            <ul className="space-y-4 text-sm font-semibold text-gray-400">
                                <li className="flex items-start gap-2">
                                    <span className="text-rose-500">●</span>
                                    <span>Kanker Khera, Meerut</span>
                                </li>
                                <li>+91 8439090932</li>
                                <li>+91 7618441370</li>
                                <li>hello@shrishaktidecor.com</li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">
                        <p>© 2025 Shri Shakti Decor. All rights reserved.</p>
                        <p>Designed with Love</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default About;