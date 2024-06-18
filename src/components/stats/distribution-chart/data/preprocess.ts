import type { Round } from "@prisma/client";
import type { DistributionData } from "../utils/type";

type DistributionDataFields =
  | "dd1"
  | "dd2"
  | "dd4"
  | "dd5"
  | "dd6"
  | "dd7"
  | "dd8"
  | "dd10"
  | "dd11"
  | "dd12"
  | "dd13"
  | "dd14"
  | "dd15"
  | "dd16"
  | "dd17";

const DD_TO_BIN: Record<
  DistributionDataFields,
  {
    start: number;
    end: number;
  }
> = {
  dd1: { start: 601, end: 1200 },
  dd2: { start: 501, end: 600 },
  dd4: { start: 491, end: 500 },
  dd5: { start: 481, end: 490 },
  dd6: { start: 471, end: 480 },
  dd7: { start: 461, end: 470 },
  dd8: { start: 451, end: 460 },
  dd10: { start: 441, end: 450 },
  dd11: { start: 431, end: 440 },
  dd12: { start: 421, end: 430 },
  dd13: { start: 411, end: 420 },
  dd14: { start: 401, end: 410 },
  dd15: { start: 351, end: 400 },
  dd16: { start: 301, end: 350 },
  dd17: { start: 0, end: 300 },
};

const DD = Object.keys(DD_TO_BIN) as DistributionDataFields[];

export const preprocess = (roundData: Round[]): DistributionData[] => {
  const processedData = roundData.map((round) => {
    const numPeople = DD.reduce((acc, key) => {
      return acc + (round[key] ?? 0);
    }, 0);
    if (numPeople === 0) return null;

    return {
      data: [
        {
          id: "num",
          values: DD.map((key) => {
            return {
              start: DD_TO_BIN[key].start,
              end: DD_TO_BIN[key].end,
              value: round[key] ?? 0,
            };
          }),
        },
        {
          id: "date",
          values: [{ date: round.date?.toDateString() }],
        },
      ],
    };
  });

  return processedData.filter((data) => data !== null) as DistributionData[];
};
