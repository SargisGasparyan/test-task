import { ChevronDown } from "lucide-react";

export const TradingPair = () => {
  return (
    <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg">
      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground">
        ₿
      </div>
      <span className="text-sm font-medium text-foreground">BTCDEGEN/USDC</span>
      <span className="text-xs text-muted-foreground">100x</span>
      <ChevronDown className="w-4 h-4 text-muted-foreground" />
    </div>
  );
};
