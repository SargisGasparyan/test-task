import { useEffect, useState } from "react";
import { generateActivity } from "@/lib/helpers";
import { type Activity } from "@/lib/types";

const INITIAL_ACTIVITIES: Activity[] = [
  {
    id: "1",
    user: "Dany",
    action: "Opened Long",
    leverage: "10X",
    time: "Today at 12:45",
  },
  {
    id: "2",
    user: "Gabriel",
    action: "Opened Short",
    leverage: "100X",
    time: "Today at 12:45",
  },
];

const ACTIVITY_UPDATE_INTERVAL = 5000;
const MAX_ACTIVITIES = 3;

export const ActivityFeed = () => {
  const [activities, setActivities] = useState<Activity[]>(INITIAL_ACTIVITIES);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActivities((prev) => {
        const newActivity = generateActivity();
        return [newActivity, ...prev].slice(0, MAX_ACTIVITIES);
      });
    }, ACTIVITY_UPDATE_INTERVAL);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="bg-card rounded-lg p-4 mb-4 space-y-2"
      aria-label="Recent trading activity"
    >
      <h2 className="sr-only">Recent Trading Activity</h2>
      <ul className="space-y-2" role="list">
        {activities.map((activity) => (
          <li
            key={activity.id}
            className="flex items-start gap-2 text-sm animate-in fade-in slide-in-from-top-2 duration-300"
          >
            <span className="text-accent font-medium">{activity.user}</span>
            <span className="text-muted-foreground flex-1">
              {activity.action}{" "}
              <span aria-label={`Leverage: ${activity.leverage}`}>
                {activity.leverage}
              </span>
            </span>
            <time
              className="text-muted-foreground text-xs"
              dateTime={activity.time}
            >
              {activity.time}
            </time>
          </li>
        ))}
      </ul>
    </section>
  );
};
