export type PageView =
  | 'home'
  | 'services'
  | 'leak-detection'
  | 'storm-damage'
  | 'projects'
  | 'about'
  | 'faq'
  | 'contact';

export type RoofType =
  | 'Tile'
  | 'Metal'
  | 'Asphalt Shingle'
  | 'Flat / Low-Slope'
  | 'Not Sure';

export type IssueType =
  | 'Active Roof Leak'
  | 'Storm or Wind Damage'
  | 'Cracked or Missing Tiles'
  | 'Routine / Preventive Inspection'
  | 'Aging Roof Evaluation'
  | 'Skylight or Chimney Leak'
  | 'Other Roofing Concern';

export type UrgencyLevel = 'URGENT' | 'HIGH PRIORITY' | 'INSPECTION / QUOTE';

export interface LeadData {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  roofType: RoofType;
  issueType: IssueType;
  urgency: UrgencyLevel;
  description: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
  photos?: string[];
  aiSummary?: string;
  createdAt?: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  commonProblems: string[];
  sifontesSolution: string[];
  image: string;
  badge?: string;
  faqs?: { q: string; a: string }[];
}

export interface Testimonial {
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}
