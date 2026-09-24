import React, { useState } from 'react';
import {
  Wrench,
  AlertTriangle,
  Search,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Phone,
  ArrowRight,
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/roofingData';
import { ServiceDetail } from '../types';

interface ServicesSectionProps {
  onOpenInspection: (defaultIssue?: string) => void;
  onSelectService?: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenInspection,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceDetail>(SERVICES[0]);

  const filterTabs = [
    { id: 'all', label: 'All Services' },
    { id: 'leak-detection', label: 'Leak Detection' },
    { id: 'tile-roof-repair', label: 'Tile Roofs' },
    { id: 'roof-inspections', label: 'Inspections' },
    { id: 'storm-damage', label: 'Storm Damage' },
    { id: 'metal-roof-repair', label: 'Metal Roofs' },
    { id: 'flat-roof-repair', label: 'Flat Roofs' },
  ];

  const displayedServices =
    activeFilter === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.id === activeFilter);

  const getServiceWhatsAppUrl = (title: string) => {
    return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
      `Hi Sifontes Roofing, I need help with ${title} in Naples, FL.`
    )}`;
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-[#1F293D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
            Verified Roofing Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Specialized Roof Repair Services in Naples, FL
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg">
            Sifontes Roofing &amp; Repair LLC offers targeted, long-term repair solutions tailored
            specifically to Southwest Florida roofing materials and climate stresses. We fix the root
            cause without aggressive sales pitches.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Control compliant with frontend design skill) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#FBCB06] text-black font-extrabold'
                  : 'bg-[#121824] text-neutral-300 hover:text-white hover:bg-[#1A2333] border border-[#1F293D]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, idx) => (
            <div
              key={service.id}
              className="bg-[#121824] border border-[#1F293D] rounded-xl overflow-hidden hover:border-[#FBCB06]/40 transition-all flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-neutral-900">
                <img
                  src={service.image}
                  alt={service.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121824] via-transparent to-black/30"></div>
                {service.badge && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-bold tracking-wide uppercase bg-black/80 text-[#FBCB06] rounded border border-[#FBCB06]/40">
                    {service.badge}
                  </span>
                )}
                <div className="absolute bottom-3 left-4 text-xs font-mono text-[#FBCB06]">
                  0{idx + 1}. Capability
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FBCB06] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Common Problem Points */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-neutral-800">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                      Common Warning Signs:
                    </div>
                    {service.commonProblems.slice(0, 2).map((prob, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{prob}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onOpenInspection(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FBCB06] hover:underline cursor-pointer"
                  >
                    <span>Schedule Inspection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={getServiceWhatsAppUrl(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 font-medium"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Fast Evaluation Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#121824] via-[#162030] to-[#121824] border border-[#1F293D] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Not sure which roofing service you need?
            </h3>
            <p className="text-neutral-300 text-sm">
              Roof issues often conceal themselves. A quick on-site diagnostic identifies whether you
              need a minor tile re-bedding, flashing reseal, or simple valley clearing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenInspection('General Roofing Evaluation')}
              className="px-5 py-3 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm transition-colors cursor-pointer flex-1 sm:flex-none text-center"
            >
              Request Free Consultation
            </button>
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-sm transition-colors flex-1 sm:flex-none text-center flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#FBCB06]" />
              (239) 404-7402
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
