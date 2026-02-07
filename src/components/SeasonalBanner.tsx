import { Cloud, Moon, Sun, Leaf } from "lucide-react";
import { useMemo } from "react";

interface SeasonalContext {
  id: string;
  title: string;
  description: string;
  icon: typeof Cloud;
  emphasis: string[];
}

function getSeasonalContext(date: Date): SeasonalContext | null {
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  // Ramadan (approximate: varies by lunar calendar, roughly March-April)
  // For 2026, Ramadan is approximately Feb 18 - Mar 19
  if ((month === 2 && day >= 18) || (month === 3 && day <= 19)) {
    return {
      id: "ramadan",
      title: "Ramadan Season",
      description: "Discover iftar gatherings and evening food communities across Kozhikode.",
      icon: Moon,
      emphasis: ["food", "magrib"],
    };
  }

  // Monsoon (June - September)
  if (month >= 6 && month <= 9) {
    return {
      id: "monsoon",
      title: "Monsoon Active",
      description: "Indoor meetups and rain-embracing activities. The city transforms.",
      icon: Cloud,
      emphasis: ["day", "culture"],
    };
  }

  // Onam season (August-September, roughly)
  if ((month === 8 && day >= 20) || (month === 9 && day <= 10)) {
    return {
      id: "onam",
      title: "Onam Celebrations",
      description: "Cultural events and traditional gatherings across the city.",
      icon: Sun,
      emphasis: ["culture", "food"],
    };
  }

  // Winter/Pleasant weather (November - February)
  if (month >= 11 || month <= 2) {
    return {
      id: "winter",
      title: "Pleasant Season",
      description: "Perfect weather for outdoor activities and morning runs.",
      icon: Leaf,
      emphasis: ["fitness", "dawn"],
    };
  }

  return null;
}

export function SeasonalBanner() {
  const context = useMemo(() => getSeasonalContext(new Date()), []);

  if (!context) return null;

  const Icon = context.icon;

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-sm p-4">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-sm">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-display font-semibold text-foreground">{context.title}</h4>
          <p className="text-sm text-muted-foreground mt-1">{context.description}</p>
        </div>
      </div>
    </div>
  );
}
