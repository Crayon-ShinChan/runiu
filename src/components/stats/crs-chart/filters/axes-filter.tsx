"use client";

import { useAtom } from "jotai";
import { toast } from "sonner";
import { Checkbox } from "@mantine/core";
import { capitalize } from "@/lib/utils";
import { axesAtom } from "../utils/atoms";
import { type Axes, axesOptions } from "../utils/type";

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
