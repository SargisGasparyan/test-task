import {
  PriceData,
  Activity,
  TimeInterval,
  TradingAction,
  IntervalConfig,
  FormattedPrice,
} from "./types";

const INTERVAL_CONFIGS: Record<TimeInterval, IntervalConfig> = {
  [TimeInterval.FIFTEEN_SECONDS]: {
    count: 60,
    stepMs: 15 * 1000,
    updateInterval: 15000,
    maxDataPoints: 60,
  },
  [TimeInterval.ONE_MINUTE]: {
    count: 30,
    stepMs: 60 * 1000,
    updateInterval: 60000,
    maxDataPoints: 60,
  },
  [TimeInterval.ONE_HOUR]: {
    count: 24,
    stepMs: 60 * 60 * 1000,
    updateInterval: 300000,
    maxDataPoints: 24,
  },
  [TimeInterval.ONE_DAY]: {
    count: 30,
    stepMs: 24 * 60 * 60 * 1000,
    updateInterval: 3600000,
    maxDataPoints: 30,
  },
};

const DEFAULT_CONFIG: IntervalConfig = {
  count: 30,
  stepMs: 60 * 1000,
  updateInterval: 2000,
  maxDataPoints: 60,
};

const MOCK_USERS = ["Dany", "Gabriel", "Alex", "Sarah", "Mike"] as const;

const LEVERAGE_OPTIONS = ["10X", "20X", "50X", "100X"] as const;

const PRICE_VARIANCE_PERCENTAGE = 0.03;

const PRICE_TREND_PERCENTAGE = 0.001;

const getIntervalConfig = (interval: string): IntervalConfig => {
  return INTERVAL_CONFIGS[interval as TimeInterval] ?? DEFAULT_CONFIG;
};

export const generateMockData = (
  interval: string,
  basePrice: number = 15000
): PriceData[] => {
  const config = getIntervalConfig(interval);
  const data: PriceData[] = [];
  const now = new Date();

  for (let i = config.count; i >= 0; i--) {
    const time = new Date(now.getTime() - i * config.stepMs);
    const variance =
      (Math.random() - 0.5) * (basePrice * PRICE_VARIANCE_PERCENTAGE);
    const trend = (config.count - i) * (basePrice * PRICE_TREND_PERCENTAGE);

    const timeFormat = formatTimeForInterval(time, interval);

    data.push({
      time: timeFormat,
      price: basePrice + variance + trend,
    });
  }

  return data;
};

export const formatTimeForInterval = (date: Date, interval: string): string => {
  if (interval === TimeInterval.ONE_DAY) {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  if (interval === TimeInterval.ONE_HOUR) {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: interval === TimeInterval.FIFTEEN_SECONDS ? "2-digit" : undefined,
  });
};

export const getUpdateInterval = (selectedInterval: string): number => {
  return getIntervalConfig(selectedInterval).updateInterval;
};

export const getMaxDataPoints = (interval: string): number => {
  return getIntervalConfig(interval).maxDataPoints;
};

export const generateActivity = (): Activity => {
  const randomUser = MOCK_USERS[Math.floor(Math.random() * MOCK_USERS.length)];
  const randomAction =
    Object.values(TradingAction)[
      Math.floor(Math.random() * Object.values(TradingAction).length)
    ];
  const randomLeverage =
    LEVERAGE_OPTIONS[Math.floor(Math.random() * LEVERAGE_OPTIONS.length)];

  return {
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
    user: randomUser,
    action: randomAction,
    leverage: randomLeverage,
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
};

export const formatBalance = (balance: number): string => {
  return balance.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPrice = (price: number): FormattedPrice => {
  const [integerPart, decimalPart] = price.toFixed(2).split(".");
  return {
    integer: parseInt(integerPart, 10).toLocaleString(),
    decimal: decimalPart,
  };
};

export const getAvailableIntervals = (): TimeInterval[] => {
  return Object.values(TimeInterval);
};
