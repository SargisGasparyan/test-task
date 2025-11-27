import { Button } from "@/components/ui/button";

export const TradingButtons = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button 
        className="bg-success hover:bg-success/90 text-success-foreground h-14 text-lg font-semibold rounded-xl"
      >
        Long
      </Button>
      <Button 
        className="bg-destructive hover:bg-destructive/90 text-destructive-foreground h-14 text-lg font-semibold rounded-xl relative"
      >
        Short
        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full font-bold">
          345.29k
        </div>
      </Button>
    </div>
  );
};
