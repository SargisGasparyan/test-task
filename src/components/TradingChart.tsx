import { useEffect, useState, useMemo, useCallback } from "react";
import {
  LineChart,
  Line,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts";
import {
  generateMockData,
  getUpdateInterval,
  formatTimeForInterval,
  getMaxDataPoints,
  getAvailableIntervals,
} from "@/lib/helpers";
import { type PriceData, type CustomDotProps, TimeInterval } from "@/lib/types";

const CHART_COLORS = {
  line: "rgba(236, 189, 117, 1)",
  gradientStart: "rgba(85, 39, 39, 0.15)",
  gradientEnd: "rgba(239, 68, 68, 0)",
  dotFill: "white",
  dotStroke: "rgba(236, 189, 117, 1)",
} as const;

const CHART_CONFIG = {
  dotRadius: 4,
  dotStrokeWidth: 2,
  lineStrokeWidth: 2,
  animationDuration: 300,
  priceVariancePercentage: 0.01,
} as const;

const DEFAULT_BASE_PRICE = 15000;

const CustomDot = ({
  cx,
  cy,
  index,
  dataLength,
}: CustomDotProps & { dataLength: number }) => {
  if (cx === undefined || cy === undefined || index === undefined) {
    return null;
  }

  const isLastPoint = index === dataLength - 1;
  if (!isLastPoint) {
    return null;
  }

  return (
    <circle
      cx={cx}
      cy={cy}
      r={CHART_CONFIG.dotRadius}
      fill={CHART_COLORS.dotFill}
      stroke={CHART_COLORS.dotStroke}
      strokeWidth={CHART_CONFIG.dotStrokeWidth}
    />
  );
};

interface IntervalButtonProps {
  interval: TimeInterval;
  isActive: boolean;
  onClick: (interval: TimeInterval) => void;
}

const IntervalButton = ({
  interval,
  isActive,
  onClick,
}: IntervalButtonProps) => {
  const handleClick = useCallback(() => {
    onClick(interval);
  }, [interval, onClick]);

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={isActive}
      aria-label={`Select ${interval} time interval`}
      className="px-4 py-2 rounded-lg text-sm font-medium transition-all relative"
      style={{
        background: isActive
          ? "linear-gradient(rgba(30, 30, 30, 1), rgba(30, 30, 30, 1)) padding-box, linear-gradient(to right, rgba(236, 189, 117, 1), rgba(236, 102, 51, 1)) border-box"
          : "transparent",
        color: isActive ? CHART_COLORS.line : "hsl(var(--muted-foreground))",
        border: isActive
          ? "1px solid transparent"
          : "1px solid hsl(var(--border))",
        padding: "8px 16px",
      }}
    >
      {isActive && (
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            backgroundColor: "rgba(244, 164, 44, 0.05)",
            pointerEvents: "none",
          }}
        />
      )}
      <span className="relative z-10">{interval}</span>
    </button>
  );
};

interface IntervalIndicatorsProps {
  intervals: TimeInterval[];
  selectedInterval: TimeInterval;
}

const IntervalIndicators = ({
  intervals,
  selectedInterval,
}: IntervalIndicatorsProps) => {
  return (
    <div
      className="flex justify-center gap-2 mt-4"
      role="presentation"
      aria-hidden="true"
    >
      {intervals.map((interval) => (
        <div
          key={interval}
          className={`h-1 rounded-full transition-all ${
            selectedInterval === interval ? "w-8" : "w-1 bg-muted"
          }`}
          style={{
            backgroundColor:
              selectedInterval === interval ? CHART_COLORS.line : undefined,
          }}
        />
      ))}
    </div>
  );
};

export const TradingChart = () => {
  const [selectedInterval, setSelectedInterval] = useState<TimeInterval>(
    TimeInterval.ONE_MINUTE
  );
  const [basePrice] = useState(DEFAULT_BASE_PRICE);
  const [data, setData] = useState<PriceData[]>(() =>
    generateMockData(TimeInterval.ONE_MINUTE, basePrice)
  );

  const intervals = useMemo(() => getAvailableIntervals(), []);

  useEffect(() => {
    setData(generateMockData(selectedInterval, basePrice));
  }, [selectedInterval, basePrice]);

  useEffect(() => {
    const updateInterval = getUpdateInterval(selectedInterval);
    const intervalId = setInterval(() => {
      setData((prevData) => {
        if (prevData.length === 0) {
          return generateMockData(selectedInterval, basePrice);
        }

        const newData = [...prevData];
        const lastPrice = newData[newData.length - 1]?.price ?? basePrice;
        const variance =
          (Math.random() - 0.5) *
          (lastPrice * CHART_CONFIG.priceVariancePercentage);
        const now = new Date();
        const timeFormat = formatTimeForInterval(now, selectedInterval);

        newData.push({
          time: timeFormat,
          price: lastPrice + variance,
        });

        const maxPoints = getMaxDataPoints(selectedInterval);
        return newData.slice(-maxPoints);
      });
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [selectedInterval, basePrice]);

  const currentPrice = useMemo(() => {
    return data[data.length - 1]?.price ?? 0;
  }, [data]);

  const currentLabel = useMemo(() => {
    return currentPrice.toFixed(2);
  }, [currentPrice]);

  const handleIntervalChange = useCallback((interval: TimeInterval) => {
    setSelectedInterval(interval);
  }, []);

  return (
    <figure
      className="relative overflow-hidden"
      role="img"
      aria-label="Trading price chart"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 60, left: 0, bottom: 0 }}
          aria-label="Price chart over time"
        >
          <XAxis
            dataKey="time"
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={["dataMin - 100", "dataMax + 100"]}
            stroke="hsl(var(--muted-foreground))"
            tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
            tickLine={false}
            axisLine={false}
            orientation="right"
            width={60}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
              fontSize: "12px",
            }}
            labelStyle={{ color: "hsl(var(--foreground))" }}
          />
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor={CHART_COLORS.gradientStart} />
              <stop offset="100%" stopColor={CHART_COLORS.gradientEnd} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="price"
            fill="url(#chartGradient)"
            stroke="none"
          />
          <ReferenceLine
            y={currentPrice}
            stroke="hsl(var(--success))"
            strokeDasharray="5 5"
            strokeWidth={1}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke={CHART_COLORS.line}
            strokeWidth={CHART_CONFIG.lineStrokeWidth}
            dot={(props) => <CustomDot {...props} dataLength={data.length} />}
            animationDuration={CHART_CONFIG.animationDuration}
          />
        </LineChart>
      </ResponsiveContainer>

      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-success px-3 py-1.5 rounded-md text-white text-sm font-medium whitespace-nowrap z-10 shadow-lg"
        aria-label={`Current price: ${currentLabel}`}
      >
        {currentLabel}
      </div>

      <div
        className="flex items-center justify-center gap-4 mt-4"
        role="group"
        aria-label="Time interval selector"
      >
        {intervals.map((interval) => (
          <IntervalButton
            key={interval}
            interval={interval}
            isActive={selectedInterval === interval}
            onClick={handleIntervalChange}
          />
        ))}
      </div>

      <IntervalIndicators
        intervals={intervals}
        selectedInterval={selectedInterval}
      />
    </figure>
  );
};
