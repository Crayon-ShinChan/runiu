/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-member-access */

/* eslint-disable @typescript-eslint/no-unsafe-call */

/* eslint-disable @typescript-eslint/no-unsafe-return */
import type { IHistogramChartSpec } from "@visactor/react-vchart";
import type { DistributionData } from "./type";

export const getSpec = (data: [DistributionData, ...DistributionData[]]) => {
  const spec: IHistogramChartSpec = {
    type: "histogram",
    height: 400,
    data: data[0].data,
    xField: "start",
    x2Field: "end",
    yField: "value",
    bar: {
      style: {
        stroke: "white",
        lineWidth: 1,
      },
    },
    tooltip: {
      visible: true,
      trigger: ["click", "hover"],
      mark: {
        title: {
          key: "title",
          value: "Number of People",
        },
        content: [
          {
            key: (datum) => datum!.start + "～" + datum!.end,
            value: (datum) => datum!.value,
          },
        ],
      },
      dimension: {
        title: {
          key: "title",
          value: "Number of People",
        },
        content: [
          {
            key: (datum) => datum!.start + "～" + datum!.end,
            value: (datum) => datum!.value,
          },
        ],
      },
    },
    customMark: [
      {
        type: "text",
        dataId: "date",
        style: {
          textBaseline: "bottom",
          fontSize: 14,
          textAlign: "right",
          fontWeight: 600,
          text: (datum) => datum.date,
          x: (datum, ctx) => {
            return (ctx.vchart as any).getChart().getCanvasRect()?.width - 50;
          },
          y: 50,
          fill: "grey",
          fillOpacity: 0.5,
        },
      },
    ],
    crosshair: {
      trigger: ["click", "hover"],
      xField: { visible: true, line: { type: "line" } },
    },
    axes: [
      {
        orient: "left",
        title: {
          visible: true,
          text: "Number of People",
        },
        label: {
          formatMethod: (v) => {
            return (v as unknown as number) / 1000 + "k";
          },
        },
      },
      {
        orient: "bottom",
        title: {
          visible: true,
          text: "CRS Score",
        },
      },
    ],
    player: {
      type: "continuous",
      orient: "bottom",
      auto: true,
      loop: true,
      position: "middle",
      interval: 300,
      specs: data,
      slider: {
        railStyle: {
          height: 6,
        },
      },
      controller: {
        backward: {
          style: {
            size: 12,
          },
        },
        forward: {
          style: {
            size: 12,
          },
        },
        start: {
          order: 1,
          position: "end",
        },
      },
    },
  };

  return spec;
};
