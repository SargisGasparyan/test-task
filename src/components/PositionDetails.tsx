import { ChevronDown } from "lucide-react";

export const PositionDetails = () => {
  return (
    <div className="flex items-center justify-between bg-card px-4 py-3 rounded-lg mb-4">
      <span className="text-sm text-muted-foreground">Position details</span>
      <div className="flex items-center gap-4">
        <div className="text-sm">
          <span className="text-muted-foreground">Margin </span>
          <span className="text-foreground font-medium">$10</span>
        </div>
        <div className="text-sm">
          <span className="text-muted-foreground">Leverage </span>
          <span className="text-foreground font-medium">10x</span>
        </div>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
};
