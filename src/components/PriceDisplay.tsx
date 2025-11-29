import { useEffect, useState, useMemo } from "react";
import { Heart, Settings } from "lucide-react";
import { formatPrice } from "@/lib/helpers";

const INITIAL_PRICE = 113610.07;
const INITIAL_CHANGE = 2.3;
const PRICE_UPDATE_INTERVAL = 2000;
const PRICE_VARIANCE = 50;

export const PriceDisplay = () => {
  const [price, setPrice] = useState(INITIAL_PRICE);
  const [change] = useState(INITIAL_CHANGE);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPrice((prev) => {
        const variance = (Math.random() - 0.5) * PRICE_VARIANCE;
        return prev + variance;
      });
    }, PRICE_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  const formattedPrice = useMemo(() => formatPrice(price), [price]);
  const { integer: integerPart, decimal: decimalPart } = formattedPrice;

  const changeDisplay = useMemo(() => {
    return change >= 0 ? `+${change}` : `${change}`;
  }, [change]);

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-baseline gap-1">
        <span
          className="text-5xl font-bold text-foreground tabular-nums"
          aria-label={`Price: ${price.toFixed(2)}`}
        >
          {integerPart}
        </span>
        <span
          className="text-3xl font-bold text-muted-foreground tabular-nums"
          aria-hidden="true"
        >
          .{decimalPart}
        </span>
        <span
          className={`ml-3 text-lg font-medium ${
            change >= 0 ? "text-success" : "text-destructive"
          }`}
          aria-label={`Price change: ${changeDisplay}%`}
        >
          {changeDisplay}%
        </span>
      </div>
      <div
        className="flex items-center gap-3"
        role="group"
        aria-label="Price display actions"
      >
        <button
          type="button"
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Add to favorites"
        >
          <Heart className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="p-2 hover:bg-secondary rounded-lg transition-colors"
          aria-label="Open price settings"
        >
          <Settings
            className="w-5 h-5 text-muted-foreground"
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
};
