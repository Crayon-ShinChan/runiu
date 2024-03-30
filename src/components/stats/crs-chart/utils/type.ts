import type { ICartesianAxisSpec, ICommonChartSpec } from "@visactor/vchart";

export const defaultDateRangeOptions = [
  "Past 3 Months",
  "Past 6 Months",
  "Past 1 Year",
  "Past 2 Years",
  "Past 3 Years",
  "Past 5 Years",
] as const;
export type DefaultDateRange = (typeof defaultDateRangeOptions)[number];

export const axesOptions = ["score", "issued"] as const;
export type Axes = (typeof axesOptions)[number];

export type SeriesTypeFromCommonChartSpec = ICommonChartSpec extends {
  series?: infer T;
}
  ? T extends (infer U)[]
    ? U
    : never
  : never;

export type ChartSpec = {
  type: Axes;
  series: SeriesTypeFromCommonChartSpec;
  axis: ICartesianAxisSpec;
};
