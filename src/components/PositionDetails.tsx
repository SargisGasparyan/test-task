import { ChevronDown } from "lucide-react";

const POSITION_DATA = {
  margin: "$10",
  leverage: "10x",
} as const;

export const PositionDetails = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-between bg-card px-4 py-3 rounded-lg mb-4 w-full hover:bg-card/80 transition-colors text-left"
      aria-label="View position details"
      aria-expanded="false"
    >
      <span className="text-sm text-muted-foreground">Position details</span>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <span className="text-muted-foreground">Margin </span>
          <span
            className="text-foreground font-medium"
            aria-label={`Margin: ${POSITION_DATA.margin}`}
          >
            {POSITION_DATA.margin}
          </span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Leverage </span>
          <span
            className="text-foreground font-medium"
            aria-label={`Leverage: ${POSITION_DATA.leverage}`}
          >
            {POSITION_DATA.leverage}
          </span>
        </div>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </button>
  );
};
