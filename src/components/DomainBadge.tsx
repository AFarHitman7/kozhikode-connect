import { cn } from "@/lib/utils";

interface DomainBadgeProps {
  domain: "culture" | "tech" | "design" | "fitness" | "food";
  size?: "sm" | "md";
}

const domainStyles = {
  culture: "bg-accent text-accent-foreground",
  tech: "bg-teal-700 text-white dark:bg-teal-600",
  design: "bg-purple-700 text-white dark:bg-purple-600",
  fitness: "bg-green-700 text-white dark:bg-green-600",
  food: "bg-amber-600 text-white dark:bg-amber-500",
};

const domainLabels = {
  culture: "Culture",
  tech: "Tech",
  design: "Design",
  fitness: "Fitness",
  food: "Food",
};

export function DomainBadge({ domain, size = "sm" }: DomainBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium uppercase tracking-wider",
        domainStyles[domain],
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
      )}
    >
      {domainLabels[domain]}
    </span>
  );
}
