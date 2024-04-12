"use client";

import { useAtom, useSetAtom } from "jotai";
import { CalendarSearch } from "lucide-react";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { calStartDateFromToday } from "../data/preprocess";
import { dateRangeAtom, defaultDateRangeAtom } from "../utils/atoms";
import { type DefaultDateRange, defaultDateRangeOptions } from "../utils/type";
import FilterTitle from "./header";

export default function DateFilter() {
  return (
    <div>
      <FilterTitle title="Pick Date Range" />
      <div className="flex flex-wrap gap-1">
        <DateRangePicker />
        <DefaultDateRangeCombobox />
      </div>
    </div>
  );
}

function DateRangePicker() {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const setDefaultDateRange = useSetAtom(defaultDateRangeAtom);

  const handleChange = (val: [Date | null, Date | null]) => {
    setDefaultDateRange(null);
    setDateRange(val);
  };

  return (
    <DatePickerInput
      clearable
      type="range"
      placeholder="Pick dates range"
      valueFormat="MMM DD, YYYY"
      value={dateRange}
      onChange={handleChange}
      maxDate={new Date()}
      leftSection={<CalendarSearch size={16} />}
      className="w-[17rem] shrink-0"
    />
  );
}

function DefaultDateRangeCombobox() {
  const [defaultDateRange, setDefaultDateRange] = useAtom(defaultDateRangeAtom);
  const setDateRange = useSetAtom(dateRangeAtom);

  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = defaultDateRangeOptions.map((option) => (
    <Combobox.Option key={option} value={option}>
      {option}
    </Combobox.Option>
  ));

  const changeDateRange = (val: DefaultDateRange) => {
    const start = calStartDateFromToday(val);
    const end = new Date();
    setDateRange([start, end]);
  };

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        changeDateRange(val as DefaultDateRange);
        setDefaultDateRange(val as DefaultDateRange);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          className="w-40 shrink-0"
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {defaultDateRange ?? (
            <Input.Placeholder>Default Options</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
