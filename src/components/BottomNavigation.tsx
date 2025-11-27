import { TrendingUp, BarChart3, Gift, User } from "lucide-react";

export const BottomNavigation = () => {
  const navItems = [
    { icon: TrendingUp, label: "Trade", active: true },
    { icon: BarChart3, label: "Positions", active: false },
    { icon: Gift, label: "Rewards", active: false },
    { icon: User, label: "Profile", active: false },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
      <div className="max-w-lg mx-auto flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 transition-colors ${
                item.active ? "text-accent" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
