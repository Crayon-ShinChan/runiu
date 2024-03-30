import { type ISpec } from "@visactor/react-vchart";
import { type Datum } from "@visactor/vchart/esm/typings";

export const getSpec = (data: Datum[]): ISpec => ({
  type: "common",
  data: [
    {
      id: "round",
      values: data,
    },
  ],
  series: [
    {
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
    {
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
  ],
  axes: [
    {
      orient: "left",
      seriesId: ["line"],
      title: {
        visible: true,
        text: "Lowest CRS score",
      },
      id: "axisLeft",
    },
    {
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
        text: "Invitations issued",
      },
      sync: { axisId: "axisLeft", tickAlign: true },
      label: {
        // TODO: raise a issue for this, val in param is number but type declare makes is string | string[]
        formatMethod: (val) => Math.round(val as unknown as number),
      },
    },
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
    trigger: ["click" as const, "hover" as const],
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
});
