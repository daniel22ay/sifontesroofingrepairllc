import { ServiceDetail, Testimonial } from '../types';

export const BUSINESS_INFO = {
  name: 'Sifontes Roofing & Repair LLC',
  tagline: 'Reliable Roof Repairs & Inspections in Naples, Florida',
  phone: '(239) 404-7402',
  phoneRaw: '12394047402',
  address: '510 25th Street SW, Naples, Florida 34117',
  city: 'Naples',
  state: 'FL',
  zip: '34117',
  hours: 'Mon – Fri: 7:00 AM – 5:00 PM',
  hoursDetail: {
    weekdays: '7:00 AM – 5:00 PM',
    weekends: 'Emergency storm response & pre-scheduled evaluations',
  },
  serviceAreas: [
    'Naples',
    'North Naples',
    'East Naples',
    'Golden Gate',
    'Marco Island',
    'Bonita Springs',
    'Collier County',
  ],
  yearsInCommunity: 'Local Naples Experts',
  values: [
    'Family-Owned & Local',
    'Faith-Based Integrity',
    'No Guesswork or Hidden Fees',
    'Targeted Repairs That Last',
  ],
};

export const SERVICES: ServiceDetail[] = [
  {
    id: 'leak-detection',
    title: 'Roof Leak Detection & Diagnostic',
    shortDesc:
      'Locate hidden water intrusion and pinpoint leak origins before moisture destroys insulation, drywall, and structural roof decking.',
    fullDesc:
      'Roof leaks rarely begin as major emergencies; water often enters through small fissures, degraded flashing, or displaced tiles and travels along rafters before appearing inside. Sifontes Roofing & Repair LLC uses a methodical, non-destructive diagnostic approach to identify the root cause of every leak.',
    commonProblems: [
      'Ceiling water stains or bubbling paint',
      'Damp insulation or mold odor in the attic space',
      'Water dripping around ceiling fans or recessed lights',
      'Moisture accumulating near roof valleys and penetrations',
    ],
    sifontesSolution: [
      'Comprehensive exterior roof surface and penetration audit',
      'Attic and underlayment evaluation to trace moisture pathways',
      'Clear photographic report and honest, targeted repair plan',
    ],
    image: '/images/damaged_tiles_leak.jpg',
    badge: 'High Priority',
  },
  {
    id: 'tile-roof-repair',
    title: 'Tile Roof Repair & Replacement',
    shortDesc:
      'Specialized repair for concrete and clay barrel tile roofs, addressing cracked tiles, worn underlayment, and broken mortar caps.',
    fullDesc:
      'Tile roofs are an iconic part of Naples architecture, engineered for durability against Florida sun and winds. However, cracked, slipped, or missing tiles expose the waterproof underlayment to ultraviolet degradation and water infiltration. Our team repairs and replaces individual tiles while preserving the structural integrity of the surrounding system.',
    commonProblems: [
      'Cracked or broken barrel tiles from foot traffic or flying debris',
      'Deteriorated mortar bedding and loose ridge caps',
      'Torn or brittle underlayment beneath intact surface tiles',
      'Displaced tiles exposing flashings or roof valleys',
    ],
    sifontesSolution: [
      'Precise tile matching for concrete and clay profiles',
      'Underlayment repair and self-adhering membrane reinforcement',
      'Careful non-destructive access techniques to avoid further breakage',
    ],
    image: '/images/hero_repair_tile.jpg',
    badge: 'Naples Specialty',
  },
  {
    id: 'roof-inspections',
    title: 'Roofing Inspections & Evaluations',
    shortDesc:
      'Comprehensive roof condition assessments following tropical storms, for annual maintenance, or for property purchase evaluations.',
    fullDesc:
      'Not every roof problem is obvious from the ground. Florida heat, humidity, and tropical downpours gradually weaken seals and underlayment. Our in-depth roof inspections identify aging materials, hidden storm damage, and vulnerabilities before costly interior damage occurs.',
    commonProblems: [
      'Post-storm wind uplift on tile courses or shingles',
      'Aging sealant around vents, pipes, and valley metal',
      'Vegetation debris holding moisture against roofing surfaces',
      'Uncertainty about roof condition before insurance reviews',
    ],
    sifontesSolution: [
      'Detailed roof plane, valley, flashing, and gutter inspection',
      'Structural decking evaluation where accessible',
      'Honest condition report with prioritized recommendations',
    ],
    image: '/images/tile_inspection_shadow.jpg',
    badge: 'Preventive',
  },
  {
    id: 'metal-roof-repair',
    title: 'Metal Roof Repair & Maintenance',
    shortDesc:
      'Fastener replacement, seam resealing, and flashing restoration for standing seam and screw-down metal roof systems.',
    fullDesc:
      'Metal roofs offer exceptional longevity in Southwest Florida, but thermal expansion and high winds can back out fasteners, degrade neoprene washers, or open critical seam joints. Sifontes Roofing repairs metal systems to restore 100% weather resistance.',
    commonProblems: [
      'Loose or backed-out fasteners with dried-out rubber grommets',
      'Separated standing seams or flashing laps',
      'Corrosion or water ponding around transition joints',
      'Penetration leaks around plumbing vents on metal panels',
    ],
    sifontesSolution: [
      'High-grade commercial metal roofing fasteners with UV-stable washers',
      'Elastomeric seam sealing and industrial bonding',
      'Precision flashing fabrication and counterflashing restoration',
    ],
    image: '/images/metal_roof_chimney.jpg',
  },
  {
    id: 'shingle-roof-repair',
    title: 'Asphalt Shingle Roof Repair',
    shortDesc:
      'Wind-damaged shingle replacement, tab resealing, and ridge cap restoration to extend your shingle roof lifespan.',
    fullDesc:
      'Florida sunshine dries asphalt binder over time, making shingles brittle and susceptible to wind tear-off during summer squalls and hurricanes. We address isolated damaged sections quickly to prevent moisture from reaching the plywood decking.',
    commonProblems: [
      'Creased, missing, or lifted asphalt shingles',
      'Granular loss causing shingle bald spots',
      'Nail pops puncturing through upper shingle layers',
      'Edge curl allowing wind-driven rain penetration',
    ],
    sifontesSolution: [
      'Seamless matching of shingle colors and architectural profiles',
      'Hand-sealing lifting tabs with roofing adhesive',
      'Replacing compromised starter strips and drip edges',
    ],
    image: '/images/roof_workers_disassemble.jpg',
  },
  {
    id: 'flat-roof-repair',
    title: 'Flat & Low-Slope Roof Repair',
    shortDesc:
      'Targeted membrane repair, ponding water correction, and seam sealing for residential flat sections and lanai covers.',
    fullDesc:
      'Many Naples homes feature flat or low-slope sections over patios, lanais, Florida rooms, and modern extensions. These areas require flawless drainage and seam integrity to prevent standing water from penetrating beneath modified bitumen or TPO membranes.',
    commonProblems: [
      'Standing ponding water that fails to drain after 48 hours',
      'Blistering, splitting, or separated membrane laps',
      'Failed perimeter parapet or scupper wall flashing',
      'Debris blockages obstructing primary roof drains',
    ],
    sifontesSolution: [
      'Reinforced cold-applied and torch-grade membrane patches',
      'Scupper, drain, and overflow drain re-sealing',
      'UV-reflective protective coatings where appropriate',
    ],
    image: '/images/flat_roof_skylight.jpg',
  },
  {
    id: 'skylight-repairs',
    title: 'Skylight Repairs & Leak Prevention',
    shortDesc:
      'Resealing skylight perimeters, replacing deteriorated flashing kits, and stopping water leaks around ceiling light wells.',
    fullDesc:
      'Skylights bring gorgeous Florida natural light into kitchens and living rooms, but the flashing around them is one of the most common leak points. We rebuild the step and saddle flashing to guarantee watertight integrity without requiring costly replacement of functioning units.',
    commonProblems: [
      'Water streaks along interior drywall around the skylight shaft',
      'Condensation trapped between acrylic or glass panes',
      'Brittle cracked gaskets and UV-degraded sealants',
    ],
    sifontesSolution: [
      'Custom sheet metal step flashing and head flashing replacement',
      'Commercial-grade perimeter butyl and polyurethane sealing',
      'Decking and framing inspection around skylight opening',
    ],
    image: '/images/flat_roof_skylight.jpg',
  },
  {
    id: 'chimney-flashing',
    title: 'Roof Chimney Repairs & Flashing',
    shortDesc:
      'Watertight counterflashing, cricket installation, and step flashing repairs for chimneys on tile and metal roofs.',
    fullDesc:
      'Chimneys act as water dams on sloped roofs. Without proper flashing and back crickets, rain runs directly into the seam where masonry or siding meets the roof deck. Our team inspects and reconstructs chimney flashing to prevent subtle, destructive rot.',
    commonProblems: [
      'Deteriorated mortar joints allowing water behind metal flashing',
      'Rusted base flashing or missing counterflashing',
      'Water stains appearing on fireplace walls or adjacent ceilings',
    ],
    sifontesSolution: [
      'Heavy-gauge aluminum and galvanized step flashing replacement',
      'Saw-cut counterflashing anchored into masonry or siding',
      'Water-diverting cricket reinforcement to guide runoff away',
    ],
    image: '/images/chimney_flashing_repair.jpg',
  },
  {
    id: 'roofing-carpentry',
    title: 'Roofing Carpentry & Structural Wood Repairs',
    shortDesc:
      'Replacement of rotted plywood decking, damaged rafter tails, and deteriorated fascia boards affected by leaks.',
    fullDesc:
      'When roof leaks go undetected, water weakens the underlying wood decking, trusses, and fascia. Unlike roofers who simply nail new materials over soft wood, Sifontes Roofing repairs damaged structural carpentry first, ensuring your roof has solid foundation support.',
    commonProblems: [
      'Spongy or sagging spots when walking on the roof',
      'Soft, rotted plywood decking exposed during tile removal',
      'Decayed fascia boards or rafter ends beneath drip edges',
    ],
    sifontesSolution: [
      'Removal and replacement of rotted CDX and OSB roof sheathing',
      'Solid wood rafter sistering and truss reinforcement where required',
      'Fascia and sub-fascia reconstruction prior to final roof sealing',
    ],
    image: '/images/underlayment_workers.jpg',
  },
  {
    id: 'storm-damage',
    title: 'Storm Damage & Emergency Tarps',
    shortDesc:
      'Rapid response for wind-lifted tiles, punctured roofs, and storm-related leaks across Naples and Collier County.',
    fullDesc:
      'Southwest Florida storms can deliver sudden high-velocity winds and torrential downpours. When tiles slide or flying branches pierce your roof, fast containment is crucial. We provide immediate inspection, emergency securing/tarping, and comprehensive permanent repairs.',
    commonProblems: [
      'Wind-torn tiles leaving black underlayment directly exposed',
      'Tree limb impacts puncturing roof deck and creating active leaks',
      'Wind-driven rain forced under valley flashings and roof vents',
    ],
    sifontesSolution: [
      'Emergency weatherproofing and heavy-duty tarp tie-downs',
      'Full photographic documentation of all storm-related damage',
      'Systematic restoration matching existing roof aesthetics',
    ],
    image: '/images/underlayment_strip.jpg',
    badge: 'Storm Response',
  },
];

export const FAQS = [
  {
    question: 'How Do I Know If My Roof Has a Leak?',
    answer:
      'Signs of a roof leak include water stains on ceilings, mold growth, missing tiles, and moisture around skylights or chimneys. A professional inspection can confirm the source and trace hidden moisture before structural damage occurs.',
  },
  {
    question: 'How Often Should I Have My Roof Inspected?',
    answer:
      'We recommend having your roof inspected at least once a year and after major storms to catch issues early and prevent costly damage. In Florida’s high-UV, heavy-rain environment, proactive inspections save homeowners thousands in avoidable repairs.',
  },
  {
    question: 'Do You Offer Roof Repair Warranties?',
    answer:
      'Yes, we stand behind our workmanship and provide warranty options depending on the type of repair performed. We take pride in doing the job right the first time.',
  },
  {
    question: 'Will I Need to Be Home During the Inspection or Repair?',
    answer:
      'In most cases, access to the exterior of the home is sufficient. We will communicate clearly in advance if interior access to your attic or living ceiling area is required to trace a leak.',
  },
  {
    question: 'How Long Does a Roof Typically Last in Florida?',
    answer:
      'Roof lifespan varies by material and maintenance. Tile and metal roofs often last longer, while shingles may require more frequent repairs due to Florida’s intense heat, high humidity, and storm climate.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Carlos M.',
    location: 'Naples, FL',
    service: 'Tile Roof Repair & Leak Detection',
    rating: 5,
    text: 'Sifontes Roofing found a stubborn leak that two other companies couldn’t diagnose. They carefully removed our barrel tiles, replaced the damaged underlayment, and matched our existing tiles seamlessly. Honest, polite, and very fair pricing.',
    date: 'Recent Client Review',
  },
  {
    name: 'Eleanor S.',
    location: 'Golden Gate, Naples FL',
    service: 'Skylight Flashing & Roof Inspection',
    rating: 5,
    text: 'After heavy summer rain, we noticed water marks around our skylight. Sifontes arrived on time, inspected everything thoroughly, and rebuilt the flashing without trying to upsell us on an entire new roof. True craftsmanship and integrity.',
    date: 'Verified Homeowner',
  },
  {
    name: 'David R.',
    location: 'Collier County, FL',
    service: 'Storm Wind Damage & Carpentry',
    rating: 5,
    text: 'A falling palm frond cracked multiple tiles and damaged our roof decking. Sifontes repaired the wood underneath and re-secured the tiles within days. You can tell they take pride in their work as a local family business.',
    date: 'Verified Homeowner',
  },
];

export const GALLERY_PROJECTS = [
  {
    title: 'Clay Barrel Tile Repair & Flashing',
    location: 'Naples, FL',
    image: '/images/hero_repair_tile.jpg',
    description: 'Rooftop undergoing tile re-bedding, silver flashing alignment, and broken tile replacement.',
    category: 'Tile Roofing',
  },
  {
    title: 'Underlayment Waterproofing & Preparation',
    location: 'Naples, FL',
    image: '/images/underlayment_workers.jpg',
    description: 'Carefully removing damaged tiles to expose and replace deteriorated waterproof underlayment.',
    category: 'Leak Repair',
  },
  {
    title: 'Precision Chimney Flashing Restoration',
    location: 'Naples, FL',
    image: '/images/chimney_flashing_repair.jpg',
    description: 'New counterflashing and sealant installed around roof chimney to eliminate stubborn leaks.',
    category: 'Flashing & Penetrations',
  },
  {
    title: 'Metal Roof & Sidewall Transition',
    location: 'Naples, FL',
    image: '/images/metal_roof_chimney.jpg',
    description: 'Light gray metal roof inspection and chimney wall flashing seal in sunny Naples neighborhood.',
    category: 'Metal Roofing',
  },
  {
    title: 'Flat Roof Section & Dual Skylight Seal',
    location: 'Naples, FL',
    image: '/images/flat_roof_skylight.jpg',
    description: 'White flat roof section with dual skylight curbs meeting terracotta barrel tile border.',
    category: 'Flat & Skylight',
  },
  {
    title: 'Tile Course Disassembly & Assessment',
    location: 'Naples, FL',
    image: '/images/roof_workers_disassemble.jpg',
    description: 'Systematic tile removal exposing black underlayment for detailed leak path verification.',
    category: 'Tile Roofing',
  },
  {
    title: 'Sun-Drenched Naples Tile Ridge',
    location: 'Naples, FL',
    image: '/images/tile_roof_sun.jpg',
    description: 'High-quality clay tile roof under Florida sunshine with surrounding tropical landscaping.',
    category: 'Tile Roofing',
  },
  {
    title: 'Post-Inspection Tile Repair Verification',
    location: 'Naples, FL',
    image: '/images/tile_inspection_shadow.jpg',
    description: 'Thorough on-roof visual inspection to verify tile bonding and valley clearance.',
    category: 'Inspections',
  },
  {
    title: 'Community & Faith-Based Roots',
    location: 'Naples, FL',
    image: '/images/family_community.jpg',
    description: 'Rooted in Naples with deep family, community, and faith-based values.',
    category: 'About Us',
  },
  {
    title: 'Local Naples dock fishing community',
    location: 'Naples, FL',
    image: '/images/community_fishing.jpeg',
    description: 'Proud to live, fish, and work in Naples, Florida and Southwest Florida.',
    category: 'Local Community',
  },
];
