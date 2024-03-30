"use client";

import { useAtom } from "jotai";
import { Checkbox } from "@mantine/core";
import { axesAtom } from "@/lib/atoms";
import { type Axes, axesOptions } from "@/lib/type";
import { capitalize } from "@/lib/utils";

export default function AxesFilter() {
  const [axes, setAxes] = useAtom(axesAtom);

  const handleAxesChange = (value: string[]) => {
    const validValues = value.filter((v) => axesOptions.includes(v as Axes));
    setAxes(validValues as Axes[]);
  };

  return (
    <div className="flex flex-col">
      <Checkbox.Group
        value={axes}
        onChange={handleAxesChange}
        label="Select data type"
      >
        <div className="my-2 flex gap-x-5">
          {axesOptions.map((axis) => (
            <Checkbox key={axis} value={axis} label={capitalize(axis)} />
          ))}
        </div>
      </Checkbox.Group>
    </div>
  );
}
