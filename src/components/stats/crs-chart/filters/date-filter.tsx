"use client";

import { useAtom } from "jotai";
import { CalendarSearch } from "lucide-react";
import { Combobox, Input, InputBase, useCombobox } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { dateRangeAtom, defaultDateRangeAtom } from "../utils/atoms";
import { type DefaultDateRange, defaultDateRangeOptions } from "../utils/type";
import FilterTitle from "./header";

export default function DateFilter() {
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);

  return (
    <div>
      <FilterTitle title="Pick dates range" />
      <div className="flex flex-wrap gap-1">
        <DatePickerInput
          clearable
          type="range"
          placeholder="Pick dates range"
          valueFormat="MMM DD, YYYY"
          value={dateRange}
          onChange={setDateRange}
          maxDate={new Date()}
          leftSection={<CalendarSearch size={16} />}
          className="w-[17rem] shrink-0"
        />
        <DefaultDateRangeCombobox />
      </div>
    </div>
  );
}

function DefaultDateRangeCombobox() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });
  const [defaultDateRange, setDefaultDateRange] = useAtom(defaultDateRangeAtom);

  const options = defaultDateRangeOptions.map((option) => (
    <Combobox.Option key={option} value={option}>
      {option}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setDefaultDateRange(val as DefaultDateRange);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          className="w-36 shrink-0"
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {defaultDateRange ?? (
            <Input.Placeholder>Pick value</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
