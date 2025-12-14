import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import ImageGenInterface from './components/ImageGenInterface';
import Home from './components/Home';
import { AboutPage, TourismPage, ContactPage } from './components/ContentPages';
import { AppMode } from './types';
import Icon from './components/Icon';

const App: React.FC = () => {
  const [currentMode, setCurrentMode] = useState<AppMode>(AppMode.HOME);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderContent = () => {
    switch (currentMode) {
        case AppMode.HOME:
            return <Home setMode={setCurrentMode} />;
        case AppMode.ABOUT:
            return <AboutPage />;
        case AppMode.TOURISM:
            return <TourismPage />;
        case AppMode.CONTACT:
            return <ContactPage />;
        case AppMode.CHAT:
            return <ChatInterface />;
        case AppMode.IMAGE:
            return <ImageGenInterface />;
        default:
            return <Home setMode={setCurrentMode} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-background text-slate-800 overflow-hidden font-sans">
      {/* Sidebar Navigation */}
      <Sidebar 
        currentMode={currentMode} 
        setMode={setCurrentMode} 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative w-full">
        
        {/* Mobile Header */}
        <header className="md:hidden h-16 border-b border-teal-100 flex items-center px-4 justify-between bg-white/80 backdrop-blur-md z-30 sticky top-0">
            <div className="flex items-center gap-3">
                 <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-slate-500 hover:text-primary"
                 >
                    <Icon name="menu" size={24} />
                 </button>
                 <span className="font-serif font-bold text-lg text-primary">Auralia</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary border border-secondary/20">
                <Icon name="sun" size={16} />
            </div>
        </header>

        {/* Dynamic Content */}
        <div className="flex-1 overflow-hidden relative">
            {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;