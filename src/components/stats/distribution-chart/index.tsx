"use client";

import type { Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";
import { preprocess } from "./data/preprocess";
import { getSpec } from "./utils/spec";
import type { DistributionData } from "./utils/type";

export default function DistributionChart({
  roundData,
}: {
  roundData: Round[];
}) {
  const dataSpecs = preprocess(roundData);
  if (dataSpecs.length === 0) return null;

  const spec = getSpec(dataSpecs as [DistributionData, ...DistributionData[]]);
  return (
    <div>
      <Title />
      <div className="-mx-5">
        <VChart spec={spec} />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="pb-3 pt-6">
      <h2 className="pb-1 font-semibold text-zinc-900">
        CRS Score Distribution of Candidates Over Time
      </h2>
      <h3 className="text-sm text-zinc-500">
        This animated chart displays the distribution of Comprehensive Ranking
        System (CRS) scores of candidates invited for the Canadian Express Entry
        system over time.
      </h3>
    </div>
  );
}
