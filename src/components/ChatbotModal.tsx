import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  X,
  Send,
  MessageCircle,
  Phone,
  Camera,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/roofingData';
import { RoofType, IssueType, UrgencyLevel, LeadData } from '../types';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  time?: string;
  isLeadSummary?: boolean;
  leadData?: LeadData;
}

interface ChatbotModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInspection: (issue?: string) => void;
}

export const ChatbotModal: React.FC<ChatbotModalProps> = ({
  isOpen,
  onClose,
  onOpenInspection,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      content:
        "Hi! I'm the Sifontes Roofing virtual assistant in Naples, FL. How can I help with your roof today?",
      time: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadStage, setLeadStage] = useState<
    'idle' | 'roof-type' | 'issue' | 'contact' | 'completed'
  >('idle');
  const [currentRoofType, setCurrentRoofType] = useState<RoofType>('Tile');
  const [currentIssue, setCurrentIssue] = useState<IssueType>('Active Roof Leak');
  const [copiedTicket, setCopiedTicket] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  if (!isOpen) return null;

  const quickPills = [
    { label: '🏠 I have a roof leak', prompt: 'I have an active roof leak in my home.' },
    { label: '🔍 I need a roof inspection', prompt: 'I would like to schedule a roof inspection in Naples.' },
    { label: '🌧️ Storm damage', prompt: 'Our roof suffered storm and wind damage.' },
    { label: '🛠️ I need a roof repair', prompt: 'I need a roof repair for cracked or damaged tiles.' },
    { label: '📸 I want to send photos', prompt: 'I would like to share photos of my roof damage for an evaluation.' },
    { label: '💬 Ask a question', prompt: 'What warranties do you offer on roof repairs in Naples?' },
    { label: '📞 Talk to someone', prompt: 'What is the direct phone number to speak with a roofing specialist?' },
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent) return;

    const userMsg: ChatMessage = {
      id: `msg-${Date.now()}`,
      role: 'user',
      content: messageContent,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          userContext: {
            roofType: currentRoofType,
            issue: currentIssue,
          },
        }),
      });

      const data = await response.json();
      const reply =
        data.reply ||
        "Thank you for contacting Sifontes Roofing. You can schedule an inspection right now or reach our team at (239) 404-7402.";

      const aiMsg: ChatMessage = {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      console.warn('Chat API fallback:', err);
      setMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now() + 1}`,
          role: 'assistant',
          content:
            "Thank you for reaching out to Sifontes Roofing & Repair LLC in Naples, FL. We are ready to help protect your home. Please call us at (239) 404-7402 or tap 'Schedule Inspection' to get started.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const startLeadQualification = () => {
    setLeadStage('roof-type');
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        role: 'assistant',
        content:
          "Let's get your inspection priority set! What type of roof does your Naples property have?",
        time: 'Just now',
      },
    ]);
  };

  const handleSelectRoofType = (type: RoofType) => {
    setCurrentRoofType(type);
    setLeadStage('issue');
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        role: 'user',
        content: `My roof type is: ${type}`,
      },
      {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content: `Got it, ${type} roof. What is the primary issue you are noticing?`,
      },
    ]);
  };

  const handleSelectIssue = (issue: IssueType) => {
    setCurrentIssue(issue);
    setLeadStage('contact');
    setMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        role: 'user',
        content: `Primary issue: ${issue}`,
      },
      {
        id: `msg-${Date.now() + 1}`,
        role: 'assistant',
        content:
          "Thank you. Would you like to launch our 4-step inspection scheduler now to attach photos and lock in your appointment?",
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center sm:items-end justify-center sm:justify-start p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in">
      <div className="w-full max-w-lg bg-[#0B0F17] border border-[#1F293D] rounded-2xl shadow-2xl flex flex-col h-[600px] max-h-[90vh] overflow-hidden">
        {/* Assistant Header */}
        <div className="p-4 bg-[#121824] border-b border-[#1F293D] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/sifontes_logo.jpg"
              alt="Sifontes Roofing & Repair LLC"
              className="h-9 w-auto rounded object-contain border border-amber-400/40 shadow-sm"
            />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-white text-sm">
                  Sifontes Roofing Assistant
                </h3>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>
              <p className="text-[11px] text-neutral-400">
                Naples, FL · Grounded in Verified Business Info
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close chat assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Emergency Notice Banner */}
        <div className="bg-amber-950/40 border-b border-amber-500/20 px-4 py-2 flex items-center justify-between text-xs text-amber-200">
          <span className="truncate">Active water leak? Call our Naples dispatch line directly:</span>
          <a
            href={`tel:+${BUSINESS_INFO.phoneRaw}`}
            className="font-bold text-[#FBCB06] hover:underline shrink-0 ml-2"
          >
            (239) 404-7402
          </a>
        </div>

        {/* Chat Message Scroll Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col ${
                msg.role === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#FBCB06] text-neutral-950 font-medium rounded-tr-none'
                    : 'bg-[#162030] text-neutral-100 border border-[#233147] rounded-tl-none'
                }`}
              >
                {msg.content}
              </div>
              {msg.time && (
                <span className="text-[10px] text-neutral-500 mt-1 px-1">{msg.time}</span>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-neutral-400 italic">
              <span className="w-2 h-2 rounded-full bg-[#FBCB06] animate-bounce"></span>
              <span className="w-2 h-2 rounded-full bg-[#FBCB06] animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-2 h-2 rounded-full bg-[#FBCB06] animate-bounce [animation-delay:0.4s]"></span>
              <span>Sifontes Assistant is typing...</span>
            </div>
          )}

          {/* Interactive Lead Qualification Steps Inside Chat */}
          {leadStage === 'roof-type' && (
            <div className="p-3 bg-[#121824] border border-[#1F293D] rounded-xl space-y-2">
              <div className="text-xs font-semibold text-neutral-300">Choose your roof type:</div>
              <div className="grid grid-cols-2 gap-1.5">
                {(['Tile', 'Metal', 'Asphalt Shingle', 'Flat / Low-Slope', 'Not Sure'] as RoofType[]).map(
                  (type) => (
                    <button
                      key={type}
                      onClick={() => handleSelectRoofType(type)}
                      className="p-2 text-xs bg-neutral-900 hover:bg-[#1A2333] border border-neutral-700 text-white rounded-lg text-left cursor-pointer transition-colors"
                    >
                      {type}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {leadStage === 'issue' && (
            <div className="p-3 bg-[#121824] border border-[#1F293D] rounded-xl space-y-2">
              <div className="text-xs font-semibold text-neutral-300">What is the problem?</div>
              <div className="grid grid-cols-1 gap-1.5">
                {(
                  [
                    'Active Roof Leak',
                    'Storm or Wind Damage',
                    'Cracked or Missing Tiles',
                    'Routine / Preventive Inspection',
                    'Aging Roof Evaluation',
                  ] as IssueType[]
                ).map((issue) => (
                  <button
                    key={issue}
                    onClick={() => handleSelectIssue(issue)}
                    className="p-2 text-xs bg-neutral-900 hover:bg-[#1A2333] border border-neutral-700 text-white rounded-lg text-left cursor-pointer transition-colors"
                  >
                    {issue}
                  </button>
                ))}
              </div>
            </div>
          )}

          {leadStage === 'contact' && (
            <div className="p-3.5 bg-[#121824] border border-[#1F293D] rounded-xl space-y-3">
              <div className="text-xs text-neutral-200">
                You qualify for priority evaluation for your{' '}
                <strong className="text-[#FBCB06]">{currentRoofType}</strong> roof (
                {currentIssue}).
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenInspection(`${currentIssue} (${currentRoofType} roof)`);
                  }}
                  className="flex-1 py-2.5 px-3 bg-[#FBCB06] hover:bg-[#E5B804] text-black font-extrabold text-xs rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Open Full Scheduler</span>
                </button>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
                    `Hi Sifontes Roofing, I need priority evaluation for my ${currentRoofType} roof (${currentIssue}) in Naples.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-[#14261F] border border-emerald-500/40 text-emerald-300 text-xs font-bold rounded-lg flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-3 py-2 bg-[#0B0F17] border-t border-[#1F293D] overflow-x-auto flex gap-1.5 no-scrollbar">
          {quickPills.map((pill, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(pill.prompt)}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-[#121824] hover:bg-[#1A2333] border border-neutral-700 text-neutral-300 hover:text-white whitespace-nowrap cursor-pointer transition-colors"
            >
              {pill.label}
            </button>
          ))}
        </div>

        {/* Chat Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 bg-[#121824] border-t border-[#1F293D] flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about leak detection, tile repairs, or warranties..."
            className="flex-1 px-3 py-2 text-xs sm:text-sm bg-[#0B0F17] border border-neutral-700 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#FBCB06]"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 bg-[#FBCB06] hover:bg-[#E5B804] disabled:opacity-40 text-black rounded-lg transition-colors cursor-pointer"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
