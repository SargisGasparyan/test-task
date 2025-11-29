import { Button } from "@/components/ui/button";

const BUTTON_STYLES = {
  long: {
    backgroundColor: "rgba(151, 252, 166, 0.1)",
    color: "rgba(151, 252, 166, 1)",
  },
  short: {
    backgroundColor: "rgba(255, 88, 58, 0.1)",
    color: "rgba(255, 88, 58, 1)",
  },
} as const;

const SHORT_POSITION_VOLUME = "345.29k";

export const TradingButtons = () => {
  return (
    <div
      className="grid grid-cols-2 gap-3"
      role="group"
      aria-label="Trading actions"
    >
      <Button
        type="button"
        className="h-14 text-lg font-semibold rounded-xl hover:opacity-80 transition-opacity"
        style={BUTTON_STYLES.long}
        aria-label="Open long position"
      >
        Long
      </Button>
      <Button
        type="button"
        className="h-14 text-lg font-semibold rounded-xl hover:opacity-80 transition-opacity relative"
        style={BUTTON_STYLES.short}
        aria-label="Open short position"
      >
        Short
        <span
          className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-bold"
          aria-label={`Short position volume: ${SHORT_POSITION_VOLUME}`}
        >
          {SHORT_POSITION_VOLUME}
        </span>
      </Button>
    </div>
  );
};
