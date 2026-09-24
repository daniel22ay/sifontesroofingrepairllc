import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/roofingData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-[#0B0F17] text-white border-b border-[#1F293D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
            Naples Homeowner Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4">
            Trusted Throughout Collier County
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base">
            Read authentic feedback from local homeowners who experienced our thorough leak detection,
            honest estimates, and durable roofing repairs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#121824] border border-[#1F293D] rounded-xl p-6 flex flex-col justify-between hover:border-[#FBCB06]/40 transition-colors relative"
            >
              <Quote className="w-8 h-8 text-[#FBCB06]/20 absolute top-4 right-4" />

              <div>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FBCB06] text-[#FBCB06]"
                    />
                  ))}
                </div>

                <p className="text-neutral-200 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#FBCB06]">{t.service}</div>
                </div>
                <div className="text-[11px] text-neutral-400">{t.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
