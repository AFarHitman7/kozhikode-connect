import { MessageCircle, Send, Instagram, Mail, Globe, ExternalLink } from "lucide-react";
import type { LinkedPlatform } from "@/data/communities";

interface ContactLinksProps {
  platforms: LinkedPlatform[];
  variant?: "compact" | "full";
}

const platformConfig = {
  whatsapp: { icon: MessageCircle, label: "WhatsApp", color: "text-green-600 dark:text-green-500" },
  telegram: { icon: Send, label: "Telegram", color: "text-blue-500" },
  instagram: { icon: Instagram, label: "Instagram", color: "text-pink-600 dark:text-pink-500" },
  email: { icon: Mail, label: "Email", color: "text-muted-foreground" },
  website: { icon: Globe, label: "Website", color: "text-muted-foreground" },
};

export function ContactLinks({ platforms, variant = "full" }: ContactLinksProps) {
  if (!platforms || platforms.length === 0) return null;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        {platforms.map((platform) => {
          const config = platformConfig[platform.platform];
          const Icon = config.icon;
          return (
            <a
              key={platform.platform}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${config.color} hover:opacity-70 transition-opacity`}
              title={config.label}
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {platforms.map((platform) => {
        const config = platformConfig[platform.platform];
        const Icon = config.icon;
        return (
          <a
            key={platform.platform}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Icon className={`w-4 h-4 ${config.color}`} />
            <span>{config.label}</span>
            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        );
      })}
    </div>
  );
}
