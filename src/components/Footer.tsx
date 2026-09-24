import React from 'react';
import { Phone, MapPin, Clock, MessageCircle, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/roofingData';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (view: PageView) => void;
  onOpenInspection: (issue?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenInspection }) => {
  const whatsappFooterUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hi Sifontes Roofing, I would like to schedule a roof inspection in Naples, FL.'
  )}`;

  return (
    <footer className="bg-[#080C12] text-neutral-400 border-t border-[#1F293D] pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/sifontes_logo.jpg"
                alt="Sifontes Roofing & Repair LLC"
                className="h-14 w-auto rounded object-contain shadow-md border border-amber-400/30"
              />
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  SIFONTES ROOFING &amp; REPAIR LLC
                </span>
                <span className="text-xs text-[#FBCB06] font-semibold tracking-wider uppercase">
                  Naples, Florida
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              Family-owned and faith-based roofing repair company providing dependable leak detection,
              tile repair, metal roof restoration, and storm damage services across Naples and
              Collier County.
            </p>

            <div className="pt-2 text-xs text-neutral-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FBCB06]" />
                <span>{BUSINESS_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#FBCB06]" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FBCB06]" />
                <a
                  href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-[#FBCB06] font-bold text-white transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { label: 'Home', view: 'home' as PageView },
                { label: 'Roof Repair Services', view: 'services' as PageView },
                { label: 'Roof Leak Detection', view: 'leak-detection' as PageView },
                { label: 'Storm & Wind Damage', view: 'storm-damage' as PageView },
                { label: 'Roofing Gallery & Projects', view: 'projects' as PageView },
                { label: 'About Sifontes', view: 'about' as PageView },
                { label: 'Contact Us', view: 'contact' as PageView },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => {
                      onNavigate(item.view);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Roofing Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Roofing Systems
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onOpenInspection('Tile Roof Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Tile Roof Repairs &amp; Underlayment
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInspection('Metal Roof Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Metal Roofing &amp; Seam Sealing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInspection('Asphalt Shingle Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Asphalt Shingle Repairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInspection('Flat Roof Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Flat &amp; Low-Slope Roofing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInspection('Skylight Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Skylight Leaks &amp; Flashing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenInspection('Chimney Flashing Repair')}
                  className="hover:text-[#FBCB06] transition-colors cursor-pointer text-left"
                >
                  Chimney Flashing Repairs
                </button>
              </li>
            </ul>
          </div>

          {/* Service Area & Direct Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-2">
              Service Area
            </h4>
            <div className="flex flex-wrap gap-1.5 text-[11px]">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-2 py-1 rounded bg-[#121824] border border-[#1F293D] text-neutral-300"
                >
                  {area}
                </span>
              ))}
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-[#14261F] border border-emerald-500/40 text-emerald-300 font-bold text-xs hover:bg-[#1A332A] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Message on WhatsApp</span>
              </a>

              <button
                onClick={() => onOpenInspection()}
                className="w-full py-2 px-3 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-xs transition-colors cursor-pointer"
              >
                Schedule Inspection
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal, Transparency & Integrity Line */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-300">
          <div>
            © {new Date().getFullYear()} Sifontes Roofing &amp; Repair LLC. All rights reserved.
            Naples, FL 34117.
          </div>
          <div className="flex items-center gap-4 text-neutral-300">
            <span>Family-Owned &amp; Local</span>
            <span>·</span>
            <span>Faith-Based Craftsmanship</span>
            <span>·</span>
            <span>Warranties Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
