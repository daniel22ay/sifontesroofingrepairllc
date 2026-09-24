import React from 'react';
import {
  CloudLightning,
  Camera,
  Calendar,
  MessageCircle,
  Phone,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface StormDamagePageProps {
  onOpenInspection: (defaultIssue?: string) => void;
  onOpenChat: () => void;
}

export const StormDamagePage: React.FC<StormDamagePageProps> = ({
  onOpenInspection,
  onOpenChat,
}) => {
  const whatsappStormUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hi Sifontes Roofing, my roof has storm damage and I would like to speak with someone.'
  )}`;

  const workflowSteps = [
    {
      num: '1',
      title: 'Report Damage',
      desc: 'Let us know where your property is located in Naples and what storm symptoms you observe (missing tiles, active drip, lifted metal).',
    },
    {
      num: '2',
      title: 'Send Photos',
      desc: 'Snap pictures from the ground or inside showing water marks, broken tiles, or exterior damage to help our team prioritize urgency.',
    },
    {
      num: '3',
      title: 'Request Inspection',
      desc: 'Our local roofing specialists evaluate the structural underlayment, secure vulnerable openings, and perform reliable repairs.',
    },
  ];

  return (
    <div className="bg-[#0B0F17] text-white">
      {/* Storm Damage Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#161F2E] via-[#0B0F17] to-[#0B0F17] border-b border-[#1F293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-950/70 border border-amber-500/40 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
              <CloudLightning className="w-3.5 h-3.5 text-amber-400" />
              <span>Southwest Florida Storm &amp; Wind Response</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-5 text-balance">
              Storm Damage to Your Roof?{' '}
              <span className="text-[#FBCB06]">Get Dependable Local Help in Naples.</span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              High winds, flying debris, and torrential rains can dislodge barrel tiles, damage flashing,
              or tear open underlying waterproofing. Sifontes Roofing &amp; Repair LLC provides rapid
              evaluation and quality repairs across Naples and Collier County to protect your home.
            </p>

            <div className="flex flex-wrap gap-3.5 mb-10">
              <button
                onClick={() => onOpenInspection('Storm or Wind Damage')}
                className="px-6 py-3.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm sm:text-base transition-colors shadow cursor-pointer"
              >
                Schedule Storm Inspection
              </button>
              <a
                href={whatsappStormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#14261F] hover:bg-[#1A332A] border border-emerald-500/40 text-emerald-300 font-bold text-sm sm:text-base transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                WhatsApp Us Photos
              </a>
              <a
                href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-bold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FBCB06]" />
                (239) 404-7402
              </a>
            </div>
          </div>

          {/* 3-Step Action Pathway */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {workflowSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-[#121824] border border-[#1F293D] relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-full bg-[#FBCB06] text-black font-black flex items-center justify-center text-base mb-4">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Sifontes Storm Work Imagery & Details */}
      <section className="py-16 bg-[#0B0F17] border-b border-[#1F293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
                What to Watch For
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                Common Storm Issues on Naples Roofs
              </h2>
              <div className="space-y-4 text-neutral-300 text-sm leading-relaxed">
                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#121824] border border-[#1F293D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Tile Displacement &amp; Chatter:</strong> Strong wind
                    gusts lift perimeter and ridge tiles, snapping fastening clips and breaking mortar
                    bonds.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#121824] border border-[#1F293D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Wind-Driven Rain at Valleys:</strong> Heavy lateral
                    rain can push under flashings and enter roofing seams where valleys meet walls.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#121824] border border-[#1F293D]">
                  <CheckCircle2 className="w-4 h-4 text-[#FBCB06] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Debris Impacts:</strong> Broken tree branches and palm
                    fronds crack clay tiles and fracture roof sheathing underneath.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-[#233147] shadow-xl bg-neutral-900">
              <img
                src="/images/underlayment_strip.jpg"
                alt="Underlayment membrane inspection and repair after storm damage"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-[#121824] border-t border-[#1F293D]">
                <div className="text-xs font-bold text-[#FBCB06] uppercase tracking-wide">
                  Authentic Job Site Photo
                </div>
                <div className="text-sm text-neutral-200">
                  Securing roof underlayment and sealing vulnerable seams following wind damage in Naples.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
