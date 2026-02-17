export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export enum SlideType {
  TITLE,
  CHART_BAR,
  CHART_LINE,
  STRATEGY_LIST,
  COMPARISON,
  FUTURE
}

export interface ChartDataPoint {
  name: string;
  value: number;
  value2?: number;
  label?: string;
}
