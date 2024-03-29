import { format } from "date-fns";
import { type Round } from "@prisma/client";

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
