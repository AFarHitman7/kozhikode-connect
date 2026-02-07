import { cn } from "@/lib/utils";

interface HealthBadgeProps {
  healthScore: "active" | "consistent" | "dormant";
  lastActive?: string;
  showLabel?: boolean;
}

export function HealthBadge({ healthScore, lastActive, showLabel = false }: HealthBadgeProps) {
  const getHealthInfo = () => {
    switch (healthScore) {
      case "active":
        return { color: "bg-green-500", label: "Active", tooltip: "Active in the last 7 days" };
      case "consistent":
        return { color: "bg-amber-500", label: "Consistent", tooltip: "Monthly activity pattern" };
      case "dormant":
        return { color: "bg-muted-foreground/50", label: "Seasonal", tooltip: "Seasonal or dormant" };
    }
  };

  const info = getHealthInfo();

  const formatLastActive = (date: string) => {
    const d = new Date(date);
    const now = new Date();
    const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return d.toLocaleDateString("en-IN", { month: "short", day: "numeric" });
  };

  return (
    <div className="flex items-center gap-2" title={info.tooltip}>
      <span className={cn("w-2 h-2 rounded-full", info.color)} />
      {showLabel && (
        <span className="text-xs text-muted-foreground">
          {info.label}
          {lastActive && ` · ${formatLastActive(lastActive)}`}
        </span>
      )}
    </div>
  );
}
