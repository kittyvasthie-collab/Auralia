import React from 'react';
import Icon from './Icon';

export const AboutPage: React.FC = () => {
    return (
        <div className="h-full overflow-y-auto bg-background p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">About Auralia</h1>
                    <div className="w-24 h-1 bg-secondary mx-auto"></div>
                </header>

                <div className="space-y-12">
                    <section className="bg-white p-8 rounded-3xl shadow-sm border border-teal-50">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                            <div className="p-2 bg-teal-100 rounded-lg text-primary"><Icon name="history" /></div>
                            Our History
                        </h2>
                        <p className="text-slate-600 leading-relaxed">
                            Founded in 1742 by maritime explorer Captain Elias Thorne (who famously got lost looking for spices and decided to stay because the mangoes were "too good to leave"), Auralia has grown from a humble trading post into a beacon of tropical innovation. 
                            We gained independence peacefully in 1965 through the "Great Beach Sit-In," where the colonial governor simply agreed it was too hot to argue.
                        </p>
                    </section>

                    <section className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-50">
                             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-amber-100 rounded-lg text-secondary"><Icon name="flag" /></div>
                                National Symbols
                            </h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-slate-700 min-w-[100px]">Flag:</span>
                                    <span className="text-slate-600">A white heron inside a golden sun on a teal wave.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-slate-700 min-w-[100px]">Flower:</span>
                                    <span className="text-slate-600">The Cloud Blossom (blooms only during rain).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-bold text-slate-700 min-w-[100px]">Motto:</span>
                                    <span className="text-slate-600 italic">"Lux et Mare" (Light and Sea... and Lunch).</span>
                                </li>
                            </ul>
                        </div>

                         <div className="bg-white p-8 rounded-3xl shadow-sm border border-teal-50">
                             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <div className="p-2 bg-sky-100 rounded-lg text-accent"><Icon name="landmark" /></div>
                                Government
                            </h2>
                            <p className="text-slate-600 mb-4">
                                Auralia is a parliamentary democracy. Our ministries are known for their transparency and occasional eccentricity.
                            </p>
                            <ul className="space-y-2 text-sm text-slate-600">
                                <li className="p-2 bg-slate-50 rounded border border-slate-100">Ministry of Innovation & Hammocks</li>
                                <li className="p-2 bg-slate-50 rounded border border-slate-100">Department of Spicy Food Regulation</li>
                                <li className="p-2 bg-slate-50 rounded border border-slate-100">Bureau of Tidal Energy</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export const TourismPage: React.FC = () => {
    const regions = [
        {
            name: "The Golden Coast",
            desc: "Endless sands, crystal waters, and the best surfing in the hemisphere.",
            icon: "sun"
        },
        {
            name: "Whispering Highlands",
            desc: "Cloud forests where the trees hum in the wind. Home of the Gilded Heron.",
            icon: "mountain"
        },
        {
            name: "The Neon District",
            desc: "A cyberpunk-meets-tiki urban center. 24/7 markets and holographic art.",
            icon: "zap"
        }
    ];

    const characters = [
        { name: "Lianora Veyra", role: "Master Navigator", bio: "Famous for sailing the perimeter of the island blindfolded." },
        { name: "Dr. Aris Thorne", role: "Botanist", bio: "Discovered the glowing moss in the sea caves." }
    ];

    return (
        <div className="h-full overflow-y-auto bg-background p-6 md:p-12">
             <div className="max-w-5xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Visit Auralia</h1>
                    <p className="text-slate-500 text-lg">Where the map ends, paradise begins.</p>
                </header>

                <h2 className="text-2xl font-bold text-slate-800 mb-6">Regions to Explore</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {regions.map((r, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-lg shadow-teal-900/5 border border-teal-50 hover:border-secondary transition-colors group">
                            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-primary group-hover:bg-secondary group-hover:text-white transition-colors mb-4">
                                <Icon name={r.icon} size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{r.name}</h3>
                            <p className="text-slate-600 text-sm">{r.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-gradient-to-r from-primary to-teal-800 rounded-3xl p-8 text-white mb-16 relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold mb-4">The White Drift</h2>
                        <p className="max-w-2xl text-teal-100 leading-relaxed mb-6">
                            Once a year, the Cloud Trees release their pollen in heavy, white clumps that look exactly like snow. 
                            It covers the beaches in a soft white blanket that melts into sweet water by noon. 
                            It is the only tropical "snow" in the world.
                        </p>
                        <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur rounded-lg border border-white/30 text-sm font-bold">
                            Next Expected Drift: November 14th
                        </div>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4">
                        <Icon name="snowflake" size={300} />
                    </div>
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-6">Local Legends</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {characters.map((c, i) => (
                        <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl border border-teal-50">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex-shrink-0 flex items-center justify-center text-slate-400">
                                <Icon name="user" size={32} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">{c.name}</h3>
                                <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-1">{c.role}</p>
                                <p className="text-sm text-slate-600">{c.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </div>
    );
};

export const ContactPage: React.FC = () => {
    const handleCitizenApply = () => {
        alert("Application Received! \n\nEstimated processing time: 4-6 business decades.\nPlease wait by your nearest palm tree.");
    };

    return (
        <div className="h-full overflow-y-auto bg-background p-6 md:p-12">
            <div className="max-w-3xl mx-auto">
                 <header className="mb-12 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Diplomatic Relations</h1>
                    <p className="text-slate-500 text-lg">Contact the Embassy of Auralia</p>
                </header>

                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-teal-900/5 border border-teal-50 mb-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-slate-800 mb-4">Foreign Office</h2>
                            <div className="space-y-4 text-slate-600">
                                <div className="flex items-center gap-3">
                                    <Icon name="map-pin" className="text-secondary" />
                                    <span>1234 Horizon Line, South Pacific Ocean</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icon name="mail" className="text-secondary" />
                                    <span>hello@auralia.gov.fake</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icon name="phone" className="text-secondary" />
                                    <span>+00 (123) SUN-SHINE</span>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-4 bg-teal-50 rounded-xl border border-teal-100">
                                <h3 className="font-bold text-primary mb-2 flex items-center gap-2">
                                    <Icon name="info" size={16} /> Visa Policy
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Auralia maintains an open-border policy for anyone bringing good vibes, fresh fruit, or interesting stories. 
                                    Sadness must be declared at customs and will be confiscated.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-64 bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-secondary">
                                <Icon name="user-plus" size={32} />
                            </div>
                            <h3 className="font-bold text-slate-800 mb-2">Become a Citizen</h3>
                            <p className="text-xs text-slate-500 mb-4">Join 12,000 happy residents and 4 million crabs.</p>
                            <button 
                                onClick={handleCitizenApply}
                                className="w-full py-2 bg-primary text-white rounded-lg font-bold hover:bg-teal-700 transition-colors"
                            >
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center space-y-4">
                     <p className="text-slate-400 text-sm italic">
                        "I came for the beaches, I stayed because I lost my passport in a high-stakes crab race." 
                        <br/>— Happy Tourist
                    </p>
                    
                    <div className="pt-8 border-t border-teal-100 text-xs text-slate-400">
                        <p className="font-bold uppercase tracking-widest mb-2">Legal Disclaimer</p>
                        <p>
                            Auralia is a fictional nation created for demonstration purposes. 
                            Please do not attempt to book flights, swim to our coordinates, or pay taxes to us (though we will accept the money). 
                            Any resemblance to real paradises is purely coincidental.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};