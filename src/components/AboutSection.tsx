import React from 'react';
import { ShieldCheck, Heart, MapPin, Award, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface AboutSectionProps {
  onOpenInspection: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenInspection }) => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#0F141F] text-white border-b border-[#1F293D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
              Our Story &amp; Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6">
              A Family-Owned, Faith-Based Roofing Team Serving Naples, Florida
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
              <p>
                Homeowners throughout Naples trust{' '}
                <strong className="text-white">Sifontes Roofing &amp; Repair LLC</strong> because we
                prioritize honesty, craftsmanship, and customer care. As a family-owned,
                faith-based business, we believe in transparent communication and quality
                workmanship on every single project.
              </p>

              <p>
                We do not believe in guesswork or pushing unnecessary full-roof replacements. When
                water invades your home, you need accurate answers, precise leak tracing, and
                solutions engineered to protect your home against Southwest Florida’s intense sun,
                high humidity, and tropical downpours.
              </p>

              <p>
                Whether repairing individual cracked barrel tiles, rebuilding decayed wood roof
                decking, or securing chimney flashing, we treat your home with the same diligence,
                cleanliness, and respect as our own.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl bg-[#162030] border border-[#223045]">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#FBCB06]" />
                  <span>Honest Recommendations</span>
                </div>
                <p className="text-xs text-neutral-300">
                  We diagnose the true source of your leak and only recommend the work necessary to
                  restore lasting roof protection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162030] border border-[#223045]">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <Heart className="w-4 h-4 text-[#FBCB06]" />
                  <span>Faith &amp; Family Values</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Rooted in Christian integrity, courteous communication, and treating our Naples
                  neighbors with authentic care.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162030] border border-[#223045]">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <MapPin className="w-4 h-4 text-[#FBCB06]" />
                  <span>Local Naples Knowledge</span>
                </div>
                <p className="text-xs text-neutral-300">
                  Deep familiarity with Collier County building designs, tile underlayment systems,
                  and hurricane storm dynamics.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#162030] border border-[#223045]">
                <div className="flex items-center gap-2.5 font-bold text-white text-sm mb-1.5">
                  <Award className="w-4 h-4 text-[#FBCB06]" />
                  <span>Workmanship Warranties</span>
                </div>
                <p className="text-xs text-neutral-300">
                  We stand firmly behind our repairs and provide warranty options based on the
                  completed service.
                </p>
              </div>
            </div>

            {/* Verified Address & Direct Contact Box */}
            <div className="mt-8 p-4 rounded-xl bg-[#121824] border border-[#1F293D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase text-[#FBCB06] block">
                  Official Naples Headquarters
                </span>
                <span className="text-sm font-bold text-white">{BUSINESS_INFO.address}</span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Hours: {BUSINESS_INFO.hours}
                </span>
              </div>
              <button
                onClick={onOpenInspection}
                className="px-4 py-2.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                Schedule Inspection
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Community & Family Photos */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#233045] shadow-2xl bg-neutral-900">
              <img
                src="/images/tile_roof_sun.jpg"
                alt="Sifontes Roofing craftsmanship in Naples, FL"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-mono text-[#FBCB06] uppercase">Craftsmanship</span>
                <h4 className="text-sm font-bold text-white">
                  Preserving Naples Rooftops with Precision Detail
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden border border-[#1F293D] bg-neutral-900">
                <img
                  src="/images/family_community.jpg"
                  alt="Family community values in Naples"
                  className="w-full h-36 object-cover"
                />
                <div className="p-2.5 bg-[#121824] text-[11px] font-semibold text-neutral-300">
                  Family-Owned Roots
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#1F293D] bg-neutral-900">
                <img
                  src="/images/community_fishing.jpeg"
                  alt="Naples Florida coastal community"
                  className="w-full h-36 object-cover"
                />
                <div className="p-2.5 bg-[#121824] text-[11px] font-semibold text-neutral-300">
                  Naples Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
