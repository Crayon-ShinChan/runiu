"use client";

import { useAtomValue } from "jotai";
import { type Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";
import { dateRangeAtom } from "@/lib/atoms";
import { date2Str, filterByDate } from "@/lib/data/preprocess";
import AxesFilter from "./filters/axes-filter";
import DateFilter from "./filters/date-filter";
import { getSpec } from "./utils";

export default function CRSChart({ roundData }: { roundData: Round[] }) {
  const dateRange = useAtomValue(dateRangeAtom);
  // const axes = useAtomValue(axesAtom);
  const processedData = date2Str(filterByDate(roundData, dateRange));
  const spec = getSpec(processedData);

  return (
    <div>
      <Title />
      <div className="flex flex-wrap justify-between gap-x-10 gap-y-3 px-5 pb-3">
        <DateFilter />
        <AxesFilter />
      </div>
      <VChart spec={spec} />
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
