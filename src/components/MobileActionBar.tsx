import React from 'react';
import { Phone, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface MobileActionBarProps {
  onOpenInspection: () => void;
  onOpenChat: () => void;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOpenInspection,
  onOpenChat,
}) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hi Sifontes Roofing, I'd like to get help with my roof in Naples, Florida."
  )}`;

  return (
    <>
      {/* Floating AI Chat Bubble on Mobile (positioned right above the action bar) */}
      <div className="md:hidden fixed bottom-18 right-4 z-40">
        <button
          onClick={onOpenChat}
          className="flex items-center gap-2 bg-[#FBCB06] text-black font-extrabold text-xs px-3.5 py-2.5 rounded-full shadow-lg border-2 border-black/20 active:scale-95 transition-transform"
          aria-label="Ask Sifontes AI Assistant"
        >
          <Sparkles className="w-4 h-4 fill-black" />
          <span>AI Assistant</span>
        </button>
      </div>

      {/* Persistent Mobile Bottom Action Bar */}
      <aside aria-label="Quick contact actions" className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0B0F17]/98 backdrop-blur-lg border-t border-[#1F293D] px-2 py-2 safe-area-pb shadow-2xl">
        <div className="grid grid-cols-3 gap-1.5 max-w-md mx-auto">
          {/* CALL */}
          <a
            href={`tel:+${BUSINESS_INFO.phoneRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-neutral-900 border border-neutral-800 active:bg-neutral-800 text-white transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FBCB06] mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">CALL</span>
            <span className="text-[9px] text-neutral-400">404-7402</span>
          </a>

          {/* WHATSAPP */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#11241C] border border-emerald-500/30 active:bg-emerald-950 text-emerald-300 transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
            <span className="text-[11px] font-bold tracking-tight">WHATSAPP</span>
            <span className="text-[9px] text-emerald-400/80">Message Us</span>
          </a>

          {/* INSPECTION */}
          <button
            onClick={onOpenInspection}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#FBCB06] active:bg-[#E5B804] text-neutral-950 font-black shadow transition-colors"
          >
            <Calendar className="w-4 h-4 text-neutral-950 mb-0.5" />
            <span className="text-[11px] font-black tracking-tight">INSPECTION</span>
            <span className="text-[9px] text-neutral-900 font-semibold">Schedule</span>
          </button>
        </div>
      </aside>
    </>
  );
};
