export enum TimeInterval {
  FIFTEEN_SECONDS = "15S",
  ONE_MINUTE = "1M",
  ONE_HOUR = "1H",
  ONE_DAY = "1D",
}

export enum TradingAction {
  OPENED_LONG = "Opened Long",
  OPENED_SHORT = "Opened Short",
  CLOSED_LONG = "Closed Long",
  CLOSED_SHORT = "Closed Short",
}

export interface PriceData {
  time: string;
  price: number;
}

export interface Activity {
  id: string;
  user: string;
  action: TradingAction | string;
  leverage: string;
  time: string;
}

export interface FormattedPrice {
  integer: string;
  decimal: string;
}

export interface IntervalConfig {
  count: number;
  stepMs: number;
  updateInterval: number;
  maxDataPoints: number;
}

export interface CustomDotProps {
  cx?: number;
  cy?: number;
  payload?: PriceData;
  index?: number;
}
