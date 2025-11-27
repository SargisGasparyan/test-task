import { useEffect, useState } from "react";
import { Heart, Settings } from "lucide-react";

export const PriceDisplay = () => {
  const [price, setPrice] = useState(113610.07);
  const [change] = useState(2.3);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prev) => {
        const variance = (Math.random() - 0.5) * 50;
        return prev + variance;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const [integerPart, decimalPart] = price.toFixed(2).split(".");

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-bold text-foreground tabular-nums">
          {parseInt(integerPart).toLocaleString()}
        </span>
        <span className="text-3xl font-bold text-muted-foreground tabular-nums">
          .{decimalPart}
        </span>
        <span className={`ml-3 text-lg font-medium ${change >= 0 ? "text-success" : "text-destructive"}`}>
          {change >= 0 ? "+" : ""}{change}%
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Heart className="w-5 h-5 text-muted-foreground" />
        </button>
        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};
