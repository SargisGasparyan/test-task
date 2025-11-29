import { WalletConnect } from "@/components/WalletConnect";
import { TradingPair } from "@/components/TradingPair";
import { PriceDisplay } from "@/components/PriceDisplay";
import { TradingChart } from "@/components/TradingChart";
import { ActivityFeed } from "@/components/ActivityFeed";
import { PositionDetails } from "@/components/PositionDetails";
import { TradingButtons } from "@/components/TradingButtons";
import { BottomNavigation } from "@/components/BottomNavigation";
import { MoreVertical, X } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 overflow-x-hidden">
      <header className="flex items-center justify-between px-4 py-3 border-b border-border" role="banner">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="p-1"
            aria-label="Open menu"
          >
            <MoreVertical className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
          </button>
          <h1 className="text-sm font-medium text-foreground">Mini App</h1>
        </div>
        <button
          type="button"
          className="p-1"
          aria-label="Close application"
        >
          <X className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
        </button>
      </header>

      <main className="pb-20">
        <section className="flex items-center justify-between px-4 py-4" aria-label="Trading pair and wallet">
          <TradingPair />
          <WalletConnect />
        </section>

        <section className="px-4" aria-label="Price information">
          <PriceDisplay />
        </section>

        <section className="px-4 mb-6" aria-label="Trading chart">
          <TradingChart />
        </section>

        <section className="px-4" aria-label="Recent trading activity">
          <ActivityFeed />
        </section>

        <section className="px-4" aria-label="Current position details">
          <PositionDetails />
        </section>

        <section className="px-4" aria-label="Trading actions">
          <TradingButtons />
        </section>
      </main>

      <BottomNavigation />
    </div>
  );
};

export default Index;
