import React from 'react';
import { AppMode } from '../types';
import Icon from './Icon';

interface SidebarProps {
  currentMode: AppMode;
  setMode: (mode: AppMode) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  currentMode, 
  setMode, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  
  const navItems = [
    { mode: AppMode.HOME, label: 'Home', icon: 'home' },
    { mode: AppMode.ABOUT, label: 'About Auralia', icon: 'book-open' },
    { mode: AppMode.TOURISM, label: 'Tourism & Travel', icon: 'map' },
    { mode: AppMode.CONTACT, label: 'Diplomatic Relations', icon: 'globe' },
    { mode: AppMode.CHAT, label: 'Ministry Concierge', icon: 'message-circle' },
    { mode: AppMode.IMAGE, label: 'Postcard Studio', icon: 'camera' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white border-r border-teal-100 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          flex flex-col
        `}
      >
        <div className="p-6 flex flex-col items-center border-b border-teal-50 bg-teal-50/50">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-yellow-400 flex items-center justify-center text-white shadow-lg mb-3 ring-4 ring-white">
            <Icon name="sun" size={32} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-primary">
            Auralia
          </h1>
          <p className="text-xs text-secondary font-medium tracking-widest uppercase mt-1">
            Official Portal
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <button
              key={item.mode}
              onClick={() => {
                setMode(item.mode);
                setIsMobileMenuOpen(false);
              }}
              className={`
                w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group text-left
                ${currentMode === item.mode 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'text-slate-500 hover:bg-teal-50 hover:text-primary'
                }
              `}
            >
              <Icon 
                name={item.icon} 
                size={20} 
                className={`flex-shrink-0 ${currentMode === item.mode ? 'text-white' : 'text-slate-400 group-hover:text-primary'}`}
              />
              <span className="font-medium truncate">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-teal-50 bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg shadow-sm">
                <Icon name="cloud-sun" size={20} className="text-secondary" />
            </div>
            <div>
                <p className="text-xs font-bold text-slate-700">Current Weather</p>
                <p className="text-xs text-slate-500">28°C • Sunny</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;