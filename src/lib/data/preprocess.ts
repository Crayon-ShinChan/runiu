import { format } from "date-fns";
import { type Round } from "@prisma/client";

export const prepRoundData = (roundData: Round[]) => {
  // change date in roundData to string
  return roundData.map((round) => ({
    ...round,
    date: round.date ? format(round.date, "yyyy-MM-dd") : null,
  }));
};
