import type { ICommonChartSpec } from "@visactor/react-vchart";
import type { Datum } from "@visactor/vchart/esm/typings";
import Chart from "./chart";
import type { Axes, ChartSpec } from "./type";

export const getSpec = (data: Datum[], axes: Axes[]) => {
  const scoreChart = new Chart(scoreSpec);
  const issuedChart = new Chart(issuedSpec);

  let spec: ICommonChartSpec = {
    type: "common",
    data: [
      {
        id: "round",
        values: data,
      },
    ],
    series: [],
    axes: [
      {
        orient: "bottom",
        label: { visible: true },
        type: "band" as const,
      },
    ],
    legends: {
      visible: true,
      maxRow: 4,
      defaultSelected: ["General"],
    },
    tooltip: {
      trigger: ["click", "hover"],
      mark: {
        visible: true,
        position: {
          x: {
            orient: "tl" as const,
            mode: "pointer" as const,
          },
          y: {
            orient: "tl" as const,
            mode: "pointer" as const,
          },
        },
      },
      dimension: {
        visible: true,
        position: {
          x: {
            orient: "tl" as const,
            mode: "pointer" as const,
          },
          y: {
            orient: "tl" as const,
            mode: "pointer" as const,
          },
        },
      },
    },
    crosshair: {
      trigger: ["click", "hover"],
      xField: { visible: true, line: { type: "rect" } },
    },
  };

  if (axes.includes("issued")) {
    spec = issuedChart.appendSpec(spec);
  }
  if (axes.includes("score")) {
    spec = scoreChart.appendSpec(spec);
  }
  return spec;
};

const scoreSpec: ChartSpec = {
  type: "score",
  series: {
    type: "line",
    id: "line",
    dataIndex: 0,
    xField: "date",
    yField: "lowestCRS",
    seriesField: "typeClean",
    invalidType: "link" as const,
    tooltip: {
      mark: {
        content: [
          {
            key: (datum: Datum | undefined) =>
              datum ? `${datum.typeClean} (score)` : "",
            value: (datum: Datum | undefined) =>
              datum ? `${datum.lowestCRS}` : "",
          },
        ],
      },
      dimension: {
        content: [
          {
            key: (datum: Datum | undefined) =>
              datum ? `${datum.typeClean} (score)` : "",
            value: (datum: Datum | undefined) =>
              datum ? `${datum.lowestCRS}` : "",
          },
        ],
      },
    },
  },
  axis: {
    orient: "left",
    seriesId: ["line"],
    title: {
      visible: true,
      text: "Lowest CRS Score",
    },
    id: "axisLeft",
    zero: false,
  },
};

const issuedSpec: ChartSpec = {
  type: "issued",
  series: {
    type: "bar",
    id: "bar",
    dataIndex: 0,
    xField: "date",
    yField: "issued",
    seriesField: "typeClean",
    stack: true,
    tooltip: {
      mark: {
        content: [
          {
            key: (datum: Datum | undefined) =>
              datum ? `${datum.typeClean} (issued)` : "",
            value: (datum: Datum | undefined) =>
              datum ? `${datum.issued}` : "",
          },
        ],
      },
      dimension: {
        content: [
          {
            key: (datum: Datum | undefined) =>
              datum ? `${datum.typeClean} (issued)` : "",
            value: (datum: Datum | undefined) =>
              datum ? `${datum.issued}` : "",
          },
        ],
      },
    },
  },
  axis: {
    orient: "right",
    seriesId: ["bar"],
    grid: {
      visible: true,
      style: {
        lineDash: [2, 3],
      },
    },
    title: {
      visible: true,
      text: "Invitations Issued",
    },
    sync: { axisId: "axisLeft", tickAlign: true },
    label: {
      // TODO: raise a issue for this, val in param is number but type declare makes is string | string[]
      formatMethod: (val) => Math.round(val as unknown as number),
    },
  },
};
