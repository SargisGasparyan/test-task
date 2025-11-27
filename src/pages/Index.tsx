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
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <MoreVertical className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm font-medium text-foreground">Mini App</span>
        </div>
        <button className="p-1">
          <X className="w-5 h-5 text-muted-foreground" />
        </button>
      </header>

      {/* Trading Pair and Wallet */}
      <div className="flex items-center justify-between px-4 py-4">
        <TradingPair />
        <WalletConnect />
      </div>

      {/* Price Display */}
      <div className="px-4">
        <PriceDisplay />
      </div>

      {/* Chart */}
      <div className="px-4 mb-6">
        <TradingChart />
      </div>

      {/* Activity Feed */}
      <div className="px-4">
        <ActivityFeed />
      </div>

      {/* Position Details */}
      <div className="px-4">
        <PositionDetails />
      </div>

      {/* Trading Buttons */}
      <div className="px-4">
        <TradingButtons />
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;
