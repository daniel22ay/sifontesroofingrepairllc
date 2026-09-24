/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { LeakDetectionPage } from './components/LeakDetectionPage';
import { StormDamagePage } from './components/StormDamagePage';
import { ProjectsGallery } from './components/ProjectsGallery';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { InspectionForm } from './components/InspectionForm';
import { ChatbotModal } from './components/ChatbotModal';
import { BUSINESS_INFO } from './data/roofingData';
import {
  AlertTriangle,
  Droplets,
  Phone,
  MessageCircle,
  ShieldCheck,
  Calendar,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Clock,
  Hammer,
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [isInspectionModalOpen, setIsInspectionModalOpen] = useState(false);
  const [inspectionDefaultIssue, setInspectionDefaultIssue] = useState<string | undefined>(undefined);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenInspection = (defaultIssue?: string) => {
    setInspectionDefaultIssue(defaultIssue);
    setIsInspectionModalOpen(true);
  };

  const handleNavigate = (view: PageView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappEmergencyUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    'Hi Sifontes Roofing, I have an urgent roof issue in Naples, FL.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F17] text-neutral-100 selection:bg-[#FBCB06] selection:text-black">
      {/* Top Header */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenInspection={handleOpenInspection}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* View Routing */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <HeroSection
              onOpenInspection={handleOpenInspection}
              onOpenChat={() => setIsChatOpen(true)}
            />

            {/* Emergency & Active Leak Alert Strip */}
            <div className="bg-[#121824] border-b border-[#1F293D] py-4 px-4 sm:px-6">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 shrink-0">
                    <Droplets className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white flex items-center gap-2">
                      <span>Dealing with an Active Roof Leak or Storm Emergency?</span>
                    </h2>
                    <p className="text-xs text-neutral-300">
                      Water spreads rapidly through drywall and insulation. Fast local response across
                      Naples &amp; Collier County.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                  <a
                    href={`tel:+${BUSINESS_INFO.phoneRaw}`}
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FBCB06]" />
                    <span>Call (239) 404-7402</span>
                  </a>
                  <a
                    href={whatsappEmergencyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#14261F] hover:bg-[#1A332A] border border-emerald-500/40 text-emerald-300 font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Alert</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <ServicesSection onOpenInspection={handleOpenInspection} />

            {/* Why Sifontes Section: Florida Climate Realities */}
            <section className="py-16 lg:py-24 bg-[#0F141F] text-white border-b border-[#1F293D]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
                      Local Climate Expertise
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-5">
                      Built for Naples Heat, Humidity &amp; Tropical Storms
                    </h2>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                      Florida’s extreme ultraviolet rays, persistent coastal humidity, and severe
                      summer storms place tremendous stress on roof underlayment and tile mortar.
                      Standard quick-fix patches degrade within months.
                    </p>
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
                      At <strong className="text-white">Sifontes Roofing &amp; Repair LLC</strong>,
                      every repair is engineered for longevity. We use premium self-adhering membranes,
                      corrosion-resistant fasteners, and heavy-gauge flashing that seamlessly blend
                      with your architectural style while delivering steadfast protection.
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FBCB06] shrink-0" />
                        <span className="text-sm font-semibold text-neutral-200">
                          Non-destructive tile inspection and precision replacement
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FBCB06] shrink-0" />
                        <span className="text-sm font-semibold text-neutral-200">
                          Rotted wood decking carpentry &amp; fascia reconstruction
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FBCB06] shrink-0" />
                        <span className="text-sm font-semibold text-neutral-200">
                          Watertight chimney saddles, skylights &amp; valley flashings
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleOpenInspection('Naples Climate Evaluation')}
                        className="px-6 py-3 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm transition-colors cursor-pointer"
                      >
                        Schedule Inspection
                      </button>
                      <button
                        onClick={() => handleNavigate('leak-detection')}
                        className="text-sm font-bold text-white hover:text-[#FBCB06] flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Learn About Leak Detection</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Real job photo */}
                  <div className="relative rounded-2xl overflow-hidden border border-[#223045] shadow-2xl bg-neutral-900">
                    <img
                      src="/images/underlayment_workers.jpg"
                      alt="Sifontes Roofing craftsmen repairing waterproof underlayment in Naples"
                      className="w-full h-96 object-cover"
                    />
                    <div className="p-4 bg-[#121824] border-t border-[#1F293D]">
                      <div className="text-xs font-mono text-[#FBCB06] uppercase">
                        Naples Job Site
                      </div>
                      <div className="text-sm font-semibold text-white">
                        Underlayment repair and carpentry reinforcement under barrel tiles
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Gallery Highlights */}
            <ProjectsGallery onOpenInspection={handleOpenInspection} />

            {/* Testimonials */}
            <TestimonialsSection />

            {/* About Highlights */}
            <AboutSection onOpenInspection={() => handleOpenInspection('Inspection Consultation')} />

            {/* FAQs Accordion */}
            <FaqSection
              onOpenInspection={() => handleOpenInspection()}
              onOpenChat={() => setIsChatOpen(true)}
            />

            {/* Bottom Form Section */}
            <section className="py-16 lg:py-20 bg-[#121824] border-b border-[#1F293D]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FBCB06] mb-2">
                  Get In Touch Directly
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  Schedule Your Naples Roof Inspection
                </h2>
                <p className="text-neutral-300 text-sm sm:text-base max-w-xl mx-auto">
                  Take 60 seconds to tell us about your roof. Our local team will review your details
                  and follow up promptly.
                </p>
              </div>
              <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <InspectionForm initialIssue="Naples Roof Evaluation" />
              </div>
            </section>
          </>
        )}

        {currentView === 'services' && (
          <div className="pt-8">
            <ServicesSection onOpenInspection={handleOpenInspection} />
          </div>
        )}

        {currentView === 'leak-detection' && (
          <LeakDetectionPage
            onOpenInspection={handleOpenInspection}
            onOpenChat={() => setIsChatOpen(true)}
          />
        )}

        {currentView === 'storm-damage' && (
          <StormDamagePage
            onOpenInspection={handleOpenInspection}
            onOpenChat={() => setIsChatOpen(true)}
          />
        )}

        {currentView === 'projects' && (
          <div className="pt-8">
            <ProjectsGallery onOpenInspection={handleOpenInspection} />
          </div>
        )}

        {currentView === 'about' && (
          <div className="pt-8">
            <AboutSection onOpenInspection={() => handleOpenInspection()} />
          </div>
        )}

        {currentView === 'faq' && (
          <div className="pt-8">
            <FaqSection
              onOpenInspection={() => handleOpenInspection()}
              onOpenChat={() => setIsChatOpen(true)}
            />
          </div>
        )}

        {currentView === 'contact' && (
          <div className="pt-8">
            <ContactSection onOpenChat={() => setIsChatOpen(true)} />
          </div>
        )}
      </main>

      {/* Floating Desktop AI Chat Button */}
      <aside aria-label="Virtual roofing assistant" className="hidden md:block fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-[#FBCB06] hover:bg-[#E5B804] text-neutral-950 font-black rounded-full shadow-2xl hover:shadow-[#FBCB06]/30 border-2 border-black/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          aria-label="Open AI Roofing Assistant"
        >
          <Sparkles className="w-5 h-5 fill-neutral-950" />
          <span className="text-xs tracking-wide uppercase">Ask Virtual Assistant</span>
        </button>
      </aside>

      {/* Inspection Modal */}
      {isInspectionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <InspectionForm
            isModal={true}
            initialIssue={inspectionDefaultIssue}
            onClose={() => setIsInspectionModalOpen(false)}
          />
        </div>
      )}

      {/* AI Chatbot Assistant Modal */}
      <ChatbotModal
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenInspection={(issue) => {
          setIsChatOpen(false);
          handleOpenInspection(issue);
        }}
      />

      {/* Persistent Mobile Bottom Action Bar (CALL | WHATSAPP | INSPECTION) */}
      <MobileActionBar
        onOpenInspection={() => handleOpenInspection()}
        onOpenChat={() => setIsChatOpen(true)}
      />

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenInspection={handleOpenInspection}
      />
    </div>
  );
}
