import type { ICartesianAxisSpec, ICommonChartSpec } from "@visactor/vchart";

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
