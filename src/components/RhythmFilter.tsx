interface RhythmFilterProps {
  activeRhythm: string;
  onRhythmChange: (rhythm: string) => void;
}

const rhythms = [
  { id: "all", label: "All Cycles" },
  { id: "dawn", label: "Dawn" },
  { id: "day", label: "Day" },
  { id: "magrib", label: "Magrib" },
  { id: "night", label: "Night" },
];

export function RhythmFilter({ activeRhythm, onRhythmChange }: RhythmFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 md:gap-3">
      <span className="text-sm text-muted-foreground italic font-display mr-2">
        Filter by Rhythm:
      </span>
      {rhythms.map((rhythm) => (
        <button
          key={rhythm.id}
          onClick={() => onRhythmChange(rhythm.id)}
          className={`rhythm-pill rounded-sm ${
            activeRhythm === rhythm.id
              ? "rhythm-pill-active"
              : "rhythm-pill-inactive"
          }`}
        >
          {rhythm.label}
        </button>
      ))}
    </div>
  );
}
