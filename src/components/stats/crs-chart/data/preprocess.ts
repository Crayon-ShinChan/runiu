import { format } from "date-fns";
import { type Round } from "@prisma/client";
import type { DefaultDateRange } from "../utils/type";

export const date2Str = (roundData: Round[]) => {
  // change date in roundData to string
  return roundData.map((round) => ({
    ...round,
    date: round.date ? format(round.date, "yyyy-MM-dd") : null,
  }));
};

export const filterByDate = (
  roundData: Round[],
  dateRange: [Date | null, Date | null],
) => {
  const [start, end] = dateRange;
  if (!start || !end) return roundData;
  return roundData.filter((round) => {
    return round.date && round.date >= start && round.date <= end;
  });
};

export const calStartDateFromToday = (val: DefaultDateRange) => {
  const today = new Date();
  switch (val) {
    case "Past 3 Months":
      return new Date(today.setMonth(today.getMonth() - 3));
    case "Past 6 Months":
      return new Date(today.setMonth(today.getMonth() - 6));
    case "Past 1 Year":
      return new Date(today.setFullYear(today.getFullYear() - 1));
    case "Past 2 Years":
      return new Date(today.setFullYear(today.getFullYear() - 2));
    case "Past 3 Years":
      return new Date(today.setFullYear(today.getFullYear() - 3));
    case "Past 5 Years":
      return new Date(today.setFullYear(today.getFullYear() - 5));
    default:
      return new Date(today.setFullYear(today.getFullYear() - 2));
  }
};
