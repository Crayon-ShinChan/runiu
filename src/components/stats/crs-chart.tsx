"use client";

import { format } from "date-fns";
import { type Round } from "@prisma/client";
import { VChart } from "@visactor/react-vchart";

export default function CRSChart({ roundData }: { roundData: Round[] }) {
  // console.log(roundData);
  // change date in roundData to string
  const roundDataString = roundData.map((round) => ({
    ...round,
    date: round.date ? format(round.date, "yyyy-MM-dd") : null,
  }));

  const spec = {
    type: "line",
    data: {
      id: "lineData",
      values: roundDataString,
    },
    xField: "date",
    yField: "lowestCRS",
    seriesField: "typeClean",
    invalidType: "link",
  };

  // const spec = {
  //   data: [
  //     {
  //       id: "barData",
  //       values: [
  //         { month: "Monday", sales: 22 },
  //         { month: "Tuesday", sales: 13 },
  //         { month: "Wednesday", sales: 25 },
  //         { month: "Thursday", sales: 29 },
  //         { month: "Friday", sales: 38 },
  //       ],
  //     },
  //   ],
  //   type: "bar",
  //   xField: "month",
  //   yField: "sales",
  // };

  return <VChart spec={spec} />;
}
