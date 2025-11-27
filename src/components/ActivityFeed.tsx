import { useEffect, useState } from "react";

interface Activity {
  id: string;
  user: string;
  action: string;
  leverage: string;
  time: string;
}

const generateActivity = (): Activity => {
  const users = ["Dany", "Gabriel", "Alex", "Sarah", "Mike"];
  const actions = ["Opened Long", "Opened Short", "Closed Long", "Closed Short"];
  const leverages = ["10X", "20X", "50X", "100X"];
  
  return {
    id: Math.random().toString(),
    user: users[Math.floor(Math.random() * users.length)],
    action: actions[Math.floor(Math.random() * actions.length)],
    leverage: leverages[Math.floor(Math.random() * leverages.length)],
    time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
  };
};

export const ActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>([
    { id: "1", user: "Dany", action: "Opened Long", leverage: "10X", time: "Today at 12:45" },
    { id: "2", user: "Gabriel", action: "Opened Short", leverage: "100X", time: "Today at 12:45" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivities((prev) => {
        const newActivity = generateActivity();
        return [newActivity, ...prev].slice(0, 3);
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card rounded-lg p-4 mb-4 space-y-2">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start gap-2 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <span className="text-accent font-medium">{activity.user}</span>
          <span className="text-muted-foreground flex-1">{activity.action} {activity.leverage}</span>
          <span className="text-muted-foreground text-xs">{activity.time}</span>
        </div>
      ))}
    </div>
  );
};
