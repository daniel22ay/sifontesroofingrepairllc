import React, { useState } from 'react';
import { Phone, Calendar, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeaderProps {
  currentView: PageView;
  onNavigate: (view: PageView) => void;
  onOpenInspection: (defaultIssue?: string) => void;
  onOpenChat: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  onNavigate,
  onOpenInspection,
  onOpenChat,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; view: PageView }[] = [
    { label: 'Home', view: 'home' },
    { label: 'Services', view: 'services' },
    { label: 'Leak Detection', view: 'leak-detection' },
    { label: 'Storm Damage', view: 'storm-damage' },
    { label: 'Projects', view: 'projects' },
    { label: 'About', view: 'about' },
    { label: 'Contact', view: 'contact' },
  ];

  const handleNavClick = (view: PageView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hi Sifontes Roofing, I'd like to get help with my roof in Naples."
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#0B0F17]/95 backdrop-blur-md border-b border-[#1F293D] transition-all">
      {/* Utility Emergency & Location Strip */}
      <div className="hidden lg:block bg-[#121824] border-b border-[#1F293D]/70 py-1.5 px-6 text-xs text-neutral-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-300 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              Serving Naples, FL & Collier County
            </span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">Hours: {BUSINESS_INFO.hours}</span>
            <span className="text-neutral-500">·</span>
            <span className="text-neutral-400">{BUSINESS_INFO.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenChat}
              className="text-[#FBCB06] hover:underline font-medium flex items-center gap-1 cursor-pointer transition-colors"
            >
              Ask AI Roofing Assistant
            </button>
            <span className="text-neutral-500">·</span>
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="font-bold text-white hover:text-[#FBCB06] flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FBCB06]" />
              {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Official Brand Logo */}
        <div className="flex items-center">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left group cursor-pointer"
            aria-label="Sifontes Roofing & Repair LLC Home"
          >
            <img
              src="/sifontes_logo.jpg"
              alt="Sifontes Roofing & Repair LLC"
              className="h-12 sm:h-14 w-auto rounded object-contain shadow-md border border-amber-400/30 group-hover:border-amber-400 transition-all group-hover:scale-[1.02]"
            />
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-neutral-300">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => handleNavClick(item.view)}
              className={`transition-colors relative py-1 cursor-pointer hover:text-white ${
                currentView === item.view ? 'text-[#FBCB06] font-bold' : ''
              }`}
            >
              {item.label}
              {currentView === item.view && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FBCB06] rounded-full"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-neutral-200 bg-[#1A2333] hover:bg-[#222E42] border border-[#2D3A50] rounded-lg transition-colors whitespace-nowrap"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Us</span>
          </a>

          <a
            href={`tel:+${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#FBCB06]" />
            <span>(239) 404-7402</span>
          </a>

          <button
            onClick={() => onOpenInspection()}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-extrabold text-neutral-950 bg-[#FBCB06] hover:bg-[#E5B804] rounded-lg shadow-sm hover:shadow transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Inspection</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-neutral-400 hover:text-white rounded-lg border border-neutral-800 bg-[#121824] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B0F17] border-b border-[#1F293D] px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left px-3 py-2.5 rounded-lg transition-colors cursor-pointer ${
                  currentView === item.view
                    ? 'bg-[#FBCB06]/15 text-[#FBCB06] font-bold'
                    : 'text-neutral-300 hover:bg-neutral-800/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-neutral-900 border border-neutral-700 rounded-lg text-xs font-bold text-white"
            >
              <Phone className="w-4 h-4 text-[#FBCB06]" />
              Call (239) 404-7402
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 bg-[#1A2333] border border-emerald-500/30 rounded-lg text-xs font-bold text-emerald-300"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Us
            </a>
          </div>

          <div className="flex items-center justify-between text-[11px] text-neutral-400 px-1 pt-1">
            <span>510 25th St SW, Naples FL</span>
            <span>Mon-Fri 7AM-5PM</span>
          </div>
        </div>
      )}
    </header>
  );
};
