import React from 'react';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'home', label: 'HOME' },
    { id: 'case-studies', label: 'CASE STUDIES' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'skills', label: 'SKILLS' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#f7f7f3]/95 backdrop-blur-md border-b-3 border-[#1a1a1a] py-3 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <div 
          onClick={() => onTabChange('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-9 h-9 bg-[#00DF89] border-2 border-[#1a1a1a] cartoon-shadow flex items-center justify-center font-black text-sm text-[#1a1a1a]">
            AV*
          </div>
          <div>
            <span className="font-black text-base tracking-tight text-[#1a1a1a] block leading-none">
              ADITI VERMA<span className="text-[#00DF89]">*</span>
            </span>
            <span className="text-[10px] font-mono font-bold text-slate-600 block pt-0.5">
              ASSOCIATE PRODUCT MANAGER
            </span>
          </div>
        </div>

        {/* Neobrutalist Navigation Tabs */}
        <nav className="flex items-center gap-1.5 sm:gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-2.5 sm:px-3.5 py-1.5 text-[11px] sm:text-xs font-black tracking-wider border-2 border-[#1a1a1a] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00DF89] text-[#1a1a1a] cartoon-shadow translate-x-[-2px] translate-y-[-2px]'
                    : 'bg-white text-[#1a1a1a] hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

      </div>
    </header>
  );
};
