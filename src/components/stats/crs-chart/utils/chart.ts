import { type ICommonChartSpec } from "@visactor/react-vchart";
import { type ICartesianAxisSpec } from "@visactor/vchart";
import type { ChartSpec } from "./type";

export default class Chart {
  public readonly chartSpec: ChartSpec;

  constructor(chartSpec: ChartSpec) {
    this.chartSpec = chartSpec;
  }

  public appendSpec(spec: ICommonChartSpec): ICommonChartSpec {
    return {
      ...spec,
      series: spec.series
        ? [...spec.series, this.chartSpec.series]
        : [this.chartSpec.series],
      axes: spec.axes
        ? [...(spec.axes as ICartesianAxisSpec[]), this.chartSpec.axis]
        : [this.chartSpec.axis],
    };
  }
}
