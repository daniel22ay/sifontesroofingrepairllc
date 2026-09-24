import React from 'react';
import {
  Droplets,
  AlertTriangle,
  Search,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
  Camera,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';

interface LeakDetectionPageProps {
  onOpenInspection: (defaultIssue?: string) => void;
  onOpenChat: () => void;
}

export const LeakDetectionPage: React.FC<LeakDetectionPageProps> = ({
  onOpenInspection,
  onOpenChat,
}) => {
  const whatsappLeakUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hi Sifontes Roofing, I have a roof leak and would like to schedule an inspection.'
  )}`;

  const leakSigns = [
    {
      title: 'Water Stains & Ring Marks',
      desc: 'Discoloration, brownish rings, or yellow patches spreading across drywall ceilings or upper drywall corners.',
    },
    {
      title: 'Peeling Paint & Blistered Plaster',
      desc: 'Moisture trapped behind paint causes bubbling, peeling, or sagging ceiling drywall beneath tile courses.',
    },
    {
      title: 'Musty Attic Odor & Damp Insulation',
      desc: 'High humidity or damp fiberglass insulation in the attic before water breaks through living room ceilings.',
    },
    {
      title: 'Moisture Around Penetrations',
      desc: 'Water streaks around skylight wells, chimney chases, bathroom exhaust vents, or plumbing stacks.',
    },
    {
      title: 'Cracked, Slipped or Broken Roof Tiles',
      desc: 'Tiles out of position expose the sensitive asphalt underlayment underneath to intense tropical sun and rain.',
    },
    {
      title: 'Granule Washoff & Debris Accumulation',
      desc: 'Heavy silt in gutters or valleys indicating degraded underlayment or trapped rainwater backup.',
    },
  ];

  const diagnosticSteps = [
    {
      step: '01',
      title: 'Comprehensive Exterior Surface Audit',
      desc: 'We examine tile courses, valley metal, step flashings, chimney saddles, and skylight curbs for hairline fractures, displacement, and seal breakdown.',
    },
    {
      step: '02',
      title: 'Attic & Decking Path Tracing',
      desc: 'Because water rarely drips directly below the roof opening, we evaluate accessible attic spaces to follow moisture trails along rafters and decking.',
    },
    {
      step: '03',
      title: 'Accurate Diagnosis & Targeted Repair Plan',
      desc: 'We present straightforward findings and recommend the exact repair needed—restoring your underlayment and tiles without unwarranted whole-roof replacement.',
    },
  ];

  return (
    <div className="bg-[#0B0F17] text-white">
      {/* High-Conversion Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-[#121824] via-[#0B0F17] to-[#0B0F17] border-b border-[#1F293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-rose-950/70 border border-rose-600/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4">
                <Droplets className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Urgent Leak Response in Naples, FL</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 text-balance">
                Roof Leak?{' '}
                <span className="text-[#FBCB06]">Don&rsquo;t Wait for the Damage to Get Worse.</span>
              </h1>

              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6">
                Roof leaks rarely start as major disasters. In Southwest Florida, small breaches in
                flashing or cracked tiles allow water to seep into insulation, wood trusses, and ceiling
                plaster. Early detection by{' '}
                <strong className="text-white">Sifontes Roofing &amp; Repair LLC</strong> prevents thousands in
                avoidable structural repairs.
              </p>

              <div className="p-4 rounded-xl bg-[#162030] border border-[#233147] mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[#FBCB06] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-neutral-300">
                    <strong className="text-white">Active water dripping inside?</strong> Place a bucket,
                    take a photo if safe, and contact our Naples emergency line directly at{' '}
                    <a
                      href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                      className="text-[#FBCB06] font-bold underline"
                    >
                      (239) 404-7402
                    </a>
                    .
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3.5">
                <button
                  onClick={() => onOpenInspection('Active Roof Leak')}
                  className="px-6 py-3.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm sm:text-base transition-colors shadow cursor-pointer"
                >
                  Schedule Leak Inspection
                </button>
                <a
                  href={whatsappLeakUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-lg bg-[#14261F] hover:bg-[#1A332A] border border-emerald-500/40 text-emerald-300 font-bold text-sm sm:text-base transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp Us
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

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-[#2A374E] shadow-2xl bg-neutral-900">
                <img
                  src="/images/damaged_tiles_leak.jpg"
                  alt="Damaged tile roof with water intrusion potential in Naples"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-neutral-700">
                  <div className="text-xs font-mono text-[#FBCB06] mb-1">
                    Authentic Sifontes Field Diagnostic
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Uncovering cracked tiles &amp; concealed underlayment degradation in Naples
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signs of a Roof Leak Grid */}
      <section className="py-16 bg-[#0B0F17] border-b border-[#1F293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
              Early Identification
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              Common Signs You Have a Roof Leak
            </h2>
            <p className="text-neutral-300 text-base">
              Water often travels several feet from where it enters the roof surface before seeping into
              your drywall. Look for these early warning signs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leakSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#121824] border border-[#1F293D] hover:border-[#FBCB06]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#1F293D] flex items-center justify-center text-[#FBCB06] font-mono text-sm font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{sign.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{sign.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our 3-Step Leak Diagnostic Process */}
      <section className="py-16 bg-[#0F141F] border-b border-[#1F293D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
              Our Systematic Methodology
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">
              How Sifontes Pinpoints Hidden Roof Leaks
            </h2>
            <p className="text-neutral-300 text-base">
              We never guess. Our leak detection services focus on accuracy, non-destructive
              evaluation, and repairs that permanently stop water intrusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diagnosticSteps.map((step) => (
              <div
                key={step.step}
                className="relative p-6 rounded-xl bg-[#121824] border border-[#1F293D]"
              >
                <div className="text-3xl font-black text-[#FBCB06] font-mono mb-3">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Photo Upload Feature Prompt */}
          <div className="mt-12 p-8 rounded-2xl bg-[#141C2A] border border-[#24334A] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FBCB06] flex items-center justify-center text-black shrink-0">
                <Camera className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Have photos of the leak or roof damage?</h3>
                <p className="text-sm text-neutral-300">
                  Upload photos during your inspection request or send them via WhatsApp for quick initial review.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onOpenInspection('Active Roof Leak (With Photos)')}
                className="px-5 py-3 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm transition-colors cursor-pointer whitespace-nowrap"
              >
                Send Photos &amp; Request Inspection
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
