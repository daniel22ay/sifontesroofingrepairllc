import React from 'react';
import { Phone, Calendar, MessageCircle, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface HeroSectionProps {
  onOpenInspection: (defaultIssue?: string) => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInspection,
  onOpenChat,
}) => {
  const whatsappHeroUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    "Hi Sifontes Roofing, I'd like to schedule a roof inspection in Naples, FL."
  )}`;

  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-start bg-[#0B0F17] overflow-hidden border-b border-[#1F293D] text-left">
      {/* Background authentic roofing photo with measured dark contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_repair_tile.jpg"
          alt="Sifontes Roofing technician repairing terracotta tile roof in Naples, Florida"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.42] contrast-[1.08]"
        />
        {/* Measured gradient scrim to ensure WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-[#0B0F17]/60"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-left">
        <div className="max-w-2xl text-left mr-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-start gap-2 px-3 py-1.5 rounded bg-neutral-900/80 border border-[#FBCB06]/40 text-[#FBCB06] text-xs font-bold tracking-wider uppercase mb-5">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span>LOCAL ROOFING EXPERTS IN NAPLES, FL</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5 text-left">
            Reliable Roof Repairs &amp; Leak Detection in{' '}
            <span className="text-[#FBCB06] underline decoration-[#FBCB06]/40 decoration-4 underline-offset-8">
              Naples, Florida
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-8 text-left">
            <strong className="text-white font-semibold">Sifontes Roofing &amp; Repair LLC</strong>{' '}
            delivers dedicated roof leak detection, tile repairs, and storm damage solutions for
            homeowners across Naples and Collier County. As a local, family-owned, faith-based
            team, we focus on honest recommendations, precision craftsmanship, and durable protection.
          </p>

          {/* Call to Action Cluster */}
          <div className="flex flex-col sm:flex-row items-start justify-start gap-3.5 mb-8 text-left">
            {/* Primary CTA */}
            <button
              onClick={() => onOpenInspection()}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-extrabold text-neutral-950 bg-[#FBCB06] hover:bg-[#E5B804] rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Schedule an Inspection</span>
            </button>

            {/* Secondary WhatsApp CTA */}
            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-base font-bold text-neutral-100 bg-[#14261F] hover:bg-[#1A332A] border border-emerald-500/40 rounded-lg transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            {/* Highly Visible Phone CTA */}
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-bold text-white hover:text-[#FBCB06] bg-black/40 hover:bg-black/60 border border-neutral-700/80 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 text-[#FBCB06]" />
              <span>(239) 404-7402</span>
            </a>
          </div>

          {/* Verified Trust Markers */}
          <div className="pt-6 border-t border-[#1F293D]/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-neutral-300 text-left">
            <div className="flex items-center justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0" />
              <span>Family-Owned &amp; Faith-Based</span>
            </div>
            <div className="flex items-center justify-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0" />
              <span>Tile, Metal, Shingle &amp; Flat</span>
            </div>
            <div className="flex items-center justify-start gap-2 col-span-2 sm:col-span-1">
              <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0" />
              <span>Workmanship Warranties</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
