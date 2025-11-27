import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance] = useState("15,000.00");

  const handleConnect = () => {
    setIsConnected(true);
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1.5 border border-accent/20">
        <div className="flex items-center gap-1 text-accent text-sm font-medium">
          <Wallet className="w-4 h-4" />
          {balance}
        </div>
        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
          <Wallet className="w-4 h-4 text-accent-foreground" />
        </div>
      </div>
    );
  }

  return (
    <Button
      onClick={handleConnect}
      variant="outline"
      className="bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-4 py-1.5 h-auto text-sm font-medium"
    >
      Connect Wallet
    </Button>
  );
};
