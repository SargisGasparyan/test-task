import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { formatBalance } from "@/lib/helpers";

const INITIAL_BALANCE = 15000.0;
const BALANCE_UPDATE_INTERVAL = 3000;
const BALANCE_CHANGE_FACTOR = 0.0001;

export const WalletConnect = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState(INITIAL_BALANCE);

  useEffect(() => {
    if (!isConnected) {
      return;
    }

    const intervalId = setInterval(() => {
      setBalance((prev) => {
        const change = (Math.random() - 0.5) * BALANCE_CHANGE_FACTOR;
        return prev * (1 + change);
      });
    }, BALANCE_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, [isConnected]);

  const handleConnect = useCallback(() => {
    setIsConnected(true);
    setBalance(INITIAL_BALANCE);
  }, []);

  const handleDisconnect = useCallback(() => {
    setIsConnected(false);
  }, []);

  const formattedBalance = useMemo(() => formatBalance(balance), [balance]);

  if (isConnected) {
    return (
      <button
        type="button"
        onClick={handleDisconnect}
        className="flex items-center gap-2 bg-accent/10 rounded-full px-3 py-1.5 border border-accent/20 hover:bg-accent/20 transition-colors cursor-pointer"
        role="status"
        aria-label="Wallet connected, click to disconnect"
        title="Click to disconnect wallet"
      >
        <div className="flex items-center gap-1 text-accent text-sm font-medium">
          <Wallet className="w-4 h-4" aria-hidden="true" />
          <span aria-label={`Wallet balance: $${formattedBalance}`}>
            ${formattedBalance}
          </span>
        </div>
        <div
          className="w-8 h-8 bg-accent rounded-full flex items-center justify-center"
          aria-hidden="true"
        >
          <Wallet className="w-4 h-4 text-accent-foreground" />
        </div>
      </button>
    );
  }

  return (
    <Button
      type="button"
      onClick={handleConnect}
      variant="outline"
      className="bg-accent/10 border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-4 py-1.5 h-auto text-sm font-medium"
      aria-label="Connect wallet"
    >
      Connect Wallet
    </Button>
  );
};
