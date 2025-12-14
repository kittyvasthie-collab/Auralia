import React from 'react';
import Icon from './Icon';

const Home: React.FC<{ setMode: (mode: any) => void }> = ({ setMode }) => {
  return (
    <div className="h-full overflow-y-auto bg-background">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-transparent z-10"></div>
        {/* Abstract tropical background shapes if no image */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-teal-800 rounded-l-full opacity-50 translate-x-1/4"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative z-20 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center text-white">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 animate-pulse-slow">Official Portal</span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Discover <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-teal-200">Auralia</span>
          </h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-2xl font-light mb-8">
            The Jewel of the South Pacific. Experience the White Drift, taste the sun, and find your paradise.
          </p>
          <div className="flex gap-4">
             <button 
               onClick={() => setMode('TOURISM')}
               className="px-8 py-4 bg-secondary text-white rounded-full font-bold hover:bg-amber-600 transition-colors shadow-lg shadow-amber-900/20"
             >
                Plan Your Visit
             </button>
             <button 
               onClick={() => setMode('CHAT')}
               className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full font-bold hover:bg-white/20 transition-colors"
             >
                Ask Concierge
             </button>
          </div>
        </div>
      </div>

      {/* Quick Info Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Weather Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-50 transform hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-sky-100 rounded-xl text-accent">
                        <Icon name="cloud-sun" size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Live Weather</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-1">28°C</h3>
                <p className="text-slate-600">Aurios, Capital City</p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                    Chance of White Drift: <span className="text-secondary font-bold">High</span>
                </div>
            </div>

            {/* Currency Card */}
             <div className="bg-white p-6 rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-50 transform hover:-translate-y-1 transition-transform">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-amber-100 rounded-xl text-secondary">
                        <Icon name="coins" size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Economy</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-1">1 USD = 4.2 SH</h3>
                <p className="text-slate-600">Auralian Shelling</p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-slate-500">
                    Markets open at 09:00 AM
                </div>
            </div>

            {/* News Card */}
             <div className="bg-white p-6 rounded-2xl shadow-xl shadow-teal-900/5 border border-teal-50 transform hover:-translate-y-1 transition-transform cursor-pointer" onClick={() => setMode('ABOUT')}>
                <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-teal-100 rounded-xl text-primary">
                        <Icon name="newspaper" size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Government</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-1 leading-snug">Ministry of Naps Clarifies Policy</h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">The PM assures citizens that hammock time is a right, not a privilege...</p>
                <div className="mt-4 pt-4 border-t border-slate-100 text-sm text-primary font-bold flex items-center gap-1">
                    Read More <Icon name="arrow-right" size={14} />
                </div>
            </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="bg-white py-16 border-y border-teal-50">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                  <span className="text-secondary font-bold uppercase tracking-wider text-sm">National Symbol</span>
                  <h2 className="text-4xl font-serif font-bold text-slate-800 mt-2 mb-6">The Gilded Heron</h2>
                  <p className="text-slate-600 leading-relaxed mb-6">
                      Found only in the mangroves of the Whispering Highlands, this majestic bird represents resilience and grace. 
                      Legend says the first King of Auralia followed a Gilded Heron to find the fresh water source that became Aurios.
                  </p>
                  <button onClick={() => setMode('ABOUT')} className="text-primary font-bold hover:text-teal-700 underline decoration-2 underline-offset-4">
                      Learn our History
                  </button>
              </div>
              <div className="flex-1 flex justify-center">
                   <div className="w-64 h-64 bg-teal-50 rounded-full flex items-center justify-center border-8 border-teal-100 relative">
                        <div className="absolute inset-0 border-4 border-secondary rounded-full animate-spin-slow opacity-20" style={{ animationDuration: '20s' }}></div>
                        <Icon name="bird" size={100} className="text-primary" />
                   </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
