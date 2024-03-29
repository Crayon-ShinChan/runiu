"use client";

import { CalendarSearch } from "lucide-react";
import { useState } from "react";
import { DatePickerInput } from "@mantine/dates";
import { type Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";
import { date2Str, filterByDate } from "@/lib/data/preprocess";

export default function CRSChart({ roundData }: { roundData: Round[] }) {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    new Date(new Date().setFullYear(new Date().getFullYear() - 2)),
    new Date(),
  ]);

  const spec = {
    type: "line",
    data: {
      id: "lineData",
      values: date2Str(filterByDate(roundData, dateRange)),
    },
    xField: "date",
    yField: "lowestCRS",
    seriesField: "typeClean",
    invalidType: "link",
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
            orient: "tr" as const,
            mode: "pointer" as const,
          },
          y: {
            orient: "tr" as const,
            mode: "pointer" as const,
          },
        },
      },
      dimension: {
        visible: true,
        position: {
          x: {
            orient: "tr" as const,
            mode: "pointer" as const,
          },
          y: {
            orient: "tr" as const,
            mode: "pointer" as const,
          },
        },
      },
    },
  };

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
        This real-time interactive chart displays the CRS score of the
        lowest-ranked candidate invited for the Canadian Express Entry system.
        You can choose either the &quot;legend&quot; or &quot;date picker&quot;
        option to filter the data.
      </h3>
    </div>
  );
}
