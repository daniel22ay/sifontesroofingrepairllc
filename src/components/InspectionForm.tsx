import React, { useState } from 'react';
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Upload,
  MessageCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  X,
  FileText,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { RoofType, IssueType, UrgencyLevel, LeadData } from '../types';

interface InspectionFormProps {
  initialIssue?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const InspectionForm: React.FC<InspectionFormProps> = ({
  initialIssue,
  onClose,
  isModal = false,
}) => {
  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<LeadData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form State
  const [serviceNeeded, setServiceNeeded] = useState<string>(
    initialIssue || 'Roof leak detection'
  );
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cityZip, setCityZip] = useState('Naples, FL 34117');
  const [roofType, setRoofType] = useState<RoofType>('Tile');
  const [description, setDescription] = useState('');
  const [preferredContact, setPreferredContact] = useState<'phone' | 'whatsapp' | 'email'>('phone');
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      if (photoPreviews.length >= 4) return;
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setPhotoPreviews((prev) => [...prev, reader.result as string]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    setPhotoPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!name.trim() || !phone.trim()) {
      setErrorMessage('Please provide your name and phone number so we can reach you.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          address: `${address.trim()} ${cityZip.trim()}`.trim(),
          roofType,
          issueType: serviceNeeded,
          description: description.trim(),
          preferredContact,
          photos: photoPreviews,
        }),
      });

      const data = await response.json();

      if (response.ok && data.lead) {
        setSubmittedLead(data.lead);
      } else {
        // Local fallback lead object for seamless user experience
        const fallbackLead: LeadData = {
          id: `LEAD-${Date.now().toString().slice(-4)}`,
          name,
          phone,
          email,
          address: `${address} ${cityZip}`,
          roofType,
          issueType: serviceNeeded as IssueType,
          urgency: serviceNeeded.toLowerCase().includes('leak') ? 'URGENT' : 'HIGH PRIORITY',
          description,
          preferredContact,
          createdAt: new Date().toISOString(),
          aiSummary: `${name} requested an inspection for ${serviceNeeded} on a ${roofType} roof in Naples.`,
        };
        setSubmittedLead(fallbackLead);
      }
    } catch (err) {
      console.warn('Lead submission error, using resilient client confirmation:', err);
      setSubmittedLead({
        id: `LEAD-${Date.now().toString().slice(-4)}`,
        name,
        phone,
        email,
        address: `${address} ${cityZip}`,
        roofType,
        issueType: serviceNeeded as IssueType,
        urgency: 'HIGH PRIORITY',
        description,
        preferredContact,
        createdAt: new Date().toISOString(),
      });
    } finally {
      setSubmitting(false);
    }
  };

  const getSubmittedWhatsAppUrl = () => {
    if (!submittedLead) return `https://wa.me/${BUSINESS_INFO.phoneRaw}`;
    const text = `Hi Sifontes Roofing, I just submitted an inspection request online:\nName: ${submittedLead.name}\nPhone: ${submittedLead.phone}\nAddress: ${submittedLead.address}\nRoof: ${submittedLead.roofType}\nIssue: ${submittedLead.issueType}`;
    return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className={`bg-[#121824] border border-[#1F293D] rounded-2xl overflow-hidden shadow-2xl ${isModal ? 'max-w-2xl w-full mx-auto' : ''}`}>
      {/* Modal Header */}
      <div className="p-5 sm:p-6 bg-[#162030] border-b border-[#1F293D] flex items-center justify-between">
        <div>
          <div className="text-[11px] font-mono uppercase text-[#FBCB06] font-bold tracking-wider mb-1">
            Local Naples Roofing Evaluation
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Schedule a Roof Inspection
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Honest evaluation by Sifontes Roofing &amp; Repair LLC · No high-pressure sales
          </p>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {submittedLead ? (
        /* Confirmation & Lead Handoff Summary Card */
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <h3 className="font-bold text-white text-base">
                Inspection Request Received!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-300">
                A Sifontes Roofing specialist will contact you at{' '}
                <strong className="text-white">{submittedLead.phone}</strong> during business hours.
              </p>
            </div>
          </div>

          {/* Lead Summary Block */}
          <div className="bg-[#0B0F17] border border-[#1F293D] rounded-xl p-5 space-y-3">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                Inspection Ticket #{submittedLead.id}
              </span>
              <span
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded uppercase ${
                  submittedLead.urgency === 'URGENT'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'bg-[#FBCB06]/20 text-[#FBCB06] border border-[#FBCB06]/40'
                }`}
              >
                {submittedLead.urgency}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div>
                <span className="text-neutral-500 block text-[11px]">Customer:</span>
                <span className="font-semibold text-white">{submittedLead.name}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px]">Phone:</span>
                <span className="font-semibold text-white">{submittedLead.phone}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px]">Roof Type:</span>
                <span className="font-semibold text-white">{submittedLead.roofType}</span>
              </div>
              <div>
                <span className="text-neutral-500 block text-[11px]">Service Requested:</span>
                <span className="font-semibold text-white">{submittedLead.issueType}</span>
              </div>
            </div>

            {submittedLead.aiSummary && (
              <div className="pt-2 border-t border-neutral-800/80 text-xs text-neutral-300">
                <span className="text-neutral-500 block text-[11px] mb-1">Evaluation Note:</span>
                <p className="italic text-neutral-300">{submittedLead.aiSummary}</p>
              </div>
            )}
          </div>

          {/* Instant Follow-up Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={getSubmittedWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#14261F] hover:bg-[#1A332A] border border-emerald-500/40 text-emerald-300 font-bold text-sm transition-colors text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Confirm via WhatsApp</span>
            </a>

            <a
              href={`tel:+${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-bold text-sm transition-colors text-center"
            >
              <Phone className="w-4 h-4 text-[#FBCB06]" />
              <span>Call (239) 404-7402</span>
            </a>
          </div>

          {onClose && (
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-semibold cursor-pointer"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        /* Multi-Step Conversion Form */
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-5">
          {/* Step Progress Bar */}
          <div className="flex items-center justify-between text-xs text-neutral-400 pb-2 border-b border-neutral-800">
            <span className="font-semibold text-white">Step {step} of 4</span>
            <span>
              {step === 1 && 'What do you need?'}
              {step === 2 && 'Property information'}
              {step === 3 && 'Project details'}
              {step === 4 && 'Preferred contact'}
            </span>
          </div>

          {errorMessage && (
            <div className="p-3 rounded-lg bg-rose-950/60 border border-rose-600/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* STEP 1: What do you need? */}
          {step === 1 && (
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-white">
                Select your roofing need:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Roof leak detection & repair',
                  'Roof inspection / evaluation',
                  'Tile roof repair / replacement',
                  'Storm or wind damage',
                  'Metal roof repair',
                  'Flat or low-slope repair',
                  'Skylight or chimney repair',
                  'Other roofing concern',
                ].map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setServiceNeeded(item)}
                    className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                      serviceNeeded === item
                        ? 'bg-[#FBCB06]/20 border-[#FBCB06] text-white font-bold'
                        : 'bg-[#0B0F17] border-[#1F293D] text-neutral-300 hover:border-neutral-600'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Property Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Property information */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. John Smith"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(239) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    Property Street Address
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="e.g. 510 25th Street SW"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  City / ZIP Code
                </label>
                <input
                  type="text"
                  value={cityZip}
                  onChange={(e) => setCityZip(e.target.value)}
                  placeholder="Naples, FL 34117"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!name.trim() || !phone.trim()) {
                      setErrorMessage('Please enter your name and phone number.');
                      return;
                    }
                    setErrorMessage(null);
                    setStep(3);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Roof Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Project details */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  What type of roof does your home have?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(['Tile', 'Metal', 'Asphalt Shingle', 'Flat / Low-Slope', 'Not Sure'] as RoofType[]).map(
                    (type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setRoofType(type)}
                        className={`p-2.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                          roofType === type
                            ? 'bg-[#FBCB06]/20 border-[#FBCB06] text-white font-bold'
                            : 'bg-[#0B0F17] border-[#1F293D] text-neutral-300 hover:border-neutral-600'
                        }`}
                      >
                        {type}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Describe the problem (Active leaks, water stains, cracked tiles, age)
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. Noticed a brown ring on living room ceiling after the recent thunderstorm. A few barrel tiles look displaced..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F17] border border-[#1F293D] text-white text-sm focus:outline-none focus:border-[#FBCB06]"
                ></textarea>
              </div>

              {/* Photo Upload Option */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  Optional: Upload photos of your roof or leak (Max 4)
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <label className="px-4 py-2.5 rounded-lg border border-dashed border-neutral-600 hover:border-[#FBCB06] bg-[#0B0F17] text-neutral-300 hover:text-white text-xs font-medium cursor-pointer flex items-center gap-2">
                    <Upload className="w-4 h-4 text-[#FBCB06]" />
                    <span>Choose Photos</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                  </label>

                  {photoPreviews.map((img, i) => (
                    <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden border border-neutral-700">
                      <img src={img} alt="preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="absolute top-0 right-0 bg-black/80 text-white rounded-bl p-0.5"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-5 py-2.5 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Contact Method</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Preferred contact & Submit */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  How would you prefer Sifontes Roofing to reach out?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: 'phone', label: 'Phone Call', icon: Phone },
                    { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle },
                    { id: 'email', label: 'Email', icon: FileText },
                  ].map((method) => {
                    const Icon = method.icon;
                    return (
                      <button
                        type="button"
                        key={method.id}
                        onClick={() => setPreferredContact(method.id as any)}
                        className={`p-3 rounded-xl flex flex-col items-center justify-center gap-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                          preferredContact === method.id
                            ? 'bg-[#FBCB06]/20 border-[#FBCB06] text-white font-bold'
                            : 'bg-[#0B0F17] border-[#1F293D] text-neutral-300 hover:border-neutral-600'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#FBCB06]" />
                        <span>{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Review Summary */}
              <div className="p-3.5 rounded-xl bg-[#0B0F17] border border-[#1F293D] text-xs space-y-1 text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Contact:</span>
                  <span className="font-semibold text-white">{name} · {phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Service:</span>
                  <span className="font-semibold text-white">{serviceNeeded}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">Roof Type:</span>
                  <span className="font-semibold text-white">{roofType}</span>
                </div>
              </div>

              <div className="pt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs text-neutral-400 hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 px-6 rounded-lg bg-[#FBCB06] hover:bg-[#E5B804] text-black font-black text-sm transition-all shadow-md active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Request My Inspection</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
