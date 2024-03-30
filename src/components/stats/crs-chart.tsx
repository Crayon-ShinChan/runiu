"use client";

import { CalendarSearch } from "lucide-react";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { type Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";
import { type Datum } from "@visactor/vchart/esm/typings";
import { date2Str, filterByDate } from "@/lib/data/preprocess";

// TODO: https://github.com/VisActor/VChart/issues/2507

export default function CRSChart({ roundData }: { roundData: Round[] }) {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    new Date(),
  ]);

  const processedData = date2Str(filterByDate(roundData, dateRange));
  const spec = getSpec(processedData);

  return (
    <div>
      <div className="justify-between gap-x-10 px-5 pb-3 pt-6 md:flex">
        <Title />
        <DatePickerInput
          clearable
          type="range"
          label="Pick dates range"
          placeholder="Pick dates range"
          valueFormat="MMM DD, YYYY"
          value={dateRange}
          onChange={setDateRange}
          maxDate={new Date()}
          leftSection={<CalendarSearch size={16} />}
          className="w-[17rem] shrink-0 pt-3 md:pt-0"
        />
      </div>
      <VChart spec={spec} />
    </div>
  );
}

function Title() {
  return (
    <div>
      <h2 className="pb-1 font-semibold text-zinc-900">
        The Minimum CRS Score Required for EE Draws
      </h2>
      <h3 className="text-sm text-zinc-500">
        This real-time interactive chart displays the Comprehensive Ranking
        System (CRS) score of the lowest-ranked candidate invited for the
        Canadian Express Entry system.
      </h3>
    </div>
  );
}

// TODO: specify return ISpec
function getSpec(data: Datum[]) {
  return {
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
        seriesIndex: [1],
        title: {
          visible: true,
          text: "Lowest CRS score",
        },
      },
      {
        orient: "right",
        seriesId: ["bar"],
        gird: { visible: false },
        title: {
          visible: true,
          text: "Invitations issued",
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
  };
}
