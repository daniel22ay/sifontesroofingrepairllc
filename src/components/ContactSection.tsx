import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { InspectionForm } from './InspectionForm';

interface ContactSectionProps {
  onOpenChat: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenChat }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hi Sifontes Roofing, I would like to speak with someone about roofing services in Naples.'
  )}`;

  return (
    <section id="contact" className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-[#1F293D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Business NAP & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
                Naples, Florida Roofing Office
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                Get Fast, Reliable Roofing Assistance
              </h1>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Contact Sifontes Roofing &amp; Repair LLC today to get dependable roofing solutions
                from a team you can trust. Serving Naples, Collier County, Marco Island, and Bonita
                Springs.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              {/* Phone Card */}
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="p-4 rounded-xl bg-[#121824] border border-[#1F293D] hover:border-[#FBCB06]/50 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FBCB06]/10 border border-[#FBCB06]/30 flex items-center justify-center text-[#FBCB06] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Direct Telephone Call</div>
                  <div className="text-base font-bold text-white group-hover:text-[#FBCB06] transition-colors">
                    {BUSINESS_INFO.phone}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Click to call immediately</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#14261F] border border-emerald-500/30 hover:border-emerald-500/60 transition-colors flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-400/80 font-medium">Direct WhatsApp Message</div>
                  <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Chat with Sifontes on WhatsApp
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">Fast photo &amp; inquiry response</div>
                </div>
              </a>

              {/* Address Card */}
              <div className="p-4 rounded-xl bg-[#121824] border border-[#1F293D] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1F293D] flex items-center justify-center text-[#FBCB06] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Physical Business Address</div>
                  <div className="text-sm font-bold text-white">{BUSINESS_INFO.address}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Serving Naples, Marco Island, Bonita Springs &amp; Collier County
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="p-4 rounded-xl bg-[#121824] border border-[#1F293D] flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#1F293D] flex items-center justify-center text-[#FBCB06] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-400 font-medium">Operating Hours</div>
                  <div className="text-sm font-bold text-white">{BUSINESS_INFO.hours}</div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    Saturday &amp; Sunday: Emergency storm response by appointment
                  </div>
                </div>
              </div>
            </div>

            {/* Owner Verification Notice */}
            <div className="p-4 rounded-xl bg-[#162030]/60 border border-[#233147] text-xs text-neutral-400">
              <div className="font-semibold text-white mb-1">
                Verified Business Information Notice
              </div>
              <p>
                All contact details, operating hours, and location data displayed are sourced directly
                from official Sifontes Roofing &amp; Repair LLC business records.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded 4-Step Inspection Scheduler */}
          <div className="lg:col-span-7">
            <InspectionForm initialIssue="Roof Inspection or Repair" />
          </div>
        </div>
      </div>
    </section>
  );
};
