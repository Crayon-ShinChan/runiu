"use client";

import { useAtom } from "jotai";
import { toast } from "sonner";
import { Checkbox, Tooltip } from "@mantine/core";
import { capitalize } from "@/lib/utils";
import { axesAtom } from "../utils/atoms";
import { type Axes, axesOptions } from "../utils/type";
import FilterTitle from "./header";

const tooltips: Record<Axes, string> = {
  score: "The CRS score of the lowest-ranked candidate invited for the draw",
  issued: "The number of candidates invited for the draw",
};

export default function AxesFilter() {
  const [axes, setAxes] = useAtom(axesAtom);

  const handleAxesChange = (value: string[]) => {
    if (value.length === 0) {
      toast.warning("At least one data type must be selected");
      return;
    }
    const validValues = value.filter((v) => axesOptions.includes(v as Axes));
    setAxes(validValues as Axes[]);
  };

  return (
    <div>
      <FilterTitle title="Pick Data Types" />
      <Checkbox.Group value={axes} onChange={handleAxesChange}>
        <div className="my-2 flex gap-x-5">
          {axesOptions.map((axis) => (
            <Tooltip
              multiline
              w={220}
              withArrow
              label={tooltips[axis]}
              key={axis}
              events={{ hover: true, focus: true, touch: true }}
            >
              <Checkbox key={axis} value={axis} label={capitalize(axis)} />
            </Tooltip>
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
}
