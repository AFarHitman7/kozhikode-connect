export interface CommunityEvent {
  id: string;
  title: string;
  description: string;
  communityId: string;
  communityName: string;
  domain: "culture" | "tech" | "design" | "fitness" | "food";
  location: string;
  date: string;        // ISO date string YYYY-MM-DD
  startTime: string;   // HH:MM 24h
  endTime: string;     // HH:MM 24h
  rhythm: "dawn" | "day" | "magrib" | "night";
  type: "meetup" | "walk" | "workshop" | "run" | "food-walk" | "discussion" | "hackathon" | "ride";
  entryLevel: "open" | "invite" | "rsvp";
  attendees?: number;
  maxAttendees?: number;
  notes?: string;
  recurring?: boolean;
  recurringLabel?: string;
}

// Helper to get today's date in YYYY-MM-DD
const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const tomorrow = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const daysFromNow = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const daysAgo = (n: number) => daysFromNow(-n);

export const events: CommunityEvent[] = [
  // === LIVE / TODAY ===
  {
    id: "evt-runners-morning",
    title: "Morning Run — Mananchira Loop",
    description: "Regular 5K loop around Mananchira. All paces welcome. Chai after.",
    communityId: "calicut-runners",
    communityName: "Calicut Runners",
    domain: "fitness",
    location: "Mananchira Square",
    date: today(),
    startTime: "05:30",
    endTime: "07:00",
    rhythm: "dawn",
    type: "run",
    entryLevel: "open",
    attendees: 18,
    recurring: true,
    recurringLabel: "Every morning, Mon–Sat",
  },
  {
    id: "evt-tinkerhub-workshop",
    title: "Build Your First API — Hands-on Workshop",
    description: "Learn to build REST APIs with practical examples. Bring your laptop, all skill levels welcome.",
    communityId: "tinkerhub-calicut",
    communityName: "TinkerHub Calicut",
    domain: "tech",
    location: "Govt. Cyberpark, Hall B",
    date: today(),
    startTime: "10:00",
    endTime: "13:00",
    rhythm: "day",
    type: "workshop",
    entryLevel: "open",
    attendees: 32,
    maxAttendees: 40,
  },
  {
    id: "evt-streets-photowalk",
    title: "Heritage Photo Walk — Valiyangadi Market",
    description: "Documenting the old market's architecture and daily rhythm. Focus on light and texture.",
    communityId: "streets-of-calicut",
    communityName: "Streets of Calicut",
    domain: "culture",
    location: "Valiyangadi (Big Bazaar)",
    date: today(),
    startTime: "16:00",
    endTime: "18:30",
    rhythm: "day",
    type: "walk",
    entryLevel: "open",
    attendees: 12,
    recurring: true,
    recurringLabel: "2nd & 4th Saturday",
  },

  // === UPCOMING ===
  {
    id: "evt-dawn-ride",
    title: "Coastal Dawn Ride — Kappad to Beypore",
    description: "30km coastal route at sunrise. Moderate pace, regrouping every 8km.",
    communityId: "dawn-cyclists",
    communityName: "Dawn Cyclists Collective",
    domain: "fitness",
    location: "Kappad Beach Parking",
    date: tomorrow(),
    startTime: "05:30",
    endTime: "08:00",
    rhythm: "dawn",
    type: "ride",
    entryLevel: "open",
    attendees: 8,
  },
  {
    id: "evt-figma-critique",
    title: "Design Critique Session — Portfolio Reviews",
    description: "Bring your work-in-progress. Honest feedback, no sugarcoating. All design disciplines.",
    communityId: "friends-of-figma-calicut",
    communityName: "Friends of Figma – Calicut",
    domain: "design",
    location: "Third Wave Coffee, Hilite Mall",
    date: daysFromNow(3),
    startTime: "15:00",
    endTime: "17:30",
    rhythm: "day",
    type: "workshop",
    entryLevel: "open",
    attendees: 15,
    maxAttendees: 20,
  },
  {
    id: "evt-book-discussion",
    title: "Monthly Read — 'The God of Small Things' Discussion",
    description: "Arundhati Roy's masterpiece through a Kozhikode lens. Come prepared to argue.",
    communityId: "kozhikode-reads",
    communityName: "Kozhikode Reads",
    domain: "culture",
    location: "Kashi Art Café",
    date: daysFromNow(5),
    startTime: "18:00",
    endTime: "20:30",
    rhythm: "magrib",
    type: "discussion",
    entryLevel: "open",
    attendees: 20,
  },
  {
    id: "evt-biryani-expedition",
    title: "Biryani Expedition #14 — Nadapuram Style",
    description: "Exploring Nadapuram-style biryani at two lesser-known spots. Limited seats.",
    communityId: "biryani-circle",
    communityName: "Biryani Circle",
    domain: "food",
    location: "Meeting: Mofussil Bus Stand",
    date: daysFromNow(7),
    startTime: "12:00",
    endTime: "15:00",
    rhythm: "day",
    type: "food-walk",
    entryLevel: "invite",
    attendees: 8,
    maxAttendees: 10,
  },
  {
    id: "evt-tinkerhub-hackathon",
    title: "48hr Civic Hackathon — Build for Kozhikode",
    description: "Build solutions for real Kozhikode problems. Teams of 3-5. Prizes from local sponsors.",
    communityId: "tinkerhub-calicut",
    communityName: "TinkerHub Calicut",
    domain: "tech",
    location: "Govt. Cyberpark",
    date: daysFromNow(10),
    startTime: "09:00",
    endTime: "21:00",
    rhythm: "day",
    type: "hackathon",
    entryLevel: "rsvp",
    attendees: 45,
    maxAttendees: 60,
  },
  {
    id: "evt-photo-golden-hour",
    title: "Golden Hour at the Beach",
    description: "Sunset photography session along Beach Road. Focus on silhouettes and warm tones.",
    communityId: "calicut-photo-club",
    communityName: "Calicut Photo Club",
    domain: "culture",
    location: "Kozhikode Beach",
    date: daysFromNow(2),
    startTime: "17:00",
    endTime: "18:45",
    rhythm: "magrib",
    type: "walk",
    entryLevel: "open",
    attendees: 14,
  },
  {
    id: "evt-chai-session",
    title: "Late Night Chai — Open Topic",
    description: "No agenda. Show up, order chai, talk about whatever. Phones away.",
    communityId: "chai-after-dark",
    communityName: "Chai After Dark",
    domain: "food",
    location: "Beach Road Tea Stall",
    date: daysFromNow(4),
    startTime: "23:00",
    endTime: "01:30",
    rhythm: "night",
    type: "meetup",
    entryLevel: "open",
    notes: "No agenda needed. Just show up.",
  },

  // === PAST ===
  {
    id: "evt-streets-old-town",
    title: "Old Town Documentation Walk",
    description: "Covered the Kuttichira and Thekkepuram areas. 200+ photographs archived.",
    communityId: "streets-of-calicut",
    communityName: "Streets of Calicut",
    domain: "culture",
    location: "Kuttichira",
    date: daysAgo(3),
    startTime: "06:00",
    endTime: "09:00",
    rhythm: "dawn",
    type: "walk",
    entryLevel: "open",
    attendees: 16,
    notes: "Archived 200+ photographs of Kuttichira heritage structures.",
  },
  {
    id: "evt-runners-10k",
    title: "Sunday 10K — Beach Road Route",
    description: "Extended Sunday run along the coast. Personal bests from 4 members.",
    communityId: "calicut-runners",
    communityName: "Calicut Runners",
    domain: "fitness",
    location: "Kozhikode Beach",
    date: daysAgo(5),
    startTime: "05:00",
    endTime: "06:30",
    rhythm: "dawn",
    type: "run",
    entryLevel: "open",
    attendees: 22,
    notes: "4 members set personal bests. Route was 10.2km total.",
  },
];

// === Utility functions ===

export function getEventStatus(event: CommunityEvent): "live" | "upcoming" | "past" {
  const now = new Date();
  const eventDate = new Date(event.date);
  const todayStr = today();

  if (event.date === todayStr) {
    const [startH, startM] = event.startTime.split(":").map(Number);
    const [endH, endM] = event.endTime.split(":").map(Number);
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const startMinutes = startH * 60 + startM;
    // Handle events crossing midnight
    let endMinutes = endH * 60 + endM;
    if (endMinutes < startMinutes) endMinutes += 24 * 60;

    if (currentMinutes >= startMinutes && currentMinutes <= endMinutes) {
      return "live";
    }
    if (currentMinutes < startMinutes) {
      return "upcoming";
    }
    return "past";
  }

  if (eventDate > now) return "upcoming";
  return "past";
}

export function getLiveEvents(): CommunityEvent[] {
  return events.filter((e) => getEventStatus(e) === "live");
}

export function getUpcomingEvents(): CommunityEvent[] {
  return events
    .filter((e) => getEventStatus(e) === "upcoming")
    .sort((a, b) => {
      const dateCompare = a.date.localeCompare(b.date);
      if (dateCompare !== 0) return dateCompare;
      return a.startTime.localeCompare(b.startTime);
    });
}

export function getPastEvents(): CommunityEvent[] {
  return events
    .filter((e) => getEventStatus(e) === "past")
    .sort((a, b) => {
      const dateCompare = b.date.localeCompare(a.date);
      if (dateCompare !== 0) return dateCompare;
      return b.startTime.localeCompare(a.startTime);
    });
}

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  const todayStr = today();
  const tomorrowStr = tomorrow();

  if (dateStr === todayStr) return "Today";
  if (dateStr === tomorrowStr) return "Tomorrow";

  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${period}`;
}

export const eventTypes = [
  { id: "meetup", label: "Meetup" },
  { id: "walk", label: "Walk" },
  { id: "workshop", label: "Workshop" },
  { id: "run", label: "Run" },
  { id: "food-walk", label: "Food Walk" },
  { id: "discussion", label: "Discussion" },
  { id: "hackathon", label: "Hackathon" },
  { id: "ride", label: "Ride" },
] as const;
