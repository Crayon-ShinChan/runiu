"use client";

import { useAtom, useAtomValue } from "jotai";
import { type Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";
import {
  date2Str,
  filterByDate,
} from "@/components/stats/crs-chart/data/preprocess";
import AxesFilter from "./filters/axes-filter";
import DateFilter from "./filters/date-filter";
import { axesAtom, dateRangeAtom, defaultLegendAtom } from "./utils/atoms";
import { getSpec } from "./utils/spec";

export default function CRSChart({ roundData }: { roundData: Round[] }) {
  const [defaultLegend, setDefaultLegend] = useAtom(defaultLegendAtom);
  const dateRange = useAtomValue(dateRangeAtom);
  const axes = useAtomValue(axesAtom);
  const processedData = date2Str(filterByDate(roundData, dateRange));
  const spec = getSpec(processedData, axes, defaultLegend);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleLegendItemClick = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const labels: string[] = e?.value;
    setDefaultLegend(labels);
  };

  return (
    <div>
      <Title />
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-3 px-5 pb-3">
        <DateFilter />
        <AxesFilter />
      </div>
      <VChart spec={spec} onLegendItemClick={handleLegendItemClick} />
    </div>
  );
}

function Title() {
  return (
    <div className="px-5 pb-3 pt-6">
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
