"use client";

import { useAtom } from "jotai";
import { CalendarSearch } from "lucide-react";
import { DatePickerInput } from "@mantine/dates";
import { dateRangeAtom } from "@/lib/atoms";

export default function DateFilter() {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);

  return (
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
      className="w-[17rem] shrink-0"
    />
  );
}
