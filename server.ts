import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '20mb' }));

// In-memory lead storage for demonstration & export
interface Lead {
  id: string;
  name: string;
  phone: string;
  email: string;
  address?: string;
  roofType: string;
  issueType: string;
  urgency: 'URGENT' | 'HIGH PRIORITY' | 'INSPECTION / QUOTE';
  description: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  photoCount: number;
  aiSummary?: string;
  createdAt: string;
}

const leadsDatabase: Lead[] = [];

// Gemini AI Client Initialization (User-Agent header as required)
const apiKey = process.env.GEMINI_API_KEY || '';
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const SIFONTES_KNOWLEDGE_BASE = `
You are the virtual assistant for Sifontes Roofing & Repair LLC, a premier, trusted, family-owned, and faith-based roofing repair and inspection company based in Naples, Florida.

STRICT ACCURACY RULES:
- Use ONLY verified company facts provided below.
- Do NOT invent certifications, awards, employee counts, license numbers, or fake statistics.
- Do NOT diagnose structural problems or guarantee repair costs sight-unseen. Always advise that a thorough on-site roof inspection by the Sifontes team is required for accurate assessment and pricing.
- Tone: Approachable, courteous, honest, professional, and reassuring.

VERIFIED COMPANY FACTS:
- Company Name: Sifontes Roofing & Repair LLC
- Location & Address: 510 25th Street SW, Naples, Florida 34117
- Phone: (239) 404-7402
- WhatsApp Direct: +1 (239) 404-7402
- Business Hours: Monday - Friday: 7:00 AM - 5:00 PM (Emergency storm response & appointments available)
- Service Area: Naples, Florida, Collier County, Marco Island, Bonita Springs, Golden Gate, and surrounding Southwest Florida communities.
- Company Story & Values: Family-owned, local Naples roofing business with deep faith-based values. We prioritize honest recommendations, quality craftsmanship, transparent communication, and long-term protection over temporary patches or high-pressure replacement tactics.
- Services Offered:
  1. Roof Leak Detection & Diagnostic: Locating hidden water intrusion, tracking water paths through attics and decking, pinpointing leaks around valleys and penetrations.
  2. Roof Inspections & Detailed Evaluations: Annual preventive inspections, storm damage assessments, pre-sale roof evaluations.
  3. Tile Roof Repair & Replacement: Concrete and clay barrel tiles, broken/cracked/displaced tile replacement, mortar cap repointing, underlayment repairs.
  4. Metal Roof Repair: Seam sealing, fastener tightening/replacement, flashing repair, corrosion prevention.
  5. Shingle Roof Repair: Wind damage repair, tab sealing, missing shingle matching.
  6. Flat & Low-Slope Roof Repair: Membrane inspections, ponding water remediation, drainage and flashing fixes.
  7. Storm & Hurricane Damage Service: Tarping, emergency leak repair, wind-lifted tile repair.
  8. Skylight Repair & Leak Prevention: Flashing and perimeter seal replacement.
  9. Chimney Flashing Repairs: Watertight flashing reconstruction where chimney meets roof deck.
  10. Roofing Carpentry: Replacement of water-damaged roof decking, fascia, and structural plywood components.
- Guarantees/Warranties: We stand behind our workmanship with warranty options based on the specific repair performed.

CHATBOT OBJECTIVES:
1. Warmly assist homeowners and commercial property owners with their roofing questions.
2. Guide users to identify their roof type (Tile, Metal, Shingle, Flat, Not sure) and problem (Active leak, Storm damage, Aging roof, Missing tiles, Inspection).
3. Recognize urgency:
   - URGENT: Active dripping/interior water intrusion, recent major storm penetration, open hole.
   - HIGH PRIORITY: Recurring leaks, cracked/slipped tiles over living areas, chimney/skylight leaks.
   - INSPECTION / QUOTE: Routine maintenance, aging roofs, buying/selling a home.
4. Direct urgent cases to Call (239) 404-7402 or WhatsApp Us immediately.
5. Offer to collect lead details (Name, Phone, Address, Issue) so our team can follow up promptly.
`;

// API: AI Chat
app.post('/api/chat', async (req, res) => {
  try {
    const { messages, userContext } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Messages array is required' });
    }

    if (!ai) {
      // Fallback rule-based responder if API key is not yet set in environment
      const lastMsg = messages[messages.length - 1]?.content?.toLowerCase() || '';
      let reply = "Hello! I'm the Sifontes Roofing virtual assistant in Naples, FL. We specialize in roof repairs, leak detection, tile, metal, and shingle roofing. Would you like to schedule an inspection or speak directly with our team at (239) 404-7402?";
      
      if (lastMsg.includes('leak') || lastMsg.includes('water') || lastMsg.includes('drip')) {
        reply = "An active roof leak can quickly damage drywall and insulation. Sifontes Roofing provides thorough leak detection and repair in Naples. For urgent active leaks, please call us directly at (239) 404-7402 or message our WhatsApp. Would you like us to schedule an on-site inspection?";
      } else if (lastMsg.includes('storm') || lastMsg.includes('hurricane') || lastMsg.includes('wind')) {
        reply = "Florida storms and high winds can displace tiles or compromise flashing. We provide storm damage inspections and dependable repairs across Naples. Would you like to request an inspection or send us photos of the damage?";
      } else if (lastMsg.includes('cost') || lastMsg.includes('price') || lastMsg.includes('estimate') || lastMsg.includes('quote')) {
        reply = "Every roof in Naples has unique needs depending on material (tile, metal, shingle, flat) and access. We conduct a thorough on-site inspection to give you an honest, clear recommendation with no guesswork. You can schedule an inspection right here or call us at (239) 404-7402.";
      } else if (lastMsg.includes('warranty')) {
        reply = "Yes, Sifontes Roofing stands behind our workmanship and provides warranty options depending on the type of repair performed. Would you like us to evaluate your roof?";
      }

      return res.json({ reply });
    }

    const conversationText = messages
      .map((m: { role: string; content: string }) => `${m.role === 'user' ? 'Customer' : 'Sifontes Assistant'}: ${m.content}`)
      .join('\n');

    const prompt = `
${SIFONTES_KNOWLEDGE_BASE}

User Context Provided So Far:
${JSON.stringify(userContext || {}, null, 2)}

Current Conversation:
${conversationText}

Provide a helpful, polite, concise, and conversion-oriented response as Sifontes Roofing virtual assistant. If the customer describes an active leak or urgent storm damage, prioritize immediate phone (239) 404-7402 or WhatsApp contact. Keep answers under 3-4 short paragraphs maximum.
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: prompt,
    });

    const reply = response.text || "Thank you for reaching out. We would be happy to inspect your roof in Naples, FL. Please call (239) 404-7402 or schedule an inspection above.";
    return res.json({ reply });
  } catch (error: any) {
    console.error('Gemini chat error:', error);
    return res.status(500).json({
      error: 'Failed to generate response',
      fallbackReply: 'Thank you for reaching out to Sifontes Roofing & Repair LLC. For immediate assistance, please call (239) 404-7402 or click WhatsApp Us.',
    });
  }
});

// API: Lead Submission & Prioritization
app.post('/api/leads', async (req, res) => {
  try {
    const { name, phone, email, address, roofType, issueType, description, preferredContact, photos } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone number are required' });
    }

    // Determine Urgency
    const textToCheck = `${issueType} ${description}`.toLowerCase();
    let urgency: 'URGENT' | 'HIGH PRIORITY' | 'INSPECTION / QUOTE' = 'INSPECTION / QUOTE';

    if (
      textToCheck.includes('active leak') ||
      textToCheck.includes('water leaking') ||
      textToCheck.includes('dripping') ||
      textToCheck.includes('emergency') ||
      textToCheck.includes('hole') ||
      textToCheck.includes('hurricane') ||
      textToCheck.includes('major storm')
    ) {
      urgency = 'URGENT';
    } else if (
      textToCheck.includes('cracked tile') ||
      textToCheck.includes('broken tile') ||
      textToCheck.includes('chimney') ||
      textToCheck.includes('skylight') ||
      textToCheck.includes('stain') ||
      textToCheck.includes('storm damage')
    ) {
      urgency = 'HIGH PRIORITY';
    }

    // AI Lead Summary if Gemini is available
    let aiSummary = `${name} requested a ${urgency} inspection for a ${roofType || 'roof'} with issue: ${issueType || 'general service'}.`;
    if (ai && (description || photos?.length)) {
      try {
        const summaryResponse = await ai.models.generateContent({
          model: 'gemini-3.6-flash',
          contents: `Create a concise 2-sentence lead summary for roofing technicians:
Customer: ${name} (${phone}, ${email || 'no email'})
Location: ${address || 'Naples, FL area'}
Roof Type: ${roofType}
Issue Reported: ${issueType}
Description: ${description}
Photos Attached: ${photos?.length || 0}
Urgency Detected: ${urgency}`,
        });
        if (summaryResponse.text) {
          aiSummary = summaryResponse.text.trim();
        }
      } catch (err) {
        console.warn('AI summary generation skipped:', err);
      }
    }

    const newLead: Lead = {
      id: `LEAD-${Date.now().toString().slice(-6)}`,
      name,
      phone,
      email: email || '',
      address: address || 'Naples, FL',
      roofType: roofType || 'Not specified',
      issueType: issueType || 'Inspection',
      urgency,
      description: description || '',
      preferredContact: preferredContact || 'phone',
      photoCount: photos?.length || 0,
      aiSummary,
      createdAt: new Date().toISOString(),
    };

    leadsDatabase.unshift(newLead);

    return res.status(201).json({
      success: true,
      lead: newLead,
      message: 'Inspection request received successfully. A Sifontes Roofing specialist will contact you shortly.',
    });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return res.status(500).json({ error: 'Failed to process lead' });
  }
});

// API: Get leads (for team view / inspection queue modal)
app.get('/api/leads', (_req, res) => {
  res.json({ leads: leadsDatabase });
});

// Vite Middleware for Dev / Static serving for Prod
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
