import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface PriceData {
  time: string;
  price: number;
}

const generateMockData = (count: number): PriceData[] => {
  const data: PriceData[] = [];
  const basePrice = 15000;
  const now = new Date();
  
  for (let i = count; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60000);
    const variance = (Math.random() - 0.5) * 500;
    const trend = (count - i) * 10;
    data.push({
      time: time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      price: basePrice + variance + trend,
    });
  }
  
  return data;
};

export const TradingChart = () => {
  const [data, setData] = useState<PriceData[]>(() => generateMockData(30));
  const [selectedInterval, setSelectedInterval] = useState("1M");

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData];
        const lastPrice = newData[newData.length - 1].price;
        const variance = (Math.random() - 0.5) * 100;
        const now = new Date();
        
        newData.push({
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
          price: lastPrice + variance + 5,
        });
        
        return newData.slice(-30);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const intervals = ["15S", "1M", "1H", "1D"];
  const currentPrice = data[data.length - 1]?.price || 0;
  const currentLabel = currentPrice.toFixed(2);

  return (
    <div className="relative">
      <div className="absolute top-4 left-4 z-10 bg-success/20 text-success px-2 py-1 rounded text-xs font-medium">
        {currentLabel}
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 0 }}>
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            domain={['dataMin - 100', 'dataMax + 100']}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            orientation="right"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              fontSize: '12px',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="hsl(var(--chart-line))"
            strokeWidth={2}
            dot={false}
            animationDuration={300}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-4 mt-4">
        {intervals.map((interval) => (
          <button
            key={interval}
            onClick={() => setSelectedInterval(interval)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedInterval === interval
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {interval}
          </button>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all ${
              i === 1 ? "w-8 bg-accent" : "w-1 bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
