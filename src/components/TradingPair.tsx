import { ChevronDown } from "lucide-react";

const TRADING_PAIR = {
  symbol: "BTCDEGEN/USDC",
  leverage: "100x",
  icon: "₿",
} as const;

export const TradingPair = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg hover:bg-card/80 transition-colors"
      aria-label="Select trading pair"
      aria-expanded="false"
    >
      <div
        className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground"
        aria-hidden="true"
      >
        {TRADING_PAIR.icon}
      </div>
      <span className="text-sm font-medium text-foreground">
        {TRADING_PAIR.symbol}
      </span>
      <span
        className="text-xs text-muted-foreground"
        aria-label={`Leverage: ${TRADING_PAIR.leverage}`}
      >
        {TRADING_PAIR.leverage}
      </span>
      <ChevronDown
        className="w-4 h-4 text-muted-foreground"
        aria-hidden="true"
      />
    </button>
  );
};
