import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Calendar, MessageCircle } from 'lucide-react';
import { FAQS, BUSINESS_INFO } from '../data/roofingData';

interface FaqSectionProps {
  onOpenInspection: () => void;
  onOpenChat: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenInspection,
  onOpenChat,
}) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-[#1F293D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
            Clear Answers for Homeowners
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Frequently Asked Roofing Questions
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Common questions about roof inspections, leak warning signs, warranties, and roofing
            lifespans in Naples, Florida.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-[#121824] border border-[#1F293D] rounded-xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-[#FBCB06] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FBCB06] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/80">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Have another question? */}
        <div className="mt-10 p-6 rounded-2xl bg-[#162030] border border-[#24334A] text-center sm:flex sm:items-center sm:justify-between">
          <div className="text-left mb-4 sm:mb-0">
            <h3 className="text-base font-bold text-white">Have a specific question about your roof?</h3>
            <p className="text-xs text-neutral-300">
              Ask our interactive virtual assistant or talk directly with our Naples team.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={onOpenChat}
              className="px-4 py-2.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-xs cursor-pointer transition-colors"
            >
              Ask AI Assistant
            </button>
            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-700 text-white font-bold text-xs hover:text-[#FBCB06] transition-colors"
            >
              (239) 404-7402
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
