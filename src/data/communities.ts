export interface CommunityAdmin {
  name: string;
  role: string;
}

export interface LinkedPlatform {
  platform: "whatsapp" | "telegram" | "instagram" | "email" | "website";
  url: string;
}

export interface PostMeetupSpot {
  name: string;
  order?: string;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  location: string;
  established: number;
  tier: "anchor" | "community";
  rhythm: ("dawn" | "day" | "magrib" | "night")[];
  domain: "culture" | "tech" | "design" | "fitness" | "food";
  
  // Extended fields
  mission?: string;
  admins?: CommunityAdmin[];
  cadence?: string;
  entryRules?: string[];
  entryLevel?: "open" | "invite" | "application";
  linkedPlatforms?: LinkedPlatform[];
  tags?: string[];
  newcomerFriendly?: boolean;
  lastActive?: string;
  healthScore?: "active" | "consistent" | "dormant";
  postMeetupSpots?: PostMeetupSpot[];
  language?: "malayalam" | "english" | "bilingual";
}

export const anchorCommunities: Community[] = [
  {
    id: "streets-of-calicut",
    name: "Streets of Calicut",
    description: "Documenting the visual history and urban evolution of Kozhikode. Curators of the city's memory through photography and storytelling.",
    mission: "We believe every lane in Kozhikode has a story. Our mission is to preserve the visual and oral history of this city before it fades one photograph, one conversation at a time. We are not nostalgists; we are archivists of the living city.",
    location: "South Beach / Valiyangadi",
    established: 2018,
    tier: "anchor",
    rhythm: ["day", "dawn"],
    domain: "culture",
    admins: [
      { name: "Farzana v.p", role: "Founder" },
      { name: "Safvan", role: "Archive Lead" },
    ],
    cadence: "Photo walks every 2nd & 4th Saturday",
    entryRules: [
      "Bring your own camera (phone works fine)",
      "Be respectful of subjects and spaces",
      "No commercial use of shared images without consent",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "instagram", url: "https://instagram.com/streetsofcalicut" },
      { platform: "whatsapp", url: "https://wa.me/919876543210" },
    ],
    tags: ["photography", "heritage", "urban history"],
    newcomerFriendly: true,
    lastActive: "2026-02-05",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Paragon Restaurant", order: "Biryani & Sulaimani" },
      { name: "Beach Road Tea Stall" },
    ],
    language: "bilingual",
  },
  {
    id: "tinkerhub-calicut",
    name: "TinkerHub Calicut",
    description: "A community of makers and learners. No bootcamp vibes, just pure skill-building and peer learning in technology and design.",
    mission: "We exist to make technology accessible. TinkerHub Calicut is a peer driven learning community where curiosity is the only prerequisite. We build things, break things, and teach each other.",
    location: "Govt. Cyberpark",
    established: 2019,
    tier: "anchor",
    rhythm: ["day", "night"],
    domain: "tech",
    admins: [
      { name: "Mehar M.P", role: "Co-founder" },
      { name: "Arundhathi krishna.", role: "Events Coordinator" },
    ],
    cadence: "Weekly Saturday meetups, monthly hackathons",
    entryRules: [
      "All skill levels welcome",
      "Bring a laptop if you can",
      "No selling or recruitment pitches",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "telegram", url: "https://t.me/tinkerhubcalicut" },
      { platform: "instagram", url: "https://instagram.com/tinkerhub" },
      { platform: "website", url: "https://tinkerhub.org" },
    ],
    tags: ["technology", "learning", "startups"],
    newcomerFriendly: true,
    lastActive: "2026-02-07",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Cyberpark Canteen" },
      { name: "Bombay Hotel", order: "Dosa varieties" },
    ],
    language: "english",
  },
  {
    id: "calicut-runners",
    name: "Calicut Runners",
    description: "The city's oldest running collective. Beginners welcome, consistency mandatory. We run at dawn, meet for chai after.",
    mission: "Running is not about competition it's about showing up. Calicut Runners exists to make morning runs less lonely and more consistent. We run together, we struggle together, we celebrate together.",
    location: "Mananchira Square",
    established: 2015,
    tier: "anchor",
    rhythm: ["dawn"],
    domain: "fitness",
    admins: [
      { name: "Karthamadhusudanan", role: "President" },
      { name: "Faris R.A", role: "Route Planner" },
    ],
    cadence: "Every morning 5:30 AM (Mon-Sat)",
    entryRules: [
      "Start with 2-3 km if you're new",
      "Inform the group if you'll be absent",
      "No music in group runs it's a social activity",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "whatsapp", url: "https://wa.me/919876543211" },
    ],
    tags: ["running", "fitness", "morning routines"],
    newcomerFriendly: true,
    lastActive: "2026-02-07",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Mananchira Chai Kadai", order: "Sulaimani & Banana Boli" },
    ],
    language: "malayalam",
  },
  {
    id: "kozhikode-reads",
    name: "Kozhikode Reads",
    description: "Monthly book circles spanning Malayalam and English literature. We don't just read books—we discuss ideas over evening tea.",
    mission: "In a world of reels and feeds, we choose pages. Kozhikode Reads is a space for slow, deliberate reading and even slower conversations. Every book is an excuse to meet, think, and argue.",
    location: "Various Cafés",
    established: 2020,
    tier: "anchor",
    rhythm: ["magrib", "night"],
    domain: "culture",
    admins: [
      { name: "Sreelakshmi Nair", role: "Curator" },
      { name: "Vishnu Prasad", role: "Discussion Lead" },
    ],
    cadence: "Last Saturday of every month, 6 PM",
    entryRules: [
      "Read the selected book (or at least half of it)",
      "Come prepared to discuss, not just listen",
      "Respect differing interpretations",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "instagram", url: "https://instagram.com/kozhikodereads" },
      { platform: "email", url: "mailto:kozhikodereads@gmail.com" },
    ],
    tags: ["books", "literature", "discussions"],
    newcomerFriendly: true,
    lastActive: "2026-01-25",
    healthScore: "consistent",
    postMeetupSpots: [
      { name: "Kashi Art Café" },
      { name: "Alakapuri Hotel", order: "Pathiri & Beef Curry" },
    ],
    language: "bilingual",
  },
  {
    id: "calicut-photo-club",
    name: "Calicut Photo Club",
    description: "Weekend photo walks through Kozhikode's lanes and markets. From heritage architecture to street food, we capture the city's soul.",
    mission: "Photography is observation, and observation requires patience. We walk slowly through Kozhikode's streets, looking for light, texture, and stories. This is not about Instagram—it's about seeing.",
    location: "SM Street / Beach",
    established: 2017,
    tier: "anchor",
    rhythm: ["dawn", "day", "magrib"],
    domain: "culture",
    admins: [
      { name: "Joseph Thomas", role: "Coordinator" },
      { name: "Ashraf M.", role: "Heritage Specialist" },
    ],
    cadence: "Sundays at 6 AM or 5 PM depending on season",
    entryRules: [
      "Any camera welcome (phone to DSLR)",
      "Stay with the group during walks",
      "Share your favorites in the group after",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "whatsapp", url: "https://wa.me/919876543212" },
      { platform: "instagram", url: "https://instagram.com/calicutphotoclub" },
    ],
    tags: ["photography", "heritage", "street photography"],
    newcomerFriendly: true,
    lastActive: "2026-02-02",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Zain's Hotel", order: "Kallummakkaya Fry" },
      { name: "SM Street Halwa Shop" },
    ],
    language: "bilingual",
  },
  {
    id: "friends-of-figma-calicut",
    name: "Friends of Figma – Calicut",
    description: "Kozhikode's design community. Workshops, critique sessions, and conversations about craft. Building Kerala's design culture together.",
    mission: "Design in Kerala deserves more than Behance portfolios. We're building a community where designers share work, receive honest feedback, and grow together. Craft over trends, always.",
    location: "Rotating Venues",
    established: 2022,
    tier: "anchor",
    rhythm: ["day", "night"],
    domain: "design",
    admins: [
      { name: "Nandini R.", role: "Chapter Lead" },
      { name: "Arun Raj", role: "Workshop Coordinator" },
    ],
    cadence: "Monthly meetups, quarterly design jams",
    entryRules: [
      "All design disciplines welcome",
      "Show work-in-progress, not just polished pieces",
      "Give feedback you'd want to receive",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "instagram", url: "https://instagram.com/fof_calicut" },
      { platform: "telegram", url: "https://t.me/friendsoffigmacalicut" },
      { platform: "website", url: "https://friends.figma.com/calicut" },
    ],
    tags: ["design", "UI/UX", "workshops"],
    newcomerFriendly: true,
    lastActive: "2026-01-28",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Third Wave Coffee" },
      { name: "Dawn Café", order: "Cold Brew" },
    ],
    language: "english",
  },
];

export const grassrootsCommunities: Community[] = [
  {
    id: "dawn-cyclists",
    name: "Dawn Cyclists Collective",
    description: "Early morning rides along the coast. We believe the best conversations happen on two wheels before the city wakes.",
    mission: "There's a Kozhikode that exists only at 5 AM quiet roads, golden light, and the smell of the sea. We ride to experience that city, together.",
    location: "Kappad Beach Road",
    established: 2021,
    tier: "community",
    rhythm: ["dawn"],
    domain: "fitness",
    admins: [
      { name: "Vineeth S.", role: "Ride Captain" },
    ],
    cadence: "Wednesdays and Saturdays, 5:30 AM",
    entryRules: [
      "Must have your own cycle (any type)",
      "Helmet strongly recommended",
      "Maintain group pace on the road",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "whatsapp", url: "https://wa.me/919876543213" },
    ],
    tags: ["cycling", "fitness", "coastal routes"],
    newcomerFriendly: true,
    lastActive: "2026-02-06",
    healthScore: "active",
    postMeetupSpots: [
      { name: "Kappad Beach Stall", order: "Fresh coconut water" },
    ],
    language: "malayalam",
  },
  {
    id: "biryani-circle",
    name: "Biryani Circle",
    description: "Monthly expeditions to discover Kozhikode's biryani spots. We document, we debate, we eat. Dum versus open pot: the eternal question.",
    mission: "Kozhikode biryani is not one thing it's a hundred variations across neighborhoods. We're on a mission to taste, document, and understand them all. This is food as cultural research.",
    location: "Across Kozhikode",
    established: 2023,
    tier: "community",
    rhythm: ["day", "night"],
    domain: "food",
    admins: [
      { name: "Sameer K.", role: "Curator" },
      { name: "Reshma P.", role: "Documentation" },
    ],
    cadence: "One Sunday per month, location varies",
    entryRules: [
      "Come hungry (obviously)",
      "Split the bill equally",
      "No dietary restrictions expected we eat what's served",
    ],
    entryLevel: "invite",
    linkedPlatforms: [
      { platform: "instagram", url: "https://instagram.com/biryanicircle" },
      { platform: "whatsapp", url: "https://wa.me/919876543214" },
    ],
    tags: ["biryani", "food walks", "culinary exploration"],
    newcomerFriendly: false,
    lastActive: "2026-01-19",
    healthScore: "consistent",
    postMeetupSpots: [],
    language: "bilingual",
  },
  {
    id: "chai-after-dark",
    name: "Chai After Dark",
    description: "Late-night chai sessions at old tea stalls. Philosophy, poetry, and politics—served with sulaimani.",
    mission: "The best ideas emerge after midnight, over cheap tea and honest conversation. Chai After Dark is for night owls who think out loud.",
    location: "Beach Road Stalls",
    established: 2022,
    tier: "community",
    rhythm: ["night"],
    domain: "food",
    admins: [
      { name: "Arjun M.", role: "Night Owl in Chief" },
    ],
    cadence: "Random Fridays and Saturdays, 11 PM onwards",
    entryRules: [
      "No agenda come as you are",
      "Order something, even if it's just tea",
      "Phones away during good conversations",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "telegram", url: "https://t.me/chaiafterdark" },
    ],
    tags: ["chai", "conversations", "nightlife"],
    newcomerFriendly: true,
    lastActive: "2026-02-01",
    healthScore: "consistent",
    postMeetupSpots: [],
    language: "malayalam",
  },
  {
    id: "monsoon-walkers",
    name: "Monsoon Walkers",
    description: "We walk when it rains. Through flooded lanes and dripping trees, experiencing the city in its wettest form.",
    mission: "Most people hide from the monsoon. We embrace it. There's a meditative quality to walking in rain, and Kozhikode becomes a different city entirely from June to September.",
    location: "Various starting points",
    established: 2024,
    tier: "community",
    rhythm: ["day", "magrib"],
    domain: "fitness",
    admins: [
      { name: "Deepa R.", role: "Weather Watcher" },
    ],
    cadence: "Whenever it rains heavily (June-September)",
    entryRules: [
      "Wear clothes you don't mind getting wet",
      "Waterproof bag for valuables",
      "No umbrellas defeat the purpose",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "whatsapp", url: "https://wa.me/919876543215" },
    ],
    tags: ["monsoon", "walking", "nature"],
    newcomerFriendly: true,
    lastActive: "2025-09-15",
    healthScore: "dormant",
    postMeetupSpots: [
      { name: "Any nearby chai stall" },
    ],
    language: "malayalam",
  },
  {
    id: "iftar-hoppers",
    name: "Iftar Hoppers",
    description: "During Ramadan, we explore the city's iftar spots—from heritage hotels to hidden home kitchens. A culinary pilgrimage.",
    mission: "Ramadan transforms Kozhikode's food scene. We're here to experience it fully understanding traditions, discovering hidden gems, and breaking fast together as a city.",
    location: "All over Kozhikode",
    established: 2022,
    tier: "community",
    rhythm: ["magrib"],
    domain: "food",
    admins: [
      { name: "Nabeel Hassan", role: "Route Planner" },
      { name: "Sarah K.", role: "Documentation" },
    ],
    cadence: "Daily during Ramadan (March-April)",
    entryRules: [
      "Respect the religious significance",
      "Arrive 15 minutes before iftar time",
      "Try everything at least once",
    ],
    entryLevel: "open",
    linkedPlatforms: [
      { platform: "instagram", url: "https://instagram.com/iftarhoppers" },
      { platform: "whatsapp", url: "https://wa.me/919876543216" },
    ],
    tags: ["iftar", "ramadan", "food exploration"],
    newcomerFriendly: true,
    lastActive: "2025-04-10",
    healthScore: "dormant",
    postMeetupSpots: [],
    language: "bilingual",
  },
];

export const allCommunities = [...anchorCommunities, ...grassrootsCommunities];

export const domains = [
  { id: "culture", label: "Culture", color: "indigo" },
  { id: "tech", label: "Tech", color: "teal" },
  { id: "design", label: "Design", color: "purple" },
  { id: "fitness", label: "Fitness", color: "green" },
  { id: "food", label: "Food", color: "amber" },
] as const;

export const entryLevels = [
  { id: "open", label: "Open to All" },
  { id: "invite", label: "Invite Only" },
  { id: "application", label: "Application Required" },
] as const;

export const languages = [
  { id: "malayalam", label: "Malayalam" },
  { id: "english", label: "English" },
  { id: "bilingual", label: "Bilingual" },
] as const;
